var express = require('express');
var router = express.Router();

const ProdutoService = require('../services/produto.service');
const { request } = require('../app');

router.post (
    '/produtos',
    (request, response) => {
        const produto = request.body;

        ProdutoService.criar(produto)
        response.status(201).json(produto);
    }
)

router.get(
    '/produtos',
    (request, response) => {
        response.json(ProdutoService.listar());
    }
)

router.get(
    '/produtos/:id',
    (request, response) => {
        const id = parseInt(request.params.id);
        const produto = ProdutoService.buscarPorId(id);

        if (!produto) {
            return response.status(404).json({ message: 'Produto não encontrado' });
        }

        response.json(produto);
    }
)

module.exports = router;