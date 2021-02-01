const DataType = require('sequelize');
const sequelize = require('../sequelize');


const Tag = sequelize.define("tags", {
	id: {
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true,
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
	initialAutoIncrement: '1',
});
Tag.associate = (model) => {
	Tag.belongsToMany(model.movies, { through: model.moviesTags, foreignKey: 'tagId' });
}
module.exports = Tag;