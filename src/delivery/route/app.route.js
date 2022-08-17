const express = require('express');
const router = express.Router();
// Ini akan mengumpulkan semua route yang ada
// Kemarin ini index.js
module.exports = (customerRoute, userRoute) => {
    router.use('/customers', customerRoute);
    router.use('/users', userRoute);
    return router;
}