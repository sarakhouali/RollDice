const score0El = document.getElementById("score_0");
const score1El = document.getElementById("score_1");

const diceEl = document.querySelector(".dice");

const current0El = document.getElementById("current_0");
const current1El = document.getElementById("current_1");
// player
const player0El = document.querySelector(".player_0");
const player1El = document.querySelector(".player_1");

//btns
const btnRoll = document.getElementById("btn_roll");
const btnHold = document.getElementById("btn_hold");



score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// cleare score
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];


btnRoll.addEventListener('click', function(){
    diceEl.classList.remove("hidden");

//1. generate the random number
    const dice = Math.floor(Math.random() * 6) + 1;

//2. afficher random image
    diceEl.src = `./image/dice-${dice}.png`;

//3. check for rolled 1
    if (dice != 1) {
        //display the score
        currentScore += dice;
        //dynamic select of player
        document.getElementById(`current_${activePlayer}`).textContent = currentScore;

    } else {
        //switch the player if player have number 1
        document.getElementById(`current_${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore =0;
        player0El.classList.toggle("player_active");
        player1El.classList.toggle("player_active");

    }
});

//btn HOLD event
btnHold.addEventListener("click", function () {
    scores[activePlayer] += currentScore;
    console.log(scores);
    document.getElementById(`score_${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
        document.querySelector(`.player_${activePlayer}`).classList.add('player_winner');
        
    } else {
        
    }

});


























