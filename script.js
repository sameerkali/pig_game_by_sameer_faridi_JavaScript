'use strict';


// This code is hard coded by Sameer Faridi, none of the lines are copied, but the html and css part of this project is taken from jason.io.

const playerName0 = document.querySelector('#name--0');
const playerName1 = document.querySelector('#name--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScoreEl = document.querySelector('.current-score');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');


const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    // for example
    // const patronAge = 18;
    // let canDrink = false;
    // canDrink = (patronAge <= 21 ? true : false);
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

let scores,activePlayer,currentScore,playing;

const init = function(){

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true; 

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden'); 
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    document.querySelector('body').style.backgroundImage = ('linear-gradient(to top left,#753682 0%,#bf2e34 100%)');
}
init();

btnRoll.addEventListener('click', function () {
    if(playing){
        
        
        diceEl.classList.remove('hidden');
        
        const dice = Math.trunc(Math.random() * 6) + 1;  // if we Math.random()*7  --- it will inclde zero (0) in random numbers BUT 6+1 is not including zero
        console.log(dice)
        
        diceEl.src = `dice-${dice}.png`
        
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            
            
        }
        else {
            switchPlayer();
        }
    }
})



btnHold.addEventListener('click', function () {
    if (playing) {

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 10) {
        diceEl.classList.toggle('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing = false;
    }
    else{
        switchPlayer();
    }
}
});



btnNew.addEventListener('click',init);  //if we use init() insted of init  that will not call the function  because event/javaScript call the init function . If we call init() <----- the function call double and that is error in javaScript







document.querySelector('.btn--theam').addEventListener('click',function(){
    document.querySelector('body').style.backgroundImage =' url("https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg")';
  })
  // additional added