const http = require('http');
const express = require('express');
const app = express();
const Config = require('../config/config');
const DbMigration = require('../config/db.migration');
const jsonMiddleware = require('../delivery/middleware/json.middleware');
const AppRoute = require('../delivery/route/app.route');
const InfraManager = require('../manager/infra.manager');
const RepoManager = require('../manager/repo.manager');
const ServiceManager = require('../manager/service.manager');
const CustomerController = require('../delivery/controller/customer.controller');
const CustomerRoute = require('../delivery/route/customer.route');

module.exports = () => {
    const { host, port } = Config();
    const infraManager = () => InfraManager(Config);
    const repoManager = () => RepoManager(infraManager);
    const serviceManager = () => ServiceManager(repoManager);
    const { initDb } = infraManager()

    const initCustomerRoute = () => {
        const customerController = () => CustomerController(serviceManager().customerService());
        return CustomerRoute(customerController);
    }

    const initController = () => {
        app.use(jsonMiddleware);
        app.use(AppRoute(initCustomerRoute()));
    }

    const run = () => {
        initController();
        DbMigration(initDb()).catch();
        const server = http.createServer(app);
        server.on('error', (err) => {
            console.log(`Server failed to start ${err.message}`)
        });
        server.listen(port, () => {
            if (server.listening) {
                console.log(`Server run on ${host}:${port}`);
            }
        })
    }

    return { run }
}