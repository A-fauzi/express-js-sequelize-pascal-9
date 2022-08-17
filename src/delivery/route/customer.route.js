const express = require('express');
const router = express.Router();

// Todo -> function ini untuk menjalankan controller melalui route nya masing masing,
//  dan membutuhkan sebuah argument parameter controller yang akan di teruskan
module.exports = (customerController) => {
    // Todo -> memanggil method method yang ada di controller kedalam destructuring
    const {  create, list, findById, update, remove } = customerController;
    router.post('/', create);
    router.get('/', list);
    router.get('/:id', findById);
    router.put('/', update);
    router.delete('/:id', remove);
    return router;
}