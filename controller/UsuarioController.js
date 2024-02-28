const Usuario = require('../model/Usuario');

const listarUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}

module.exports = {listarUsuarios};

// async function criarUsuarios(usuario){
//   await Usuario.create(usuario);
//   console.log("Usuario criado");
// }

// // criarUsuarios({
// //   nome: "Jumenta do IF",
// //   email: "jumentadoif@gmail.com",
// //   nascimento: "2000-01-01"
// // });

// async function listarUsuarios(){
//   const usuarios = await Usuario.findAll();
//   console.log(JSON.stringify(usuarios, null, 2));
// }

// // listarUsuarios();

// async function buscarUsuarios(email){
//   const usuarios = await Usuario.findByPk(email);
//   console.log(JSON.stringify(usuarios));
// }

// // buscarUsuarios("jumentadoif@gmail.com");

// async function atualizarUsario(email, nome){
//   const usuario = await Usuario.findByPk(email);
//   usuario.nome = nome;
//   await usuario.save();
//   console.log("Usuarios atualizados");
// }

// // atualizarUsario("tulio@gmail.com", "Flavio Tulio Almeida");

// async function deletarUsario(email){
//   const usuario = await Usuario.findByPk(email);
//   await usuario.destroy();
//   console.log("Usuarios deletado");
// }

// deletarUsario("Joao@gmail.com");


