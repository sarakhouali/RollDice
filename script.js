const score0El = document.getElementById("score_0");
const score1El = document.getElementById("score_1");
const diceEl = document.querySelector(".dice");
//current
const current0El = document.getElementById("current_0");
const current1El = document.getElementById("current_1");
// player
const player0El = document.querySelector(".player_0");
const player1El = document.querySelector(".player_1");

//btns
const btnRoll = document.getElementById("btn_roll");
const btnHold = document.getElementById("btn_hold");
const btnNew = document.getElementById("btn_new");

// cleare score
let scores, currentScore, activePlayer, playGame;
//achieved score
const achivedScore = document.getElementById("inputScore");
//initialize function
const initFunc = function() {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add("hidden");
    // cleare score
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    playGame = true;
    current0El.textContent = 0;
    current1El.textContent = 0;

    //new game init
    diceEl.classList.add('hidden');
    player0El.classList.remove('player_winner');
    player1El.classList.remove('player_winner');
    player0El.classList.add('player_active');
    player1El.classList.remove('player_active');

    achivedScore.value = 100;

};

initFunc();

//switch players
const switchPlayer = function(){
    //switch the player if player have number 1
    document.getElementById(`current_${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore =0;
    player0El.classList.toggle("player_active");
    player1El.classList.toggle("player_active");


};




btnRoll.addEventListener('click', function(){
    if(playGame){
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
            switchPlayer();

        }
    }
});

//btn HOLD event
btnHold.addEventListener('click', function () {
    if (playGame){
        scores[activePlayer] += currentScore;
        console.log(scores);
        document.getElementById(`score_${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= achivedScore.value) {
            playGame = false;
            document.querySelector(`.player_${activePlayer}`).classList.add('player_winner');
            document.querySelector(`.player_${activePlayer}`).classList.add('player_active');
            diceEl.classList.add("hidden");
            
        } else {
            //switch player
            switchPlayer();
            
        }
    }
});

//New Game
btnNew.addEventListener('click', initFunc);


























