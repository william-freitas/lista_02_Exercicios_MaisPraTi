/*Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.*/

let alunos = [
    {nome:"Alice", nota1: 8, nota2: 8},
    {nome:"Alisson", nota1: 6, nota2: 6},
    {nome:"Abraao", nota1: 5, nota2: 8},
    {nome:"Armando", nota1: 8, nota2: 9},
    {nome:"Amanda", nota1: 10, nota2: 8},
]

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2
    console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`);
}
