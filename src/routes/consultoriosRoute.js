const consultoriosContoller = require('../controllers/consultoriosController');

module.exports = (app) =>{
    app.get('/consultorios', consultoriosContoller.getAllConsultorios);
    app.get('/consultorios/:id', consultoriosContoller.getConsultorioById);
    app.post('/consultorios', consultoriosContoller.postConsultorios);
    app.delete('/consultorios/:id', consultoriosContoller.deleteConsultorios);
    app.patch('/consultorios', consultoriosContoller.patchConsultorios);
}