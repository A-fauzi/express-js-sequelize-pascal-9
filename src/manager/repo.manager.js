// Todo -> 1. repo manager membutuhkan Repository untuk mengirim db yang sudah terhubung dengan sequelize kedalam argument didalam repo
const CustomerRepository = require('../repository/customer.repository')
const UserRepository = require('../repository/user.repository')

// Todo -> Fungsi ini untuk mengembalikan nilai yang ada di repository,
//  dan membutuhkan sebuah argument parameter db yang sudah di inisialisasi didalam infra manager
module.exports = (infraManager) => {
    const { initDb } = infraManager;
    const db = initDb();

    // Semua repo
    const customerRepo = () => {
        return () => CustomerRepository(db);
    }

    const userRepo = () => {
        return () => UserRepository(db);
    }

    return {
        customerRepo, userRepo
    }
}