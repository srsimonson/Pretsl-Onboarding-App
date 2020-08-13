const aws = require('aws-sdk')
const fs = require('fs');

const s3 = new aws.S3();

const fileStream = fs.createReadStream('.../README.md');

s3.upload({
    Bucket: 'pretslonboardingappbucket',
    Body: fileStream
}, (err, data) => {
    if(err){
        console.error(err);
        return
    }
    console.log(data)
})