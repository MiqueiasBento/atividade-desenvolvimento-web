const AlunoModel = require('../models/aluno.model');
const Aluno = require('../data/alunos');

class AlunoService {

    static getAll() {
        return Aluno;
    }

    static getById(id) {
        return Aluno.find(aluno => aluno.id === id);
    }

    static create(novoAluno) {
        // Verifica se o novo aluno já existe
        const alunoExistente = Aluno.find(aluno => aluno.id === novoAluno.id);
        if (alunoExistente) {
            throw new Error('Aluno já existe');
        }

        // Cria um novo aluno
        const alunoCriado = new AlunoModel(novoAluno.id, novoAluno.nome, novoAluno.email);
        Aluno.push(alunoCriado);
        return alunoCriado;
    }
    
    static update(id, alunoAtualizado) {
        const index = Aluno.findIndex(aluno => aluno.id === id);
        if (index === -1) {
            throw new Error('Aluno não encontrado');
        }

        Aluno[index] = { ...Aluno[index], ...alunoAtualizado };
        return Aluno[index];
    }

    static delete(id) {
        const index = Aluno.findIndex(aluno => aluno.id === id);
        if (index === -1) {
            throw new Error('Aluno não encontrado');
        }

        const alunoRemovido = Aluno.splice(index, 1);
        return alunoRemovido[0];
    }
}

module.exports = AlunoService;