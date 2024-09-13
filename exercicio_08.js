/*Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.*/

let filmes = [
    {titulo:"Titanic", diretor:"James Cameron", anoLancamento:1997},
    {titulo:"Interestelar", diretor:"Christopher Nolan", anoLancamento:2014},
    {titulo:"John Wick", diretor:"Chad Stahelski", anoLancamento:2017},
    {titulo:"Batman", diretor:"Christopher Nolan", anoLancamento:2012},
    {titulo:"Openheimer", diretor:"Christopher Nolan", anoLancamento:2023},
]

let soTitulos = []

filmes.forEach(filme => {
    soTitulos.push(filme.titulo)
})

console.log(soTitulos)