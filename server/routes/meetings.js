const express = require('express');
const meetingsRouter = express.Router();
const db = require('../db');

meetingsRouter.get('/', (req, res, next) => {
    const meetings = db.getAllFromDatabase('meetings');
    res.send(meetings);
});


module.exports = meetingsRouter;