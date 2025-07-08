function gerarProdutos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 10);
            if (numero % 2 === 0) {
                resolve([
                    { id: 1, nome: "Mouse", tipo: "Periférico", preco: 60 },
                    { id: 2, nome: "Teclado", tipo: "Periférico", preco: 150 },
                    { id: 3, nome: "Monitor", tipo: "Vídeo", preco: 900 },
                    { id: 4, nome: "Notebook", tipo: "Computador", preco: 2800 },
                    { id: 5, nome: "HD", tipo: "Armazenamento", preco: 300 },
                    { id: 6, nome: "SSD", tipo: "Armazenamento", preco: 450 },
                    { id: 7, nome: "Pendrive", tipo: "Armazenamento", preco: 70 },
                    { id: 8, nome: "Fonte", tipo: "Energia", preco: 250 },
                    { id: 9, nome: "Placa Mãe", tipo: "Hardware", preco: 1200 },
                    { id: 10, nome: "Webcam", tipo: "Vídeo", preco: 220 }
                ]);
            } else {
                reject({ msg: 'Erro ao carregar os dados' });
            }
        }, 4000);
    });
}

// Parte 2: Criar tabela
// Crie elementos <table>, <tr>, <td> com JS
// Calcule a média dos preços
// Compare preços para saber quais destacar
// Use style.backgroundColor ou classList.add("destaque")

async function carregarTabela() {
    try {
        const dados = await gerarProdutos();

        // Calcular a média dos preços
        const precos = dados.map(produto => produto.preco);
        const media = precos.reduce((acc, preco) => acc + preco, 0) / precos.length;

        const mediaElement = document.getElementById('media-precos');
        mediaElement.textContent = `Media dos precos: ${media.toFixed(2)}`;

        // Inserir dados na tabela e formatar as linhas especificas
        const tabela = document.getElementById('tabela-produtos');
        tabela.innerHTML = '';
        dados.forEach(produto => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.tipo}</td>
                <td>${produto.preco}</td>
            `;

            // Destacar produtos acima da média
            if (produto.preco > media) {
                linha.style.backgroundColor = 'lightgreen';
            }

            tabela.appendChild(linha);
        });
    } catch (erro) {
        console.error('Erro ao carregar os dados: ' + erro);
        document.body.innerHTML = 
            `
            <p>${erro.msg}</p>
            `;
    }
}

carregarTabela();
