const UserService = require('../services/userService.js');

const userService = new UserService();

module.exports = class userController {

	async create(req, res) {
		try {
			return res.status(201).json(await userService.create(req.body));
		} catch (error) {
			console.log(error);
			return res.status(404).json(error);
		}
	}

	async get(req, res) {
		try {
			return res.status(200).json(await userService.get(req.body));
		} catch (error) {
			console.log(error);
			return res.status(404).json(error);
		}
	}

	async delete(req, res) {
		try {
			return res.status(200).json(await userService.delete(req.body));
		} catch (error) {
			console.log(error);
			return res.status(404).json(error);
		}
	}
}
