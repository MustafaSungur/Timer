const time = document.querySelector(".time");
const btn_start = document.querySelector("#start");
const btn_stop = document.querySelector("#stop");
const btn_restart = document.querySelector("#restart");
let counter = 0;
let click = 0;
let timer;

btn_start.addEventListener("click", timeStart);
btn_stop.addEventListener("click", timeStop);
btn_restart.addEventListener("click", timeRestart);

function timeStart() {
  if (click == 0) {
    timer = setInterval(() => {
      counter++;
      time.textContent = `${counter}`;
    }, 1000);
  }
  click += 1;
  console.log(counter);
  console.log(click);
}

function timeStop() {
  clearInterval(timer);
  click = 0;
}

function timeRestart() {
  clearInterval(timer);
  counter = 0;
  click = 0;
  time.textContent = "0";
}
