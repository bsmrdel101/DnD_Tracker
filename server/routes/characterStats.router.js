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
        SELECT * FROM "character_stats"
        WHERE "user_id" = $1;
    `;
    const sqlValues = [
        req.user.id
    ];
    
    pool.query(sqlText, sqlValues)
        .then((dbres) => res.send(dbres.rows))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});

router.get('/selectedCharacterId', rejectUnauthenticated, (req, res) => {
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

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = 
    `
        SELECT * FROM "character_stats"
        WHERE "id" = $1;
    `;
    const sqlValues = [
        req.params.id
    ];
    
    pool.query(sqlText, sqlValues)
        .then((dbres) => res.send(dbres.rows[0]))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});

router.get('/health/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = 
    `
        SELECT "max_health", "current_health", "temp_health" FROM "character_stats"
        WHERE "id" = $1;
    `;
    const sqlValues = [
        req.params.id
    ];
    
    pool.query(sqlText, sqlValues)
        .then((dbres) => res.send(dbres.rows[0]))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});

router.put('/health/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = 
    `
        UPDATE "character_stats"
        SET "current_health" = $1, "temp_health" = $2
        WHERE "id" = $3;
    `;
    const sqlValues = [
        req.body.current_health,
        req.body.temp_health,
        req.params.id
    ];
    
    pool.query(sqlText, sqlValues)
        .then((dbres) => res.sendStatus(201))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});

router.put('/temp/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = 
    `
        UPDATE "character_stats"
        SET "temp_health" = $1
        WHERE "id" = $2;
    `;
    const sqlValues = [
        req.body.temp_health,
        req.params.id
    ];
    
    pool.query(sqlText, sqlValues)
        .then((dbres) => res.sendStatus(201))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});

router.put('/', rejectUnauthenticated, (req, res) => {
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
        .then((dbres) => res.sendStatus(201))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});

router.put('/giveInspiration/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = 
    `
        UPDATE "character_stats"
        SET "inspiration" = TRUE
        WHERE "id" = $1;
    `;
    const sqlValues = [
        req.params.id
    ];
    
    pool.query(sqlText, sqlValues)
        .then((dbres) => res.sendStatus(201))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});

router.put('/revokeInspiration/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = 
    `
        UPDATE "character_stats"
        SET "inspiration" = FALSE
        WHERE "id" = $1;
    `;
    const sqlValues = [
        req.params.id
    ];
    
    pool.query(sqlText, sqlValues)
        .then((dbres) => res.sendStatus(201))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});


module.exports = router;
