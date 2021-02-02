const express = require('express');
const router = express.Router();

const TicketController = require('../controllers/ticketController.js');
const controller = new TicketController();

router.get('/list', controller.listTickets);//admin

router.get('/info', controller.ticketInfo);//admin

router.get('/:movie/list', controller.getTickets);

module.exports = router;