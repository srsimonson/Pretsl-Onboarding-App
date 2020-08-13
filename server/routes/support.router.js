const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route for support
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    let sqlText = `SELECT * FROM store
JOIN support ON store.id = support.store_id
WHERE isArchived = FALSE
ORDER BY support.id DESC;`;
    pool.query(sqlText)
    .then (result => {
        console.log('result.rows', result.rows);
        
        res.send(result.rows);
    })
    .catch(error => {
        console.log('ERROR with GET from support.router', error);
        res.sendStatus(500);
    })
});

/**
 * POST route for support
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('req.body', req.body);
    let sqlText = 'INSERT INTO support (store_id, request_type, request_body, ticket_status) VALUES ($1, $2, $3, $4);';
    pool.query(sqlText, [req.body.storeId, req.body.requestType, req.body.requestBody, req.body.requestStatus])
    .then(result => {
        res.sendStatus(200)
    })
    .catch((error) => {
        console.log('POST', error);
        res.sendStatus(500)
    })
});


// PUT route for support
router.put('/:id', rejectUnauthenticated, (req, res) => {
    let sqlText = `UPDATE support
    SET ticket_status = $1, isarchived = $2
    WHERE id = $3;`
    pool.query(sqlText, [req.body.updateStatus, req.body.isArchived, req.params.id])
    .then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('PUT error,', error);
        res.sendStatus(500);
    })
})

module.exports = router;