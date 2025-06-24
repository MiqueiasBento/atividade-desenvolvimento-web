var express = require('express');   // inicializada com uma chamada da biblioteca express
var router = express.Router();      // cria uma instância do roteador express

const AlunoService = require('../services/aluno.service');
const { request } = require('../app');

router.get(
    "/alunos",
    (request, response) => {
        response.json(AlunoService.getAll()); // chama o método getAll do serviço AlunoService e retorna os dados como JSON
    }
)

router.get(
    "/alunos/:id",
    (request, response) => {
        const Aluno = AlunoService.getById(request.params.id); // chama o método recuperar do serviço
        response.json(Aluno); // retorna o Aluno encontrado como JSON
        
        if (!Aluno) {
            response.status(404).json({ message: "Aluno não encontrado" }); // se não encontrar, retorna 404
        }
        response.status(200).json(Aluno); // se encontrar, retorna 200
    }
)

router.post(
    "/alunos",
    (request, response) => {
        const novoAluno = request.body;
        const alunoCriado = AlunoService.create(novoAluno);     // criar um novo aluno
        response.status(201).json(alunoCriado);                 // retorna o aluno criado com status 201
    }
)

module.exports = router;