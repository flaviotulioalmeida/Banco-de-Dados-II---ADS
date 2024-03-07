const express = require('express');
const usuarioRouter = express.Router();


const { criarUsuario, listarUsuario, buscarUsuario, atualizarUsuario, deletarUsuario } = require('../controller/UsuarioController'); 

usuarioRouter.post('/', criarUsuario);
usuarioRouter.get('/', listarUsuario);
usuarioRouter.get('/:email', buscarUsuario);
usuarioRouter.put('/:email', atualizarUsuario);
usuarioRouter.delete('/:email', deletarUsuario);


module.exports = usuarioRouter;