/*Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.*/

let vendas = [
    {produto:"teclado", quantidade: 10, valor: 200},
    {produto:"mouse", quantidade: 16, valor: 100},
    {produto:"headphone", quantidade: 4, valor: 300},
    {produto:"monitor", quantidade: 5, valor: 1000},
    {produto:"fonte", quantidade: 1, valor: 200},
]

let soma = 0
vendas.forEach(item => {
    soma += item.quantidade * item.valor
})

console.log("O valor total de vendas foi de: R$ "+ soma.toFixed(2))