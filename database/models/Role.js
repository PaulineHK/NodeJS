
export default (sequelize, DataType) => {
	const Role = sequelize.define("roles", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		name: {
			type: DataType.STRING(25),
			allowNull: false,
			unique: true
		}
	}, {
		sequelize,
		modelName: 'Role',
		tableName: 'roles',
	});
	return Role;
}
