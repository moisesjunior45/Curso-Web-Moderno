// Mudanças na notação literal de Objetos - Após ECMA Script 6

const a = 1;
const b = 2;
const c = 3;

// Antigamente - Antes da versão ECS6
const obj1 = {a: a, b: b, c: c}

// Atualmente - Após a versão ECS6
const obj2 = {a, b, c}
console.log(obj1, obj2);

const nomeAttr = 'nota';
const valorAttr = 7.87;

// Antigamente - Antes da versão ECS6
const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);

// Atualmente - Após a versão ECS6
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4);

const obj5 = {
    // Antigamente - Antes da versão ECS6
    funcao1: function() {
        // ...
    },
    // Atualmente - Após a versão ECS6
    funcao2() {
        // ...
    }
}

console.log(obj5);