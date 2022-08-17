// Todo -> service manager membutuhkan service untuk nilai nya dapat diteruskan
const CustomerService = require('../service/customer.service');
const UserService = require('../service/user.service');

// Todo -> fungsi ini untuk meneruskan nilai yang ada di repo manager,
//  dan membutuhkan sebuah argument parameter yang akan di teruskan
module.exports = (repoManager) => {
    // Todo -> desctructuring ini hasil return dari repo manager yang ingin di teruskan dan dikirim kepada service
    const { customerRepo, userRepo } = repoManager;

    // Semua repo
    const customerService = () => {
        return () => CustomerService(customerRepo());
    }

    const userService = () => {
        return () => UserService(userRepo());
    }

    return {
        customerService, userService
    }
}