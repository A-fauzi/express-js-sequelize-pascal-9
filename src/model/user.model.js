const { DataTypes } = require("sequelize");
const MST_USER = 'mst_user';
module.exports = (db) => {
    return db.define(MST_USER, {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true,
        underscored: true,
        paranoid: true
    })
}