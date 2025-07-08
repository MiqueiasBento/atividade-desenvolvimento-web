const ProdutoModel = require('../models/produto.model');
const Produtos = require('../data/produtos');

class ProdutoService {
    
    static listar() {
        return Produtos;
    }
    
    static buscarPorId(id) {
        return Produtos.find(produto => produto.id === id);
    }
    
    static criar(produto) {
        if (!produto.nome || !produto.preco || !produto.quantidade) {
            throw new Error('Dados inválidos para criar o produto');
        }

        // Verifica se o produto já existe
        const produtoExistente = Produtos.find(p => p.nome === produto.nome);
        if(produtoExistente) {
            throw new Error('Produto já existe');
        }

        const novoId = Produtos.length > 0 ? Produtos[Produtos.length - 1].id + 1 : 1;
        produto = new ProdutoModel(
            novoId, 
            produto.nome, 
            produto.preco,
            produto.categoria,
            produto.descricao,
            produto.quantidade
        );
        Produtos.push(produto)

        return produto;
    }
}

module.exports = ProdutoService;