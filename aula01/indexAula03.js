const express = require('express');
const { getClientes, getOneCliente } = require('./bd/Cliente');
const app = express();


app.use(express.json());
app.use(express.text());




app.get('/cliente', getClientes);

app.get('/cliente/:id', getOneCliente);


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 malandro');
});