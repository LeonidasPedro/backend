const pacientesController = require('../controllers/pacientesController');

module.exports = (app) =>{
    app.get('/pacientes', pacientesController.getAllPacientes);
    app.get('/pacientes/:id', pacientesController.getPacientesById);
    app.post('/pacientes', pacientesController.postPaciente);
    app.delete('/pacientes/:id', pacientesController.deletePaciente);
    app.patch('/pacientes', pacientesController.patchPaciente);
}