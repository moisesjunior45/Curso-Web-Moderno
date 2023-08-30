// For of - Percorre objetos iterativos(Array, Map, Set)
// For of itera em cima de valores
for (let letra of "Cod3r") {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise'];

for (let i in assuntosEcma) {
    console.log(i);
}

for (let assunto of assuntosEcma) {
    console.log(assunto);
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

// Percorrendo as chaves do Map
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

// Percorrendo os valores do Map
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

// Separando as entradas
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra);
}
