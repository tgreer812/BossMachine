const express = require('express');
const apiRouter = express.Router();

const ideaRouter = require('./routes/ideas');
const meetingsRouter = require('./routes/meetings');
const minionsRouter = require('./routes/minions');


apiRouter.use('/ideas', ideaRouter);

apiRouter.use('/meetings', meetingsRouter);

apiRouter.use('/minions', minionsRouter);



module.exports = apiRouter;
