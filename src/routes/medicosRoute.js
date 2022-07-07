const medicosController = require('../controllers/medicosController');

module.exports = (app) =>{
    app.get('/medicos', medicosController.getAllMedicos);
    app.get('/medicos/:id', medicosController.getMedicosById);
    app.post('/medicos', medicosController.postMedico);
    app.delete('/medicos/:id', medicosController.deleteMedico);
    app.patch('/medicos', medicosController.patchMedico);
}