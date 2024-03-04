const express = require('express');
const usuarioRouter = express.Router(); 

const {listarUsuario, buscarUsuario, criarUsuario, deletarUsario, atualizarUsarios } = require('../controller/UsuarioController'); 

usuarioRouter.get('/', listarUsuario);
usuarioRouter.get('/:email', buscarUsuario);
usuarioRouter.put('/:email', atualizarUsarios);
usuarioRouter.post('/', criarUsuario);
usuarioRouter.delete('/:email', deletarUsario);

module.exports = usuarioRouter;