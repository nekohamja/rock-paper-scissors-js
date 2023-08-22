let player, computer;
let playerScore = 0,
  computerScore = 0,
  round = 1;
game();

function game() {
  const playerSelect = document.querySelector(".playerSelect");
  playerSelect.addEventListener("click", (e) => {
    if (e.target.matches(".rock")) player = "rock";
    if (e.target.matches(".paper")) player = "paper";
    if (e.target.matches(".scissors")) player = "scissors";
    computer = getComputerChoice();
    roundStart(player, computer);
  });
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice == 1) return "rock";
  else if (choice == 2) return "paper";
  else return "scissors";
}

function roundStart(player, computer) {
  const result = document.querySelector(".notifier");
  const computerTurn = document.querySelector(".computerTurn");

  //   change turn icons
  const rockSelector = document.querySelector(".rock");
  const paperSelector = document.querySelector(".paper");
  const scissorsSelector = document.querySelector(".scissors");
  if (player === "paper") {
    rockSelector.style.display = "none";
    scissorsSelector.style.display = "none";
  } else if (player === "rock") {
    paperSelector.style.display = "none";
    scissorsSelector.style.display = "none";
  } else {
    rockSelector.style.display = "none";
    paperSelector.style.display = "none";
  }

  if (computer === "paper") {
    computerTurn.setAttribute(
      "style",
      'background: transparent no-repeat center url("https://twemoji.maxcdn.com/svg/270b.svg"); background-size: 90% 90%;'
    );
  } else if (computer === "rock") {
    computerTurn.setAttribute(
      "style",
      'background: transparent no-repeat center url("https://twemoji.maxcdn.com/svg/270a.svg"); background-size: 75% 75%;'
    );
  } else {
    computerTurn.setAttribute(
      "style",
      'background: transparent no-repeat center url("https://twemoji.maxcdn.com/svg/270c.svg"); background-size: 100% 100%;'
    );
  }

  //   perform comparison who wins
  const playerPoints = document.querySelector(".playerPoints");
  const computerPoints = document.querySelector(".computerPoints");
  if (player === computer) {
    result.textContent = "tie!";
  } else if (player === "rock") {
    if (computer === "paper") {
      computerScore++;
      result.textContent = "opponent scored :(";
      computerPoints.textContent = `Opponent: ${computerScore}`;
    } else {
      playerScore++;
      result.textContent = "you scored!";
      playerPoints.textContent = `You: ${playerScore}`;
    }
  } else if (player === "paper") {
    if (computer === "scissors") {
      computerScore++;
      result.textContent = "opponent scored :(";
      computerPoints.textContent = `Opponent: ${computerScore}`;
    } else {
      playerScore++;
      result.textContent = "you scored!";
      playerPoints.textContent = `You: ${playerScore}`;
    }
  } else if (player === "scissors") {
    if (computer === "rock") {
      computerScore++;
      result.textContent = "opponent scored :(";
      computerPoints.textContent = `Opponent: ${computerScore}`;
    } else {
      playerScore++;
      result.textContent = "you scored!";
      playerPoints.textContent = `You: ${playerScore}`;
    }
  }

  const roundNumber = document.querySelector(".round");
  const newRound = document.querySelector(".newRound");
  const nextRound = document.querySelector(".nextRound");
  round++;
  if (round == 6) {
    newRound.setAttribute("style", "background-color: #b4eeb4;");
    nextRound.removeAttribute("style");
    nextRound.style.display = "none";
    if (playerScore > computerScore) {
      result.textContent = "YOU WIN!";
    } else if (playerScore < computerScore) {
      result.textContent = "YOU LOST :(((";
    } else result.textContent = "DRAW";
  } else nextRound.setAttribute("style", "background-color: #b4eeb4;");

  // next round/restart game
  newRound.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    roundNumber.textContent = `Round ${round} / 5`;
    computerPoints.textContent = `Opponent: ${computerScore}`;
    playerPoints.textContent = `You: ${playerScore}`;
    result.textContent = "Select your choice!";
    newRound.removeAttribute("style");
    nextRound.removeAttribute("style");
    computerTurn.removeAttribute("style");
    rockSelector.style.display = "block";
    scissorsSelector.style.display = "block";
    paperSelector.style.display = "block";
  });

  nextRound.addEventListener("click", () => {
    roundNumber.textContent = `Round ${round} / 5`;
    result.textContent = "Select your choice!";
    nextRound.removeAttribute("style");
    computerTurn.removeAttribute("style");
    rockSelector.style.display = "block";
    scissorsSelector.style.display = "block";
    paperSelector.style.display = "block";
  });
}
