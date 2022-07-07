const pacientes = require('./pacientesRoute')
const consultas = require('./consultasRoute');
const enderecos = require('./enderecosRoute');
const consultorios = require('./consultoriosRoute')
const receitaRemedio = require('./receitaRemediosRoute');
const receitaRemediosRoute = require('./receitaRemediosRoute');
const medicos = require('./medicosRoute');
const receitas = require('./receitasRoute');
const remedios = require('./remediosRoute');
const especializacoes = require('./especializacoesRoute');
module.exports = (app) => {
    pacientes(app)
    consultas(app)
    enderecos(app)
    consultorios(app)
    receitaRemediosRoute(app)
    medicos(app)
    receitas(app)
    remedios(app)
    especializacoes(app)
}