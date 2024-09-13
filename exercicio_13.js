/*Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.*/

let carrinho = {
    itens : [
        {nome:"teclado", quantidade: 2, precoUnitario: 200},
        {nome:"mouse", quantidade: 5, precoUnitario: 100},
        {nome:"headphone", quantidade: 3, precoUnitario: 300},
        {nome:"monitor", quantidade: 1, precoUnitario: 1000},
        {nome:"fonte", quantidade: 1, precoUnitario: 200},
    ]
}

let total = 0

carrinho.itens.forEach( item => {
    total += item.quantidade * item.precoUnitario
})

console.log("O valor total do carrinho é: R$ "+ total.toFixed(2))