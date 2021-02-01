const express = require('express');
const router = express.Router();

const movieRouter = require('./movieRouter.js');
const userRouter = require('./userRouter.js');

const bodyParser = require("body-parser");
const parser = bodyParser.urlencoded({ extended: false });

router.get('/', (req, res) => res.status(201).json('main page'));
router.use('/movie', parser, movieRouter);
router.use('/user', parser, userRouter);
//router.use('/ticket',parser,ticketRouter);

module.exports = router;