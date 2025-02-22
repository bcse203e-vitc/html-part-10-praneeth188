let randomNumber = Math.floor(Math.random() * 50) + 1;
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("checkGuess");
const message = document.getElementById("message");
const playAgainButton = document.getElementById("playAgain");

checkButton.addEventListener("click", checkGuess);
playAgainButton.addEventListener("click", resetGame);

function checkGuess() {
  const userGuess = Number(guessInput.value);

  if (userGuess === randomNumber) {
    message.textContent = "Congratulations! You guessed correctly!";
    message.style.color = "green";
    playAgainButton.style.display = "inline-block";
    checkButton.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try again!";
    message.style.color = "red";
  } else {
    message.textContent = "Too high! Try again!";
    message.style.color = "red";
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 50) + 1;
  guessInput.value = "";
  message.textContent = "";
  playAgainButton.style.display = "none";
  checkButton.disabled = false;
}
