const enderecosController = require('../controllers/enderecosController');

module.exports = (app) =>{
    app.get('/enderecos', enderecosController.getAllEnderecos);
    app.get('/enderecos/:id', enderecosController.getEnderecosById);
    app.post('/enderecos', enderecosController.postEndereco);
    app.delete('/enderecos/:id', enderecosController.deleteEndereco);
    app.patch('/endereco', enderecosController.patchEndereco);
}