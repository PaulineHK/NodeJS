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
		return await db.query(`SELECT id,title,year,time,description FROM movies WHERE id IN
			(SELECT s.movie_id FROM tickets AS t, sessions AS s WHERE t.session_id=s.id
				AND ${month}=MONTH(s.date) GROUP BY s.movie_id 
					HAVING MAX(COUNT(s.movie_id)));`, { type: QueryType.SELECT });
	}

	async findTop() {
		return await db.query(`SELECT id,title,year,time,description FROM movies WHERE id IN(SELECT s.movie_id FROM 	tickets AS t, sessions AS s WHERE t.session_id=s.id GROUP BY s.movie_id
				HAVING COUNT(t.id)>=((SELECT COUNT(id) FROM tickets)/(SELECT COUNT(id) FROM movies)));`, { type: QueryType.SELECT });
	}
}