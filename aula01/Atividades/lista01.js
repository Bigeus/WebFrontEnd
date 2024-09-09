//VINICIUS SIMOES

function exercicioTeste(nome) {
    return `Olá ${nome}`;
}

//LIST STARTS HERE

function exercicio01(palavra) {
    let counter = 0;
    const array = palavra.toString().toLowerCase().split('');
    array.forEach(element => {
        if (['a', 'e', 'i', 'o', 'u'].includes(element)) {
            counter++;
        }
    });
    return counter;
}

function exercicio02(ci, tj, ti) {
    const value = ci * Math.pow((1 + tj), ti);
    // const retorno = capitalInicial * Math.pow((1 + taxaDeJuros), tempoDoInvestimento);
    return value;
}

function exercicio03(caracter, sequencia) {
    let counter = 0;
    const array = sequencia.toString().toLowerCase().split('');

    array.forEach(element => {
        if (element.includes(caracter)) {
            counter++;
        }
    });

    return counter;
}

function exercicio04(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return `${ano} é um ano bissexto.`;
    } else {
        return `${ano} NÃO é um ano bissexto.`;
    }
}

function exercicio05(numeros) {
    const array = numeros.split('');
    array.map(e => Number(e));

    /*  const minValue = Math.min(...array);
        const maxValue = Math.max(...array); */

    if (array.length === 0) {
        return { menor: null, maior: null };
    }

    let menor = array[0];
    let maior = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        } else if (array[i] > maior) {
            maior = array[i];
        }
    }

    return { menor, maior };
}

function exercicio06(n01, n02, n03, n04, n05, n06) {
    let sorteados = [];
    let acertos = 0;
    const array = [Number(n01), Number(n02), Number(n03), Number(n04), Number(n05), Number(n06)];

    const loteria = () => {
        while (sorteados.length < 6) {
            //0 à 15
            let numero = Math.floor(Math.random() * 16); 
            if (!sorteados.includes(numero)) {
                sorteados.push(numero);
            }
        }
        return sorteados;
    }

    sorteados = loteria();

    // Verifica os acertos
    array.forEach(item => {
        if (sorteados.includes(item)) {
            acertos++;
        }
    });

    //easter egg
    if(acertos === 6){
        return 'PARABÉNS VOCÊ GANHOU! ACERTOU TODOS OS NÚMEROS SORTEADOS! 👏👏'
    }

    return `Você acertou ${acertos} números! <br><br>\rSeus números: ${array.toString()} <br><br>Números sorteados: ${sorteados.toString()}`;
}

module.exports = {
    exercicio01,
    exercicio02,
    exercicio03,
    exercicio04,
    exercicio05,
    exercicio06
}