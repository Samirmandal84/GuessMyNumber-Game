'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
//clicking check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //   document.querySelector('.message').textContent = '⛔️ No Number';
    displayMessage('⛔️ No Number');
    //When Player Wins
  } else if (guess === secretNumber) {
    //   document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';

      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;

      // document.querySelector('.score').textContent = score;
      displayScore(score);

      // When Player Lose
    } else {
      // document.querySelector('.message').textContent = 'You Lost the Game💥';
      displayMessage('You Lost the Game💥');

      //   document.querySelector(
      //     '.number'
      //   ).textContent = `${secretNumber} is the Correct Number`;
      displayNumber(`${secretNumber} is the Correct Number`);

      document.querySelector('.number').style.width = '50rem';
      document.querySelector('.number').style.fontSize = '2.5rem';

      //document.querySelector('.score').textContent = 0;
      displayScore(0);

      document.querySelector('body').style.backgroundColor = '#ce1d1d';
    }
  }
});

//Reseting the game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  // document.querySelector('.score').textContent = score;
  displayScore(score);

  document.querySelector('body').style.backgroundColor = '#222';

  // document.querySelector('.number').textContent = '?';
  displayNumber('?');

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
