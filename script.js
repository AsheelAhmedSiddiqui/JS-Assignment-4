"use strict";
// Task no: 04
let guessNumber = Math.floor(Math.random() * 10) + 1;
console.log(guessNumber);
let userInput = Number(
  prompt(
    "Enter a number to check computer number is equal to your number (1 to 10)"
  )
);
if (userInput === guessNumber) {
  document.write("Good Work " + guessNumber);
} else {
  document.write("Not Matched");
}