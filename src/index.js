//IMPORTAR A DEPENDENCIA DO EXPRESS PARA A CRIAÇÃO DO SERVER
const express = require('express');

//criar uma constante que representa nossa aplicação como um todo
//chamamos "App" e ela recebe a invocação do express
const app = express();


const db = require('./config/db');

    //criação de rota
    /*app.get('/pacientes', (request, response, next) => {

    })
    */

//middleware
require('./routes')(app);
app.use(express.json());


//definição da porta em que a aplicação vai rodar
//Para isso usamos a função .listen(PORT, CALLBACK FUNCTION);
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor Rodando na porta ${PORT}`);
});
