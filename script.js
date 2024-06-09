
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const choiceScreen = document.querySelector(".choice");

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

let humanScore = 0 , computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "ROCK" && computerChoice === "PAPER" ||
        humanChoice === "PAPER" && computerChoice === "SCISSORS" ||
        humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerScore += 1;
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" ||
        humanChoice === "PAPER" && computerChoice === "ROCK" ||
        humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore += 1;
    }
}


function playAndContinue(humanChoice){

let computerChoice = getComputerChoice();

playRound(humanChoice,computerChoice);
currentRound++;

if (humanScore === 5 || computerScore === 5) {
    choiceScreen.innerHTML = '';

    const outcomePage = document.createElement('div');
    outcomePage.classList.add("outcomePage");

    const outcome = document.createElement('h1');
    outcome.classList.add("outcome");
    humanScore > computerScore ? (outcome.textContent = "You win!"):(outcome.textContent = "Better luck next time.");

    outcomePage.appendChild(outcome);

    const playAgain = document.createElement("button");
    playAgain.textContent = "Play Again";

    outcomePage.appendChild(playAgain);

    choiceScreen.appendChild(outcomePage);

    playAgain.addEventListener("click",()=>{
        humanScore = 0;
        computerScore = 0;
        currentRound = 1;
        createGameScreen();
    })
}
else{
    createGameScreen();
}

}



function createGameScreen(){
        
        choiceScreen.innerHTML = '';

        const gameScreen = document.createElement("div");
        gameScreen.classList.add('gameScreen');
        choiceScreen.appendChild(gameScreen);

        const gameRoundScreen = document.createElement('div');
        gameRoundScreen.classList.add("gameRoundScreen");

        const roundDetail = document.createElement('h1');
        roundDetail.textContent = `Round ${currentRound}`;
        roundDetail.classList.add("roundDetail");

        const playerChoices = document.createElement('div');
        playerChoices.classList.add("playerChoices");

        const rock = document.createElement('button');
        rock.textContent = 'Rock';
        rock.addEventListener("click",()=> playAndContinue("ROCK"));

        const paper = document.createElement('button');
        paper.textContent = 'Paper';
        paper.addEventListener("click",()=> playAndContinue("PAPER"));

        const scissors = document.createElement('button');
        scissors.textContent = 'Scissors';
        scissors.addEventListener("click",()=> playAndContinue("SCISSORS"));

        playerChoices.appendChild(rock);
        playerChoices.appendChild(paper);
        playerChoices.appendChild(scissors);

        gameRoundScreen.appendChild(roundDetail);
        gameRoundScreen.appendChild(playerChoices);

        gameScreen.appendChild(gameRoundScreen);

        const scoreCard = document.createElement('div');
        scoreCard.classList.add("scoreCard");

        const playerScore = document.createElement("h1");
        playerScore.textContent = `Player Score : ${humanScore}`;

        const machineScore = document.createElement("h1");
        machineScore.textContent = `Computer Score : ${computerScore}`;

        scoreCard.appendChild(playerScore);
        scoreCard.appendChild(machineScore);

        gameScreen.appendChild(scoreCard);
       
}



let currentRound = 1;


yes.addEventListener("click",()=>{
    createGameScreen();
})

no.addEventListener("click",()=>{
    choiceScreen.innerHTML = '';

    const outcome = document.createElement('h1');
    outcome.classList.add("outcome");

    outcome.textContent = "Thanks for visiting !"

    choiceScreen.appendChild(outcome);
})






