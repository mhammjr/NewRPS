let playerSelection;
let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection) => {
    
    if (playerScore < 5 && computerScore < 5) {
       
        let computerSelection;
        let computerPlay = (Math.floor(Math.random() * 3));

        switch (computerPlay) {
            case 0: computerSelection = 'ROCK';
                break;

            case 1: computerSelection = 'PAPER';
                break;

            case 2: computerSelection = 'SCISSORS';
                break;
        }

        output.textContent = (`Computer Chooses: ${computerSelection}, You Choose: ${playerSelection}`);

        let compareSelection = (playerSelection, computerSelection) => {

            if (playerSelection === computerSelection) {

               results.textContent = ("It's a tie");

            } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
                
               results.textContent = ('You lose: Paper covers Rock!');
               computerScore += 1;
               computer.textContent = `Computer: ${computerScore}`;

            } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {

               results.textContent = ('You WIN!!!: Rock breaks Scissors!');
               playerScore += 1;
               player.textContent = `Player: ${playerScore}`;

            } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
                
                results.textContent = ('You lose: Scissors cut Paper!');
                computerScore += 1;
                computer.textContent = `Computer: ${computerScore}`;

            } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
                
                results.textContent = ('You WIN!!!: Paper covers Rock!');
                playerScore += 1;
                player.textContent = `Player: ${playerScore}`;

            } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
                
                results.textContent = ('You WIN!!!: Scissors cut Paper!');
                playerScore += 1;
                player.textContent = `Player: ${playerScore}`;

            } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {

                results.textContent = ('You lose: Rock breaks Scissors!');
                computerScore += 1;
                computer.textContent = `Computer: ${computerScore}`;
            } 
          
        }
        compareSelection(playerSelection, computerSelection);
    }  if (playerScore === 5) {
        playerWins.textContent = 'WINNER!!!';
    } else if (computerScore === 5) {
        computerWins.textContent = 'Sorry, You Lost!';
    }
}
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    })
})
const container = document.querySelector('#container');
const content = document.createElement('div')
const output = document.createElement('h3');
const results = document.createElement('h2');

const player = document.createElement('h2');
player.textContent = `Player: ${playerScore}`;

const computer = document.createElement('h2');
computer.textContent = `Computer: ${computerScore}`;

const computerWins = document.createElement('h1');
const playerWins = document.createElement('h1');


content.appendChild(player);
content.appendChild(computer);
content.appendChild(output);
content.appendChild(results);
content.appendChild(computerWins);
content.appendChild(playerWins);

container.appendChild(computerWins);
container.appendChild(playerWins);
container.appendChild(player);
container.appendChild(computer);
container.appendChild(output);
container.appendChild(content);