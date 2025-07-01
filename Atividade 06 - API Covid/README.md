# API Covid
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  
## Descrição

Esta atividade consiste em consumir a API pública [Covid19 Brazil API](https://covid19-brazil-api-docs.vercel.app/) para exibir informações sobre casos de Covid-19 em estados brasileiros e em países do mundo, utilizando apenas HTML, CSS e JavaScript.

## Arquivos

- **estados.html**: Exibe uma tabela com todos os estados brasileiros, mostrando:
  - Nome do Estado
  - Abreviação
  - Número de Casos
  - Número de Suspeitos
  - Número de Falecimentos
  - No final da tabela, são exibidas as médias de cada coluna numérica.
  - As linhas dos estados com número de falecimentos acima da média são destacadas em vermelho claro.
  - Abaixo da tabela, é exibido o estado com maior e menor relação Casos/Falecimentos.

- **paises.html**: Exibe uma tabela com todos os países disponíveis na API, mostrando:
  - Nome do País
  - Código
  - Número de Casos
  - Número de Suspeitos
  - Número de Falecimentos
  - No final da tabela, são exibidas as médias de cada coluna numérica.
  - A linha referente ao Brasil é destacada em verde.

- **styles/style-estados.css**: Arquivo de estilos CSS utilizado pelas páginas HTML.

## Como executar

1. **Baixe ou clone este repositório.**
2. **Abra os arquivos `estados.html` e `paises.html` em seu navegador.**
   - Não é necessário servidor, basta dar duplo clique no arquivo ou abrir via navegador.
3. **É necessário conexão com a internet** para que as páginas possam acessar a API e exibir os dados.

## Observações
- Os dados são carregados automaticamente ao abrir as páginas.
- Caso a API esteja fora do ar, os dados podem não ser exibidos corretamente.

---

Atividade desenvolvida para a disciplina de Desenvolvimento de Software Web - UFC.
  