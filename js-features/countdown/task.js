let textElement = document.getElementById("timer");

function timer(){
    textElement.textContent -= 1;
}


let timerId = setInterval(timer, 1000);

function clearTimer(){
    clearInterval(timerId)
    alert("Вы победили в конкурсе!")
}

setTimeout(clearTimer, textElement.textContent * 1000)