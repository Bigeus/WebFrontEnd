//VINICIUS SIMOES

const express = require('express');
const { exercicio01, exercicio02, exercicio03, exercicio04, exercicio05, exercicio06 } = require('./Atividades/lista01');
const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.use('/bigeus', (req, res) => {
    res.send('<center><h1>NO MEIO</h1></center>')
})

app.get('/exemplo', (req, res) => {
    res.send('teste do /exemplo')
})

//COMEÇO DA LISTA

//exercicio01
app.get('/exercicio01/:palavra', (req, res) => {
    const pl = req.params.palavra;
    res.send(`<center><h1>${exercicio01(pl)}</h1></center>`);
})

//exercicio02
app.get('/exercicio02/:capitalInicial/:taxaDeJuros/:tempoDoInvestimento', (req, res) => {
    const capitalInicial = parseFloat(req.params.capitalInicial);
    const taxaDeJuros = parseFloat(req.params.taxaDeJuros);
    const tempoDoInvestimento = parseFloat(req.params.tempoDoInvestimento);

    const resultado = exercicio02(capitalInicial, taxaDeJuros, tempoDoInvestimento);
    res.send(`<center><h1>O retorno do investimento é de: R$ ${resultado.toFixed(2)}</h1></center>`);
})

//exercicio03
app.get('/exercicio03/:caracter/:texto', (req, res) => {
    const { caracter, texto } = req.params;

    const resultado = exercicio03(caracter, texto);
    res.send(`<center><h1>Quantidade de caracteres na string fornecida: ${resultado}</h1></center>`);
})

//exercicio04
app.get('/exercicio04/:ano', (req, res) => {
    const { ano } = req.params;

    res.send(`<center><h1>${exercicio04(ano)}</h1></center>`);
})

//exercicio05
app.get('/exercicio05/:numeros', (req, res) => {
    const { numeros } = req.params;

    const { maior, menor } = exercicio05(numeros);

    res.send(`<center><h1>O maior número é o: ${maior} \n E o menor número é o: ${menor}</h1></center>`);
})

//exercicio06
app.get('/exercicio06/:numero01/:numero02/:numero03/:numero04/:numero05/:numero06', (req, res) => {
    const { numero01, numero02, numero03, numero04, numero05, numero06 } = req.params;

    res.send(`<center><h2>${exercicio06(numero01, numero02, numero03, numero04, numero05, numero06)}</h2></center>`);
})

/* app.use((req, res) => {
    res.send("<h1>Hello World!</h1>")
}) */
