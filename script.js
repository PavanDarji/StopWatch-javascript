//  Start Button

let second = 0;
let tens = 0;

let buttonStart = document.querySelector('#button-start');
let appendSecond = document.querySelector('#second');
let appendTens = document.querySelector('#tens');

let interval;

buttonStart.onclick = () => {
    this.clearInterval(interval);
    interval = setInterval(startTimer, 10);

}

function startTimer() {
    tens++;
    if (tens > 99) {
        second++;
        appendSecond.innerHTML = '0' + second;
        tens = 0;
        appendTens.innerHTML = tens;

    }
    appendTens.innerHTML = tens;

    if (second > 9) {
        appendSecond.innerHTML = second;
    }
}


//  Stop Button


let buttonStop = document.querySelector('#button-stop');
buttonStop.onclick = () => {
    this.clearInterval(interval);
}


//  Reset Button


let buttonReset = document.querySelector('#button-reset');
buttonReset.onclick = () => {
    this.clearInterval(interval);
    tens = "00";
    second = "00";
    appendTens.innerHTML = tens;
    appendSecond.innerHTML = second;

}
