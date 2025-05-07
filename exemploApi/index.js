//importação
const express = require('express');
const calculadoraRoute = require('./routes/calculadora');
const produtoRoute = require('./routes/produto');

//configuração do express
const app = express();
app.use(express.json());

//configuração das rotas
app.use('/calculadora', calculadoraRoute);
app.use('/produto', produtoRoute);

//criando servidor
app.listen(3000, () =>
    console.log('Servidor rodando na porta: 3000'));