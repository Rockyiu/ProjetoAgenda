const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');
const {loginRequired} = require('./src/middlewares/middleware');

route.get('/', homeController.index);

//rotas de login

route.get('/login/index', loginController.index); 
route.post('/login/register', loginController.register); 
route.post('/login/login', loginController.login); 
route.get('/login/logout', loginController.logout); 

//Rotas de Contato
route.get('/contato/index', loginRequired, contatoController.index); 
route.post('/contato/register', loginRequired, contatoController.register); 
route.get('/contato/index/:id', loginRequired, contatoController.editIndex); 
route.post('/contato/index/:id', loginRequired, contatoController.edit); 
route.get('/contato/delete/:id', loginRequired, contatoController.delete); 

module.exports = route;