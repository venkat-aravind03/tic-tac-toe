let currentPlayer = 'X';
let arr = Array(9).fill(null);
let playerx = document.getElementById('scoreX');
let playery = document.getElementById('scoreO');
let drawScore = document.getElementById('scoreDraw');
let scoreX = 0, scoreY = 0, drw = 0;
let winner;

function handleClick(element) {
  const id = Number(element.id);
  if (arr[id] != null || winner) return;
  arr[id] = currentPlayer;
  element.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  if (
    (arr[0] && arr[0] === arr[1] && arr[1] === arr[2]) ||
    (arr[3] && arr[3] === arr[4] && arr[4] === arr[5]) ||
    (arr[6] && arr[6] === arr[7] && arr[7] === arr[8]) ||
    (arr[0] && arr[0] === arr[3] && arr[3] === arr[6]) ||
    (arr[1] && arr[1] === arr[4] && arr[4] === arr[7]) ||
    (arr[2] && arr[2] === arr[5] && arr[5] === arr[8]) ||
    (arr[0] && arr[0] === arr[4] && arr[4] === arr[8]) ||
    (arr[2] && arr[2] === arr[4] && arr[4] === arr[6])
  ) {
    winner = currentPlayer;

    if (winner === 'X') {
      scoreX++;
      playerx.innerText = scoreX;
    } else {
      scoreY++;
      playery.innerText = scoreY;
    }

   // disableBoard();
    return;
  }

  if (!arr.includes(null)) {
    drw++;
    drawScore.innerText = drw;
    //disableBoard();
  }
}

function disableBoard(){
  const allCells = document.querySelectorAll('.col');
  for (let cell of allCells) {
    cell.innerText = '';
    cell.style.display = "flex"; // ✅ shows the cell again
    cell.onclick = function () {
      handleClick(this);
    };
  }
  arr = Array(9).fill(null);
  winner = null;
  currentPlayer = 'X';
}
