
export default (sequelize, DataType) => {
	const User = sequelize.define('users', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		login: {
			type: DataType.STRING,
			unique: true,
			allowNull: false
		},
		password: {
			type: DataType.STRING,
			allowNull: false
		},
		//timestamps: false
		//deletedAt: true
	}, {
		sequelize,
		paranoid: true,
		deletedAt: 'deleted_at',
		modelName: 'User',
		tableName: 'users',
	});
	return User;
}
