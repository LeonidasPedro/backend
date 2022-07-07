
const consultoriosService = require('../services/consultorioService');

const getAllConsultorios = async(req, res) => {
    try {
        const consultorios = await consultoriosService.getAllConsultorios();
        res.status(200).send(consultorios);
    } catch (err) {
        res.status(500).send(err);
    }
}
const getConsultorioById = async(req, res) => {
    try {
        const consultorios = await consultoriosService.getConsultoriosById(req.params);
        res.status(200).send(consultorios);
    } catch (err) {
        res.status(500).send(err);
    }
} 
const patchConsultorios = async (req, res) => {
    try {
        const consultorio = await consultoriosService.patchConsultorios(req.body);
        res.status(200).send(consultorio);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postConsultorios = async (req, res) => {
    try {
        const consultorio = await consultoriosService.postConsultorios(req.body);
        res.status(200).send(consultorio);
    } catch (err) {
        res.status(500).send(err);
    }
}
const deleteConsultorios = async (req, res) => {
    try {
        let deletado = await consultoriosService.deleteConsultorios(req.params);
        let msg = deletado 
            ? `consultorio ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhuma consultorio com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllConsultorios = getAllConsultorios;
module.exports.getConsultorioById = getConsultorioById;
module.exports.postConsultorios = postConsultorios;
module.exports.deleteConsultorios = deleteConsultorios;
module.exports.patchConsultorios = patchConsultorios;




