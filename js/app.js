//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

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

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function init() {
    console.log("init");
    
    board = ['X', 'O', '', '', '', '', '', '', ''];
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
        messageEl.textContent = `${} wins!`
    }
}


/*----------------------------- Event Listeners -----------------------------*/




init()
