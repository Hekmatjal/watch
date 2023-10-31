

const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');
const ampmEl = document.getElementById('ampm');


function updateClock() {

    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    var d = new Date();

    d.getFullYear()

    let ampmEl = "Am";


    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;


    if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";

    }

    hourEl.innerText = hour;
    minuteEl.innerText = minute;
    secondEl.innerText = second;
    ampmEl, (innerText = ampm);

    setTimeout(() => {

        updateClock();
    }, 1000);
}


updateClock()