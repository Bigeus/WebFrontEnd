const express = require('express');
const app = express();

app.use(express.json());

let alunos = [
    { id: 1, nome: 'Edson', idade: 23 },
    { id: 2, nome: 'Maria', idade: 25 },
    { id: 3, nome: 'João', idade: 21 },
]

app.get('/alunos', (req, res) => {
    res.json(alunos);
})

app.get('/alunos/:id', (req, res) => {
    let id = req.params.id;
    let aluno = alunos.find(element => element.id == id);
    aluno ? res.json(aluno) : res.status(404).send('Aluno não encontrada');
})

app.post('/alunos', (req, res) => {
    let aluno = req.body;
    alunos.push(aluno);
    res.status(201).json(aluno);
})

app.put('/alunos/:id', (req, res) => {
    let id = req.params.id;
    let aluno = req.body;
    let index = alunos.findIndex(aluno => aluno.id == id);
    if (index >= 0) {
        alunos[index] = aluno;
        res.json(aluno);
    } else {
        res.status(404).send('Aluno não encontrado');
    }
})

app.delete('/alunos/:id/disciplinas', (req, res) => {
    let id = req.params.id;
    let index = alunos.findIndex(aluno => aluno.id == id);
    index >= 0 ? res.status(204) : res.status()
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})