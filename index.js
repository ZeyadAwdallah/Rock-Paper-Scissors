const rock = document.getElementById("Rock");
const scissors = document.getElementById("Scissors");
const paper = document.getElementById("Paper");
const result = document.getElementById('result');
const winner = document.getElementById('winner');
let computerScore = 0;
let playerScore = 0;

// Attach click event listeners to buttons
rock.addEventListener('click', () => playRound("Rock"));
scissors.addEventListener('click', () => playRound("Scissors"));
paper.addEventListener('click', () => playRound("Paper"));

//Function to make computer Choose
function getComputerChoice() {
    const target = ['Rock', 'Scissors', 'Paper'];
    const random = Math.floor(Math.random() * target.length);
    return target[random];
  }


function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  console.log("Player:", playerSelection, "Computer:", computerSelection);
  winner.textContent = "";

  // Game logic for determining the winner
  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    result.textContent = `${playerScore } - ${computerScore}`;
  } else {
    computerScore++;
    result.textContent = `${playerScore } - ${computerScore}`;
  }

  if (computerScore === 5)
  {
   winner.textContent = "Computer Wins!";
   computerScore = 0;
   playerScore = 0;
  }
  else if(playerScore === 5){
   winner.textContent = "You Win!";
   computerScore = 0;
   playerScore = 0;
  }
}
