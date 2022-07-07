const remediosController = require('../controllers/remediosController');

module.exports = (app) =>{
    app.get('/remedios', remediosController.getAllRemedios);
    app.get('/remedios/:id', remediosController.getRemediosById);
    app.post('/remedios', remediosController.postRemedios);
    app.delete('/remedios/:id', remediosController.deleteRemedios);
    app.patch('/remedios', remediosController.patchRemedios);
}