const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const url = require('url');



router.get('/', (req,res) =>{

    const user_id = url.parse(req.url, true).query.user_id;
    console.log("inside store.router get request for client dashboard: user_id,",user_id);

    queryText = `SELECT * FROM "store"
    WHERE user_id = ${user_id};`

    pool.query(queryText)
    .then((result) =>{
        res.send(result.rows);
    }).catch((error) => {
        console.log("error in store GET for client dahsboard get", error)
        res.sendStatus(500)
    });
})

module.exports = router;