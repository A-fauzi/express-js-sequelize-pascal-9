module.exports = (customerRepo) => {
    const { create, list } = customerRepo();
    const registerNewCustomer = async (payload) => {
        try {
            return await create(payload);
        } catch (err) {
            return err.message
        }
    }
    const findAllCustomer = async () => {
        try {
            return await list();
        } catch (err) {
            return err.message
        }
    }

    return {
        registerNewCustomer, findAllCustomer
    }

}