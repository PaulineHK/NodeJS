
module.exports = (sequelize, DataType) => {
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
			unique: true,
			validate: {
				notNull: true,
				equals: 'specific value'
			}
		}
	}, {
		sequelize,
		modelName: 'Tag',
		tableName: 'tags',
	});
	Tag.associate = (model) => {
		Tag.belongsToMany(model.movies, { through: model.moviesTags, foreignKey: 'tagId' });
	}
	return Tag;
}