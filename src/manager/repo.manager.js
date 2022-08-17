const CustomerRepository = require('../repository/customer.repository')
module.exports = (infraManager) => {
    const { initDb } = infraManager();
    const db = initDb();
    // Semua repo
    const customerRepo = () => {
        return () => CustomerRepository(db);
    }

    return {
        customerRepo
    }
}