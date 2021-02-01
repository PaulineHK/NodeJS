module.exports = class notFound extends Error {
	constructor(message = 'The request contains a syntax error') {
		super(message);
		super.name = 'BadRequest';
		this.status = 400;
	}
}