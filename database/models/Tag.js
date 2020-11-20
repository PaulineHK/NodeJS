
export default (sequelize, DataType) => {
	const Tag = sequelize.define("tags", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		name: {
			type: DataType.STRING(15),
			allowNull: false,
			unique: true
		}
	}, {
		sequelize,
		modelName: 'Tag',
		tableName: 'tags',
	});
	return Tag;
}