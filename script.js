const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;

// Function to start a new game
function newGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorBox").style.backgroundColor = targetColor;

    const buttons = document.querySelectorAll(".color-option");
    buttons.forEach((button, index) => {
        button.style.backgroundColor = colors[index];
        button.onclick = () => checkGuess(colors[index]);
    });

    document.getElementById("gameStatus").textContent = "";
}

// Function to check the player's guess
function checkGuess(color) {
    if (color === targetColor) {
        document.getElementById("gameStatus").textContent = "Correct!";
        score++;
        document.getElementById("score").textContent = score;
    } else {
        document.getElementById("gameStatus").textContent = "Wrong! Try again.";
    }
}

// Event listener for the New Game button
document.getElementById("newGameButton").addEventListener("click", newGame);

// Start the game on page load
newGame();