const especializacoesController = require('../controllers/especializacoesController');

module.exports = (app) =>{
    app.get('/especializacoes', especializacoesController.getAllEspecializacoes);
    app.get('/especializacoes/:id', especializacoesController.getEspecializacoesById);
    app.post('/especializacoes', especializacoesController.postEspecializacoes);
    app.delete('/especializacoes/:id', especializacoesController.deleteEspecializacoes);
    app.patch('/especializacoes', especializacoesController.patchEspecializacoes);
}