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

let buttons = document.querySelectorAll("button");

function game() {
    let playerWins = 0,
        computerWins = 0;

    buttons.forEach(button => button.addEventListener('click', function (event) {
        let roundResult = playRound(event.target.textContent, computerPlay());

        if (roundResult !== "Tie" && !roundResult.includes("Error")) {
            if (roundResult.includes("win")) {
                playerWins++;
            } else {
                computerWins++;
            }
        }

        let message = document.querySelector(".message");
        message.textContent = roundResult;
        let score = document.querySelector(".score");
        score.textContent = playerWins + " : " + computerWins;

        if (playerWins === 5) {
            message.textContent = "Congratulations, YOU WIN!";
            playerWins = 0;
            computerWins = 0;
        } else if (computerWins === 5) {
            message.textContent = "GAME OVER!";
            playerWins = 0;
            computerWins = 0;
        }
    }))
}

game();