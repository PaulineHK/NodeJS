const UserRepository = require('../repositories/userRepository.js');

const userRepository = new UserRepository();

module.exports = class userService {

	async create(options) {
		let user = userRepository.getAll({
			where: {
				login: options.login,
				password: options.password
			}
		});
		if (!user)
			return await userRepository.create({
				login: options.login, password: options.password,
				lastName: options.lname, firstName: options.fname,
			});
		else return 'User exists';
	}

	async get(options) {
		return await userRepository.getAll(options);
	}

	async delete(options) {
		return await userRepository.delete(options);
	}
}