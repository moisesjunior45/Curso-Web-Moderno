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

console.log(calcularSalario(150, 50.5));