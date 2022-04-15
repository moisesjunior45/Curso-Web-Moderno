function getInteiroAleaotorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleaotorioEntre(-1, 10) 
    console.log(`Opção escolhia foi ${opcao}`)
} while (opcao != -1)

console.log('Até a Próxima!')
