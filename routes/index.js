const express = require('express');
const router = express.Router();

const movieRouter = require('./movieRouter.js');
const userRouter = require('./userRouter.js');

router.get('/', (req, res) => res.status(201).json('main page'));
router.use('/movie', movieRouter);
router.use('/user', userRouter);

module.exports = router;