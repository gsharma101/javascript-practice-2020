'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent = '🎉 Correct Number');

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1 //!random number
let score = 20;//!initial score

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //?when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = "⛔No Number";
    } else if (guess === secretNumber) {
        //*when player wins the game 
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";//!changing the css
        document.querySelector('.number').style.width = "30rem";//!changing the css
    } else if (guess > secretNumber) {//?when guess is too high
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High 📈';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😜You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {//?when guess is too low
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low 📉';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😜You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1 //!random number
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";//!changing to default css
    document.querySelector('.number').style.width = "15rem";//!changing to default css
});