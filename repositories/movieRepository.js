const Movie = require('../database/models/Movie.js');
const db = require('../database/sequelize.js');
const { QueryType } = require('sequelize');

module.exports = class movieRepository {

	async create(movie) {
		return await Movie.create(movie);
	}

	async getAll(options) {
		return await Movie.findAll(options);
	}

	async delete(options) {
		return await Movie.destroy(options);
	}

	async restore(options) {
		return await Movie.restore(options);
	}

	async update(options, params) {
		return await Movie.update(params, {
			where: options
		});
	}

	async findTopMonth(month) {
		return await db.query(`SELECT id,title,year,time,description FROM movies WHERE id IN(SELECT m.id FROM movies AS m, users_tickets AS ut, tickets AS t, sessions AS s
			WHERE m.id=s.movie_id AND s.id=t.session_id AND t.id=ut.ticket_id
				AND ${month}=MONTH(s.date) GROUP BY m.id HAVING MAX(COUNT(m.id)));`, { type: QueryType.SELECT });
	}

	async findTop() {
		return await db.query(`SELECT SELECT id,title,year,time,description FROM movies WHERE id IN(SELECT m.id FROM
			movies AS m, users_tickets AS ut WHERE m.id=ut.movie_id GROUP BY m.id
				HAVING COUNT(m.id)>=((SELECT COUNT(id) FROM users_tickets)/(SELECT COUNT(id) FROM movies)));`, { type: QueryType.SELECT });
	}
}