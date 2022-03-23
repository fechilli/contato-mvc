// importar express
const express = require("express");


//importar o ContatosController

const ContatosController = require('../controllers/ContatosController')


// cria roteador
const router = express.Router();

// pede para o roteador definir uma rota: (metodo: get, endereço: /contatos)

router.get('/contatos', ContatosController.listarContatos)


//exportar o roteador
module.exports = router;
