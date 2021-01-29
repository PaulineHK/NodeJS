const MovieRepository = require('../repositories/movieRepository.js');

const movieRepository = new MovieRepository();

module.exports = class MovieService {

	async create(body) {
		return await movieRepository.create({
			title: body.title, time: body.time,
			year: body.year, startShow: body.startShow,
			endShow: body.endShow, description: body.description,
			poster: body.poster
		});
		//add tags
	}

	async get(options) {
		return await movieRepository.getAll(options);
	}

	async getAll() {
		return await movieRepository.getAll({
			attributes: ['id', 'title',]
		});
	}

	async delete(options) {
		if (options.id)
			return await movieRepository.delete({
				where: {
					id: options.id
				}
			});
		else if (options.title)
			return await movieRepository.delete({
				where: {
					title: options.title
				}
			});
	}
}