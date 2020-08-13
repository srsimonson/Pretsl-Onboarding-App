
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const locationsRouter = require('./routes/locations.router');
const storeRouter = require('./routes/store.router');
const supportRouter = require('./routes/support.router');
const clientStoreDashboardRouter = require('./routes/clientStoreDashboard.router');
const userListRouter = require('./routes/admin.users.router');
const emailRouter = require('./routes/email.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */

app.use('/api/user', userRouter);
app.use('/api/location', locationsRouter);
app.use('/api/store', storeRouter);
app.use('/api/support', supportRouter);
app.use('/api/clientstore', clientStoreDashboardRouter)
app.use('/api/userlist', userListRouter)
app.use('/api/email', emailRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});



//aws bucket
// const aws = require('aws-sdk')

// const s3 = new aws.S3();

// app.post('/upload-url', async(req, res)=>{
//   let expires = 900
//   console.log("Inside AWS post call server side")

//   s3.createPresignedPost({
//     Bucket: 'pretslonboardingappbucket',
//     Expires: expires,
//     Fields:{
//       key: 'test-file.txt'
//     }
//   },(err,data) =>{
//     if(err){
//       console.error(err);
//       res.send(500);
//       return;
//     }
//     res.send(data);
//   })
// });

const multer = require('multer');
const aws = require('aws-sdk');
const fs = require('fs');
const s3 = new aws.S3();
const pool = require('./modules/pool');


const upload = multer({
  storage: multer.diskStorage({

  //upload files to public/uploads
  destination: (req, file, cb) =>{
    let uploadDirectory = 'public/uploads/'
    cb(null, uploadDirectory);
  },
  

//give each uploaded file a unique name by date 
// so we don't overwrite files
filename: (req, file, cb) => {
  const filename = `${Date.now()}-${file.originalname}`;
  cb(null, filename);
}
})
});

app.post('/upload', upload.any(), async(req, res) =>{
  //Upload files
  //note the upload.any() middleware

  //multer loads everything to public/uploads
  //then creates a req.files array with infor about each file.
  //console.log(req.files);
  try{

    for (let file of req.files){
      console.log(`Uploading ${file.path}...`);
      //const file = req.files[0];
      // try{
    
        console.log("inside Post try block for aws call");
        await s3.upload({
          Bucket: 'pretslonboardingappbucket',
          Key: file.filename,
          Body: fs.createReadStream(file.path)
        }).promise()
        //.promise()
      // }
      // catch(err){
      //     console.log(err);
      //   } 
        //.promise();  //promise is required to use await keyword
        console.log(`Uploading ${file.path}...done.`);
        console.log(req.body);
        // try{
        await pool.query(
          `
        INSERT INTO contracts ("client_id", "s3_bucket", "s3_key", "hasContractBeenSigned")
        VALUES ($1, $2, $3, false);`
        // `INSERT INTO contracts (client_id, s3_bucket, s3_key)
        // VALUES(22, placeholderstring, placeholderstring);`
        , [
          req.body.client_id,
          'pretslonboardingappbucket',
          file.path
        ]
        )
      // }catch(error){
      //     console.log(error)
      //   }
      }
  }catch(error){
    console.log("AWS failed, error:", error)
    res.sendStatus(500);
    return;
  }
  
    //.promise();
  //   .catch(err =>{
  //     console.log(err);
  //   })
    //}

  res.sendStatus(201);
})

//write get request to GET pdf from amazon
app.get('/clientContract', async (req,res) => {
  try{
    let results = await pool.query(
      `SELECT * FROM contracts WHERE "client_id" = $1;`
      [req.body.client_id]
    );
    if(!results.rows.length){
      res.sendStatus(404);
    }

    let row = results.row[0];

    let obj = await s3.getObject({
      Bucket: 'pretslonboardingappbucket',
      Key: row.s3_key
    }).promise();

    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition':'attachment; filename=contract.pdf',
      'Content-Length': obj.Body.length
    });
    res.end(obj.Body);
  }catch(error){
    console.log("error in AWS GET request,",error);
  }
})

//Whaddup Homies
//now you can't see my .env file...
