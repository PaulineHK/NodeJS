const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController.js');
const controller = new movieController();


router.post('/create', controller.create);

router.get('/list', controller.getAll);

router.get('/:id', controller.get);

router.delete('/:id', controller.delete);

router.get('/topMonth?month', controller.findTopMonth);

router.get('/top', controller.findTop);

module.exports = router;