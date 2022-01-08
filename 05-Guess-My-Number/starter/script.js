'use strict';


// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = "Correct Number 🤞"
// document.querySelector('.guess').value = 20



let check = document.querySelector('.check');
let again = document.querySelector('.again');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;
check.addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    
    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = "🎃 No number!"; 

        // When the player wins
    }else if(guess === secretNumber) {
        document.querySelector('.message').textContent = "🤞 Correct Number";
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        //Saving the highscore
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent= highscore;
        }

    //    When a player guess is higher
    }else if (guess > secretNumber) {
        document.querySelector('body').style.backgroundColor = '#222';
        if (score > 1) {
            document.querySelector('.message').textContent = "🤞 Is too high";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "Game over!!!";
            score = 0;
            document.querySelector('.score').textContent = score;
        }
        //    When a player guess is lower
    }else if (guess < secretNumber) {
        document.querySelector('body').style.backgroundColor = '#222';
        if (score > 1) {
            document.querySelector('.message').textContent = "🤞 Is too low";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "Game over!!!";
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }
})

//This is to restart the game 
again.addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    // console.log(score);
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    // location.reload();
    
})

