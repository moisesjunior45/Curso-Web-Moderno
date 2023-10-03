// Usar uma promise para encapsular a chamada de um arquivo, usando o metódo readFile
/*const fs = require('fs');

function lerCaminho(nomeArquivo) {
    return new Promise(resolve => {
        fs.readFile(nomeArquivo, 'utf8', (erro, conteudo) => {
            resolve(conteudo.toString());
        })
    })
}

lerCaminho('./dados.txt')
    .then(conteudo => console.log(conteudo))*/

    // Resolução do Professor
const fs = require('fs')
const path = require('path')


function lerCaminho(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf8', (erro, conteudo) => {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerCaminho(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)