const app = require('./app');

const port = 3000;

exports.start = async () => {
	try {
		await app.listen(port);
		console.log('Listening on port', port);
		await app.set('port', port);
	} catch (error) {
		console.log('Port configuration error', error);
	}
};