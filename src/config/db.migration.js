// Todo -> 1. db migration membutuhkan customer model untuk meregister pembuatan table model customer
const Customer = require('../model/customer.model')
const User = require('../model/user.model')
const Address = require('../model/address.model');
const Product = require('../model/product.model');


// Todo -> 2. buat function untuk meregister sebuah table model dengan method sync()
//  dan membutuhkan argument parameter db untuk kebutuhan Model Customer
module.exports = async (db) => {
    const customer = await Customer(db)
    const user = await User(db)
    const address = Address(db);
    const product = Product(db);

    user.belongsTo(customer);
    customer.hasMany(address);
    customer.belongsToMany(product, { through: 'r_product_customer' });
    product.belongsToMany(customer, { through: 'r_product_customer' });
    await db.sync()
}