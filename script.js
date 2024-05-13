// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

// Get DOM elements
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const resultMessage = document.getElementById('result-message');
const attemptsLeftMessage = document.getElementById('attempts-left');
const restartBtn = document.getElementById('restart-btn');

// Update attempts left message
attemptsLeftMessage.textContent = `Attempts left: ${attemptsLeft}`;

// Add event listener to the guess button
guessBtn.addEventListener('click', checkGuess);

// Add event listener to the restart button
restartBtn.addEventListener('click', restartGame);

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    resultMessage.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  attemptsLeft--;
  attemptsLeftMessage.textContent = `Attempts left: ${attemptsLeft}`;

  if (userGuess === randomNumber) {
    resultMessage.textContent = 'Congratulations! You guessed the correct number!';
    guessInput.disabled = true;
    guessBtn.disabled = true;
  } else if (attemptsLeft === 0) {
    resultMessage.textContent = `Sorry, you ran out of attempts. The number was ${randomNumber}.`;
    guessInput.disabled = true;
    guessBtn.disabled = true;
  } else if (userGuess < randomNumber) {
    resultMessage.textContent = 'Too low! Try a higher number.';
  } else {
    resultMessage.textContent = 'Too high! Try a lower number.';
  }
}

// Function to restart the game
function restartGame() {
  window.location.reload();
}