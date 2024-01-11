const superMarioAud = new Audio("https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/MÚSICA TEMA DO SUPER MARIO WORLD.mp3?v=1662587661787")
const btnAutoReplay = document.getElementById("btnRestart");
const btnHit = document.getElementById("btnHit");
const marioHit = document.querySelector(".mario").style;
const pipeHit = document.querySelector(".pipe").style;
const pipePlantHit = document.querySelector(".pipe-plant").style;
const cuboHit = document.querySelector(".cubo").style;
const telaWidth = screen.availWidth;
const telaHeight = screen.availHeight;
const labelTela = document.getElementById("labelTela");
const body = document.querySelector("body");
const gameBoard = document.querySelector(".game-board");
const Labelconfigs = document.getElementById("configsM");
const runTime = document.getElementById("runTime");
const ReplayURL = "https://pingobras-mario-jump.glitch.me/"
let autoReplay = "não";
var second = 0;
var minutes = 0;
var gameStatus = "off"
var timeGame = setInterval(CalctimeGame, 1000)

function restart() {
    autoReplay = "sim";
    btnAutoReplay.disabled = true;
}

function HitBox() {
    cuboHit.border = "2px solid black";
    pipeHit.border = "2px solid black";
    pipePlantHit.border = "2px solid black";
    marioHit.border = "2px solid black";
    btnHit.disabled = true;
}

function CalctimeGame() {
    if (second > 60) {
        second = 0
        minutes = minutes + 1
    }
    second = second + 1
    runTime.innerHTML = minutes + ":" + second
    console.log("Tempo de Jogo: " + minutes + ":" + second)
}


function Reload() {
    if (autoReplay == "sim") { window.location.href = ReplayURL; }
}

gameBoard.style.display = "none"
labelTela.innerHTML = "largura: " + telaWidth + "X " + "altura: " + telaHeight;
function playGame() {
    if (telaWidth <= 650) {
        alert("A tela do usuario e de: " + telaWidth + "pixeis sendo muito curta! O jogo Tem Suporte apenas para computadores!");
        body.style.display = "none"
        window.location.href = "https://pingobras-projeto-mario-dev-em-dobro.glitch.me/"

    } else {
        //start game
        gameStatus = "on"
        superMarioAud.play()
        superMarioAud.volume = 0.1
        superMarioAud.loop = true
        gameBoard.style.display = "block"
        Labelconfigs.style.display = "none"
    }
}
