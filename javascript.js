/*
0 = Piedra (Rock)
1 = Papel (Paper)
2 = Tijera (Scissors)
*/

// Random number generator for computer choice (0 to 2)
function getComputerChoice() {
	return Math.floor(Math.random() * 3);
}

// Transform player's button selection into a number (0 = rock, 1 = paper, 2 = scissors)
function transformPlayerChoice(choice) {
	if (choice === "rock") {
		return 0;
	} else if (choice === "paper") {
		return 1;
	} else if (choice === "scissors") {
		return 2;
	} else {
		return "Invalid choice";
	}
}

// Variable to store the player's choice
let playerChoice = null;

// Function to update the player's choice image
function updatePlayerImage(choice) {
	const imgElement = document.getElementById("playerChoice");
	if (choice === "rock") {
		imgElement.src = "rock.png"; // Image for Rock
		imgElement.alt = "Piedra";
	} else if (choice === "paper") {
		imgElement.src = "paper.png"; // Image for Paper
		imgElement.alt = "Papel";
	} else if (choice === "scissors") {
		imgElement.src = "scissors.png"; // Image for Scissors
		imgElement.alt = "Tijeras";
	}
}

// Function to change the computer's choice image
function updateComputerImage(computerChoice) {
	const imgElement = document.getElementById("computerChoice");
	if (computerChoice === 0) {
		imgElement.src = "rock.png"; // Image for Rock
		imgElement.alt = "Piedra";
	} else if (computerChoice === 1) {
		imgElement.src = "paper.png"; // Image for Paper
		imgElement.alt = "Papel";
	} else if (computerChoice === 2) {
		imgElement.src = "scissors.png"; // Image for Scissors
		imgElement.alt = "Tijeras";
	}
}

// Function to update the images for win/lose/draw
function updateResultImages(playerWins) {
	const playerImgElement = document.getElementById("playerChoice");
	const computerImgElement = document.getElementById("computerChoice");

	if (playerWins === "win") {
		playerImgElement.src = "win.png"; // Image when player wins
		computerImgElement.src = "lose.png"; // Image when computer loses
	} else if (playerWins === "lose") {
		playerImgElement.src = "lose.png"; // Image when player loses
		computerImgElement.src = "win.png"; // Image when computer wins
	} else if (playerWins === "draw") {
		playerImgElement.src = "draw.png"; // Image for a draw
		computerImgElement.src = "draw.png"; // Image for a draw
	}
}

// Function to play the round
function playRound() {
	if (playerChoice === null) {
		alert("Please select an option before playing!");
		return;
	}

	let computerChoice = getComputerChoice();
	updateComputerImage(computerChoice); // Update the computer's image

	let resultMessage = "";
	let resultStatus = ""; // 'win', 'lose', or 'draw'

	setTimeout(() => {
		if (playerChoice == 0) {
			if (computerChoice == 0) {
				resultMessage = "Empate! Piedra vs Piedra";
				resultStatus = "draw";
			} else if (computerChoice == 1) {
				resultMessage = "¡Perdiste! Piedra pierde contra Papel";
				resultStatus = "lose";
			} else {
				resultMessage = "¡Ganaste! Piedra gana contra Tijeras";
				resultStatus = "win";
			}
		} else if (playerChoice == 1) {
			if (computerChoice == 0) {
				resultMessage = "¡Ganaste! Papel gana contra Piedra";
				resultStatus = "win";
			} else if (computerChoice == 1) {
				resultMessage = "Empate! Papel vs Papel";
				resultStatus = "draw";
			} else {
				resultMessage = "¡Perdiste! Papel pierde contra Tijeras";
				resultStatus = "lose";
			}
		} else if (playerChoice == 2) {
			if (computerChoice == 0) {
				resultMessage = "¡Perdiste! Tijeras pierde contra Piedra";
				resultStatus = "lose";
			} else if (computerChoice == 1) {
				resultMessage = "¡Ganaste! Tijeras gana contra Papel";
				resultStatus = "win";
			} else {
				resultMessage = "Empate! Tijeras vs Tijeras";
				resultStatus = "draw";
			}
		}
		// Display the result in the HTML
		document.getElementById("result").innerText = resultMessage;

		// Update images for win/lose/draw result
		if (resultStatus === "win") {
			updateResultImages("win");
		} else if (resultStatus === "lose") {
			updateResultImages("lose");
		} else if (resultStatus === "draw") {
			updateResultImages("draw");
		}
	}, 1000);
}

// Event listeners for each button to set the player choice and update the player's image
document.getElementById("rock").addEventListener("click", function () {
	playerChoice = transformPlayerChoice("rock");
	updatePlayerImage("rock");
});

document.getElementById("paper").addEventListener("click", function () {
	playerChoice = transformPlayerChoice("paper");
	updatePlayerImage("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
	playerChoice = transformPlayerChoice("scissors");
	updatePlayerImage("scissors");
});

// Event listener for the "Seleccionar" button to start the game
document.getElementById("play").addEventListener("click", function () {
	playRound();
});
