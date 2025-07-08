async function buscarProdutos() {
    try {
        const response = await fetch("http://localhost:3000/produtos");
        const dados = await response.json();

        const tabela = document.getElementById('tabela-produtos');
        tabela.innerHTML = '';
        
        dados.forEach(produto => {
            const linha = document.createElement('tr');
            linha.innerHTML = 
                `
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.preco}</td>
                <td>${produto.categoria}</td>
                <td>${produto.descricao}</td>
                <td>${produto.quantidade}</td>
                `;

            tabela.appendChild(linha);
        });
    } catch(error) {
        console.error('Erro ao carregar os dados: ' + error);
    }
}

buscarProdutos();
