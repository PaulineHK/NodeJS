const TicketRepository = require('../repositories/ticketRepository.js');
const ticketRepository = new TicketRepository();

const MovieRepository = require('../repositories/movieRepository.js');
const movieRepository = new MovieRepository();

const badRequest = require('../classes/errors/badRequest.js');
const notFound = require('../classes/errors/notFound.js');

const Session = require('../database/models/Session.js');
const User = require('../database/models/User.js');
const Movie = require('../database/models/Movie.js');
const sequelize = require('sequelize');

module.exports = class ticketService {

	async create(userId, body) {
		let movie = (await movieRepository.getAll({
			where: {
				id: body.movieId,
			}
		}))[0];
		if (movie.startShow > body.date || movie.endShow < body.date)
			throw new badRequest('The movie will not be shown at this time');//422
		let session = (await Session.findAll({
			where:
				sequelize.and(
					{ movieId: body.movieId, },
					sequelize.where(sequelize.col('date'), '=', body.date)
				)
		}))[0];
		if (!session)
			session = await Session.create({
				movieId: body.movieId,
				date: body.date,
			});
		let ticket = (await ticketRepository.getAll({
			where: {
				seat: body.seat,
				row: body.row,
				sessionId: session.id,
			}
		}))[0];
		if (ticket)
			throw new badRequest('Ticket is allready owned');

		ticket = await ticketRepository.create({
			userId: userId,
			seat: body.seat,
			row: body.row,
			sessionId: session.id,
		});
		return ticket.id;
	}

	async delete(userId, ticketId) {
		let ticket = (await ticketRepository.getAll({
			where: {
				id: ticketId,
			}, include: [
				{
					model: Session,
					as: 'session',
					attributes: ['date'],
				},]
		}))[0];
		if (!ticket)
			throw new notFound('Ticket is not existed');
		if (ticket.userId != userId)
			throw new badRequest("Ticket's id is not yours");
		let option = false;
		if (ticket.session.date < new Date())
			option = true;
		return await ticketRepository.delete({
			where: {
				id: ticketId,
			},
			force: option,
		});
	}

	async getTickets(movieId) {
		return await ticketRepository.getAll({
			attributes: ['row', 'seat',],
			include: [
				{
					model: Session,
					as: 'session',
					attributes: [[sequelize.fn('date_format', sequelize.col('date'), '%Y-%m-%d %h:%i'), 'date'],],
					where: { movieId },
				},
			],
		});
	}

	async ticketInfo(movieId) {
		return await ticketRepository.getAll({
			include: [
				{
					model: Session,
					as: 'session',
					attributes: ['id', [sequelize.fn('date_format', sequelize.col('date'), '%Y-%m-%d %h:%i'), 'date'],],
					where: { movieId }
				},
				{
					model: User,
					as: 'user',
					attributes: ['id', 'login'],
				},

			],
		});
	}

	async listTickets() {
		return await ticketRepository.getAll({
			include: [
				{
					model: Session,
					as: 'session',
					attributes: ['id', 'movieId', [sequelize.fn('date_format', sequelize.col('date'), '%Y-%m-%d %h:%i'), 'date'],],
					include: [{
						model: Movie,
						as: 'movie',
						attributes: ['id', 'title',],
					},]
				},
				{
					model: User,
					as: 'user',
					attributes: ['id', 'login'],
				},

			],
		});
	}
}