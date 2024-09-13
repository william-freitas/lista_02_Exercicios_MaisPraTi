/*Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

let pedidos = [
    {cliente:"Alice", produto:"teclado", quantidade: 5}, 
    {cliente:"Alisson", produto:"mouse", quantidade: 10}, 
    {cliente:"Abraao", produto:"headphone", quantidade: 15}, 
    {cliente:"Armando", produto:"monitor", quantidade: 1}, 
    {cliente:"Amanda", produto:"fonte", quantidade: 5}, 
    // {cliente:"Amanda", produto:"mouse", quantidade: 5}, 
    // {cliente:"Amanda", produto:"teclado", quantidade: 5}, 
]

let totalPorCliente = {}

pedidos.forEach(pedido => {
    if (totalPorCliente[pedido.cliente]) {
        totalPorCliente[pedido.cliente] += pedido.quantidade; 
    } else {
        totalPorCliente[pedido.cliente] = pedido.quantidade; 
    }
})

console.log(totalPorCliente)