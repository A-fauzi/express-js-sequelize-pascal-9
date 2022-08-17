const { DataTypes } = require("sequelize");
const MST_ADDRESS = 'mst_address';
module.exports = (db) => {
    return db.define(MST_ADDRESS, {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        streetName: DataTypes.STRING,
        city: DataTypes.STRING(30),
        postalCode: DataTypes.STRING(10)
    }, {
        freezeTableName: true,
        underscored: true,
        paranoid: true
    })
}