module.exports = (userRepo) => {
    const { create, list } = userRepo();
    const registerNewUser = async (payload) => {
        try {
            return await create(payload);
        } catch (err) {
            console.log(err.message)
            return err.message
        }
    }

    const findAllUser = async () => {
        try {
            return await list();
        } catch (err) {
            console.log(err.message)
            return err.message
        }
    }

    return {
        registerNewUser, findAllUser
    }
}