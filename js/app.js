/*-------------------------------- Constants --------------------------------*/
let board  ;
let turn ; 
let winner ;
let tie ;


/*---------------------------- Variables (state) ----------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');

console.log(squareEls);
console.log(messageEl);

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetBtnEl = document.querySelector('#reset');
console.log(resetBtnEl);

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function init() {
    console.log("init");
    
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;

    render()
};

function render() {
    updateBoard();
    updateMessage();
};

function updateBoard() {
    board.forEach ((cellValue, index) => {
        squareEls[index].textContent = cellValue;
    });
}

function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.textContent = `Now is pending ${turn}`;
    } else if (winner === false && tie === true) {
        messageEl.textContent = `This game is a tie`;
    } else {
        messageEl.textContent = `${turn} wins!`
    }
};

function handleClick(event) {
    const squareIndex = parseInt(event.target.id);
    if (board[squareIndex] === 'X' || board[squareIndex] === 'O') return;
    if (winner) return;
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
}

function placePiece(index) {
    board[index] = turn;
    console.log(board);
}

function checkForWinner() {
    winningCombos.forEach (wincombo => {
         const [a,b,c] = wincombo;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
            console.log(`${board[a]} wins`);
        }})
    };

function checkForTie() {
    if (winner === true) {
        return;
    } else if (board.includes('')) {
        tie = false;
    } else {
        tie = true;
    }
console.log(`Tie:`, tie)
};

function switchPlayerTurn() {
    if (winner) return;
    if (turn === 'X') {
            turn = 'O'
        } else {
            turn = 'X'
        }
    console.log('Currrent turn:', turn);
    }

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach ((square) => {
    square.addEventListener('click', handleClick);
});

resetBtnEl.addEventListener('click', init);

init()
