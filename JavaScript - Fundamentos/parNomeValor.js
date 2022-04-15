// par nome/valor
const saudacao = 'opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

//  Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade:32,
    peso:90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao, cliente.nome)
console.log(exec())
console.log(cliente)
