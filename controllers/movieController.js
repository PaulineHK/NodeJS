const MovieService = require('../services/movieService.js');
const response = require('../classes/response.js');

const movieService = new MovieService();

module.exports = class movieController {

	async create(req, res) {
		try {
			let id = await movieService.create(req.body);
			res.send(response.success(201, 'Movie created', `Movie id: ${id}`));
		} catch (error) {
			res.send(response.error(error.status, error.name, error.message));
		}
	}

	async get(req, res) {
		try {
			let movie = await movieService.get(req.params['id']);
			res.send(response.success(200, 'Movie is found', movie));
		} catch (error) {
			res.send(response.error(error.status, error.name, error.message));
		}
	}

	async getAll(req, res) {
		let movies = await movieService.getAll();
		res.send(response.success(200, 'List of movies', movies));
	}

	async delete(req, res) {
		try {
			await movieService.delete(req.params['id']);
			res.send(response.success(200, 'Movie is deleted'));
		} catch (error) {
			res.send(response.error(error.status, error.name, error.message));
		}
	}

	async findTopMonth(req, res) {
		let movie = await movieService.findTopMonth(req.query.month);
		res.send(response.success(200, 'Movie of the month', movie));
	}

	async findTop(req, res) {
		try {
			let movies = await movieService.findTop();
			res.send(response.success(200, 'Top of movies', movies));
		} catch (error) {
			res.send(response.error(404, error.name, error.message));
		}
	}
}