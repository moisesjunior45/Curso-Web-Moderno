function criaProduto(nomeProduto, precoProduto) {
    return {
        nomeProduto,
        precoProduto,
        desconto: 0.1
    }
}

console.log(criaProduto('Notebook', 2199.49));
console.log(criaProduto('Celular', 1499.49));