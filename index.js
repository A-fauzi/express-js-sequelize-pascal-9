const {Sequelize, DataType, DataTypes} = require('sequelize')

const connectionString = 'postgresql://postgres:postgres@localhost:5432/db_enigmart'
const sequelize = new Sequelize(connectionString)

/**
 * Todo: function to running server
 * @returns {Promise<void>}
 */
const run = async () => {

    /**
     * Todo : define model
     */
    const Customer = sequelize.define('mst_customer', {
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

    await Customer.sync({alter: true}) // mendukung perubahan structure table tanpda merubah data yang sudah ada

    // CRUD BASIC
    // create
    // const customer = await Customer.bulkCreate([
    //     {
    //         name: 'customer 6',
    //         address: 'address 6',
    //         phone: '082112966366',
    //         email: 'cs6@gmail.com',
    //         balance: 6000,
    //         is_status: false
    //     },
    //     {
    //         name: 'customer 7',
    //         address: 'address 7',
    //         phone: '082112966367',
    //         email: 'cs7@gmail.com',
    //         balance: 7000,
    //         is_status: true
    //     },
    //     {
    //         name: 'customer 8',
    //         address: 'address 8',
    //         phone: '082112966368',
    //         email: 'cs8@gmail.com',
    //         balance: 8000,
    //         is_status: false
    //     },
    //     {
    //         name: 'customer 9',
    //         address: 'address 9',
    //         phone: '082112966369',
    //         email: 'cs9@gmail.com',
    //         balance: 9000,
    //         is_status: true
    //     },
    //     {
    //         name: 'customer 10',
    //         address: 'address 10',
    //         phone: '082112966310',
    //         email: 'cs10@gmail.com',
    //         balance: 10000,
    //         is_status: false
    //     },
    // ])
    // console.log('add customer', customer)

    // SELECT * FROM ..
    // read
    const findAllCustomer = await Customer.findAll()
    console.log(`SELECT * FROM ...`)
    console.log('FIND ALL CUSTOMER...')
    console.log(`All Customer`, JSON.stringify(findAllCustomer, null, 4))

    // search all data berdasarkan query name
    console.log('Hasil Pencarian Berdasarkan Name...')
    const findAllCByName = await Customer.findAll({
        where: { name: 'customer ' }
    })
    const checkDataCustomerByName =  String(findAllCByName) === '' ? 'Data Tidak Ditemukan' :  JSON.stringify(findAllCByName, null, 4)
    console.log(checkDataCustomerByName)

    // Mengurutkan data berdasarkan tanggal asc / desc
    console.log('Sort data berdasarkan tanggal terbaru...')
    const findAllCusOrderBy = await Customer.findAll({
        order: [ ['createdAt', 'desc'] ]
    })
    console.log(JSON.stringify(findAllCusOrderBy, null, 4))

    // todo: findOne() || findByPk()
    console.log(`Search data by name...`)
    const customer04 = await Customer.findOne({
        where: { name: 'customer 2' },
    });
    const checkDataCustomerByOne =  customer04 === null ? 'Data Tidak Ditemukan' :  JSON.stringify(customer04, null, 4)
    console.log(checkDataCustomerByOne)

    // Todo: findByPk() -> spesifik hanya untuk si primary key
    console.log(`Search data by id...`)
    const customer05 = await Customer.findByPk('3078e00d-0945-4e20-bdc1-58d55117a0d4');
    const checkDataCustomerByPK =  customer05 === null ? 'Data Tidak Ditemukan' :  JSON.stringify(customer05, null, 4)
    console.log(checkDataCustomerByPK)


    // update
    // Jika result yang di kembalikan 1, data berhasil di update
    console.log('UPDATE DATA...')
    const updateCsById = await Customer.update(
        {
            name: 'Akhmad Fauzi'
        },
        {
            where: { id: '0b53d140-4aa0-49b4-9e7b-2c7cb6334cf9'}
        }
    )
    const checkDataUpdate =  Number(updateCsById) === 0 ? 'Data Tidak Ditemukan' :  'Data Berhasil Di Update'
    console.log(checkDataUpdate)

    // delete
    // Jika result yang di kembalikan 1, data berhasil di delete
    console.log('DELETE DATA...')
    const deleteData = await Customer.destroy({
        where: {id: '0b53d140-4aa0-49b4-9e7b-2c7cb6334cf9'}
    })
    const checkDataDelete = deleteData === 0 ? 'Data Tidak Ditemukan' :  'Data Berhasil Dihapus'
    console.log(checkDataDelete)

}
run().then(r => r)