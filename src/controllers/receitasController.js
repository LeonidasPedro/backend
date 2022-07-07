
const receitasService = require('../services/receitasService');

const getAllReceita = async(req, res) => {
    try {
        const receita = await receitasService.getAllReceita();
        res.status(200).send(receita);
    } catch (err) {
        res.status(500).send(err);
    }
}
const getReceitaById = async(req, res) => {
    try {
        const receita = await receitasService.getReceitaById(req.params);
        res.status(200).send(receita);
    } catch (err) {
        res.status(500).send(err);
    }
} 
const patchReceita = async (req, res) => {
    try {
        const Receita = await receitasService.patchReceita(req.body);
        res.status(200).send(Receita);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postReceita = async (req, res) => {
    try {
        const Receita = await receitasService.postReceita(req.body);
        res.status(201).send(Receita);
    } catch (err) {
        res.status(500).send(err);
    }
}
const deleteReceita = async (req, res) => {
    try {
        let deletado = await receitasService.deleteReceita(req.params);
        let msg = deletado 
            ? `ReceitaRemedio ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum Receita com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllReceita = getAllReceita;
module.exports.getReceitaById = getReceitaById;
module.exports.postReceita = postReceita;
module.exports.deleteReceita = deleteReceita;
module.exports.patchReceita = patchReceita;




