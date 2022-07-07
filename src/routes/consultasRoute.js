const consultasContoller = require('../controllers/consultasController');

module.exports = (app) =>{
    app.get('/consultas', consultasContoller.getAllConsultas);
    app.get('/consultas/:id', consultasContoller.getConsultasById);
    app.post('/consultas', consultasContoller.postConsultas);
    app.delete('/consultas/:id', consultasContoller.deleteConsultas);
    app.patch('/consultas', consultasContoller.patchConsultas);
}