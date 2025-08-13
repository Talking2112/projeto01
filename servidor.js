const express = require('express');
const cors = require('cors');
const app = express();
const dados1 = require('./dados1.json');
const dados2 = require('./dados2.json');
const dados3 = require('./dados3.json');

app.use(cors());
app.use(express.json());

app.post('/buscarPessoas', (req, res) => {
    const { nome } = req.body;
    const resultado = dados1.filter(pessoa =>
        pessoa.nome.toLowerCase().includes(nome.toLowerCase())
    );
    return res.json(resultado);
});

app.post('/buscarCarros', (req, res) => {
    const { marca } = req.body;
    const resultado2 = dados2.filter(carro =>
        carro.marca.toLowerCase().includes(marca.toLowerCase())
    );
    return res.json(resultado2);
});

app.post('/buscarFilmes', (req, res) => {
    const { titulo } = req.body;
    const resultado3 = dados3.filter(filme =>
        filme.titulo.toLowerCase().includes(titulo.toLowerCase())
    );
    return res.json(resultado3);
});

app.listen(3000, () => {
    console.log('Servidor executando');
});

