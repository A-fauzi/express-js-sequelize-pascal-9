const CustomerService = require('../service/customer.service');
const CustomerRepository = require("../repository/customer.repository");
module.exports = (repoManager) => {
    const { customerRepo } = repoManager();
    // Semua repo
    const customerService = () => {
        return () => CustomerService(customerRepo());
    }

    return {
        customerService
    }
}