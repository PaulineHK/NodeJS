const UserService = require('../services/userService.js');
const response = require('../classes/response.js');

const userService = new UserService();

module.exports = class userController {
	/*
		async create(req, res) {
			try {
				return res.status(201).json(await userService.create(req.body));
			} catch (error) {
				console.log(error);
				return res.status(404).json(error);
			}
		}
	*/

	async getAll(req, res) {
		let users = await userService.getAll();
		res.send(response.success(200, 'Users are found', users));
	}

	async get(req, res) {
		try {
			let user = await userService.get(req.params['id']);
			res.send(response.success(200, 'User is found', user));
		} catch (error) {
			res.send(response.error(error.status, error.name, error.message));
		}
	}

	async delete(req, res) {
		try {
			await userService.delete(req.params['id']);
			res.send(response.success(200, 'User is deleted'));
		} catch (error) {
			res.send(response.error(error.status, error.name, error.message));
		}
	}

	async sendRequest(req, res) {
		let id = await userService.sendRequest(req.params['id']);
		res.send(response.success(201, 'Request is sent', `Request id: ${id}`));
	}
}
