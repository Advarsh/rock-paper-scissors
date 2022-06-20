const values = ["rock", "paper", "scissor"];
const game = ()=>{
  for (let i = 0; i < 5; i++) {
    return playRound(playerSelection, computerSelection);
  }
}

const playRound = (playerSelection, computerSelection)=>{
  console.log(`player chose ${playerSelection}\ncomputer chose ${computerSelection}`);
  if (playerSelection === computerSelection) {
    return 'Tie';
  }else if(playerSelection === 'rock' && computerSelection === 'scissor'){
    return 'player wins';
  }else if (playerSelection === 'paper' && computerSelection==='rock') {
    return 'player wins';
  }else if (playerSelection === 'scissor' && computerSelection==='paper') {
    return 'player wins';
  }else{
    return 'computer wins'
  }
}

function computerPlay(){
    let random = Math.floor(Math.random()*3);
    return values[random];
}
const playerSelection = window.prompt().toLowerCase();
const computerSelection = computerPlay();
console.log(game());
// console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection());
// winner(1,2);
