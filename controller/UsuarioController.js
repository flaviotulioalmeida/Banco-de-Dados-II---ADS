const Usuario = require('../model/usuario');

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
        const usuario = await Usuario.findByPk(req.params.email);
        await usuario.destroy();
        res.status( 200 ).json({message: "Usuario deletado com sucesso"});
    }catch(exeption){
        res.status( 404 ).json({erro: "not found"});
        return;
    }   
};

const atualizarUsarios = async (req, res) => {
    try {
         const usuario = await Usuario.findByPk(req.params.email);
        console.log('query', req.query);
        console.log('query', req.body);
        
        await usuario.update({
            nome:req.body.nome
        });
        res.status( 200 ).json({message: "Usuario atualizado com sucesso"});
    }catch(exeption) {
        res.status( 404 ).json({erro: "not found"});
        return;
    }
};



module.exports = { listarUsuario, buscarUsuario, criarUsuario, deletarUsario, atualizarUsarios };
