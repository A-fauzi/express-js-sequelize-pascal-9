const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('postgresql://postgres:postgres@localhost:5432/db_enigmart') // Example for postgres

// Start connection
const conn = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    } finally {
        await sequelize.close()
    }
}
// conn().then(r => r)

//  define model table
const migration = async () => {
    //  define model table
    const Customer = sequelize.define("customer", {
        // alter column
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        // Column
        name: {
            // Attribute column
            type: DataTypes.STRING(50), // if not define, default varchar(255)
            allowNull: false
        },
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        balance: DataTypes.INTEGER,
        isStatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true, // cari penjelasan
        underscored: true, // cari penjelasan
        paranoid: true
    })
    await Customer.sync({alter: true}) // alter true berguna saat ingin merubah struktur column dengan otomatis

    // CRUD Basic

    // insert
    // const customer1 = await Customer.create({
    //     name: 'Azis G',
    //     address: 'Bekasi',
    //     phone: '94579475945',
    //     email: "zis@gmail.com",
    //     balance: 25
    // })
    // console.log('customer1', customer1)

    // Read
    // Select * From ...
    const cus1 = await Customer.findAll()
    console.log(JSON.stringify(cus1, null, 3))

    console.log(`SELECT *
                 FROM..WHERE name`)
    const cus2 = await Customer.findAll({
        name: 'Sule'
    })
    console.log(JSON.stringify(cus2, null, 3))

    const cus3 = await Customer.findAll({
        oder: [['createdAt', 'desc']]
    })
    console.log(`SELECT *
                 FROM..ORDER DESC`)
    console.log(JSON.stringify(cus3, null, 3))

    // findone || findByPk()
    const cus4 = await Customer.findOne({
        where: {name: 'Sule'},
    })
    console.log(`[single row findOne] SELECT * FROM ..`)
    console.log(cus4)

    // findByPk() -> spesifik hanya untuk si primary key
    const cus5 = await Customer.findByPk('c77a3fb0-0191-4c0c-a9b8-1c42747b3557')
    console.log(`[single row findByPk] SELECT * FROM ..`)
    console.log(cus5)

    // findAndCountAll() -> digunakan untuk pagination (page, totalItem) limit, offset
    // Data 3


    // DELETE
    console.log(`DELETE FROM ...`)
    const cus6 = await Customer.destroy({
        where: {id: '7110deb7-6d04-450d-b98f-6865c13aa348'}
    })
    // Mengembalikan rowcount, 1 = ada datanya, 0 = tidak ada datanya
    console.log('delete customer 1', cus6)

    const cus7 = await Customer.findAll({
        // paranoid: false // menampilkan data yang telah di destroy
    })
    console.log('After deleted')
    console.log(JSON.stringify(cus7, null, 3))


    // UPDATE
    console.log(`UPDATE...`)
    const updateCus = await Customer.update(
        {
            balance: "1000000"
        },
        {
            where: {
                id: "481bb6fa-72b1-4934-9b47-bde344485d13"
            }
        }
    )
    console.log(`Update cus: `, updateCus)
}
migration().then(r => r)

// Simple insert field

