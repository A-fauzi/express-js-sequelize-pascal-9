const Response = require('../../utils/response');
module.exports = (customerService) => {
    const { registerNewCustomer, findAllCustomer } = customerService();

    const create = async (req, res) => {
        try {
            const payload = req.body;
            const customer = await registerNewCustomer(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', customer))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    const list = async (req, res) => {
        try {
            const customers = await findAllCustomer();
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', customers))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }
    return {
        create, list
    }
}