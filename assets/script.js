//module to create the gameBoard and handle plays.
const gameBoard = (() => {
    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push(i);
    }
    const play = (space, marker) => board[space] = marker;
    const getBoard = () => board;
    return { play, getBoard } ;
})();

//player factory function
const player = (name, marker) => {
    const getMarker = () => marker;
    const getName = () => getName;
    return { getMarker, getName };
};

renderBoard = () => {
    const gameSquare = document.querySelectorAll(".gameSquare");
    for (let i = 0; i < gameBoard.getBoard().length; i++) {
        gameSquare[i].textContent = gameBoard.getBoard()[i];
        gameSquare[i].setAttribute(["data-playReference"], i);
    }
}
