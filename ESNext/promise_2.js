// setTimeout(function () {
//     console.log('Executando callback...');

//     setTimeout(function () {
//         console.log('Executando callback...');

//         setTimeout(function () {
//             console.log('Executando callback...');
//         }, 2000)
//     }, 2000)
// }, 2000)

function esperaPor(tempo = 5000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando promise...');
            resolve('resultado')
        }, tempo)
    })
}

esperaPor()
    .then(() => esperaPor())
    .then(() => esperaPor())