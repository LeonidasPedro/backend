
const pacientes = require('./pacientesRoute')

module.exports = (app) => {
    pacientes(app)
}