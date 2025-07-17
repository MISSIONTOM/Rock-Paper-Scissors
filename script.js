
var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice){

    

    if(humanChoice==="rock" ){
        if(computerChoice==="scissors"){
            humanScore++;
            console.log("Human Wins!");
        }
        else if(computerChoice==="paper"){
            computerScore++;
            console.log("Computer Wins!");
        }
        
    }
    else if(humanChoice==="paper" ){
        if(computerChoice==="rock"){
            humanScore++;
            console.log("Human Wins!");
        }
        else if(computerChoice==="scissors"){
            computerScore++;
            console.log("Computer Wins!");
        }
        
    }
    else if(humanChoice==="scissors" ){
        if(computerChoice==="paper"){
            humanScore++;
            console.log("Human Wins!");
        }
        else if(computerChoice==="rock"){
            computerScore++;
            console.log("Computer Wins!");
        }
        
    }


}

function playGame(){
    for(let i=0; i<5; i++){
        playRound(humanChoice, computerChoice);
    }
    console.log("Human Score:" + humanScore);
    console.log("Computer Score:" +computerScore);
}

function getComputerChoice(){
    let random = Math.floor(Math.random()*3);
    if(random==0){
        console.log('Rock');
        return "Rock";
    }
    else if(random==1){
        console.log('Paper');
        return "Paper";
    }
    else{
        console.log('Scissors');
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter your choice(Rock or Paper or Scissors");
    console.log(choice);
    return choice;
}

const humanChoice = getHumanChoice().toLowerCase();
const computerChoice = getComputerChoice().toLowerCase();

playGame();