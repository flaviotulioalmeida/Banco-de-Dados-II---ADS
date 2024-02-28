const express = require('express');
const usuarioRouter = express.Router(); 

const {listarUsuario, buscarUsuario, criarUsuario, deletarUsario} = require('./controller/UsuarioController');

usuarioRouter.get('/', listarUsuario);
usuarioRouter.get('/:email', buscarUsuario);
usuarioRouter.post('/', criarUsuario);
usuarioRouter.delete('/', deletarUsario);

module.exports = usuarioRouter;