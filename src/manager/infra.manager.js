// Todo -> Infra manager requirement
//  1. Membutuhkan Module Sequelize
const {Sequelize} = require('sequelize')

// Todo -> 2. Create methode Inframanager(config)
//  methode ini membutuhkan sebuah argument dari config method
module.exports = (config) => {
  const initDb = () => {
      const {dbHost, dbPort, dbUser, dbPassword, dbName, dbDriver} = config
      const connectionString = `${dbDriver}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`
      return new Sequelize(connectionString)
  }
  // Todo -> initDb method akan mengembalikan nilai Sequelize yang sudah connect dengan db melalui connectionString
  return {initDb}
}