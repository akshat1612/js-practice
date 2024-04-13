"use strict";

const inputEl = document.querySelector(".guess");

const checkEl = document.querySelector(".check");
const scoreEl = document.querySelector(".score");
const numberEl = document.querySelector(".number");
const highscoreEl = document.querySelector(".highscore");
const messageEl = document.querySelector(".message");
const randomNumber = Math.trunc(Math.random() * 20) + 1;
let msg;
checkEl.addEventListener("click", () => {
  //Handle logic for scoring and checking here
  const answer = Number(inputEl.value);
  let currentScore = Number(scoreEl.textContent);
  console.log(currentScore, typeof randomNumber, randomNumber, answer);

  if (currentScore <= 1 && answer !== randomNumber) {
    msg = "💥 You lost the game!";
    currentScore = 0;
  } else if (answer < randomNumber) {
    currentScore--;
    msg = "Too Low !! 📉";
  } else if (answer > randomNumber) {
    currentScore--;
    msg = "Too high !! 📈";
  } else {
    if (Number(highscoreEl.textContent) < currentScore) {
      highscoreEl.textContent = currentScore;
    }
    msg = "🎉🥇 Correct Number!";
    numberEl.textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  scoreEl.textContent = currentScore;
  messageEl.textContent = msg;
});
