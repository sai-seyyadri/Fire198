
const displayController = (() => {
    const renderMessage = (message) => {
      document.getElementById("message").innerHTML = message;
    };
  
    return {
      renderMessage,
    };
  })();
  
  const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];
  
    const render = () => {
      let boardHTML = "";
      gameboard.forEach((square, index) => {
        boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
      });
      document.getElementById("gameboard").innerHTML = boardHTML;
      const squares = document.querySelectorAll(".square");
      squares.forEach((square) => {
        square.addEventListener("click", Game.handleClick);
      });
    };
  
    const update = (index, value) => {
      gameboard[index] = value;
      render();
    };
  
    const getGameboard = () => gameboard;
  
    return {
      getGameboard,
      update,
      render,
    };
  })();
  
  const createPlayer = (name, mark) => {
    return {
      name,
      mark,
    };
  };
  
  const Game = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameOver = false;
  
    const start = () => {
      players = [
        createPlayer(document.querySelector("#player1").value, "X"),
        createPlayer(document.querySelector("#player2").value, "O"),
      ];
      currentPlayerIndex = 0;
      gameOver = false;
      Gameboard.render();
      document.getElementById("message").innerHTML = "";
      document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener("click", handleClick);
      });
    };
  
    const handleClick = (event) => {
      if (gameOver) return;
  
      let index = parseInt(event.target.id.split("-")[1]);
      if (Gameboard.getGameboard()[index] !== "") return;
  
      Gameboard.update(index, players[currentPlayerIndex].mark);
  
      if (checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].mark)) {
        gameOver = true;
        displayController.renderMessage(`${players[currentPlayerIndex].name} wins!`);
      } else if (checkForTie(Gameboard.getGameboard())) {
        gameOver = true;
        displayController.renderMessage("It's a tie!");
      } else {
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
      }
    };
  
    const restart = () => {
      for (let i = 0; i < 9; i++) {
        Gameboard.update(i, "");
      }
      Gameboard.render();
    };
  
    return {
      start,
      restart,
      handleClick,
    };
  })();
  
  function checkForWin(board) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }
  
  function checkForTie(board) {
    return board.every(cell => cell !== '');
  }
  
 
  function showResult(result, player1, player2) {
    const resultDisplay = document.querySelector("#result-display");
    const message =
      result === player1.mark
        ? `${player1.name} wins!`
        : result === player2.mark
        ? `${player2.name} wins!`
        : "It's a tie";
    resultDisplay.innerText = message;
  }
  
  const restartButton = document.getElementById("restart-button");
  restartButton.addEventListener("click", () => {
    Game.restart();
  });
  
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", () => {
    Game.start();
  });