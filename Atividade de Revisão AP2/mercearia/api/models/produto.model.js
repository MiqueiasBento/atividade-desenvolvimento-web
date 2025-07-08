class ProdutoModel {
    constructor(id, nome, preco, categoria, descricao, quantidade) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.descricao = descricao;
        this.quantidade = quantidade;
    }
}

module.exports = ProdutoModel;
