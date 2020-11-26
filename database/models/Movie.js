
module.exports = (sequelize, DataType) => {
    const Movie = sequelize.define('movies', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,

            }
        },
        time: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notNUll: true,
                notEmpty: true,
                isInt: true,
                min: 1,
            }
        },
        year: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                min: 1895,
                max: ((new Date).getFullYear()),
                len: [4, 4]
            }
        },
        description: {
            type: DataType.TEXT,
            allowNull: true
        },
        poster: {
            type: DataType.STRING,
            allowNull: true,
            validate: {
                isUrl: true,
            }
        },
        startShow: {
            type: DataType.DATEONLY,
            allowNull: false,
            field: 'start_show',
        },
        endShow: {
            type: DataType.DATEONLY,
            allowNull: false,
            field: 'end_show',
        }
    }, {
        sequelize,
        timestamps: true,
        paranoid: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_at',
        modelName: 'Movie',
        tableName: 'movies',
        validate: {
            isDateShowCorrect: function () {
                if (this.startShow > this.endShow)
                    throw new Error('Start showing should be less than the end');
            },
        }
    });
    Movie.associate = (model) => {
        Movie.hasMany(model.sessions, { foreignKey: 'movieId', onDelete: 'RESTRICT' });
        Movie.belongsToMany(model.tags, { through: model.moviesTags, foreignKey: 'movieId' });

    }
    return Movie;
}
