function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let choice;
    do {
        choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    } while (!choices.includes(choice));
    
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    alert(`Computer chose ${computerChoice}.`);

    const matchup = `${humanChoice}-${computerChoice}`;

switch (matchup) {
    case 'rock-rock':
    case 'paper-paper':
    case 'scissors-scissors':
        alert(`It's a tie! Both chose ${humanChoice}.`);
        break;

    case 'rock-scissors':
    case 'paper-rock':
    case 'scissors-paper':
        humanScore++;
        alert(`You won the round! ${humanChoice} beats ${computerChoice}.`);
        break;

    case 'rock-paper':
    case 'paper-scissors':
    case 'scissors-rock':
        computerScore++;
        alert(`You lose the round! ${computerChoice} beats ${humanChoice}.`);
        break;

    default:
        alert("Invalid input or unexpected error.");
}

alert(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
    // Reset scores before starting
    humanScore = 0;
    computerScore = 0;

    // Main game function to play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Show final results
    if (humanScore > computerScore) {
        alert(`Final Score - You: ${humanScore}, Computer: ${computerScore}\n🎉 You won the game!`);
    } else if (computerScore > humanScore) {
        alert(`Final Score - You: ${humanScore}, Computer: ${computerScore}\n💀 Computer won the game!`);
    } else {
        alert(`Final Score - You: ${humanScore}, Computer: ${computerScore}\n🤝 It's a tie!`);
    }
}

// Start the game
playGame();
