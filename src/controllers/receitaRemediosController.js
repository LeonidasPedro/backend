
const receitaRemediosService = require('../services/receitaRemediosService');

const getAllReceitaRemedios = async(req, res) => {
    try {
        const receitaRemedios = await receitaRemediosService.getAllReceitaRemedios();
        res.status(200).send(receitaRemedios);
    } catch (err) {
        res.status(500).send(err);
    }
}
const getReceitaRemediosById = async(req, res) => {
    try {
        const receitaRemedios = await receitaRemediosService.getReceitaRemediosById(req.params);
        res.status(200).send(receitaRemedios);
    } catch (err) {
        res.status(500).send(err);
    }
} 
const patchReceitaRemedios = async (req, res) => {
    try {
        const ReceitaRemedios = await receitaRemediosService.patchReceitaRemedios(req.body);
        res.status(200).send(ReceitaRemedios);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postReceitaRemedios = async (req, res) => {
    try {
        const ReceitaRemedios = await receitaRemediosService.postReceitaRemedios(req.body);
        res.status(201).send(ReceitaRemedios);
    } catch (err) {
        res.status(500).send(err);
    }
}
const deleteReceitaRemedios = async (req, res) => {
    try {
        let deletado = await receitaRemediosService.deleteReceitaRemedios(req.params);
        let msg = deletado 
            ? `ReceitaRemedio ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum ReceitaRemedios com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllReceitaRemedios = getAllReceitaRemedios;
module.exports.getReceitaRemediosById = getReceitaRemediosById;
module.exports.postReceitaRemedios = postReceitaRemedios;
module.exports.deleteReceitaRemedios = deleteReceitaRemedios;
module.exports.patchReceitaRemedios = patchReceitaRemedios;




