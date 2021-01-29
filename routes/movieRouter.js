const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController.js');
const controller = new movieController();

const bodyParser = require("body-parser");
const parser = bodyParser.urlencoded({ extended: false });

router.post('/create', parser, controller.create);

router.get('/getAll', controller.getAll);

router.get('/get', parser, controller.get);

router.delete('/delete', parser, controller.delete);

module.exports = router;