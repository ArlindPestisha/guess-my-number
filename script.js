'use strict';
// Building the logic
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20
document.querySelector('.number').textContent = secretNumber;

// Adding eventlistner to the Check! button
document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  //Using the Number() method to convert the string to the number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Using if conditionals to check if it has a number as a first step
  // When the is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

// This is a logic for when the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347'
    
    document.querySelector('.number').style.width = '30rem'
// This is for when the guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 To high try again';
    score--
    document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '🧨 You lost the game!';
      score--
      document.querySelector('.score').textContent = 0
    }
// This is when the guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 To low try again';
      score--
      document.querySelector('.score').textContent = score

    } else {
      document.querySelector('.message').textContent = '🧨 You lost the game!';
      score--
      document.querySelector('.score').textContent = 0
    }
    
    
  }
});
