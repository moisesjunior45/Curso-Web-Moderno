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
    for (let i = 0; i < numero; i++) {
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

console.log(primeiroEUltimoElemento([7, 14, "Olá"]));
console.log(primeiroEUltimoElemento([-100, "aplicativo", 16]));

/*Ex12 - Escreva uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto.
Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.*/

function removerPropriedade(objeto, propriedadeExcluida) {
    const valorASerCopiado = Object.assign({}, objeto)
    //  const valorASerCopiado = {...objeto};
    delete valorASerCopiado[propriedadeExcluida]

    return valorASerCopiado
}

console.log(removerPropriedade({ a: 1, b: 2 }, "a"));
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao"));


// Ex13 - Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro

function filtrarNumeros(array) {
    const somenteNumeros = [];
    for (let item of array) {
        if (typeof item === "number") {
            somenteNumeros.push(item);
        }
    }
    return somenteNumeros;
}

/* Resolução usando filter
    function filtrarNumeros(array) {
    return array.filter(item => typeof item === "number")
}*/

console.log(filtrarNumeros(["JavaScript", 1, "3", "web", 20]));
console.log(filtrarNumeros(["a", "b"]));


/*Ex14 - Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, 
em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.
Observe os exemplos abaixo para um melhor entendimento:*/

function objetoParaArray(objeto) {
    const resultado = [];

    for (let chave in objeto) {
        resultado.push([chave, objeto[chave]]);
    }
    return resultado;
}

// Outra maneira de responder o exercício
/*function objetoParaArray(objeto) {
    return Object.entries(objeto);      // Object.entries - retorna um array cujos elementos são também arrays correspondentes aos pares de propriedades [key, value] 
}*/


console.log(objetoParaArray({
    nome: 'Moisés',
    profissao: 'Desenvolvedor de Software'
}));

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}));

// Ex15 - Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham indices pares

function receberSomenteOsParesDeIndicesPares(array) {
    const resultado = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && i % 2 === 0) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

// Resposta usando filter
/* 
function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
})
}*/
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));

/*  Ex16 - A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos,
que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é
bissexto ou não.*/

function checarAnoBissexto(ano) {
    const divisivelPorQuatro = ano % 4 === 0;
    const diviselPorCem = ano % 100 === 0;
    const diviselPorQuatrocentos = ano % 400 === 0;
    if ((divisivelPorQuatro && !diviselPorCem) || diviselPorQuatrocentos) {
        return "É bissexto";
    } else {
        return "Não é bissexto"
    }
}

// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
/*function checarAnoBissexto(ano) {
    return new Date(ano, 1, 29).getDate() === 29;
    }*/


console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));

// Ex17 - Escreva um array que receba um array de números e retornará a soma de todos os números desse array.

function somarNumeros(array) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        contador += array[i];
    }
    return contador;
}

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));

/*Ex18 - Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.*/

function despesasTotais(array) {
    let totalItens = 0;

    for (let item of array) {
        totalItens += item.preco;
    }
    return totalItens;
}

// Resolução utilizando map e reduce
/*function despesasTotais(array) {
    return array
    .map(item => item.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}*/

// Resolução utilizando reduce
/*function despesasTotais(itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}*/

console.log(despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]));

console.log(despesasTotais([
    { nome: "Galaxy S22", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
]));


/*Ex19 - Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, 
pretendese adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada
de números e retorne a média simples desses números.*/

function calcularMedia(numeros) {
    let contador = 0;
    let media = 0;

    for (let i = 0; i < numeros.length; i++) {
        contador += numeros[i];
    }
    return media = contador / numeros.length;
}

// Resolução usando for of

/*function calcularMedia(numeros) {
    const quantidadeDeNumeros = numeros.length
    let somaTotal = 0
    for(numero of numeros) {
    somaTotal += numero
    }
    return somaTotal / quantidadeDeNumeros
}*/

//  Resolução usando reduce

/*function calcularMedia(numeros) {
    const quantidadeDeNumeros = numeros.length
    const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB)
    return somaTotal / quantidadeDeNumeros
}*/


console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));

/*Ex20 - Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá
ser de duas casas decimais, arredondando se necessário. Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2   */

function areaDoTriangulo(base, altura) {
    const areaDoTriangulo = (base * altura) / 2;

    return areaDoTriangulo.toFixed(2);
}

console.log(areaDoTriangulo(10, 15));
console.log(areaDoTriangulo(7, 9));
console.log(areaDoTriangulo(9.25, 13.1));

// Ex21 - Criar uma função que receba um array de números e retorne o menor número desse array.

function menorNumero(array) {
    let menorValor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menorValor) {
            menorValor = array[i];
        }
    }
    return menorValor;
}

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));

/*Ex22 - Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado
um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado
internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual,
retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.*/

function funcaoDaSorte(numero) {
    const numMinimo = 1;
    const numMaximo = 10;
    const numeroAleoatorio = Math.floor(Math.random() * (numMaximo - numMinimo + 1) + numMinimo);

    return (numero === numeroAleoatorio) ? `Parabéns! O número sorteado foi o ${numeroAleoatorio}.` :
        `Que pena! O número sorteado foi o ${numeroAleoatorio}.`
}

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(5));

// Ex23 - Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

function contarPalavras(frase) {
    const palavras = frase.split(" ");
    return palavras.length;
}

console.log(contarPalavras("Sou uma frase"));
console.log(contarPalavras("Me divirto aprendendo a programar"));

/*Ex24 - Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes
que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
minúsculas.*/

function contarCaractere(caractere, frase) {
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === caractere)
            contador++;
    }
    return contador;
}

// Resolução 2
/*function contarCaractere(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
}*/

console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));

/*Ex25 - A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.*/

function buscarPalavrasSemelhantes(palavra, array) {
    const resultado = [];

    for (let indice of array) {
        if (indice.includes(palavra))
            resultado.push(indice);
    }
    return resultado;
}

// Resolução usando filter
/*function buscarPalavrasSemelhantes(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}*/

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]));

/*Ex26 - Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais*/

function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

    vogais.forEach(vogal => frase = frase.replace(vogal, ''))
    return frase;
}

console.log(removerVogais("cod3r"));
console.log(removerVogais("Fundamentos"));

/*EX27 - Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas.*/

function inverter(objeto) {
    const objetoInvertido = {};

    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0, valor = 1;
        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave];
    })
    return objetoInvertido;
}

// Outra forma de resolver

/*function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
        .map(parChaveValor => parChaveValor.reverse())
    return Object.fromEntries(paresDeChaveValorInvertidos)
}*/
console.log(inverter({ a: 1, b: 2, c: 3 }));

/*Ex28 - Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.*/

function filtrarPorQuantidadeDeDigitos(array, numerosDesejados) {
    let resultado = [];

    for (numero of array) {
        const quantidadeDeDigitos = String(numero).length;

        if (quantidadeDeDigitos === numerosDesejados) {
            resultado.push(numero);
        }
    }
    return resultado;
}

// Outra resolução usando filter
/*function filtrarPorQuantidadeDeDigitos(array, numerosDesejados) {
    return array.filter(numero => {
        const quantidadeDeDigitos = String(numero).length;
        return quantidadeDeDigitos === numerosDesejados;
    });
}*/

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));

// Ex29 - Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

function segundoMaior(array) {
    let indiceDoMaior = 0;
    let segundoMaior;

    array.forEach((numero, indice) => {
        if (numero > array[indiceDoMaior]) {
            indiceDoMaior = indice;
        }
    });

    array.splice(indiceDoMaior, 1)
    segundoMaior = array[0];

    array.forEach(numero => {
        if (numero > segundoMaior)
            segundoMaior = numero
    })


    return segundoMaior
}


// Outra forma de resolver
/*function segundoMaior(array) {
    const numerosOrdenados = array.sort((numeroA, numeroB) => numeroB - numeroA);
    const segundoMaior = numerosOrdenados[1];
    return segundoMaior;
}*/

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));

/*Ex30 - Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num
array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com
os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.*/

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0);
const media = array => soma(array) / array.length;

function recerberMelhorEstudante(estudantes) {
    const mediasEstudantes = Object.entries(estudantes).map(estudante => {
        const chave = 0, valor = 1;
        return { nome: estudante[chave], media: media(estudante[valor]) }
    })
    const estudantesOrdenados = mediasEstudantes.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media);
    const melhorEstudante = estudantesOrdenados[0];

    return melhorEstudante;
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9],
    Moisés: [10, 9, 7.5, 6] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }
)