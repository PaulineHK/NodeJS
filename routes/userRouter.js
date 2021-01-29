const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const controller = new userController();

const bodyParser = require("body-parser");
const parser = bodyParser.urlencoded({ extended: false });

router.post('/create', parser, controller.create);

router.get('/get', parser, controller.get);

router.delete('/delete', parser, controller.delete);

module.exports = router;
