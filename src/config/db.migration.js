const Customer = require('../model/customer.model');
const DbMigration = async () => {
    // Register your models here
    await Customer().sync();
}
module.exports = DbMigration;