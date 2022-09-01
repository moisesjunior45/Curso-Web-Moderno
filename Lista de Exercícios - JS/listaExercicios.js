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
    if (typeof num1 != typeof num2) return false;
    return num1 >= num2;
}

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(0, "0"));
console.log(maiorOuIgual(5, 1));

/*Ex6 - Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, 
o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. 
Se o parâmetro for numérico, o retorno será o numero inverso. Por exemplo, se for fornecido 1, o retorno será -1.
Se o parâmetro de entrada não for de nenhum dos tipos acima,
retorne "booleano ou número esperados, mas o parâmetro é do tipo...".*/

function inverso(valor) {
    if (typeof valor === "boolean") {
        return !valor;
    } else if (typeof valor == "number") {
        return -valor;
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`;
    }
}

console.log(inverso(true));
console.log(inverso(6));
console.log(inverso(-2000));
console.log(inverso("programação"));

/*Ex7 - Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo)
e retorne se o parâmetro numero (o primeiro) está entre o minimo e o maximo. 
Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo.
Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva,
não considerando se numero é igual a minimo ou a maximo.*/

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo;
    } else {
        return numero > minimo && numero < maximo;
    }
}

console.log(estaEntre(50, 10, 100));
console.log(estaEntre(160, 16, 100));
console.log(estaEntre(3, 3, 150));
console.log(estaEntre(3, 3, 150, true));








/*Ex8 - Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero)
e realize a multiplicação deles. Porém, não utilize o operador de multiplicação*/

function multiplicar(primeiroNumero, segundoNumero) {
    let resultado = 0;
    if (primeiroNumero < 0 || segundoNumero < 0) return "Valores não válidos";

    for (let i = 0; i < segundoNumero; i++) {
        resultado += primeiroNumero;
    }
    return resultado;
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));

/*Ex9 - Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, 
enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

function repetir(elementoParaRepetir, quantidadeVezes) {
    let array = [];
    
    for (let i = 0; i < quantidadeVezes; i++) {
        array.push(elementoParaRepetir);
    }
    return array;
}

console.log(repetir("codigo", 2));
console.log(repetir(7, 3));





// Ex10 - Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro

function simboloMais(numero) {
    let resultado = "";
    for (let i=0; i < numero; i++) {
        resultado += "+";
    }
    return resultado;
}

console.log(simboloMais(12));
console.log(simboloMais(5));

// Ex11 - Crie uma função que receba uma array e retorna o primeiro e o último elemendo desse array como um novo array

function primeiroEUltimoElemento(array) {
    const indicePrimeiroElemento = array[0];
    const indiceUltimoElemento = array[array.length - 1];

    return [indicePrimeiroElemento, indiceUltimoElemento];
}

console.log(primeiroEUltimoElemento([7,14, "Olá"]));
console.log(primeiroEUltimoElemento([-100, "aplicativo", 16]));    