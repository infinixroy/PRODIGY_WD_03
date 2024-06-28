let currentPlayer = 'X';
let arr = Array(9).fill(null);
const restartBtn = document.getElementById("restart");
const winnerShow = document.getElementById("show");
const cells = document.getElementsByClassName("cell");

function checkForWinner() {
    if(
        (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])  
    ) {
        winnerShow.textContent = `${currentPlayer} Wins`;
    }
}

function handleEvent(el) {
    const id = Number(el.id);
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    if(currentPlayer === 'X') {
        winnerShow.textContent = `O's Turn`;
    } else {
        winnerShow.textContent = `X's Turn`;
    }
    checkForWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

restartBtn.addEventListener('click', () => {
    arr = arr.fill(null);
    for(let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
    currentPlayer = 'X';
})