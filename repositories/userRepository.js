const User = require('../database/models/User.js');

module.exports = class userRepository {

	async create(options) {
		return await User.create(options);
	}

	async getAll(options) {
		return await User.findAll(options);
	}

	async delete(options) {
		return await User.destroy(options);
	}
}