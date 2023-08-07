// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow Function (this)
// This de uma função arrow está associado ao local no qual a função foi escrita
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log();
log('Sou mais forte');

// Operador rest
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}

console.log(total(2, 1, 5, 7, 10));