
const consultasService = require('../services/consultasService');

const getAllConsultas = async(req, res) => {
    try {
        const consultas = await consultasService.getAllConsultas();
        res.status(200).send(consultas);
    } catch (err) {
        res.status(500).send(err);
    }
}
const getConsultasById = async(req, res) => {
    try {
        const consultas = await consultasService.getConsultasById(req.params);
        res.status(200).send(consultas);
    } catch (err) {
        res.status(500).send(err);
    }
} 
const patchConsultas = async (req, res) => {
    try {
        const consulta = await consultasService.patchConsultas(req.body);
        res.status(200).send(consulta);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postConsultas = async (req, res) => {
    try {
       
        const consulta = await consultasService.postConsultas(req.body);
        
        res.status(200).send(consulta);
    } catch (err) {
        res.status(500).send(err);
    }
}
const deleteConsultas = async (req, res) => {
    try {
        let deletado = await consultasService.deleteConsultas(req.params);
        let msg = deletado 
            ? `consulta ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhuma consulta com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllConsultas = getAllConsultas;
module.exports.getConsultasById = getConsultasById;
module.exports.postConsultas = postConsultas;
module.exports.deleteConsultas = deleteConsultas;
module.exports.patchConsultas = patchConsultas;




