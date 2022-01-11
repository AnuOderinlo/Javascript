'use strict';

//Selecting Elements
const totalScore1 = document.querySelector('#score--0');
const totalScore2 = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
// Selecting buttons
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');
//selecting the players element
const players = document.querySelectorAll('.player');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let playing, score, totalScore, activePlayer;



// Function to initials all values
const initialValues = function () {
  score = 0;
  totalScore = [0, 0];
  playing = true;
  diceEl.classList.add('hidden');
  totalScore1.textContent = 0;
  totalScore2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  player1.classList.add('player--active');
  document
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
    
  activePlayer = 0;
  
}

initialValues();

// Function to switch players
const switchPlayer = function () {
  /*
    1. change the background
    2. current score to be zero
    3. current score to be added to Total score.
  */

  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
  score = 0;
};

//Function for the winner
const winner = function () {
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  playing = false;
  diceEl.classList.add('hidden');
};

//This button is for rolling of dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Get the dice
    let dice = Math.trunc(Math.random() * 6) + 1;
    //Display the dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    // Add the dice number to current score and display it
    if (dice !== 1) {
      score += dice;
      document.querySelector(`#current--${activePlayer}`).textContent = score;
      } else {
        switchPlayer();
      }
    }
    
    
  });
  
//This button is to hold the current score
btnHold.addEventListener('click', function () {
    if (playing) {
      totalScore[activePlayer] += score;
      document.querySelector(`#score--${activePlayer}`).textContent =
        totalScore[activePlayer];
      if (totalScore[activePlayer] >= 20) {
        winner();
      } else {
        switchPlayer();
      }
    }
    

    // console.log(totalScore);
});

//This button is to restart the game
btnNewGame.addEventListener('click', initialValues);