const MovieService = require('../services/movieService.js');


const movieService = new MovieService();

module.exports = class movieController {

	async create(req, res) {
		try {
			return res.status(201).json(await movieService.create(req.body));
		} catch (error) {
			console.log(error);
			return res.status(404).json(error);
		}
	}

	async get(req, res) {
		try {
			return res.status(200).json(await movieService.get(req.body));
		} catch (error) {
			return res.status(404).json(error);
		}
	}


	async getAll(req, res) {
		try {
			return res.status(200).json(await movieService.getAll());
		} catch (error) {
			return res.status(404).json(error);
		}
	}

	async delete(req, res) {
		try {
			return res.status(200).json(await movieService.delete(req.body))
		} catch (errror) {
			return res.status(404).json(error);
		}
	}
}