const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const playerSelection = document.querySelector('#qMark-player');
const computerSelection = document.querySelector('#qMark-computer');
const result = document.querySelector('#result');
const resultContent = document.querySelector('#p1');
const cCounter = document.querySelector('#cCounter');
const pCounter = document.querySelector('#pCounter');
const restartBtn = document.querySelector('#restart');



let cWinCounter = 0;
let pWinCounter = 0;

rockBtn.addEventListener('click', () => {
    playerSelection.textContent = '✊';
    computerSelection.textContent = getComputerChoice();
    playRound(playerSelection.textContent, computerSelection.textContent);
});

paperBtn.addEventListener('click', () => {
    playerSelection.textContent = '✋';
    computerSelection.textContent = getComputerChoice();
    playRound(playerSelection.textContent, computerSelection.textContent);
});

scissorsBtn.addEventListener('click', () => {
    playerSelection.textContent = '✌';
    computerSelection.textContent = getComputerChoice();
    playRound(playerSelection.textContent, computerSelection.textContent);
});

restartBtn.addEventListener('click',restartGame);


function getComputerChoice() {
    let str = ['✊', '✋', '✌'];
    let choice = Math.floor(Math.random() * 3);
    return str[choice];
}

function playRound(playerChoice, computerChoice) {
    const a = playerChoice;
    const b = computerChoice;
    if (a === b) {
        //draw
        result.textContent = "It's a Tie!";
        resultContent.textContent = `${a} ties with ${a}`;
    } else if ((a === "✊" && b === "✌") || (a === "✋" && b === "✊") || (a === "✌" && b === "✋")) {
        //player win
        pWinCounter++;
        result.textContent = "You Won!"
        resultContent.textContent = `${a} Beats ${b}`;
        pCounter.textContent = `Player : ${pWinCounter}`;
        if (pWinCounter === 5) {
            endGame();
        }

    } else {
        //player lose
        cWinCounter++;
        result.textContent = "You Lost!"
        resultContent.textContent = `${b} Beats ${a}`;
        cCounter.textContent = `Computer : ${cWinCounter}`;
        if (cWinCounter === 5){
            endGame();
        }
    }
}


function restartGame() {
    pWinCounter = 0;
    cWinCounter = 0;
    result.textContent = 'Choose your weapon';
    resultContent.textContent = 'First to score 5 points wins the game';
    pCounter.textContent = 'Player: 0';
    cCounter.textContent = 'Computer: 0';
    playerSelection.textContent = '❔';
    computerSelection.textContent = '❔';
}

function endGame(){
    if(pWinCounter == 5){
        alert("YOU WIN!\n Play Again!!");
        restartGame();
    }else {
        alert("YOU LOST! \n Play Again!!");
        restartGame();
    }
}