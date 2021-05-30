'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1')
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//!selecting elements
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//!starting condition
let currentScore, activePlayer, playing, scores;
const newGame = function () {
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scores = [0, 0];

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
//!calling newgame function in starting
newGame();
//!rolling dice
const rollDice = function () {
    if (playing) {
        //?1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        //? 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        //? 3. Check for rolled 1: if true, switch to nect player
        if (dice !== 1) {
            //add dice to current score
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            //?calling switchPlayer function to switch players
            switchPlayer();
        }
    }
}
//?switching the player
const switchPlayer = function () {
    if (playing) {
        diceEl.classList.add('hidden');
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
}

const holdScore = function () {
    if (playing) {
        //! 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //! 2. Check if player's score > 100
        if (scores[activePlayer] >= 10) {
            //Finish the game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        } else {
            //! 4. Switch to next play by adding the current score to total
            switchPlayer();
        }
    }
}
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', newGame);
