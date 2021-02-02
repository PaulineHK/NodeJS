const Ticket = require('../database/models/Ticket.js');

module.exports = class ticketRepository {
	async create(options) {
		return await Ticket.create(options);
	}

	async getAll(options) {
		return await Ticket.findAll(options);
	}

	async delete(options) {
		return await Ticket.destroy(options);
	}
}