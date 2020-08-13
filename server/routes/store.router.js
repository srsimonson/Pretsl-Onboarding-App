const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const url = require('url');

/**
 * GET route for all stores in Admin dashboard
 */
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "store";')
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('Error GET /store failed,', error);
            res.sendStatus(500)
        })
});



// Get route for individual store admin view
router.get('/:id', (req, res) => {
    console.log('req.body', req.params.id);
    pool.query(`SELECT * FROM "store" WHERE "id" = $1;`, [req.params.id])
        .then(result => {
            res.send(result.rows[0])
        }).catch(error => {
            console.log('Error GET /store failed,', error);
            res.sendStatus(500)
        })
})


/**
 * POST route for store
 */


router.post('/', (req, res) => {
    console.log('req.body', req.body);
    pool.query(`INSERT INTO "store" (store_name, store_status, notes, business_type, customer_email)
    VALUES ($1, $2, $3, $4, $5);`, [req.body.store_name, req.body.store_status, req.body.notes, req.body.business_type, req.body.customer_email])
    .then(result => {
        res.sendStatus(200)
    }).catch(error => {
        console.log('Error POST /store failed,', error);
        res.sendStatus(500)
    })
});

// PUT route for updating store in individual store admin view

router.put('/:id', (req, res) => {
    pool.query(`UPDATE "store"
    SET "store_name" = $1, "user_id" = $2, "store_status" = $3, "date_joined" = $4, "notes" = $5, "contract" = $6, "business_type" = $7, "moonclerk_url" = $8, "customer_email" = $9, "active_customer" = $10, "store_inventory" = $11
    WHERE "id" = $12`, [req.body.store_name, req.body.user_id, req.body.store_status, req.body.date_joined, req.body.notes, req.body.contract, req.body.business_type, req.body.moonclerk_url, req.body.customer_email, req.body.active_customer, req.body.store_inventory, req.params.id])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('error', error);
            res.sendStatus(500);
        })
})
module.exports = router;