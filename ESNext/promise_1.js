const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]

// O resultado do then é passado para o proxímo metodo then
let p = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letra => letra.toLowerCase())
    // .then(letraMinuscula => console.log(letraMinuscula))
    .then(console.log)