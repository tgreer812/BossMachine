const express = require('express');
const minionsRouter = express.Router();
const db = require('../db');

// database models: minions, ideas, meetings, work

minionsRouter.get('/', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions');
    res.send(minions);
});

minionsRouter.post('/', (req, res, next) => {
    let newMinion = req.body;
    //console.log(body);
    db.addToDatabase('minions', newMinion);
    res.send(newMinion);
});

minionsRouter.param('minionId', (req, res, next, id) => {
    let minionId = Number(id);
    console.log(`minion id: ${minionId}`);
    const found = db.getFromDatabaseById('minions', id);
    if (found !== null) {
        req.minion = found;
        req.minionId = id;
        return next();
    }
    res.status(404).send(null);
});

minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
    db.addToDatabase('minions', )
    res.send("yeet");
});

minionsRouter.delete('/:minionId', (req, res, next) => {
    console.log('yeet');
    res.send("yeet");
});

module.exports = minionsRouter;