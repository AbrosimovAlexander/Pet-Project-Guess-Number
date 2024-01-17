"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/


const number = document.querySelector(".number");
const guessNumber = document.querySelector(".guess");
const message = document.querySelector(".message");
let randomNubmer = getRandomIntInclusive(0, 20);
const buttonCheck = document.querySelector(".btnCheck");
const body = document.querySelector("body");
const buttonAgain = document.querySelector(".btnAgain");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let maxNumber = 20;


buttonCheck.addEventListener('click', function(){
  let count = score.textContent;
  score.textContent = parseInt(count) - 1;
  if (guessNumber.value == randomNubmer){
    let recordScore = maxNumber - score.textContent;
    if(highscore.textContent >= recordScore){
      highscore.textContent = recordScore
    } else{
      highscore.textContent = highscore.textContent;
    }
    number.textContent = randomNubmer;
    message.textContent = "Вы угадали!";
    body.style.cssText = `
      background: green;
    `
  }else if(guessNumber.value < randomNubmer){
    message.innerHTML = "Слишком мало(";
  }else if(guessNumber.value > randomNubmer){
    message.innerHTML = "Слишком много(";
  }else if(guessNumber.value != number){
    message.innerHTML = "Нужно вводить только числа!!!";
  }
})

buttonAgain.addEventListener('click', function(){
  number.textContent = "?";
  guessNumber.value = "";
  message.textContent = "Начните угадывать...";
  body.style.cssText = `
  radial-gradient(
    circle,
    rgba(35, 34, 41, 1) 51%,
    rgba(56, 59, 60, 1) 100%
  );
    `
  randomNubmer = getRandomIntInclusive(0, 20);
  score.textContent = 20;
  
})

console.log(randomNubmer);



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function counter(event){
//   event.preventDefault();
//   let count = score.textContent;
//   score.textContent = parseInt(count) - 1;
// }

function counterHighScore(event){
  event.preventDefault();
  let countHighScore = highscore.textContent;
  highscore.textContent = parseInt(countHighScore) + 1;
}

