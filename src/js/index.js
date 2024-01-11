const loopVerify = setInterval(verify,10)
const mario = document.getElementById("mario");
const pipe =  document.getElementById("pipe");

function jump(event) {
    const keyPress = event.code
    if (keyPress == "Space" || keyPress == "ArrowUp" || keyPress == "KeyW") {
        mario.classList.add("jump")
        setTimeout(() =>{
            mario.classList.remove("jump")
        },500)
    }
}

function verify() {
    const pipePos = pipe.offsetLeft
    const marioPos = +window.getComputedStyle(mario).bottom.replace("px","")
    if(pipePos <= 120 && pipePos > 0 && marioPos <= 80){
        pipe.style.animation = "none"
        pipe.style.left = `${pipePos}px`
        mario.style.animation = "none"
        mario.style.bottom = `${marioPos}px`
        mario.src = "./src/assets/game-over.png"
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"
        clearInterval(loopVerify)
    }
}

document.addEventListener("keydown", jump)