// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro';
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'};

Object.freeze(pessoa);  //O método Object.freeze() congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele

pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

// Exemplo de criação de Objeto já com o método Object freeze
const pessoaConstante = Object.freeze({ nome: 'João'});
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);