
let timer = document.getElementById('seconds')




let timeLeft = 10;
function countdown() {
    if (timeLeft === 0) {
        console.log("Tempo scaduto!");
    } else {
        timer.innerText = `${timeLeft}`;
        timeLeft--;
        setTimeout(countdown, 1000);
    }
}

countdown();
