
module.exports = (sequelize, DataType) => {
	const MovieTag = sequelize.define("moviesTags", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
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
		tableName: 'movies_tags'
	});
	return MovieTag;
}
