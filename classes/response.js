const response = {
	success(code, message, data) {
		return {
			statusCode: code,
			statusType: 'success',
			message: message,
			data: data
		};
	},
	error(code, message, data) {
		return {
			statusCode: code,
			statusType: 'error',
			message: message,
			error: data
		};
	}
};

module.exports = response;