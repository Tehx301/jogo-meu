console.log("O script está rodando!");

const player1 = document.getElementById('player-1');
const player2 = document.getElementById('player-2');
const agachado = document.getElementById('animacao-1');

let X = 200;
let Y = 350;
let velocidade = 5;
let direcao = 1;


const teclas = {};


document.addEventListener("keydown", (e) => {
    if (e.key) {
        teclas[e.key.toLowerCase()] = true;
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key) {
        teclas[e.key.toLowerCase()] = false;
    }
});

function movimentacao() {

    if (teclas["d"]) {
        X += velocidade;
        direcao = 1;
    }

    if (teclas["a"]) {
        X -= velocidade;
        direcao = -1
    }

    if (teclas["a"] && teclas["s"]) {
        player1.style.display = "none";
        player2.style.display = "none";
        agachado.style.display = "block"
    } else {
        player2.style.display = "none";
        player1.style.display = "block";
        agachado.style.display = "none"
    }

    if (teclas["s"]) {
        player1.style.display = "none";
        player2.style.display = "block";
    } else {
        player1.style.display = "block";
        player2.style.display = "none";
    }

    player1.style.left = X + "px";
    player1.style.top = Y + "px";

    player2.style.left = X + "px";
    player2.style.top = Y + "px";

    player1.style.transform = `scaleX(${direcao})`;
    player2.style.transform = `scaleX(${direcao})`;
    requestAnimationFrame(movimentacao);
}

movimentacao();
