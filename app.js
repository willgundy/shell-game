// import functions and grab DOM elements
const cup0ButtonEl = document.getElementById('btn-cup0');
const cup1ButtonEl = document.getElementById('btn-cup1');
const cup2ButtonEl = document.getElementById('btn-cup2');

const cup0ImageEl = document.getElementById('img-cup0');
const cup1ImageEl = document.getElementById('img-cup1');
const cup2ImageEl = document.getElementById('img-cup2');

const winTotalEl = document.getElementById('winCount');
const lossTotalEl = document.getElementById('lossCount');
const totalCountEl = document.getElementById('totalCount');
// let state

let gamesTotal = 0;
let winsTotal = 0;

// set event listeners

cup0ButtonEl.addEventListener('click', () => {
    const numberBetweenZeroAndThree = Math.floor(3 * Math.random());
    console.log(numberBetweenZeroAndThree);
});
cup1ButtonEl.addEventListener('click', () => {
    console.log('btn2');
});
cup2ButtonEl.addEventListener('click', () => {
    console.log('btn3');
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

