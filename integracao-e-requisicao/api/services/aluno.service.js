const AlunoModel = require('../models/aluno.model');
const Aluno = require('../data/alunos');

class AlunoService {

    static getAll() {
        return Aluno;
    }

    static getByNome(nome) {
        return Aluno.find(aluno => aluno.nome === nome);
    }

    static create(novoAluno) {
        // Verifica se o novo aluno já existe pelo nome
        const alunoExistente = Aluno.find(aluno => aluno.nome === novoAluno.nome);
        if (alunoExistente) {
            throw new Error('Aluno já existe');
        }

        // Cria um novo aluno
        const alunoCriado = new AlunoModel(novoAluno.nome, novoAluno.curso, novoAluno.ira);
        Aluno.push(alunoCriado);
        return alunoCriado;
    }
    
    static update(nome, alunoAtualizado) {
        const index = Aluno.findIndex(aluno => aluno.nome === nome);
        if (index === -1) {
            throw new Error('Aluno não encontrado');
        }

        Aluno[index] = { ...Aluno[index], ...alunoAtualizado };
        return Aluno[index];
    }

    static delete(nome) {
        const index = Aluno.findIndex(aluno => aluno.nome === nome);
        if (index === -1) {
            throw new Error('Aluno não encontrado');
        }

        const alunoRemovido = Aluno.splice(index, 1);
        return alunoRemovido[0];
    }
}

module.exports = AlunoService;