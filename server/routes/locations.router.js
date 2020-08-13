const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for locations
 */
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "location"
    FULL OUTER JOIN "store" ON "location"."store_id" = "store"."id"
    WHERE "user_id" = $1;`
    pool.query(queryText, [req.user.id])
        .then(result => {
            res.send(result.rows)
        }).catch(error => {
            console.log('Error GET /location', error);
            res.sendStatus(500);
        })
});

/**
 * POST route for locations
 */
router.post('/', (req, res) => {
    console.log(req.body, 'req.body')
    const store_id = req.body.store_id;
    const address = req.body.address;
    const timezone = req.body.timezone;
    const phone_number = req.body.phoneNumber;
    const location_email = req.body.email;
    const point_of_contact = req.body.pointOfContact;
    const tablets_quantity = req.body.tablets_quantity;
    const printers_quantity = req.body.printers_quantity;
    const tablet_stands_quantity = req.body.tablet_stands_quantity
    let queryText = `INSERT INTO location (store_id, address, timezone, phone_number, location_email, point_of_contact, tablets_quantity, printers_quantity, tablet_stands_quantity) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id;`

    pool.query(queryText, [store_id, address, timezone, phone_number, location_email, point_of_contact, tablets_quantity, printers_quantity, tablet_stands_quantity])
        .then((result) =>{
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log(`Error making database query`, error);
            res.sendStatus(500);
        });
});

module.exports = router;