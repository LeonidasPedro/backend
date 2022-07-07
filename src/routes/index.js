
const pacientes = require('./pacientesRoute')
const consultas = require('./consultasRoute')

module.exports = (app) => {
    pacientes(app)
    consultas(app)
}