const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const controller = new userController();

//router.post('/create', controller.create);

router.get('/:id', controller.get);

router.get('/list', controller.getAll);

router.delete('/:id', controller.delete);

router.post('/:id/request', controller.sendRequest);

module.exports = router;
