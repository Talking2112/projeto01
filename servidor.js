const express = require('express');
const cors = require('cors');
const app = express();
const dados1 = require('./dados1.json');

app.use(cors());
app.use(express.json());

//Criar um endpoint para retornar pesquisa
app.post('/buscarPessoas', (req, res) =>{
    const {nome} = req.body;
    const resultado = dados1.filter(pessoa =>
        pessoa.nome.toLowerCase().includes(nome.toLowerCase())
    );
    return res.json(resultado);
});

app.listen(3000, () => {
    console.log('Servidor executando')
});
