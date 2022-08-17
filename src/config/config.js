const dotenv = require('dotenv')
dotenv.config()

module.exports = Config = () => {
    return {
        host: process.env.APP_HOST || 'localhost',
        port: process.env.APP_PORT || '8181',
        dbHost: process.env.DB_HOST || 'localhost',
        dbPort: process.env.DB_PORT || '5432',
        dbUser: process.env.DB_User || 'postgres',
        dbPassword: process.env.DB_PASSWORD || 'postgres',
        dbName: process.env.DB_NAME || 'employee',
        dbDriver: process.env.DB_DRIVER || 'postgresql',
    }
}