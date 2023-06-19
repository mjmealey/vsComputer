const chessBoard = () => {
  const gridElements = {
    gridContainerId: "gridContainer",
    div: "div",
    rowId: "rows",
    gridElementsClass: "gridElements",
  };

  const displayGameStateText = {
    textElement: "div",
    preGameStartingText: "Welcome to Chess!",
    gameStartingText: "The game has begun!",
    ifRookIsClickedAtStart: "You cannot move rooks at the start of the game",
    ifBishopIsClickedAtStart:
      "You cannot move bishops at the start of the game",
    ifQueenIsClickedAtStart:
      "You cannot move the queen at the start of the game",
    ifKingIsClickedAtStart: "You cannot move the king at the start of the game",
    ifKnightIsClicked: "Where would you like to move your knight?",
    ifPawnIsClicked: "Where would you like to move your pawn?",
    ifQueenIsClicked: "Where would you like to move your queen?",
    ifKingIsClicked: "Where would you like to move your king?",
    ifRookIsClicked: "Where would you like to move your rook?",
    ifBishopIsClicked: "Where would you like to move your bishop?",
  };

  const stateOfCells = {
    emptyCell: "",
  };

  const trackGameState = {
    //first move
    emptyFirstMove: "",
    pawnFirstMove: "Pawn",
    knightFirstMove: "Knight",
    isFirstMove: true,
    isNotFirstMove: false,
    isInvalidFirstMove: null,
    trackFirstMove: [],

    //rest of game
    currentRook: "Rook",
    currentBishop: "Bishop",
    currentKnight: "Knight",
    currentQueen: "Queen",
    currentKing: "King",
    currentPawn: "Pawn",
  };

  const chessMovePlaceHolder = {
    pawn: "Pawn",
    rook: "Rook",
    queen: "Queen",
    king: "King",
    bishop: "Bishop",
    knight: "Knight",
  };
  const currentPiece = {
    emptyPiece: null,
    currentPawn: "Pawn",
    currentRook: "Rook",
    currentBishop: "Bishop",
    currentKnight: "Knight",
    currentQueen: "Queen",
    currentKing: "King",
  };

  //first move variable
  let firstPiece = trackGameState.emptyFirstMove;
  let clickedPiece = currentPiece.emptyPiece;
  let currentClickedCell = "";

  const displayGameState = document.createElement(
    displayGameStateText.textElement
  );
  const gridCellIds = [];
  const createChessBoard = () => {
    const gridContainer = document.getElementById(gridElements.gridContainerId);

    console.log(gridElements.gridContainerId);

    for (let i = 0; i < 8; i++) {
      const rows = document.createElement(gridElements.div);
      rows.id = gridElements.rowId;
      rows.classList.add(gridElements.gridElementsClass);
      gridContainer.appendChild(rows);

      for (let j = 0; j < 8; j++) {
        const cells = document.createElement(gridElements.div);
        const cellsId = `cell-${i}-${j}`;
        cells.id = cellsId;
        cells.classList.add("cells");
        rows.appendChild(cells);

        gridCellIds.push(cellsId);
      }
    }
  };

  const startingCells = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    const startingPawnCells = [
      1, 6, 9, 14, 17, 22, 25, 30, 33, 38, 41, 46, 49, 54, 57, 62,
    ];
    const startingRookCells = [0, 7, 56, 63];
    const startingKnightCells = [8, 15, 48, 55];
    const startingBishopCells = [16, 23, 40, 47];
    const startingQueenCells = [24, 31];
    const startingKingCells = [32, 39];

    for (
      let startingCellIndex = 0;
      startingCellIndex < gridCellIds.length;
      startingCellIndex++
    ) {
      if (startingPawnCells.includes(startingCellIndex)) {
        mappedCellIds[startingCellIndex].textContent =
          chessMovePlaceHolder.pawn;
         
      } else if (startingRookCells.includes(startingCellIndex)) {
        mappedCellIds[startingCellIndex].textContent =
          chessMovePlaceHolder.rook;
      } else if (startingKnightCells.includes(startingCellIndex)) {
        mappedCellIds[startingCellIndex].textContent =
          chessMovePlaceHolder.knight;
      } else if (startingBishopCells.includes(startingCellIndex)) {
        mappedCellIds[startingCellIndex].textContent =
          chessMovePlaceHolder.bishop;
      } else if (startingQueenCells.includes(startingCellIndex)) {
        mappedCellIds[startingCellIndex].textContent =
          chessMovePlaceHolder.queen;
      } else if (startingKingCells.includes(startingCellIndex)) {
        mappedCellIds[startingCellIndex].textContent =
          chessMovePlaceHolder.king;
      }
      else {
        displayGameState.innerText = displayGameStateText.preGameStartingText
        document.body.appendChild(displayGameState)
      }
    }

    return { startingCells };
  };

  const gridCellLocations = () => {
    document.addEventListener("click", (e) => {
      let clickedCell = e.target.id;
      for (let i = 0; i < gridCellIds.length; i++) {
        if (clickedCell === gridCellIds[i]) {
          currentClickedCell = gridCellIds[i];
          console.log(currentClickedCell);
        }
      }
    });
  };
  //event delegation

  const clickRookCell = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    gridContainer.addEventListener("click", (e) => {
      const clickedRookCell = e.target;

      switch (clickedRookCell.id) {
        //rook moves
        case gridCellIds[0]:
        case gridCellIds[7]:
        case gridCellIds[56]:
        case gridCellIds[63]:
          //start of game
          if (
            [0, 7, 56, 63].some(
              (indexNumber) =>
                mappedCellIds[indexNumber].textContent ===
                  chessMovePlaceHolder.rook &&
                trackGameState.emptyFirstMove === stateOfCells.emptyCell
            )
          ) {
            displayGameState.innerText =
              displayGameStateText.ifRookIsClickedAtStart;
          }
          break;
        default:
          break;
      }
    });
    return { clickRookCell };
  };

  const knightMoves = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    gridContainer.addEventListener("click", (e) => {
      const clickedKnightMoves = e.target;
      switch (clickedKnightMoves.id) {
        case gridCellIds[8]:
        case gridCellIds[15]:
        case gridCellIds[48]:
        case gridCellIds[55]:
          if (
            [8, 15, 48, 55].some(
              (indexNumber) =>
                mappedCellIds[indexNumber].textContent ===
                  chessMovePlaceHolder.knight &&
                trackGameState.emptyFirstMove === stateOfCells.emptyCell
            )
          ) {
            displayGameState.innerText = displayGameStateText.ifKnightIsClicked;
          }
          break;
      }
    });
    return { knightMoves };
  };


  const bishopMoves = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    gridContainer.addEventListener("click", (e) => {
      const clickedBishopMoves = e.target;
      switch (clickedBishopMoves.id) {
        case gridCellIds[16]:
        case gridCellIds[23]:
        case gridCellIds[40]:
        case gridCellIds[47]:
          if (
            [16, 23, 40, 47].some(
              (indexNumber) =>
                mappedCellIds[indexNumber].textContent ===
                  chessMovePlaceHolder.bishop &&
                trackGameState.emptyFirstMove === stateOfCells.emptyCell
            )
          ) {
            displayGameState.innerText =
              displayGameStateText.ifBishopIsClickedAtStart;
          }
          break;
      }
      return { bishopMoves };
    });
  };

  //bishop pieces (first move)

  //queen pieces (first move)
  const queenMoves = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    gridContainer.addEventListener("click", (e) => {
      const clickedQueenMoves = e.target;
      switch (clickedQueenMoves.id) {
        case gridCellIds[24]:
        case gridCellIds[31]:
          if (
            [24, 31].some(
              (indexNumber) =>
                mappedCellIds[indexNumber]?.textContent ===
                  chessMovePlaceHolder.queen &&
                trackGameState.emptyFirstMove === stateOfCells.emptyCell
            )
          ) {
            displayGameState.innerText =
              displayGameStateText.ifQueenIsClickedAtStart;
          }
          break;
      }
      return { queenMoves };
    });
  };

  //king pieces (first move)
  const kingMoves = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    gridContainer.addEventListener("click", (e) => {
      const clickedKingMoves = e.target;
      switch (clickedKingMoves.id) {
        case gridCellIds[32]:
        case gridCellIds[39]:
          if (
            [32, 39].some(
              (indexNumber) =>
                mappedCellIds[indexNumber].textContent ===
                  chessMovePlaceHolder.king &&
                trackGameState.emptyFirstMove === stateOfCells.emptyCell
            )
          ) {
            displayGameState.innerText =
              displayGameStateText.ifKingIsClickedAtStart;
          }
      }
    });
    return { kingMoves };
  };

  //positioning for the pawn (separate function will be needed to control movement, but these are conditionals for movement of the pawn)
  const pawnPositioning = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    gridContainer.addEventListener("click", (e) => {
      const clickedPawnMoves = e.target;

      switch (clickedPawnMoves.id) {
        case gridCellIds[1]:
        case gridCellIds[6]:
        case gridCellIds[9]:
        case gridCellIds[14]:
        case gridCellIds[17]:
        case gridCellIds[22]:
        case gridCellIds[25]:
        case gridCellIds[30]:
        case gridCellIds[33]:
        case gridCellIds[38]:
        case gridCellIds[41]:
        case gridCellIds[46]:
        case gridCellIds[49]:
        case gridCellIds[54]:
        case gridCellIds[57]:
        case gridCellIds[62]:
          if (
            [1, 6, 9, 14, 17, 22, 25, 30, 33, 38, 41, 46, 49, 54, 57, 62].some(
              (indexNumber) =>
                mappedCellIds[indexNumber].textContent ===
                  chessMovePlaceHolder.pawn &&
                firstPiece === trackGameState.emptyFirstMove
            )
          ) {
            console.log(firstPiece);
            firstPiece = trackGameState.pawnFirstMove;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
            console.log(trackGameState.trackFirstMove);
          }
      }
    });
  };
  const pawnMovement = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    gridContainer.addEventListener("click", (e) => {
      const movePawn = e.target;
      switch (movePawn.id) {
        case gridCellIds[2]:
          //first move condiitonal
          if (
            currentClickedCell === gridCellIds[1] &&
            firstPiece === trackGameState.pawnFirstMove
          ) {
            mappedCellIds[1].textContent = "";
            mappedCellIds[2].textContent = chessMovePlaceHolder.pawn;
          }
      }
    });
    return { pawnMovement };
  };

  const cellColors = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    const gridColors = {
      //default grid
      bisque: "bisque",
      brown: "#4b2424",
      //woodland grid
      green: "green",
      woodBrown: "#8B4513",
      //checker grid
      red: "red",
      black: "black",
      //blue sky grid
      blue: "blue",
      white: "white",
      //fun kingdom grid
      purple: "purple",
      pink: "pink",
      //classic grid
      classicBlack: "black",
      classicWhite: "white",
      //banana grid
      yellow: "yellow",
      bananaBrown: "#800000",
      //fire and ice grid
      fireRed: "crimson",
      iceBlue: "lightblue",
    };

    const colorSelectAttributes = {
      //ids
      selectId: "colorSelect",

      //values
      selectColor: "selectColor",
      default: "default",
      woodland: "woodland",
      checker: "checker",
      blueSky: "blueSky",
      funKingdom: "funKingdom",
      classic: "classic",
      banana: "banana",
      fireAndIce: "fireAndIce",
    };

    let primaryColor = [
      0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22, 25, 27, 29, 31, 32, 34, 36, 38,
      41, 43, 45, 47, 48, 50, 52, 54, 57, 59, 61, 63,
    ];
    let secondaryColor = [
      1, 3, 5, 7, 8, 10, 12, 14, 17, 19, 21, 23, 24, 26, 28, 30, 33, 35, 37, 39,
      40, 42, 44, 46, 49, 51, 53, 55, 56, 58, 60, 62,
    ];

    for (
      let defaultColorIndex = 0;
      defaultColorIndex < gridCellIds.length;
      defaultColorIndex++
    ) {
      if (primaryColor.includes(defaultColorIndex)) {
        mappedCellIds[defaultColorIndex].style.backgroundColor =
          gridColors.bisque;
        mappedCellIds[defaultColorIndex].style.borderColor = gridColors.bisque;
      } else if (secondaryColor.includes(defaultColorIndex)) {
        mappedCellIds[defaultColorIndex].style.backgroundColor =
          gridColors.brown;
        mappedCellIds[defaultColorIndex].style.borderColor = gridColors.brown;
      }
    }

    colorSelect.addEventListener("input", (e) => {
      const selectedColor = e.target;
      if (selectedColor === colorSelectAttributes.selectId) {
        switch (true) {
          case colorSelect.value === colorSelectAttributes.woodland:
            [mappedCellIds[0]];
        }
      }
    });
    return { cellColors };
  };
  return {
    chessBoard,
    createChessBoard,
    cellColors,
    startingCells,
    clickRookCell,
    knightMoves,
    bishopMoves,
    queenMoves,
    pawnPositioning,
    pawnMovement,
    kingMoves,
    gridCellLocations,
  };
};

export default chessBoard;
