const express = require('express');
const ideasRouter = express.Router();
const db = require('../db');

ideasRouter.get('/', (req, res, next) => {
    const ideas = db.getAllFromDatabase('ideas');
    res.send(ideas);
});



module.exports = ideasRouter;