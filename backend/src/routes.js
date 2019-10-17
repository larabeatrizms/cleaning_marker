const express = require('express');

//utilizar quando precisar fazer upload de arquivos
//const multer = require('multer');
//const uploadConfig = require('./config/upload');

//CONTROLLERS
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
//const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

module.exports = routes;

