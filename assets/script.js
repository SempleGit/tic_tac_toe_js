//module to create the gameBoard and handle plays.
const gameBoard = (() => {
    const row = [0, 1, 2];
    const board = [row.slice(), row.slice(), row.slice()];
   
    const initializeBoard =(board => {
        const gameSquare = document.querySelectorAll(".gameSquare");
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                const i = row * board.length + col;
                gameSquare[i].setAttribute(["data-playReference"], `${row},${col}`);
            }
        }
    })(board);

    const play = (r, col, marker) => {
        board[r][col] = marker;
        renderBoard();
    }

    const getBoard = () => board;
    return { play, getBoard } ;
})();



//player factory function
const player = (name, marker) => {
    const getMarker = () => marker;
    const getName = () => name;
    return { getMarker, getName };
};

//displays the board after every play
renderBoard = () => {
    const gameSquare = document.querySelectorAll(".gameSquare");
    for (let row = 0; row < gameBoard.getBoard().length; row++) {
        for (let col = 0; col < gameBoard.getBoard()[row].length; col++) {
            const i = row * gameBoard.getBoard().length + col;
            gameSquare[i].textContent = gameBoard.getBoard()[row][col] == "X" || gameBoard.getBoard()[row][col] == "O" ? gameBoard.getBoard()[row][col] : "";
        }
    }
}



const player1 = player("player1", "X");
const player2 = player("player2", "O");
