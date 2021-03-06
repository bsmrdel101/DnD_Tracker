const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();


router.get('/weapons/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = 
    `
        SELECT * FROM "weapons"
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

router.get('/select/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = 
    `
        SELECT * FROM "weapons"
        WHERE "id" = $1;
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

router.post('/weapons/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = 
    `
        INSERT INTO "weapons" 
        ("name",
        "type",
        "range",
        "damage",
        "handedness",
        "damage_type",
        "damage_modifier",
        "proficiency",
        "property",
        "to_hit",
        "weight",
        "quantity",
        "price",
        "currency",
        "description",
        "character_id")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);
    `;
    const sqlValues = [
        req.body.name,
        req.body.type,
        req.body.range,
        req.body.damage,
        req.body.handedness,
        req.body.damage_type,
        req.body.damage_modifier,
        req.body.proficiency,
        req.body.property,
        req.body.to_hit,
        req.body.weight,
        req.body.quantity,
        req.body.price,
        req.body.currency,
        req.body.description,
        req.params.id
    ];
    
    pool.query(sqlText, sqlValues)
    .then(() => res.sendStatus(201))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});

router.delete('/weapons/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = 
    `
        DELETE FROM "weapons"
        WHERE "id" = $1;
    `;
    const sqlValues = [
        req.params.id
    ];
    
    pool.query(sqlText, sqlValues)
    .then(() => res.sendStatus(201))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});

router.put('/weapons/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = 
    `
        UPDATE "weapons"
        SET "name"=$1,"type"=$2,"range"=$3,"damage"=$4,"handedness"=$5,"damage_type"=$6,"damage_modifier"=$7,"proficiency"=$8,"property"=$9,"to_hit"=$10,"weight"=$11,"quantity"=$12,"price"=$13,"currency"=$14,"description"=$15
        WHERE "id" = $16
    `;
    const sqlValues = [
        req.body.name,
        req.body.type,
        req.body.range,
        req.body.damage,
        req.body.handedness,
        req.body.damage_type,
        req.body.damage_modifier,
        req.body.proficiency,
        req.body.property,
        req.body.to_hit,
        req.body.weight,
        req.body.quantity,
        req.body.price,
        req.body.currency,
        req.body.description,
        req.params.id
    ];
    
    pool.query(sqlText, sqlValues)
    .then(() => res.sendStatus(201))
        .catch((dberror) => {
        console.log('Oops you messed up DB error', dberror);
        res.sendStatus(500)
    })  
});


module.exports = router;
