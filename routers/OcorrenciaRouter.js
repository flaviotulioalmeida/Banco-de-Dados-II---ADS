const express = require('express');
const ocorrenciaRouter = express.Router();


const { criarOcorrencia,listarOcorrencia  } = require('../controller/OcorrenciaController'); 

ocorrenciaRouter.post('/', criarOcorrencia);
ocorrenciaRouter.get('/', listarOcorrencia);


module.exports = ocorrenciaRouter;