
const medicosService = require('../services/medicosService');

const getAllMedicos = async(req, res) => {
    try {
        const medicos = await medicosService.getAllMedicos();
        res.status(200).send(medicos);
    } catch (err) {
        res.status(500).send(err);
    }
}
const getMedicosById = async(req, res) => {
    try {
        const medicos = await medicosService.getMedicosById(req.params);
        res.status(200).send(medicos);
    } catch (err) {
        res.status(500).send(err);
    }
} 
const patchMedico = async (req, res) => {
    try {
        const medico = await medicosService.patchMedico(req.body);
        res.status(200).send(medico);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postMedico = async (req, res) => {
    try {
        const medico = await medicosService.postMedico(req.body);
        res.status(201).send(medico);
    } catch (err) {
        res.status(500).send(err);
    }
}
const deleteMedico = async (req, res) => {
    try {
        let deletado = await medicosService.deleteMedico(req.params);
        let msg = deletado 
            ? `Medico ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum medico com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllMedicos = getAllMedicos;
module.exports.getMedicosById = getMedicosById;
module.exports.postMedico = postMedico;
module.exports.deleteMedico = deleteMedico;
module.exports.patchMedico = patchMedico;




