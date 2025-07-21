let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      console.log("Human Wins!");
    } else if (computerChoice === "paper") {
      computerScore++;
      console.log("Computer Wins!");
    } else {
      console.log("Draw!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      console.log("Human Wins!");
    } else if (computerChoice === "scissors") {
      computerScore++;
      console.log("Computer Wins!");
    } else {
      console.log("Draw!");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      console.log("Human Wins!");
    } else if (computerChoice === "rock") {
      computerScore++;
      console.log("Computer Wins!");
    } else {
      console.log("Draw!");
    }
  }
}

/*function playGame(){
    for(let i=0; i<5; i++){
        
    }
    
}*/

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    console.log("Rock");
    return "Rock";
  } else if (random == 1) {
    console.log("Paper");
    return "Paper";
  } else {
    console.log("Scissors");
    return "Scissors";
  }
}

let container = document.querySelector("#result");

let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let pHuman = document.createElement("p");
let pComputer = document.createElement("p");
let pResult = document.createElement("p");
let pHumanScore = document.createElement("p");
let pComputerScore = document.createElement("p");

div1.style.display = "flex";
div1.style.justifyContent = "space-between";
div2.style.display = "flex";
div2.style.justifyContent = "center";
div3.style.display = "flex";
div3.style.justifyContent = "space-between";
pResult.textContent = "Result";
pHumanScore.textContent = `Your Score: ${humanScore}`;
pComputerScore.textContent = `Computer Score: ${computerScore}`;

div1.append(pHuman, pComputer);
div2.append(pResult);
div3.append(pHumanScore, pComputerScore);
container.append(div1, div2, div3);

let humanChoice = "";
let computerChoice = "";
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    humanChoice = button.id;
    pHuman.textContent = `You chose ${humanChoice.toUpperCase()}`;
    console.log(humanChoice);
    computerChoice = getComputerChoice().toLowerCase();
    pComputer.textContent = `Computer chose ${computerChoice.toUpperCase()}`;
    playRound(humanChoice, computerChoice);

    pHumanScore.textContent = `Your Score: ${humanScore}`;
    pComputerScore.textContent = `Computer Score: ${computerScore}`;

    console.log("Human Score:" + humanScore);
    console.log("Computer Score:" + computerScore);
  });
});
//playGame();
