/*Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.*/

let clientes = [
    {nome:"Alice", idade: 32, cidade:"São Paulo"},
    {nome: "Armando", idade: 18, cidade:"São Paulo"},
    {nome: "Abraao", idade: 19, cidade:"São Paulo"},
    {nome: "Armando", idade: 18, cidade:"São Paulo"},
    {nome:"Amanda", idade: 35, cidade:"São Paulo"},
]

let contador = 0

clientes.forEach(cliente => {
    if (cliente.idade >= 30) {
        contador++
    }
})

console.log(`${contador} clientes tem mais de 30 anos`)