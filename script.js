'use strict'
/*
console.log(document.querySelector('.msg').textContent);

document.querySelector('.msg').textContent = 'Correct Number!'
// console.log(document.querySelector('.msg').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message)
{
    document.querySelector('.msg').textContent = message;
}

document.querySelector('.check').addEventListener('click',function()
{
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    if(!guess)
    {
        // document.querySelector('.msg').textContent = 'No Number..!';
        displayMessage('No Number..!');
    }
    else if(guess === secretNumber)
    {
    //    document.querySelector('.msg').textContent='correct Number..!';
       displayMessage('Correct Number..!');
       document.querySelector('.number').textContent = secretNumber; 

       document.querySelector('body').style.backgroundColor = '#87fa91'; 

       document.querySelector('.number').style.width = '300px';

       if(score>highscore)
       {
        highscore = score;
        document.querySelector('.high').textContent = highscore;
       }
    }
    else if(guess !== secretNumber)
    {
        if(score>1)
        {
        // document.querySelector('.msg').textContent = guess > secretNumber ? 'Too High' : 'Too Low';
        displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
        score--
        document.querySelector('.score1').textContent = score;
        }
        else
        {
            // document.querySelector('.msg').textContent = 'You Lost the Game..!';
            displayMessage('You Lost the Game..!');
            document.querySelector('.score1').textContent = 0;
        }
    }
    // else if(guess > secretNumber)
    // {
    //     if(score>1)
    //     {
    //     document.querySelector('.msg').textContent = 'Too High';
    //     score--
    //     document.querySelector('.score1').textContent = score;
    //     }
    //     else
    //     {
    //         document.querySelector('.msg').textContent = 'You Lost the Game..!'
    //         document.querySelector('.score1').textContent = 0;
    //     }
    // }
    // else if(guess < secretNumber)
    // {
    //     if(score>1)
    //     {
    //     document.querySelector('.msg').textContent = 'Too Low';
    //     score--
    //     document.querySelector('.score1').textContent = score;
    //     }
    //     else
    //     {
    //         document.querySelector('.msg').textContent = 'You Lost the Game..!'
    //         document.querySelector('.score1').textContent = 0;
    //     }
    // }
});

document.querySelector('.btn').addEventListener('click',function()
{
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    // document.querySelector('.msg').textContent = 'start Guessing...';
    displayMessage('Start Guessing...');
    document.querySelector('.score1').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#87cefa'; 

    document.querySelector('.number').style.width = '150px';
});