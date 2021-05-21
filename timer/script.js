const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

let pointInTime="";

function myFunction() {
  var txt;
  var pointInTime = prompt("Please a date:", "Day Mon Year");
  if (pointInTime == null || pointInTime == "") {
    txt = "User cancelled data entry.";
  } else {
    txt = pointInTime;
  }
  document.getElementById("demo").innerHTML = txt;
}

function countdown() {
    var newDate = new Date(document.getElementById("demo").innerHTML);
    const currentDate = new Date();

    const totalSeconds = (newDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
