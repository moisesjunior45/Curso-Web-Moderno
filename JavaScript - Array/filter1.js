const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IPAD Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil:true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const fragil = produto => produto.fragil === true;
const caro = produto => produto.preco >= 500;

console.log(produtos.filter(caro).filter(fragil));