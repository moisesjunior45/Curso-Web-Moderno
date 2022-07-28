const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop()   // pop - Remove o último elemento do array
console.log(pilotos);

pilotos.push('Verstappen')  // push -  Adiciona um elemento na última posição do array
console.log(pilotos);  

pilotos.shift();    // shift - Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton') // unshift - Adiciona um elemento na primeira posição do array
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3,1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
