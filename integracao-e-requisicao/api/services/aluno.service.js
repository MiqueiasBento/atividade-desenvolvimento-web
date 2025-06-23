const AlunoModel = require('../models/aluno.model');
const Aluno = require('../data/alunos');

class AlunoService {

    static getAll() {
        return Aluno;
    }
}

module.exports = AlunoService;