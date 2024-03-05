let playerWin = 0;
let comWin = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection !== 'ROCK' && playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS') {
        return alert(`${playerSelection} is not valid entry!!`);
    }

    (playerSelection === computerSelection) ? alert(`Draw both selected the ${playerSelection}`) : whoWin();
    function whoWin() {
        let a = playerSelection;
        let b = computerSelection;
        if ((a === "ROCK" && b === "SCISSORS") || (a === "PAPER" && b === "ROCK") || (a === "SCISSORS" && b === "ROCK")) {
            alert(`You win ! ${a} beats ${b}`);
            playerWin++;
        } else {
            alert(`You Lose ! ${b} beats ${a}`);
            comWin++;
        }
    }
}

function getComputerChoice() {
    let str = ['ROCK', 'PAPER', 'SCISSORS'];
    let choice = Math.floor(Math.random() * 3);
    return str[choice];
}


let announce = alert("GET READY FOR FIVE ROUNDS OF ROCK PAPER SCISSORS");

function getPlayerChoice() {
    let choice = prompt("Choose  one option 'ROCK','PAPER','SCISSORS'", "").toUpperCase();
    return choice;
}

// let playerSelection = getPlayerChoice();
// let computerSelection = getComputerChoice();

function playGame(){
    for(let i = 1 ; i<=5 ; i++){
        alert(`ROUND = ${i}`);
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}

function overAllWinner(){
    if(playerWin > comWin){
        alert( `Over All points : \n YOU : ${playerWin} \n COMPUTER : ${comWin} \n *** YOU ARE WINNER ***`);
    }else if(playerWin < comWin){
        alert(`Over All points : \n YOU : ${playerWin} \n COMPUTER : ${comWin} \n *** YOU LOSE ***`);
    }else{
        alert(`Over All points : \n YOU : ${playerWin} \n COMPUTER : ${comWin} \n *** DRAW ***`);
    }
}
function restartGame() {
    
    let userResponse = window.confirm("Do you want to restart the game?");

    if (userResponse) {
        window.location.reload();
    } else {
        alert("THANKS FOR PLAYING GAME !!!");
    }
}


playGame();
overAllWinner();
restartGame();
