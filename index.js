const { Connection } = require('pg');
const { Sequelize, Model, DataTypes } = require('sequelize');


const sequelize = new Sequelize('API', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
  });

Conectar = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

Conectar()

const Usuario = sequelize.define('Usuario', {
  // Model attributes are defined here
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  nascimento:{
    type: DataTypes.DATE
  }
}, {
  // Other model options go here
});


async function sincronizar(){
  await Usuario.sync();
  console.log("Sincronizado");
} 

// sincronizar();

async function criarUsuarios(usuario){
  await Usuario.create(usuario);
  console.log("Usuario criado");
}

// criarUsuarios({
//   nome: "Jumenta do IF",
//   email: "jumentadoif@gmail.com",
//   nascimento: "2000-01-01"
// });

async function listarUsuarios(){
  const usuarios = await Usuario.findAll();
  console.log(JSON.stringify(usuarios, null, 2));
}

// listarUsuarios();

async function buscarUsuarios(email){
  const usuarios = await Usuario.findByPk(email);
  console.log(JSON.stringify(usuarios));
}

// buscarUsuarios("jumentadoif@gmail.com");

async function atualizarUsario(email, nome){
  const usuario = await Usuario.findByPk(email);
  usuario.nome = nome;
  await usuario.save();
  console.log("Usuarios atualizados");
}

// atualizarUsario("tulio@gmail.com", "Flavio Tulio Almeida");

async function deletarUsario(email){
  const usuario = await Usuario.findByPk(email);
  await usuario.destroy();
  console.log("Usuarios deletado");
}

deletarUsario("Joao@gmail.com");