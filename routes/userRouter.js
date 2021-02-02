const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const controller = new userController();

const TicketController = require('../controllers/ticketController.js');
const ticketController = new TicketController();

router.post('/:id/book', ticketController.bookTicket);

router.delete('/:id/cancelBook', ticketController.cancelBook);

router.post('/create', controller.create);

router.get('/:id', controller.get);//admin

router.get('/list', controller.getAll);//admin

router.delete('/:id', controller.delete);//admin

router.post('/:id/request', controller.sendRequest);

module.exports = router;
