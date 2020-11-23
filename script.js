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
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'To high try again';
    score--
    document.querySelector('.score').textContent = score
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'To low try again';
    score--
    document.querySelector('.score').textContent = score
  }
});
