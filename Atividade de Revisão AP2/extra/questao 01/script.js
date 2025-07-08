function verificar_produto(nomeDoProduto) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (nomeDoProduto === "celular") {
          resolve({
            produto: "celular",
            status: "disponível"
          });
        } else {
          reject({
            produto: nomeDoProduto,
            status: "indisponível"
          });
        }
      }, 2000); // espera 2 segundos
    });
}
  
// Consumo da Promise
verificar_produto("celular")
.then(resultado => {
    console.log(`Produto: ${resultado.produto}`);
    console.log(`Status: ${resultado.status}`);
})
.catch(erro => {
    console.log(`Produto: ${erro.produto}`);
    console.log(`Status: ${erro.status}`);
});
  