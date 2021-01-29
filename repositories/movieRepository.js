const Movie = require('../database/models/Movie.js');

module.exports = class movieRepository {

	async create(body) {
		return await Movie.create(body);
	}

	async getAll(options) {
		return await Movie.findAll(options);
	}

	async delete(options) {
		return await Movie.destroy(options);
	}

}