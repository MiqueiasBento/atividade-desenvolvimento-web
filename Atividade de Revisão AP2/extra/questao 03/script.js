function func1() {
    const img1 = document.getElementById("img_1");
    img1.remove(); // Remove completamente do DOM
}
  
function func2() {
    document.getElementById("img_2").style.visibility = "hidden";
    document.getElementById("img_3").style.visibility = "hidden";
}

function func3() {
    // Recria img_1 se ela tiver sido removida
    if (!document.getElementById("img_1")) {
        const novaImg1 = document.createElement("img");
        novaImg1.id = "img_1";
        novaImg1.src = "algumaImagem1.jpg"; // Coloque a imagem certa aqui
        document.body.appendChild(novaImg1); // Ou adicione no local exato da tabela
    }

    // Torna img_2 e img_3 visíveis novamente
    document.getElementById("img_2").style.visibility = "visible";
    document.getElementById("img_3").style.visibility = "visible";
}
