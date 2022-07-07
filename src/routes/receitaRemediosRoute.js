const receitaRemediosController = require('../controllers/receitaRemediosController');

module.exports = (app) =>{
    app.get('/receitaRemedios', receitaRemediosController.getAllReceitaRemedios);
    app.get('/receitaRemedios/:id', receitaRemediosController.getReceitaRemediosById);
    app.post('/receitaRemedios', receitaRemediosController.postReceitaRemedios);
    app.delete('/receitaRemedios/:id', receitaRemediosController.deleteReceitaRemedios);
    app.patch('/receitaRemedio', receitaRemediosController.patchReceitaRemedios);
}