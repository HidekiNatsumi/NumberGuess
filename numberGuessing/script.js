'use strict';

const displayMessage = function (message) {
  document.querySelection('.message').textContent = message;
};

let randomNr = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;

const handler = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess); //when no input given
  score = Number(document.querySelector('.score').textContent);
  if (!guess) {
    if (score > 1) {
        displayMessage('No number!')

  } else if (guess === randomNr) {
    //when player wins
    if (score > 0) {
      document.querySelector('.message').textContent = 'You are correct!';
      document.querySelector('body').style.backgroundColor = '#60b347'; //all css values are converted to strings so use ''
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = randomNr; // remove (//) to check the random number
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  } else if (guess !== randomNr) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > randomNr ? `Too High!` : `Too Low!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
};
  /*
  again function is used to reset all the values of the previous variables
  */
const again = function () {
  randomNr = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
};
document.querySelector('.check').addEventListener('click', handler);
document.querySelector('.again').addEventListener('click', again);
