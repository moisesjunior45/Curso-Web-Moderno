// Ex 1 - Crie uma função que retorna a String "Olá," 
// concatenada com um argumento text (a ser passado para a função)
// e com ponto de exclamação "!" no final.

function exibirString(texto) {
    console.log(`Olá, ${texto}!`);
}

exibirString('Moisés');
exibirString('Maria');

// Ex 2 - Escreva uma função que receba a idade de uma pessoa em anos e retone a mesma idade em dias.
// Obs:considerar um ano com 365 dias. Desconsiderar anos bissextos e desconsiderar dias decorridos desde o último aniversário.

function converterIdadeEmDias(idadeEmAnos) {
    console.log(idadeEmAnos * 365);
}

converterIdadeEmDias(25);
converterIdadeEmDias(70);

// Ex3 - Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês,
// e o quanto ele recebe por hora. O retorno da função deve ser a string 
// "Salário igual a R$ X", em que X é o quanto o funcionário ganhou o mês.

function calcularSalario(quantidadeHorasTrabalhadas, valorHora) {
    const salario = quantidadeHorasTrabalhadas * valorHora;

    return `Salário igual a R$${salario}`;
}

console.log(calcularSalario(150, 40.5));

/*Ex4 - Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. 
Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro",pois este é o 2 mês*/

function nomeDoMes(mes) {
    if (mes === 1) {
        console.log("janeiro");
    } else if (mes === 2) {
        console.log("fevereiro");
    } else if (mes === 3) {
        console.log("março");
    } else if (mes === 4) {
        console.log("abril");
    } else if (mes === 5) {
        console.log("maio");
    } else if (mes === 6) {
        console.log("junho");
    } else if (mes === 7) {
        console.log("julho");
    } else if (mes === 8) {
        console.log("agosto");
    } else if (mes === 9) {
        console.log("setembro");
    } else if (mes === 10) {
        console.log("outubro");
    } else if (mes === 11) {
        console.log("novembro");
    } else if (mes === 12) {
        console.log("dezembro");
    }
}

nomeDoMes(1);
nomeDoMes(4);


// Ex5 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function maiorOuIgual(num1, num2) {
    if(typeof num1 != typeof num2) return false;
    return num1 >= num2;
}

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(0, "0"));
console.log(maiorOuIgual(5, 1));