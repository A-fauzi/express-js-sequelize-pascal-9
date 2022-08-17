const { DataTypes } = require("sequelize");
const MST_PRODUCT = 'mst_product';
module.exports = (db) => {
    return db.define(MST_PRODUCT, {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: DataTypes.STRING,
        price: DataTypes.BIGINT
    }, {
        freezeTableName: true,
        underscored: true,
        paranoid: true
    })
}