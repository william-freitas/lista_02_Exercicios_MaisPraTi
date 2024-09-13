/*Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.*/

let estoque = [
    {produto:"teclado", quantidade: 5, minimo: 10},
    {produto:"mouse", quantidade: 15, minimo: 20},
    {produto:"headphone", quantidade: 6, minimo: 10},
    {produto:"monitor", quantidade: 2, minimo: 5},
    {produto:"fonte", quantidade: 5, minimo: 5},
]

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade = item.quantidade * 2
    }
})

console.log(estoque)