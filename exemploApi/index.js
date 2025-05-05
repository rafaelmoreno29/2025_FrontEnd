const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/somar', (req, res) => {
    const { n1, n2 } = req.query;
    // const n1 = req.query.n1;
    // const n2 = req.query.n2;
    const resultado = parseInt(n1) + parseInt(n2);
    res.json({ resultado });
});

app.get('/calcular', (req, res) => {
    const { n1, n2, operacao } = req.query;
    let resultado = 0;
    switch (operacao) {
        case 'soma':
            resultado = parseInt(n1) + parseInt(n2);
            break;
        case 'subtracao':
            resultado = parseInt(n1) - parseInt(n2);
            break;
        case 'multiplicacao':
            resultado = parseInt(n1) * parseInt(n2);
            break;
        case 'divisao':
            resultado = parseInt(n1) / parseInt(n2);
            break;
        default:
            return res.status(400).json({ error: 'Operação inválida' });
    }
    res.json({ n1, n2, operacao, resultado });
});

const produtos = [];
let ultimoId = 1;
app.post('/produto', (req, res) => {
    const { nome, valor, temEstoque } = req.body;
    const produto = { id: ultimoId, nome, valor, temEstoque };
    ultimoId++;
    produtos.push(produto);
    res.status(201).json(produto);
});

app.get('/produto', (req, res) => {
    res.json(produtos);
});

app.get('/produto/:id', (req, res) => {
    const { id } = req.params;
    const produto = produtos.find((p) => p.id == id);
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(produto);
});

app.put('/produto/:id', (req, res) => {
    const { id } = req.params;
    const { nome, valor, temEstoque } = req.body;
    const produto = produtos.find((p) => p.id == id);
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    produto.nome = nome;
    produto.valor = valor;
    produto.temEstoque = temEstoque;
    res.json(produto);
});

app.delete('/produto/:id', (req, res) => {
    const { id } = req.params;
    const index = produtos.findIndex((p) => p.id == id);
    if (index === -1) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    produtos.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () =>
    console.log('Servidor rodando na porta: 3000'));