const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();


router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlText = 
    `
        SELECT "selected_character" FROM "user"
        WHERE "id" = $1;
    `;
    const sqlValues = [
        req.user.id
    ];
    
    pool.query(sqlText, sqlValues)
        .then((dbres) => res.send(dbres.rows[0]))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});

router.put('/', (req, res) => {
    const sqlText = 
    `
        UPDATE "user"
        SET "selected_character" = $1
        WHERE "id" = $2;
    `;
    const sqlValues = [
        req.body.id,
        req.user.id
    ];
    
    pool.query(sqlText, sqlValues)
        .then((dbres) => res.send(dbres.rows[0]))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});

module.exports = router;
