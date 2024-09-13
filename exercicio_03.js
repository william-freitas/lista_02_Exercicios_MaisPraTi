/*Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.*/

let produto = {
    nome: "Computador",
    preco: 1500,
    avaliacao: 4,
    garantia: 12,
    desconto: 5,
    vendidos: 20,
    estoque: 10,
}

let valor = 10

let resultado = (produto, valor) => {
    let novoProduto = {}
    for (let propriedade in produto) {
        if (produto[propriedade] >= valor) {
            novoProduto[propriedade] = produto[propriedade]
        }
    }

    return novoProduto
}

console.log(resultado(produto, valor))



