const UserRepository = require('../repositories/userRepository.js');
const notFound = require('../classes/errors/notFound.js');
const RequestRepository = require('../repositories/requestRepository.js');
const userRepository = new UserRepository();
const requestRepository = new RequestRepository();

module.exports = class userService {
	/*
		async create(body) {
			let user = userRepository.getAll({
				where: {
					login: body.login,
				}
			});
			if (!user)
				return await userRepository.create({
					login: body.login, password: body.password,
					lastName: body.lname, firstName: body.fname,
				});
			else return 'User exists';
		}
	*/

	async get(id) {
		let user = await userRepository.getAll({
			where: {
				id: id,
			}
		});
		if (!user[0])
			throw new notFound('User is not found');
		return user[0];
	}

	async getAll() {
		return await userRepository.getAll();
	}

	async sendRequest(id) {
		let request = await requestRepository.find({
			where: {
				userId: id,
			}
		});
		if (request)
			await requestRepository.delete({
				where: {
					id: request.id,
				},
				force: true,
			});
		request = await requestRepository.create({ userId: id });
		return request.id;
	}

	async delete(id) {
		let deleteRequest = await requestRepository.find({
			where: {
				userId: id,
			}
		});
		if (!deleteRequest)
			throw new notFound('No request to delete account');
		await RequestRepository.delete({
			where: {
				id: deleteRequest.id,
			}
		});
		return await userRepository.delete(id);
	}
}