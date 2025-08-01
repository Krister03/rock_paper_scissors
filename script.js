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

    if (humanChoice === computerChoice) {
        alert(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        alert(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        alert(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    alert(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
    // Reset scores before starting
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Show final results
    if (humanScore > computerScore) {
        alert(`Final Score - You: ${humanScore}, Computer: ${computerScore}\n🎉 You win the game!`);
    } else if (computerScore > humanScore) {
        alert(`Final Score - You: ${humanScore}, Computer: ${computerScore}\n💀 Computer wins the game!`);
    } else {
        alert(`Final Score - You: ${humanScore}, Computer: ${computerScore}\n🤝 It's a tie!`);
    }
}

// Start the game
playGame();
