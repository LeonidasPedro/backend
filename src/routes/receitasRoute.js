const receitasController = require('../controllers/receitasController');

module.exports = (app) =>{
    app.get('/receitas', receitasController.getAllReceita);
    app.get('/receitas/:id', receitasController.getReceitaById);
    app.post('/receitas', receitasController.postReceita);
    app.delete('/receitas/:id', receitasController.deleteReceita);
    app.patch('/receitas', receitasController.patchReceita);
}