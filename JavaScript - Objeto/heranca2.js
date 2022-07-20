// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0';       // Não faça isso em casa!
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 'C' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); 

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing(Sombreamento) -  Variável local(dentro de uma função) pode "sombrear" variáveis de escopo mais abrangente
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`;     // super - é usada para acessar o objeto pai de um objeto, em outros casos, é usada para acessar a classe pai de uma classe.
    }
}

Object.setPrototypeOf(ferrari, carro);  //(Objeto,Protótipo)      // Função que estabelece uma relação de protótipo entre dois objetos
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo); 

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());