const TicketService = require('../services/ticketService.js');
const response = require('../classes/response.js');

const ticketService = new TicketService();

module.exports = class ticketController {

	async bookTicket(req, res) {
		try {
			let id = await ticketService.create(req.params['id'], req.body);
			res.send(response.success(201, 'Ticket is booked', `Ticket id: ${id}`));
		} catch (error) {
			res.send(response.error(error.status, error.name, error.message));
		}
	}

	async cancelBook(req, res) {
		try {
			await ticketService.delete(req.params['id'], req.body.ticketId);
			res.send(response.success(200, 'Ticket is canceled'));
		} catch (error) {
			res.send(response.error(error.status, error.name, error.message));
		}
	}

	async getTickets(req, res) {
		try {
			let tickets = await ticketService.getTickets(req.params['movie']);
			res.send(response.success(200, 'Booking tickets of movie', tickets));
		} catch (error) {
			res.send(response.error(error.status, error.name, error.message));
		}
	}

	async ticketInfo(req, res) {
		try {
			let ticket = await ticketService.ticketInfo(req.body.movieId);
			res.send(response.success(200, 'Information of ticket', ticket));
		} catch (error) {
			res.send(response.error(error.status, error.name, error.message));
		}
	}

	async listTickets(req, res) {
		try {
			let tickets = await ticketService.listTickets();
			res.send(response.success(200, 'List of tickets', tickets));
		} catch (error) {
			res.send(response.error(error.status, error.name, error.message));
		}
	}
}