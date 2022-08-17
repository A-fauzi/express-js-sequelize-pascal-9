const express = require('express');
const router = express.Router();
module.exports = (customerController) => {
    const {  create, list } = customerController();
    router.post('/', create);
    router.get('/', list);
    return router;
}