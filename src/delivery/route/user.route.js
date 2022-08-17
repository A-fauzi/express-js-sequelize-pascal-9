const express = require('express');
const router = express.Router();
module.exports = (userController) => {
    const { create, list } = userController();
    router.post('/', create);
    router.get('/', list);
    return router;
}