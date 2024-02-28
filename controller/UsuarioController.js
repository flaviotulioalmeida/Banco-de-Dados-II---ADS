const Usuario = require('../model/Usuario');

const listarUsuario = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}


const buscarUsuario = async (req, res) => {
    const usuarios = await Usuario.findByPk(req.params.email);
     
      if(usuarios === null){
          res.status(404).json({erro: "Usuários não encontrado"});
          return;
      }

    res.json(usuarios);
};

const criarUsuario = async (req, res ) => {
    try{
        const usuarios = await Usuario.create(req.body);
        res.status(201).json(usuarios);
    }catch(exeption){
        res.status(404).json({erro: exeption.message});
        return;
    }
};

const deletarUsario = async (req, res) => {
    try{
        const usuario = await Usuario.findByPk(email);
        await usuario.destroy();
        res.status( 200 ).json({message: "Usuario deletado com sucesso"});
    }catch(exeption){
        res.status( 404 ).json({erro: "not found"});
        return;
    }   
};

// const atualizarUsario = (user) async


module.exports = { listarUsuario, buscarUsuario, criarUsuario, deletarUsario };






// // criarUsuarios({
// //   nome: "Jumenta do IF",
// //   email: "jumentadoif@gmail.com",
// //   nascimento: "2000-01-01"
// // });

// async function atualizarUsario(email, nome){
//   const usuario = await Usuario.findByPk(email);
//   usuario.nome = nome;
//   await usuario.save();
//   console.log("Usuarios atualizados");
// }

// // atualizarUsario("tulio@gmail.com", "Flavio Tulio Almeida");




