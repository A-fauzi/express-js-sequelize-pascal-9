// Todo -> Requirement untuk db migration
//  1. Customer model -> yang dibutuhkan untuk meregister tabel di model yang sudah di define
const Customer = require('../model/customer.model')

// Todo -> 2. create function untuk meregister table model
module.exports = async () => {
    await Customer().sync()
}