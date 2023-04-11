"use strict";

window.addEventListener("load", start);


const array = [
  8, 12, 32, 4, 13, 24, 23, 22, 1, 0, 30, 7, 3, 6, 3, 19, 24, 29, 14, 16, 3, 1,
  9, 8, 30, 12, 0, 30, 7, 3, 6, 3, 19, 24, 29, 14, 4, 1, 18, 1,
];

function start() {
  modifyStyle();

    document.querySelector(".bar").addEventListener("animationiteration", repeat);

}

function repeat() {
    modifyArray()
    modifyStyle()
}

function getNumberOfCustomers() {
  // FAKE: gives a completely random number
  return Math.floor(Math.random() * 32);
}

function modifyStyle() {
  for (let i = 0; i < array.length; i++) {
    const size = array[i];
    const bar = document.querySelectorAll(".bar")[i];

    bar.style.height = size + "vh";
  }
}

function modifyArray() {
  // add new value to array
  array.push(getNumberOfCustomers());
  // remove first value of array
  array.shift();
}

