# Integração e Requisição
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)  

## Descrição
Esta atividade consiste em um sistema simples de cadastro, listagem, atualização e deleção de alunos, utilizando integração entre uma API Node.js (Express) e uma interface web (HTML, CSS e JS).

## Funcionalidades
- Listar alunos cadastrados
- Cadastrar novo aluno
- Atualizar dados de um aluno existente
- Deletar aluno pelo nome

## Como rodar o projeto
1. **Instale as dependências** na pasta da API:
   ```bash
   npm install
   ```
2. **Inicie o servidor** da API:
   ```bash
   npm run start dev
   ```
3. **Abra a interface**: basta abrir o arquivo `interface/index.html` no navegador.

## Estrutura
- `api/` - Código da API Node.js (Express)
- `interface/` - Páginas HTML, CSS e JS da interface web
- `images/` - Ícones usados na interface

## Observações
- A comunicação entre interface e API é feita via requisições HTTP (fetch).
- O campo identificador dos alunos é o nome. 