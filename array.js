"use script";

window.addEventListener("load", start);

let count = 0;
const liste = [];

function start() {
  setInterval(countUp, 1000);
}

function countUp() {
  liste.unshift(count);
    count++;
  console.log(liste);

  if ((liste.length === 9)) {
    liste.pop();
  }
}


