
export default (sequelize, DataType) => {
    const State = sequelize.define("states", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataType.STRING(1),
            allowNull: false,
            unique: true
        }
    }, {
        sequelize,
        modelName: 'State',
        tableName: 'states',
    });
    return State;
}
