
const remediosService = require('../services/remediosService');

const getAllRemedios = async(req, res) => {
    try {
        const remedio = await remediosService.getAllRemedios();
        res.status(200).send(remedio);
    } catch (err) {
        res.status(500).send(err);
    }
}
const getRemediosById = async(req, res) => {
    try {
        const remedio = await remediosService.getRemediosById(req.params);
        res.status(200).send(remedio);
    } catch (err) {
        res.status(500).send(err);
    }
} 
const patchRemedios = async (req, res) => {
    try {
        const Remedios = await remediosService.patchRemedios(req.body);
        res.status(200).send(Remedios);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postRemedios = async (req, res) => {
    try {
        const Remedios = await remediosService.postRemedios(req.body);
        res.status(201).send(Remedios);
    } catch (err) {
        res.status(500).send(err);
    }
}
const deleteRemedios = async (req, res) => {
    try {
        let deletado = await remediosService.deleteRemedios(req.params);
        let msg = deletado 
            ? `ReceitaRemedio ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum remedio com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllRemedios = getAllRemedios;
module.exports.getRemediosById = getRemediosById;
module.exports.postRemedios = postRemedios;
module.exports.deleteRemedios = deleteRemedios;
module.exports.patchRemedios = patchRemedios;




