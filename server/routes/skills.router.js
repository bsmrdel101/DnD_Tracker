const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();


router.get('/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = 
    `
        SELECT "name", "type", "prof" FROM "proficiencies"
        JOIN "skills"
        ON "proficiencies"."skill_id" = "skills"."id"
        WHERE "character_id" = $1;
    `;
    const sqlValues = [
        req.params.id
    ];
    
    pool.query(sqlText, sqlValues)
        .then((dbres) => res.send(dbres.rows))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});

module.exports = router;
