/*Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.*/

let pessoas = [
    {nome: "Alice", idade: 8, cidade:"São Paulo"},
    {nome: "Alisson", idade: 9, cidade:"São Paulo"},
    {nome: "Abraao", idade: 19, cidade:"São Paulo"},
    {nome: "Armando", idade: 18, cidade:"São Paulo"},
    {nome: "Amanda", idade: 28, cidade:"São Paulo"},
]

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
}