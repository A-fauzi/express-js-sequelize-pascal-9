// Todo -> requirment untuk file index.js yang akan dijalankan
//  1. Customer model -> untuk membuat query table yang sudah di define di model
const Customer = require('./src/model/customer.model')

// Todo -> 2. DbMigration -> karna table models sudah di daftarkan sebelum nya di file db.migration, maka tinggal diletakan di file js
const DbMigration = require('./src/config/db.migration')

// Todo -> 3. create methode run() untuk menjalankan semua nya
const run = async () => {

    await DbMigration()

    // Todo -> CRUD Basic
    // Todo -> bulkCreate() method digunakan untuk membuat record lebih dari satu secara bersamaan dengan menggunakan array
    // const addCustomerBulk = await Customer().bulkCreate([
    //     {
    //         name: 'Customer 1',
    //         address: 'Address 1',
    //         phone: '082112966360',
    //         email: 'cus1@gmail.com',
    //         balance: 1000
    //     },
    //     {
    //         name: 'Customer 2',
    //         address: 'Address 2',
    //         phone: '082112966362',
    //         email: 'cus2@gmail.com',
    //         balance: 2000
    //     },
    //     {
    //         name: 'Customer 3',
    //         address: 'Address 3',
    //         phone: '082112966363',
    //         email: 'cus3@gmail.com',
    //         balance: 3000
    //     },
    //     {
    //         name: 'Customer 4',
    //         address: 'Address 4',
    //         phone: '082112966364',
    //         email: 'cus4@gmail.com',
    //         balance: 4000
    //     },
    //     {
    //         name: 'Customer 5',
    //         address: 'Address 5',
    //         phone: '082112966365',
    //         email: 'cus5@gmail.com',
    //         balance: 5000
    //     },
    // ])
    // console.log('Create Customer', addCustomerBulk)

    // Todo -> SELECT * FROM ...
    // Todo -> Find all customer
    console.log('Data Customers')
    const customers = await Customer().findAll()
    console.log(JSON.stringify(customers, null, 4))

    // findAndCountAll() -> digunakan untuk pagination (page, totalItem) limit, offset
    // Data 3 [1, 2, 3] (limit 1, offset 8) -> 2
    /**
     * 1 -> page 1
     * 2
     * 3
     * 4
     * 5 -> page 1
     * 6 -> page 2
     * 7
     * 8
     * 9
     * 10 -> page 2
     * 11 -> page 3
     */
    // Rumus Pagination: offset =
}
run().then(v => v)

