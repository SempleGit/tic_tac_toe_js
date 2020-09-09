(function() {
//module to create the gameBoard and handle plays.
    const gameBoard = (() => {
        const row = [0, 1, 2];
        const board = [row.slice(), row.slice(), row.slice()];
        
        const play = (space) => {
            board[space[0]][space[2]] = currentPlayer.getMarker();
            renderBoard();
            moveCount++;
            if (!checkForWinner()) {
                gameFlow();
            } 
        }
        
        const initializeBoard =(board => {
            const gameSquare = document.querySelectorAll(".gameSquare");
            for (let row = 0; row < board.length; row++) {
                for (let col = 0; col < board[row].length; col++) {
                    const i = row * board.length + col;
                    gameSquare[i].setAttribute(["data-playReference"], `${row},${col}`);
                    gameSquare[i].addEventListener("click", e => {
                        gameBoard.play(e.target.getAttribute(["data-playReference"]), currentPlayer);
                    })
                }
            }
        })(board);

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

    //checks all possible outcomes to see if a player has won.
    checkForWinner = () => {
        const horizontalWins = [gameBoard.getBoard()[0], gameBoard.getBoard()[1], gameBoard.getBoard()[2]];    
        const verticalWins = [];
            for(let i = 0; i < 3; i++) {
                verticalWins.push([gameBoard.getBoard()[0][i], gameBoard.getBoard()[1][i],gameBoard.getBoard()[2][i]]);
            }
        const diagonalWins = [ [gameBoard.getBoard()[0][0], gameBoard.getBoard()[1][1], gameBoard.getBoard()[2][2]], [gameBoard.getBoard()[0][2], gameBoard.getBoard()[1][1], gameBoard.getBoard()[2][0]] ]
        const winningCombos = horizontalWins.concat(verticalWins.concat(diagonalWins));
        
        for (let i = 0; i < winningCombos.length; i++) {
            if (winningCombos[i].every(item => currentPlayer.getMarker() === item))  {
                console.log("Winner!");
                endGame();
                return true;
            }
        } 
        return false;       
    };

    const endGame = (tie = false) => {
        if (!tie) {
            console.log(currentPlayer.getName());
            setTimeout(() => {alert(`${currentPlayer.getName()} Wins!`)}, 500);
        } else {
            setTimeout(() => {alert(`It's a tie!`)}, 500);
        }
    }

    const gameFlow = () => {
        if (moveCount < 9) {
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        } else {
            currentPlayer = "";
            endGame(true);
        }
    }

    const player1 = player(prompt("Enter player 1: ") || "X", "X");
    const player2 = player(prompt("Enter player 2: ") || "O", "O");
    let moveCount = 0;
    let currentPlayer;
    gameFlow();

})();
