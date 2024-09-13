/*Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.*/

let livro = {
    titulo: "Variety",
    autor: "Colen Hoover",
    anoPublicacao: 2018,
    genero: "Romance",
    //editora: "Principis",

    toString: function() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}, Gênero: ${this.genero}, Editora: ${this.editora}`;
    }
}

let editora = false

for (let propriedade in livro) {
    if (propriedade === "editora"){
        editora = true
        break
    }
}

if (editora === false) {
    livro.editora = "Informar Editora"
}

console.log(livro.toString())