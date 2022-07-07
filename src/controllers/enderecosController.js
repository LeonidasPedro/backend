
const enderecosService = require('../services/enderecosService');

const getAllEnderecos = async(req, res) => {
    try {
        const enderecos = await enderecosService.getAllEnderecos();
        res.status(200).send(enderecos);
    } catch (err) {
        res.status(500).send(err);
    }
}
const getEnderecosById = async(req, res) => {
    try {
        const enderecos = await enderecosService.getEnderecosById(req.params);
        res.status(200).send(enderecos);
    } catch (err) {
        res.status(500).send(err);
    }
} 
const patchEndereco = async (req, res) => {
    try {
        const endereco = await enderecosService.patchEndereco(req.body);
        res.status(200).send(endereco);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postEnderecos = async (req, res) => {
    try {
        const endereco = await enderecosService.postEnderecos(req.body);
        res.status(201).send(endereco);
    } catch (err) {
        res.status(500).send(err);
    }
}
const deleteEndereco = async (req, res) => {
    try {
        let deletado = await enderecosService.deleteEndereco(req.params);
        let msg = deletado 
            ? `endereco ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum endereco com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllEnderecos = getAllEnderecos;
module.exports.getEnderecosById = getEnderecosById;
module.exports.postEnderecos = postEnderecos;
module.exports.deleteEndereco = deleteEndereco;
module.exports.patchEndereco = patchEndereco;




