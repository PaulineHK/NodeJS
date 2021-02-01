const Request = require('../database/models/Request.js');

module.exports = class requestRepository {
	async create(options) {
		return await Request.create(options);
	}

	async delete(options) {
		return await Request.destroy(options);
	}

	async find(options) {
		return await Request.findOne(options);
	}
}