'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const INITIAL_SCORE = 20;
let score = INITIAL_SCORE; // This track the current game score

let highscore = 0;

// Display feedback messages such as hints, win, or lose messages
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Set or update the text content of a DOM element
const setText = (selector, text) => {
  document.querySelector(selector).textContent = text;
};

// Dynamically change the style of a DOM element
const setStyle = (selector, property, value) => {
  document.querySelector(selector).style[property] = value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    setText('.number', secretNumber);
    setStyle('body', 'backgroundColor', '#60b347');
    setStyle('.number', 'width', '30rem');

    //Update highscore if current score is greater than highscore and also update in ui
    if (score > highscore) {
      highscore = score;
      setText('.highscore', highscore);
    }
    //When guess if high or low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setText('.score', score);
    } else {
      displayMessage('💥 You lost the game!');
      setText('.score', 0);
    }
  }
});

// Player can play game again after win or lost game functionality
document.querySelector('.again').addEventListener('click', function () {
  // Reset the game logic state
  score = INITIAL_SCORE;
  // Reset hidden secrete number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset the user interface text, guess number to ?, input box, message, score ui text
  setText('.score', score);
  setText('.number', '?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  // Reset background colors and width 15rem
  setStyle('body', 'backgroundColor', '#222');
  setStyle('.number', 'width', '15rem');
});
