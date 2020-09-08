//module to create the gameBoard and handle plays.
const gameBoard = (() => {
    let board = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];
    // for (let i = 0; i < 3; i++) {
    //     board.push(i);
    // }
    const play = (r, col, marker) => {
        console.log(board[r][col])
        board[r][col] = marker;
    }
    const getBoard = () => board;
    return { play, getBoard } ;
})();

//player factory function
const player = (name, marker) => {
    const getMarker = () => marker;
    const getName = () => getName;
    return { getMarker, getName };
};

let test; 

renderBoard = () => {
    const gameSquare = document.querySelectorAll(".gameSquare");
    // for (let i = 0; i < gameBoard.getBoard().length; i++) {
    //     gameSquare[i].textContent = gameBoard.getBoard()[i];
    //     gameSquare[i].setAttribute(["data-playReference"], i);
    // }
    let i = 0;
    gameBoard.getBoard().forEach(square => test = square);
    for (let row = 0; row < gameBoard.getBoard().length; row++) {
        for (let col = 0; col < gameBoard.getBoard()[row].length; col++) {
            gameSquare[i].textContent = gameBoard.getBoard()[row][col];
            gameSquare[i].setAttribute(["data-playReference"], `${row},${col}`);
            i++;
        }
    }
}
