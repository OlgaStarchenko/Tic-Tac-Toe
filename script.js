const cells = document.querySelectorAll(".cell");
const [xScore, drawScore, oScore] = document.querySelectorAll(".result__value");
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let player = "x";

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent === "") {
      cell.textContent = player;
      checkWin();
      cell.classList.add(player);
      if (player === "x") {
        player = "o";
      } else {
        player = "x";
      }
    }
  });
});

function checkWin() {
  winCombinations.forEach((combination) => {
    const [index1, index2, index3] = combination;
    if (
      cells[index1].textContent === player &&
      cells[index2].textContent === player &&
      cells[index3].textContent === player
    ) {
      alert("Win!!!");
    }
  });
}
