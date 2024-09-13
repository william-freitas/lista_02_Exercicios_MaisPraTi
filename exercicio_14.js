/*Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence*/

let empresa = {
    departamentos: [
        {nome:"Limpeza", listaFuncionarios:["Alice", "Alisson", "Amanda"]},
        {nome:"Segurança", listaFuncionarios:["Abraao", "Anderson", "Agata"]},
        {nome:"TI", listaFuncionarios:["Armando", "Adriana", "Andrea"]},
        {nome:"Recursos Humanos", listaFuncionarios:["Alberto", "Abigail", "Alfredo"]},
        {nome:"Logistica", listaFuncionarios:["Ashley", "Alvaro", "Anselmo"]},
    ]
}

for (let index in empresa.departamentos) {
    let departamento = empresa.departamentos[index]
    
    for (let funcionario of departamento.listaFuncionarios) {
        console.log(`Funcionário: ${funcionario}, Departamento: ${departamento.nome}`)
    }
}