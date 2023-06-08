'use strict';
/*
document.querySelector('.message').textContent = '😜 Correct'; 
document.querySelector('.number').textContent = '13'; 
document.querySelector('.score').textContent = '10'; 
document.querySelector('.guess').value = 777;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

function restart() {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    //document.querySelector('.number').textContent = secretNumber;                  // For check the game
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
}

/*  For check the game  */
//document.querySelector('.number').textContent = secretNumber;

if(score == 0){
    document.querySelector('.message').textContent = 'You Lose!!, Press Again! to play again';
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    }
    else if(guess > secretNumber) {
        --score;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Too high!';
    }
    else if(guess < secretNumber) {
        --score;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Too low!';
    }
    else {
        document.querySelector('.message').textContent = 'Correct!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#16a020';
        if(score > highScore) 
            highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
    
    if(score == 0){
        alert('You Lose!!\nPress OK to play again');
        //document.querySelector('.message').textContent = 'You Lose!!, Press Again! to play again';
        restart();
        }
});

document.querySelector('.again').addEventListener('click', function(){restart()} );  

