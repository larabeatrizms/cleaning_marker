const express = require('express');

//utilizar quando precisar fazer upload de arquivos
//const multer = require('multer');
//const uploadConfig = require('./config/upload');

//CONTROLLERS
const UserSessionController = require('./controllers/UserSessionController');
const ClientSessionController = require('./controllers/ClientSessionController');

const routes = express.Router();
//const upload = multer(uploadConfig);

routes.post('/clientsessions', ClientSessionController.store);
routes.post('/usersessions', UserSessionController.store);

module.exports = routes;

