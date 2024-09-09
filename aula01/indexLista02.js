// LISTA 02 - VÍNICIUS SIMÕES

const express = require('express');
const app = express();

app.use(express.json());

//EXERCICIO 01
app.get('/alunos', (req, res) => {
    res.json(escola);
});

//==============================================

//EXERCICIO 02
function ex2(ra) {
    const aluno = escola.find(e => e.ra === ra);

    return aluno;
}

app.get('/alunos/:ra', (req, res) => {
    const { ra } = req.params;

    res.json(ex2(ra));
});
//==============================================

//EXERCICIO 03
function ex3(ra) {
    const aluno = escola.find(e => e.ra === ra);

    return aluno.disciplinas;
}

app.get('/alunos/:ra/disciplinas', (req, res) => {
    const { ra } = req.params;
    const disciplinas = ex3(ra);

    res.json(disciplinas);
});
//==============================================

//EXERCICIO 04
app.post('/alunos/:ra/disciplinas', (req, res) => {
    const { ra } = req.params;
    let disciplina = req.body;

    const aluno = escola.find(e => e.ra === ra)

    aluno.disciplinas.push(disciplina);
    res.status(201).json(disciplina);


    //   {
    //       "codigo": "FIS101",
    //       "nome": "Física",
    //       "professor": "Prof. Neymar"
    //     }

});

//==============================================

//EXERCICIO 05
app.put('/alunos/:ra', (req, res) => {
    const { ra } = req.params;
    const alunoAtualizado = req.body;

    let index = escola.findIndex(aluno => aluno.ra == ra);

    if (index >= 0) {
        let aluno = escola[index];

        aluno.nome = alunoAtualizado.nome || aluno.nome;
        aluno.disciplinas = alunoAtualizado.disciplinas || aluno.disciplinas;

        res.json(aluno);
    } else {
        res.status(404).send('Aluno não encontrado');
    }
});


// {
//     "ra": "123456",
//     "nome": "João",
//     "disciplinas": ["Matemática", "Física"]
// }

//simulando um banco de dados
let escola = [
    {
        ra: '1',
        nome: "João",
        disciplinas: [
            { codigo: "MAT101", nome: "Matemática", professor: "Prof. Carlos" },
            { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },
            { codigo: "POR101", nome: "Português", professor: "Prof. João" },
            { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" }
        ]
    },
    {
        ra: '2',
        nome: "Maria",
        disciplinas: [
            { codigo: "MAT101", nome: "Matemática", professor: "Prof. Carlos" },
            { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },
            { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" }
        ]
    },
    {
        ra: '3',
        nome: "Pedro",
        disciplinas: [
            { codigo: "CIE101", nome: "Ciências", professor: "Prof. João" },
            { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },
            { codigo: "POR101", nome: "Português", professor: "Prof. João" },
            { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" },
            { codigo: "EDF101", nome: "Educação Física", professor: "Prof. Carlos" }
        ]
    }
];
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
}

);