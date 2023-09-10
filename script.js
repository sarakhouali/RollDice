const score0El = document.getElementById("score_0");
const score1El = document.getElementById("score_1");

const diceEl = document.querySelector(".dice");

// const current0El = document.getElementById("current_0");
// const current1El = document.getElementById("current_1");
//btns
const btnRoll = document.getElementById("btn_roll");


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener('click', function(){
    diceEl.classList.remove("hidden");

//1. generate the random number
    const dice = Math.floor(Math.random() * 6) + 1;
//1. afficher random image
    diceEl.src = `./image/dice-${dice}.png`;
    


});








let activePlayer = 0;
let currentScore = 0;



















//     // generate the random number
//     const dice = Math.floor(Math.random() * 6) + 1;
//     // afficher random image
//     diceEl.src = `./image/dice-${dice}.png`;
//     console.log(diceEl);
//     //check for rolled 1
//     if (dice != 1) {
//         //display score
//         currentScore += dice;
//         document.getElementById(`current_${activePlayer}`).textContent = currentScore;
//     } else {
//         //switch the player
        
//     }



// });


