/*Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.*/

let produtos = [
{nome:"teclado", preco: 200, desconto: 0 },
{nome:"mouse", preco: 100, desconto: 0 },
{nome:"headphone", preco: 300, desconto: 0 },
{nome:"monitor", preco: 1000, desconto: 0 },
{nome:"fonte", preco: 200, desconto: 0 },
]

produtos.forEach(produto => {
    let novoPreco = produto.preco * 0.90
    console.log(`Produto: ${produto.nome}, Preço Original: R$ ${produto.preco}, Novo Preço: R$ ${novoPreco.toFixed(2)}`);
}) 