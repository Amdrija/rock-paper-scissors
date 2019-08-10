function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

/* 
 * The function plays a round of rock paper scissors
 * It returns a string that represents the result of the round
 */
function playRound(playerSelection, computerSelection) {

    /*
     * winner object represents the possible choices
     * the player can choose as keys and which choice
     * they beat as values
     * say if player chooses 'rock', 
     * then winner[playerSelection] equals scissors
     */
    let winner = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    playerSelection = playerSelection.toLowerCase();
    if (!(playerSelection in winner)) {
        return "Error. You should enter a value that's either rock, paper or scissors";
    }

    if (playerSelection === computerSelection) {
        return "Tie";
    }

    return winner[playerSelection] === computerSelection ?
        `You win! ${playerSelection} beats ${computerSelection}` :
        `You lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {
    let playerWins = 0,
        computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(prompt("Rock, paper or scissors?"), computerPlay());

        if (roundResult !== "Tie" && !roundResult.includes("Error")) {
            if (roundResult.includes("win")) {
                playerWins++;
            } else {
                computerWins++;
            }
        }

        console.log(roundResult + " " + playerWins + " " + computerWins);
    }

    console.log(gameResult(playerWins, computerWins));
}

function gameResult(playerWins, computerWins) {
    if (playerWins === computerWins) {
        return "Tie";
    }

    return playerWins > computerWins ?
        `You Win! ${playerWins} : ${computerWins}` :
        `You Lose! ${playerWins} : ${computerWins}`;
}

game();