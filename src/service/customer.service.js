// Todo -> di service membutuhkan argument parameter repository untuk di teruskan
module.exports = (customerRepo) => {

    // Todo ->  memanggil method yang ada di repo didalam destrcuturing untuk di teruskan kembali ke masing masing service nya
    const {  create, list, getById, remove, update } = customerRepo();


    const registerNewCustomer = async (payload) => {
        try {
            return await create(payload);
        } catch (err) {
            return err.message
        }
    }
    const findAllCustomer = async (keyword, page, size, sortBy, sortType) => {
        try {
            if (isNaN(page) || isNaN(size)) {
                page = 1
                size = 10
            }
            const { count, rows } = await list(keyword, page, size, sortBy, sortType);
            return { count, rows }
        } catch (err) {
            return err.message
        }
    }

    const findCustomerById = async (id) => {
        try {
            return await getById(id);
        } catch (err) {
            return err.message
        }
    }

    const removeCustomer = async (id) => {
        try {
            return await remove(id);
        } catch (err) {
            return err.message
        }
    }

    const updateOldCustomer = async (payload) => {
        try {
            return await update(payload);
        } catch (err) {
            return err.message
        }
    }

    return {
        registerNewCustomer, findAllCustomer, findCustomerById, removeCustomer, updateOldCustomer
    }

}