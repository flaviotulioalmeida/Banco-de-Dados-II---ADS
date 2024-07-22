const Ocorrencia = require('../model/ocorrencia'); 

// create Ocorrencia
const criarOcorrencia = async (req, res ) => {
    try{
        const ocorrencias = await Ocorrencia.create(req.body);
        res.status(201).json(ocorrencias);
    }catch(exeption){
        res.status(404).json({erro: exeption.message});
        return;
    }
};

// lister Ocorrencia
const listarOcorrencia = async (req, res) => {
    const ocorrencias = await Ocorrencia.findAll();
    res.json(ocorrencias);
}




module.exports = { criarOcorrencia, listarOcorrencia };
