console.log("Hello World");

let getComputerChoice = ()=>{
    let randomValue = Math.floor(Math.random()*100);

    if (randomValue === 0) {
        randomValue = 1;
    }

    if (randomValue < 34) {
        return "ROCK";
    }
    else if (randomValue < 67) {
        return "PAPER";
    }
    else return "SCISSORS";
}

let getHumanChoice = () =>{
    let humanChoice = prompt("Rock, Paper or Scissors","");

    humanChoice = humanChoice.toUpperCase();

    if(humanChoice === "ROCK" || humanChoice === "PAPER" || humanChoice === "SCISSORS"){
        return humanChoice;
    }
}

let humanScore = 0 , computerScore = 0;



function playRound(humanChoice, computerChoice) {

    if (humanChoice === "ROCK") {

        if (computerChoice === "ROCK") {
            console.log('A tie! Nobody wins this round.');
            alert('A tie! Nobody wins this round.');
        }
        else if (computerChoice === "PAPER") {
            console.log('You Lose! Paper beats Rock.');
            alert('You Lose! Paper beats Rock.');
            computerScore+=1;
        }
        else{
            console.log('You Win! Rock beats Scissors.');
            alert('You Win! Rock beats Scissors.');
            humanScore+=1;
        }
    }

    else if (humanChoice === "PAPER") {

        if (computerChoice === "PAPER") {
            console.log('A tie! Nobody wins this round.');
            alert('A tie! Nobody wins this round.');
        }
        else if (computerChoice === "SCISSORS") {
            console.log('You Lose! Scissors beats Paper.');
            alert('You Lose! Scissors beats Paper.');
            computerScore+=1;
        }
        else{
            console.log('You Win! Paper beats Rock.');
            alert('You Win! Paper beats Rock.');
            humanScore+=1;
        }
    }

    else {

        if (computerChoice === "SCISSORS") {
            console.log('A tie! Nobody wins this round.');
            alert('A tie! Nobody wins this round.');
        }
        else if (computerChoice === "Rock") {
            console.log('You Lose! Rock beats Scissors.');
            alert('You Lose! Rock beats Scissors.');
            computerScore+=1;
        }
        else{
            console.log('You Win! Scissors beats Paper.');
            alert('You Win! Scissors beats Paper.');
            humanScore+=1;
        }
    }
}



function playGame() {
    
    for (let i = 0; i < 5; i++) {
    
        alert(`This is Round ${i+1}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice,computerChoice);

    }
}

alert("Rock Paper Scissors!!!!\nEpic Showdown Human vs Computer ")

playGame();

if (humanScore > computerScore) {
    alert("You have won!!! Congratulations." + `\n Your Score : ${humanScore} \n Computer Score : ${computerScore}`);
}
else if (humanScore > computerScore){
    alert("You lost ! Better Luck next time." + `\n Your Score : ${humanScore} \n Computer Score : ${computerScore}`);
}
else{
    alert("A tie!!!!" + `\n Your Score : ${humanScore} \n Computer Score : ${computerScore}`);
}