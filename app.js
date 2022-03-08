// import functions and grab DOM elements
const cupButtonEl0 = document.getElementById('btn-cup0');
const cupButtonEl1 = document.getElementById('btn-cup1');
const cupButtonEl2 = document.getElementById('btn-cup2');

const cupImageEl0 = document.getElementById('img-cup0');
const cupImageEl1 = document.getElementById('img-cup1');
const cupImageEl2 = document.getElementById('img-cup2');

const winTotalEl = document.getElementById('winCount');
const lossTotalEl = document.getElementById('lossCount');
const totalCountEl = document.getElementById('totalCount');

// let state
let gamesTotal = 0;
let winsTotal = 0;

// set event listeners

cupButtonEl0.addEventListener('click', () => {
    handleGuess(0, getWinningCup());
});
cupButtonEl1.addEventListener('click', () => {
    handleGuess(1, getWinningCup());
});
cupButtonEl2.addEventListener('click', () => {
    handleGuess(2, getWinningCup());
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function handleGuess(userGuess, winningCup) {
    //reset cup images
    resetCupImages()
    //update game and win counts
    gamesTotal++;
    if (userGuess === winningCup) {
        winsTotal++;
    }

    //update dom with new count info
    winTotalEl.textContent = winsTotal;
    lossTotalEl.textContent = gamesTotal - winsTotal;
    totalCountEl.textContent = gamesTotal;

    //update image for winning cup
    const winningCupImage = document.getElementById('img-cup' + winningCup);
    winningCupImage.src = 'assets/cup-ball.png';
}

function getWinningCup() {
    return Math.floor(3 * Math.random());
}

function resetCupImages() {
    cupImageEl0.src = 'assets/cup.png';
    cupImageEl1.src = 'assets/cup.png'; 
    cupImageEl2.src = 'assets/cup.png'; 
}