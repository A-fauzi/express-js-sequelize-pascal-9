// Todo -> 1. customer model membutuhkan sequelize
const {DataTypes} = require("sequelize");

// Todo -> create function untuk membuat table di sequelize
//  dan membutuhkan sebuah argument parameter db yang sudah di koneksikan oleh sequelize
module.exports = (db) => {
    return db.define('mst_customer', {
        // Todo: Define kolom
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50), // default length 255
            allowNull: true
        },
        address: DataTypes.STRING,
        phone: {
            type: DataTypes.STRING(13),
            unique: true
        },
        email: {
            type: DataTypes.STRING(100),
            unique: true
        },
        balance: {
            type: DataTypes.INTEGER,
            types: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        is_status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    }, {
        freezeTableName: true, // untuk membuat kolom cutom pada table
        underscored: true, // mendukung colom dengan karakter underscore
        paranoid: true // jika data di hapus, data tersebut masih berada didalam table, namun data tersebut sudah terhapus dan masuk kedalam history kolom deleted
    })
}