
const pacientesService = require('../services/pacientesService');

const getAllPacientes = async(req, res) => {
    try {
        const pacientes = await pacientesService.getAllPacientes();
        res.status(200).send(pacientes);
    } catch (err) {
        res.status(500).send(err);
    }
}
const getPacientesById = async(req, res) => {
    try {
        const pacientes = await pacientesService.getPacientesById(req.params);
        res.status(200).send(pacientes);
    } catch (err) {
        res.status(500).send(err);
    }
} 
const patchPaciente = async (req, res) => {
    try {
        const paciente = await pacientesService.patchPaciente(req.body);
        res.status(201).send(paciente);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postPaciente = async (req, res) => {
    try {
        const paciente = await pacientesService.postPaciente(req.body);
        res.status(201).send(paciente);
    } catch (err) {
        res.status(500).send(err);
    }
}
const deletePaciente = async (req, res) => {
    try {
        let deletado = await pacientesService.deletePaciente(req.params);
        let msg = deletado 
            ? `Paciente ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum paciente com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllPacientes = getAllPacientes;
module.exports.getPacientesById = getPacientesById;
module.exports.postPaciente = postPaciente;
module.exports.deletePaciente = deletePaciente;
module.exports.patchPaciente = patchPaciente;




