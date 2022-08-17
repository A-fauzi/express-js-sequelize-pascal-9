// Todo -> 1. membutuhkan Op operator type dari sequelize untuk kebutuhan query di repo
const {Op} = require('sequelize')

// Todo -> 2. repo butuh model untuk kebutuhan query dari table yang sudah di buat dan di tentukan di model
const Customer = require('../model/customer.model')

// Todo -> 3. buat function untuk menhasilkan keluaran yang di butuhkan (CRUD),
//  dan membutuhkan argument parameter db untuk kebutuhan sequelize dan di diteruskan
module.exports = (db) => {

    // Todo -> 4. create membutuhkan payload untuk di teruskan yang nilai nya akan di ambil dari request http
    const create = async (payload) => {
        try {
            // Todo -> result akan menangkap data yang di kirim dari request http jika berhasil
            const result = await Customer(db).create(payload)
            console.log(result)
            return result
        }catch (e) {
            console.log(e.message)
            return e.message
        }
    }

    // Todo -> 5. list membutuhkan sebuah argument untuk kebutuhan query yang nanti nya akan di teruskan
    const list = async (keyword = '', page, size, sortBy = 'created_at', sortType = 'desc') => {
        try {
            const offset = size * (page - 1)
            // Todo -> fungsi findAllCountAll() untuk menghitung paging
            const { count, rows } = await Customer(db).findAndCountAll({
               // Todo -> Kondisi query ini untuk mencari data berdasarkan keyword yang di ketik pada request query
                where: {

                    [Op.or] : [
                        {name: { [Op.iLike] : `%${keyword}%` } },
                        {address: { [Op.iLike] : `%${keyword}%` } },
                        {phone: { [Op.iLike] : `%${keyword}%` } },
                        {email: { [Op.iLike] : `%${keyword}%` } }
                    ]
                },
                offset: offset,
                limit: size,
                order: [
                    [sortBy, sortType]
                ]
            })
            // Todo -> nilai kembalian ini adalah hasil query dan akan di teruskan
            return { count, rows }
        }catch (e) {
            return e.message
        }
    }

    // Todo -> fungsi ini digunakan untuk mencari data berdasarkan id PK hasil query,
    //  dan membutuhkan sebuah argument parameter id untuk di tersukan
    const getById = async (id) => {
        try {
            const customer = await Customer(db).findByPk(id);
            if (!customer) return `Customer with value ID ${id} not found!`;

            // Todo -> nilai kembalian hasil query ini akan di teruskan
            return customer;
        } catch (err) {
            return err.message
        }
    }

    // Todo -> fungsi ini digunakan untuk mencari data berdasarkan id PK hasil query dan data tersebut akan di hapus,
    //  dan membutuhkan sebuah argument parameter id untuk di tersukan
    const remove = async (id) => {
        try {
            const customer = await Customer(db).findByPk(id);
            if (!customer) return `Customer with value ID ${id} not found!`;

            // Todo -> nilai kembalian hasil query ini akan di teruskan
            return await Customer(db).destroy({ where: { id: id }});
        } catch (err) {
            return err.message
        }
    }

    // Todo -> fungsi ini digunakan untuk update data berdasarkan id PK dan membutuhkan argument parameter payload dari request body,
    //  dan akan diteruskan
    const update = async (payload) => {
        try {
            const customer = await Customer(db).findByPk(payload.id);
            if (!customer) return `Customer with value ID ${payload.id} not found!`;

            // Todo -> nilai kembalian hasil query ini akan di teruskan
            return await Customer(db).update(payload, {
                where: { id: payload.id }
            });
        } catch (err) {
            return err.message
        }
    }

    return {
        create, list, getById, remove, update
    }

}

