const express = require('express');

const ClientController = require('./controllers/ClientController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/client', ClientController.index);
routes.post('/client', ClientController.store);

routes.get('/user', UserController.index);
routes.post('/user', UserController.store);

module.exports = routes;
