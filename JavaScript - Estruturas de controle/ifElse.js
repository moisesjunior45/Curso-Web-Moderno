const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('APROVADO!')
    } else {
        console.log('REPROVADO!')
    }
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado!!!