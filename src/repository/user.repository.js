const User = require("../model/user.model");
const Customer = require("../model/customer.model");
module.exports = (db) => {
    const customer = Customer(db);
    const user = User(db);

    customer.hasOne(user);
    user.belongsTo(customer);

    const create = async (payload) => {
        try {
            return await user.create(payload)
        } catch (err) {
            return err.message
        }
    }

    const list = async () => {
        try {
            return await user.findAll({
                include: {
                    model: customer,
                    // customer table
                    attributes: ['id', 'name', 'address']
                },
                // user table
                attributes: {
                    exclude: ['password'] // password tidak di tampilkan
                }
            });
        } catch (err) {
            return err.message
        }
    }

    return {
        create, list
    }
}