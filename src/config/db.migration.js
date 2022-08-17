// Todo -> 1. db migration membutuhkan customer model untuk meregister pembuatan table model customer
const Customer = require('../model/customer.model')
const User = require('../model/user.model')

// Todo -> 2. buat function untuk meregister sebuah table model dengan method sync()
//  dan membutuhkan argument parameter db untuk kebutuhan Model Customer
module.exports = async (db) => {
    const customer = await Customer(db)
    const user = await User(db)

    customer.hasOne(user)
    user.belongsTo(customer)

    await customer.sync()
    await user.sync()
}