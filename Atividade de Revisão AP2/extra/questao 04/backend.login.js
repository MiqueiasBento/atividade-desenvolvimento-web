// Simulando um pequeno "banco de dados"
const usuarios = [
    { user_name: "ana", user_password: "123", nome: "Ana Souza" },
    { user_name: "carlos", user_password: "abc", nome: "Carlos Silva" },
    { user_name: "beatriz", user_password: "xyz", nome: "Beatriz Lima" }
];

router.post(
    "/login",
    (req, res) => {
        // Extrai os dados do corpo da requisição
        const { user_name, user_password } = req.body;

        // Chama o método de login da classe UsuarioService
        const resultado = UsuarioService.login({ user_name, user_password });

        // Retorna a resposta ao cliente
        res.json(resultado);
    }
)

// Classe com serviço de usuário
class UsuarioService {
    // Método estático de login
    static login({ user_name, user_password }) {
    // Procura o usuário no "banco"
    const usuarioEncontrado = usuarios.find(usuario =>
        usuario.user_name === user_name &&
        usuario.user_password === user_password
    );

    // Se encontrado, retorna os dados
    if (usuarioEncontrado) {
        return {
        status: "sucesso",
        mensagem: "Login realizado com sucesso",
        usuario: {
            nome: usuarioEncontrado.nome,
            user_name: usuarioEncontrado.user_name
        }
        };
    }

    // Se não encontrar, retorna erro
    return {
        status: "erro",
        mensagem: "Usuário ou senha inválidos"
    };
    }
}
  