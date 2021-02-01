const DataType = require('sequelize');
const sequelize = require('../sequelize');


const MovieTag = sequelize.define("moviesTags", {
	id: {
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	movieId: {
		type: DataType.INTEGER,
		allowNull: false,
		unique: true,
		field: 'movie_id'
	},
	tagId: {
		type: DataType.INTEGER,
		allowNull: false,
		unique: true,
		field: 'tag_id'
	}
}, {
	sequelize,
	timestamps: true,
	paranoid: true,
	createdAt: false,
	updatedAt: false,
	deletedAt: 'deleted_at',
	modelName: 'MovieTag',
	tableName: 'movies_tags',
	initialAutoIncrement: '1',
});
MovieTag.associate = (model) => {
	MovieTag.belongsTo(model.movies, { foreignKey: 'movieId' });
	MovieTag.belongsTo(model.tags, { foreignKey: 'tagId' });
}
module.exports = MovieTag;
