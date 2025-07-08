async function buscarProdutos() {
    try {
        const response = await fetch("http://localhost:3000/produtos");
        const dados = await response.json();

        let media = 0;
        dados.forEach(produto => {
            media += produto.preco;
        });
        media /= dados.length;

        const mediaElement = document.getElementById('media-produtos');
        mediaElement.textContent = `Media do preço dos produtos: R$ ${media.toFixed(2)}`;

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

            if(produto.preco > media) {
                linha.style.backgroundColor = 'lightcoral';
            }

            tabela.appendChild(linha);
        });
    } catch(error) {
        console.error('Erro ao carregar os dados: ' + error);
    }
}

buscarProdutos();

document.getElementById('cadastro-produtos').addEventListener('submit', async function (event) {
    event.preventDefault();

    const form = event.target;
    const produto = {
        nome: form.nome.value,
        descricao: form.descricao.value,
        categoria: form.preco.value,
        preco: parseFloat(form.preco.value),
        quantidade: form.quantidade.value
    }

    try {
        const response = await fetch("http://localhost:3000/produtos", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(produto)
        });

        const data = await response.json();

        if(response.ok) {
            document.getElementById('resposta').textContent = 'Produto cadastrado com sucesso';
            document.getElementById('resposta').style.color = 'green';
            form.reset();
            buscarProdutos();
        }
    } catch(error) {
        console.error(error);
        document.getElementById('resposta').textContent = 'Erro ao cadastrar produto: ' + error;
        document.getElementById('resposta').style.color = 'red';
    }
});