// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

// Destructuring em objeto inexistente
const {sobrenome, bemHummorada = true} = pessoa
console.log(sobrenome, bemHummorada)

const {logradouro, numero, cep = null} = pessoa.endereco
console.log(logradouro, numero, cep)

//const {ag, num} = pessoa.conta
// console.log(ag, num)    //Objeto e atributos não definidos
