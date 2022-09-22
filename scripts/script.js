const pointerHour = document.querySelector("#hour");
const pointerMinute = document.querySelector("#minute");
const pointerSecond = document.querySelector("#second");

function executeClock() {
    var data = new Date();
    /* Buscando as horas, minutos e segundos atraves do metodo "get" */
    let hr = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    let timeInterval = 6;

    console.log(hr + " hora(as) " + min + " min. " + sec + " seg.");

    pointerSecond.style.transform = "rotate(" + sec * timeInterval + "deg)";
    pointerMinute.style.transform =
        "rotate(" + (min * timeInterval + sec / 10) + "deg)";
    pointerHour.style.transform = "rotate(" + (hr * 30 + min / 2) + "deg)";

    /** Convertendo graus em tempos */
    // let posHr = (hr * 360) / 12 + (min * (360 / 60)) / 12;
    // let posMin = (min * 360) / 60 + (sec * (360 / 60)) / 60;
    // let posSec = (sec * 360) / 60;

    // pointerHour.style.transform = "rotate(" + posHr + "deg)";
    // pointerMinute.style.transform = "rotate(" + posMin + "deg)";
    // pointerSecond.style.transform = "rotate(" + posSec + "deg)";
}

setInterval(executeClock, 1000);