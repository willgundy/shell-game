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
const cashCountEl = document.getElementById('cashAmount');
const betText = document.getElementById('betText');

const buttons = document.querySelectorAll('button');

// let state
let gamesTotal = 0;
let winsTotal = 0;
let cash = 100;

// set event listeners

buttons.forEach(button => button.addEventListener('mouseover', () => {
    button.classList.add('button-hover');
}));
buttons.forEach(button => button.addEventListener('mouseout', () => {
    button.classList.remove('button-hover');
}));

cupButtonEl0.addEventListener('click', () => {
    handleGuess('cup0', getWinningCup());
});
cupButtonEl1.addEventListener('click', () => {
    handleGuess('cup1', getWinningCup());
});
cupButtonEl2.addEventListener('click', () => {
    handleGuess('cup2', getWinningCup());
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function handleGuess(userGuess, winningCup) {
    //reset cup images
    resetCupImages();
    //update game and win counts
    //update cash amount
    let bet = Math.floor(document.getElementById('bet').value);
    gamesTotal++;
    if (userGuess === winningCup) {
        winsTotal++;
        cash += bet;
        betText.textContent = 'You won $' + bet + ' bucks.'; 
        betText.classList.remove('loseText');
        betText.classList.add('winText');
    } else {
        cash -= bet;
        betText.textContent = 'You lost $' + bet + ' bucks.';
        betText.classList.remove('winText');
        betText.classList.add('loseText');
    }

    //update dom with new count info
    winTotalEl.textContent = winsTotal;
    lossTotalEl.textContent = gamesTotal - winsTotal;
    totalCountEl.textContent = gamesTotal;
    cashCountEl.textContent = cash;

    //update image for winning cup
    const winningCupImage = document.getElementById('img-' + winningCup);
    winningCupImage.src = 'assets/cup-ball.png';
}

function getWinningCup() {
    const cups = [
        'cup0',
        'cup1',
        'cup2',
    ];
    return cups[Math.floor(3 * Math.random())];
}

function resetCupImages() {
    cupImageEl0.src = 'assets/cup.png';
    cupImageEl1.src = 'assets/cup.png'; 
    cupImageEl2.src = 'assets/cup.png'; 
}
