const cores = [
  'red', 'blue', 'green', 'yellow',
  'purple', 'orange', 'pink', 'brown'
];
const cartas = [...cores, ...cores];

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

embaralhar(cartas);

const tabuleiro = document.getElementById('tabuleiro');
let primeiraCarta = null;
let segundaCarta = null;
let travado = false;
let pontos = 0;

function atualizarPontuacao() {
  document.getElementById('pontos').textContent = pontos;
}

function criarTabuleiro() {
  tabuleiro.innerHTML = '';
  cartas.forEach((cor, i) => {
    const carta = document.createElement('div');
    carta.className = 'carta';
    carta.dataset.cor = cor;
    carta.dataset.index = i;
    carta.addEventListener('click', clicarCarta);
    tabuleiro.appendChild(carta);
  });
}

function clicarCarta(e) {
  const carta = e.target;
  if (travado || carta.classList.contains('revelada') || carta === primeiraCarta) return;

  carta.style.background = carta.dataset.cor;
  carta.classList.add('revelada');

  if (!primeiraCarta) {
    primeiraCarta = carta;
  } else {
    segundaCarta = carta;
    travado = true;
    if (primeiraCarta.dataset.cor === segundaCarta.dataset.cor) {
      pontos++;
      atualizarPontuacao();
      setTimeout(() => {
        primeiraCarta.style.visibility = 'hidden';
        segundaCarta.style.visibility = 'hidden';
        resetar();
      }, 700);
    } else {
      setTimeout(() => {
        primeiraCarta.style.background = '';
        segundaCarta.style.background = '';
        primeiraCarta.classList.remove('revelada');
        segundaCarta.classList.remove('revelada');
        resetar();
      }, 900);
    }
  }
}

function resetar() {
  primeiraCarta = null;
  segundaCarta = null;
  travado = false;
}

criarTabuleiro();
atualizarPontuacao(); 