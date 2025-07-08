# Mercearia - Sistema de Cadastro e Consulta de Produtos
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  
Este repositório contém uma aplicação web simples para cadastro e consulta de produtos de uma mercearia, composta por uma API REST desenvolvida em Node.js/Express e uma interface web em HTML, CSS e JavaScript.

## Funcionalidades

- Listagem de todos os produtos cadastrados
- Cadastro de novos produtos
- Consulta de produto por ID
- Exibição da média de preços dos produtos
- Interface web para visualização e cadastro

## Estrutura do Projeto

- `api/`: Backend em Node.js/Express, responsável por fornecer a API REST para manipulação dos produtos.
  - Os produtos são armazenados em memória (arquivo JS), com atributos: id, nome, preço, categoria, descrição e quantidade.
  - Rotas principais:
    - `GET /produtos`: Lista todos os produtos
    - `GET /produtos/:id`: Busca produto por ID
    - `POST /produtos`: Cadastra um novo produto
- `interface/`: Frontend simples em HTML, CSS e JS, que consome a API para exibir e cadastrar produtos.
  - Exibe todos os produtos em uma tabela
  - Permite cadastrar novos produtos via formulário
  - Mostra a média de preços dos produtos

## Como executar

1. Instale as dependências na pasta `api/`:
   ```bash
   cd api
   npm install
   ```
2. Inicie o servidor backend:
   ```bash
   npm start
   ```
3. Abra o arquivo `interface/index.html` em seu navegador para acessar a interface web.

## Observações
- A API utiliza CORS para permitir requisições da interface web.
- Os dados dos produtos são voláteis (armazenados em memória, não em banco de dados).
- O backend roda por padrão em `http://localhost:3000`.
