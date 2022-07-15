const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));       // Retorna a chave do Objeto
console.log(Object.values(pessoa));     // Retorna o valor do Objeto
console.log(Object.entries(pessoa));    // Retorna um array de pares de propriedade [Chave, valor]

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {   // Adicionando ou alterando uma propriedade de objeto
    enumerable: true,       // A propriedade pode ser enumerada
    writable: false,        // O valor da propriedade pode ser alterado
    value: '17/08/2002'     // O valor associado com a propriedade. Pode ser qualquer valor válido em Javascript  (número, objeto, função, etc).
});

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);        //copia todas as propriedades próprias enumeráveis ​​de determinados objetos para um único objeto e o retorna.

Object.freeze(obj);
obj.c = 1234;
console.log(obj)