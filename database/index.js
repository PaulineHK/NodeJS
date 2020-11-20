import db from './db.js';

db.sequelize.sync()
	.then(result => console.log(result))
	.catch(err => console.log(err));
