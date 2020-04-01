const express = require('express');

const ClientController = require('./controllers/ClientController');
const LoginController = require('./controllers/LoginController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/login', LoginController.auth);

routes.get('/client', ClientController.index);
routes.post('/client', ClientController.store);

routes.get('/user', UserController.index);
routes.post('/user', UserController.store);

module.exports = routes;
