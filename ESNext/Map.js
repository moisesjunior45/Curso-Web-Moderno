/*
   Map - O objeto Map contém pares de chave-valor e lembra a ordem original da inserção das chaves. 
   Qualquer valor (objetos e valores primitivos) podem ser usados como chave ou valor.
*/
const tecnologias = new Map()
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react);
console.log(tecnologias.get('react').framework);

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
]);

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
})

console.log(chavesVariadas.has(123));  // Atributo set has -  verifica se determinado valor existe em um objeto (retorna true ou false)
chavesVariadas.delete(123) // Atributo set delete -  remove um valor especificado deste conjunto, se estiver no conjunto. 
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size) // Atributo set size - retorna o número de elementos deste conjunto

chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b');
chavesVariadas.set(456, 'b');
console.log(chavesVariadas);