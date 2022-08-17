/**
 * Todo: File config yang berada didalam folder config,
 * Todo: digunakan untuk menyediakan konfigurasi yang sudah di siapkan didalam file .env
 */

// Todo -> 1. membutuhkan require module dotenv
const dotenv = require('dotenv')
dotenv.config()

// Todo -> 2. kembalikan nilai konfigurasi yang sudah di setup didalam file .env
module.exports = () => {
    return {
        host: process.env.APP_HOST,
        port: process.env.APP_PORT,
        dbHost: process.env.DB_HOST,
        dbPort: process.env.DB_PORT,
        dbUser: process.env.DB_USER,
        dbPassword: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME,
        dbDriver: process.env.DB_DRIVER,
    }
}