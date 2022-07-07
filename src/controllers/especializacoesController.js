
const especializacoesService = require('../services/especializacoesService');

const getAllEspecializacoes = async(req, res) => {
    try {
        const especializacao = await especializacoesService.getAllEspecializacoes();
        res.status(200).send(especializacao);
    } catch (err) {
        res.status(500).send(err);
    }
}
const getEspecializacoesById = async(req, res) => {
    try {
        const especializacao = await especializacoesService.getEspecializacoesById(req.params);
        res.status(200).send(especializacao);
    } catch (err) {
        res.status(500).send(err);
    }
} 
const patchEspecializacoes = async (req, res) => {
    try {
        const especializacao = await especializacoesService.patchEspecializacoes(req.body);
        res.status(200).send(especializacao);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postEspecializacoes = async (req, res) => {
    try {
        const especializacao = await especializacoesService.postEspecializacoes(req.body);
        res.status(201).send(especializacao);
    } catch (err) {
        res.status(500).send(err);
    }
}
const deleteEspecializacoes = async (req, res) => {
    try {
        let deletado = await especializacoesService.deleteEspecializacoes(req.params);
        let msg = deletado 
            ? `Especialização ${req.params.id} deletada com sucesso` 
            : `Não foi encontrada nenhuma especialização com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllEspecializacoes = getAllEspecializacoes;
module.exports.getEspecializacoesById = getEspecializacoesById;
module.exports.postEspecializacoes = postEspecializacoes;
module.exports.deleteEspecializacoes = deleteEspecializacoes;
module.exports.patchEspecializacoes = patchEspecializacoes;




