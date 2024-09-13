/*Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.*/

let funcionarios = [
    {nome: "Alice", cargo: "Gerente", salario: 4000},
    {nome: "Alisson", cargo: "Atendente", salario: 2000},
    {nome: "Abraao", cargo: "Presidente", salario: 10000},
    {nome: "Armando", cargo: "Conferente", salario: 2000},
    {nome: "Amanda", cargo: "Dirigente", salario: 5000},
]

let valorSalario = 2000

for (let funcionario of funcionarios) {
    if (funcionario.salario >= valorSalario) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$ ${funcionario.salario}`);
    }
}

