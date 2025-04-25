const cells = document.querySelectorAll(".field__cell");
const result = document.querySelector(".result");
const ticTacToeElem = document.querySelector(".tic-tac-toe");
const restartBtn = document.querySelector(".restart");
let currentMove = "X";
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
setBackground(currentMove);

document.getElementById("gameField").addEventListener("click", game);

function game(e) {
  if (e.target.classList.contains("field__cell")) {
    if (result.textContent.includes("wins!")) {
      return;
    }
    const cell = e.target;
    if (!cell.hasAttribute("data-fill")) {
      cell.dataset.fill = currentMove;

      const winner = findWinner(cells);
      if (winner) {
        result.textContent = `${winner} wins!`;
        ticTacToeElem.classList.add("game__item--hidden");
        restartBtn.classList.remove("game__item--hidden");
      } else {
        const isDraw = [...cells].every((cell) => cell.dataset.fill);
        if (isDraw) {
          result.textContent = "It's a draw!";
          ticTacToeElem.classList.add("game__item--hidden");
          restartBtn.classList.remove("game__item--hidden");
        }
      }
      currentMove === "X" ? (currentMove = "O") : (currentMove = "X");
      setBackground(currentMove);
    }
  }
}
function findWinner(cells) {
  for (let i = 0; i < winCombinations.length; i++) {
    const [a, b, c] = winCombinations[i];
    if (
      cells[a].dataset.fill &&
      cells[a].dataset.fill === cells[b].dataset.fill &&
      cells[a].dataset.fill === cells[c].dataset.fill
    ) {
      return cells[a].dataset.fill;
    }
  }
  return null;
}

restartBtn.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.removeAttribute("data-fill");
  });
  result.textContent = "Result";
  restartBtn.classList.add("game__item--hidden");
  ticTacToeElem.classList.remove("game__item--hidden");
  currentMove = "X";
  setBackground(currentMove);
});

function setBackground(currentMove) {
  const gameField = document.getElementById("gameField");
  if (gameField) {
    gameField.style.setProperty(
      "--next-image-url",
      `url('./assets/${currentMove}.png')`
    );
  }
}
