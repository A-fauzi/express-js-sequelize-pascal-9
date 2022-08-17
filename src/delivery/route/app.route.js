const express = require('express');
const router = express.Router();
// Ini akan mengumpulkan semua route yang ada
// Kemarin ini index.js
module.exports = (customerRoute) => {
    router.use('/customers', customerRoute);
    return router;
}