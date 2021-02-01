const MovieRepository = require('../repositories/movieRepository.js');
const notFound = require('../classes/errors/notFound.js');


const movieRepository = new MovieRepository();

module.exports = class MovieService {

	async create(body) {
		let movie = (await movieRepository.getAll({
			where: {
				title: body.title, time: body.time,
				year: body.year,
			},
			paranoid: false,
		}))[0];
		if (movie) {
			let id = {
				where: {
					id: movie.id,
				}
			}
			await movieRepository.restore(id);
			if (movie.startShow !== body.startShow && movie.endShow !== body.endShow)
				await movieRepository.update({ startShow: body.startShow, endShow: body.endShow }, id);
			return movie.id;
		}
		else {
			movie = await movieRepository.create({
				title: body.title, time: body.time,
				year: body.year, startShow: body.startShow,
				endShow: body.endShow, description: body.description,
				poster: body.poster
			});
			return movie.id;
		}
		//add tags
	}

	async get(id) {
		let movie = await movieRepository.getAll({
			where: {
				id: id,
			}
		});
		if (!movie[0])
			throw new notFound('Movie is not found');
		return movie;
	}

	async getAll() {
		return await movieRepository.getAll({
			attributes: ['id', 'title',]
		});
	}

	async delete(id) {
		let deleteMovie = await movieRepository.delete({
			where: {
				id: id,
			}
		});
		if (!deleteMovie)
			throw new notFound('Deleting movie is not found');
		return deleteMovie;
	}

	async findTopMonth(month) {
		return await movieRepository.findTopMonth(month);
	}

	async findTop() {
		return await movieRepository.findTop();
	}
}