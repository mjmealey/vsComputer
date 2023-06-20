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

  let currentlyClickedCell = "";
  let previouslyClickedCell = "";
  //first move variable

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
        displayGameState.innerText = displayGameStateText.preGameStartingText;
      } else if (startingRookCells.includes(startingCellIndex)) {
        mappedCellIds[startingCellIndex].textContent =
          chessMovePlaceHolder.rook;
        displayGameState.innerText = displayGameStateText.preGameStartingText;
      } else if (startingKnightCells.includes(startingCellIndex)) {
        mappedCellIds[startingCellIndex].textContent =
          chessMovePlaceHolder.knight;
        displayGameState.innerText = displayGameStateText.preGameStartingText;
      } else if (startingBishopCells.includes(startingCellIndex)) {
        mappedCellIds[startingCellIndex].textContent =
          chessMovePlaceHolder.bishop;
        displayGameState.innerText = displayGameStateText.preGameStartingText;
      } else if (startingQueenCells.includes(startingCellIndex)) {
        mappedCellIds[startingCellIndex].textContent =
          chessMovePlaceHolder.queen;
        displayGameState.innerText = displayGameStateText.preGameStartingText;
      } else if (startingKingCells.includes(startingCellIndex)) {
        mappedCellIds[startingCellIndex].textContent =
          chessMovePlaceHolder.king;
        displayGameState.innerText = displayGameStateText.preGameStartingText;
      } else {
        displayGameState.innerText = displayGameStateText.gameStartingText;

        document.body.appendChild(displayGameState);
      }
    }

    return { startingCells };
  };

  const clickGridCells = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    document.addEventListener("click", (e) => {
      //accesses the contents of each individual cell
      const clickedCell = e.target.id;
      switch (clickedCell) {
        //rook starting cells
        case gridCellIds[0]:
          currentlyClickedCell = gridCellIds[0];
          console.log(currentlyClickedCell);
          break;
        case gridCellIds[7]:
          currentlyClickedCell = gridCellIds[7];
          break;
        case gridCellIds[56]:
          currentlyClickedCell = gridCellIds[56];
          break;
        case gridCellIds[63]:
          currentlyClickedCell = gridCellIds[63];
          break;

        //knight starting cells
        case gridCellIds[8]:
          currentlyClickedCell = gridCellIds[8];
          console.log(currentlyClickedCell);
        case gridCellIds[15]:
          currentlyClickedCell = gridCellIds[15];
          console.log(currentlyClickedCell);
        case gridCellIds[48]:
          currentlyClickedCell = gridCellIds[48];
        case gridCellIds[55]:
          currentlyClickedCell = gridCellIds[55];
          break;

        //bishop starting cells
        case gridCellIds[16]:
          currentlyClickedCell = gridCellIds[16];
          break;
        case gridCellIds[23]:
          currentlyClickedCell = gridCellIds[23];
          break;
        case gridCellIds[40]:
          currentlyClickedCell = gridCellIds[40];
          break;
        case gridCellIds[47]:
          currentlyClickedCell = gridCellIds[47];
          break;

        //queen starting cells
        case gridCellIds[24]:
          currentlyClickedCell = gridCellIds[24];
          break;
        case gridCellIds[31]:
          currentlyClickedCell = gridCellIds[31];
          break;

        //king starting cells
        case gridCellIds[32]:
          currentlyClickedCell = gridCellIds[32];
          break;
        case gridCellIds[39]:
          currentlyClickedCell = gridCellIds[39];
          break;

        //pawn starting cells
        case gridCellIds[1]:
          currentlyClickedCell = gridCellIds[1];
          break;
        case gridCellIds[6]:
          currentlyClickedCell = gridCellIds[6];
          break;
        case gridCellIds[9]:
          currentlyClickedCell = gridCellIds[9];
          break;
        case gridCellIds[14]:
          currentlyClickedCell = gridCellIds[14];
          break;
        case gridCellIds[17]:
          currentlyClickedCell = gridCellIds[17];
          break;
        case gridCellIds[22]:
          currentlyClickedCell = gridCellIds[22];
          break;
        case gridCellIds[25]:
          currentlyClickedCell = gridCellIds[25];
          break;
        case gridCellIds[30]:
          currentlyClickedCell = gridCellIds[30];
          break;
        case gridCellIds[33]:
          currentlyClickedCell = gridCellIds[33];
          break;
        case gridCellIds[38]:
          currentlyClickedCell = gridCellIds[38];
          break;
        case gridCellIds[41]:
          currentlyClickedCell = gridCellIds[41];
          break;
        case gridCellIds[46]:
          currentlyClickedCell = gridCellIds[46];
          break;
        case gridCellIds[49]:
          currentlyClickedCell = gridCellIds[49];
          break;
        case gridCellIds[54]:
          currentlyClickedCell = gridCellIds[54];
          break;
        case gridCellIds[57]:
          currentlyClickedCell = gridCellIds[57];
          break;
        case gridCellIds[62]:
          currentlyClickedCell = gridCellIds[62];
          break;
      }

      for (let i = 0; i < gridCellIds.length; i++) {
        if (clickedCell === gridCellIds[i]) {
          currentlyClickedCell = gridCellIds[i];
          console.log(currentlyClickedCell);
        }
      }
    });
    return { clickGridCells };
  };
  //event delegation

  const clickRookCell = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    document.addEventListener("click", (e) => {
      const rookClicks = e.target.id;
      console.log(gridCellIds);

      //start of game
      switch (rookClicks) {
        case gridCellIds[0]:
        case gridCellIds[7]:
        case gridCellIds[56]:
        case gridCellIds[63]:
          if (
            currentlyClickedCell === gridCellIds[0] ||
            gridCellIds[7] ||
            gridCellIds[56] ||
            (gridCellIds[63] &&
              mappedCellIds[0].textContent &&
              mappedCellIds[7].textContent &&
              mappedCellIds[56].textContent &&
              mappedCellIds[63].textContent === chessMovePlaceHolder.rook)
          ) {
            displayGameState.innerText =
              displayGameStateText.ifRookIsClickedAtStart;
          }
          break;
      }
    });
    return { clickRookCell };
  };

  const clickKnightCell = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    document.addEventListener("click", (e) => {
      const KNIGHT_CLICKS = e.target.id;

      switch (KNIGHT_CLICKS) {
        case gridCellIds[8]:
        case gridCellIds[15]:
        case gridCellIds[48]:
        case gridCellIds[55]:
          if (
            currentlyClickedCell === gridCellIds[8] ||
            gridCellIds[15] ||
            gridCellIds[48] ||
            (gridCellIds[55] &&
              mappedCellIds[8].textContent &&
              mappedCellIds[15].textContent &&
              mappedCellIds[48].textContent &&
              mappedCellIds[55].textContent === chessMovePlaceHolder.knight)
          ) {
            displayGameState.innerText = displayGameStateText.ifKnightIsClicked;
          }
          break;
      }
    });
    return { clickKnightCell };
  };

  const clickBishopCell = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    document.addEventListener("click", (e) => {
      const BISHOP_CLICKS = e.target.id;

      switch (BISHOP_CLICKS) {
        case gridCellIds[16]:
        case gridCellIds[23]:
        case gridCellIds[40]:
        case gridCellIds[47]:
          if (
            currentlyClickedCell === gridCellIds[16] ||
            gridCellIds[23] ||
            gridCellIds[40] ||
            (gridCellIds[47] &&
              mappedCellIds[16].textContent &&
              mappedCellIds[23].textContent &&
              mappedCellIds[40].textContent &&
              mappedCellIds[47].textContent === chessMovePlaceHolder.bishop)
          ) {
            displayGameState.innerText =
              displayGameStateText.ifBishopIsClickedAtStart;
          }
      }
    });
    return { clickBishopCell };
  };

  const clickQueenCell = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    document.addEventListener("click", (e) => {
      const QUEEN_CLICKS = e.target.id;

      switch (QUEEN_CLICKS) {
        case gridCellIds[24]:
        case gridCellIds[31]:
          if (
            currentlyClickedCell === gridCellIds[24] ||
            (gridCellIds[31] &&
              mappedCellIds[24].textContent &&
              mappedCellIds[31].textContent === chessMovePlaceHolder.queen)
          ) {
            displayGameState.innerText =
              displayGameStateText.ifQueenIsClickedAtStart;
          }
      }
    });
    return { clickQueenCell };
  };

  const clickKingCell = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    document.addEventListener("click", (e) => {
      const KING_CLICKS = e.target.id;

      switch (KING_CLICKS) {
        case gridCellIds[32]:
        case gridCellIds[39]:
          if (
            currentlyClickedCell === gridCellIds[32] ||
            (gridCellIds[39] &&
              mappedCellIds[32].textContent &&
              mappedCellIds[39].textContent === chessMovePlaceHolder.king)
          ) {
            displayGameState.innerText =
              displayGameStateText.ifKingIsClickedAtStart;
          }
      }
    });
    return { clickKingCell };
  };

  const clickPawnCell = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    document.addEventListener("click", (e) => {
      const PAWN_CLICKS = e.target.id;

      switch (PAWN_CLICKS) {
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
            currentlyClickedCell === gridCellIds[1] ||
            gridCellIds[6] ||
            gridCellIds[9] ||
            gridCellIds[14] ||
            gridCellIds[17] ||
            gridCellIds[22] ||
            gridCellIds[25] ||
            gridCellIds[30] ||
            gridCellIds[33] ||
            gridCellIds[38] ||
            gridCellIds[41] ||
            gridCellIds[46] ||
            gridCellIds[49] ||
            gridCellIds[54] ||
            gridCellIds[57] ||
            gridCellIds[62] && mappedCellIds[6].textContent && mappedCellIds[9].textContent && mappedCellIds[14].textContent && mappedCellIds[17].textContent && mappedCellIds[22].textContent && mappedCellIds[25].textContent && mappedCellIds[30].textContent && mappedCellIds[33].textContent && mappedCellIds[38].textContent && mappedCellIds[41].textContent && mappedCellIds[46].textContent && mappedCellIds[49].textContent && mappedCellIds[54].textContent && mappedCellIds[57].textContent && mappedCellIds[62].textContent === chessMovePlaceHolder.pawn
          ) {
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked
          }

      }
    });
    return {clickPawnCell}
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
      //kingdom grid
      yellow: "yellow",
      blue: "blue",
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
      kingdom: "kingdom",
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
      const selectedColor = e.target.id;
      if (selectedColor === colorSelectAttributes.selectId) {
        switch (true) {
          case colorSelect.value === colorSelectAttributes.default:
            gridCellIds.forEach((_, defaultColors) => {
              if (primaryColor.includes(defaultColors)) {
                mappedCellIds[defaultColors].style.backgroundColor =
                  gridColors.bisque;
                mappedCellIds[defaultColors].style.borderColor =
                  gridColors.bisque;
              } else if (secondaryColor.includes(defaultColors)) {
                mappedCellIds[defaultColors].style.backgroundColor =
                  gridColors.brown;
                mappedCellIds[defaultColors].style.borderColor =
                  gridColors.brown;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributes.woodland:
            gridCellIds.forEach((_, woodlandColorIndex) => {
              if (primaryColor.includes(woodlandColorIndex)) {
                mappedCellIds[woodlandColorIndex].style.backgroundColor =
                  gridColors.green;
                mappedCellIds[woodlandColorIndex].style.borderColor =
                  gridColors.green;
              } else if (secondaryColor.includes(woodlandColorIndex)) {
                mappedCellIds[woodlandColorIndex].style.backgroundColor =
                  gridColors.woodBrown;
                mappedCellIds[woodlandColorIndex].style.borderColor =
                  gridColors.woodBrown;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributes.checker:
            gridCellIds.forEach((_, checkerColorIndex) => {
              if (primaryColor.includes(checkerColorIndex)) {
                mappedCellIds[checkerColorIndex].style.backgroundColor =
                  gridColors.red;
                mappedCellIds[checkerColorIndex].style.borderColor =
                  gridColors.red;
              } else if (secondaryColor.includes(checkerColorIndex)) {
                mappedCellIds[checkerColorIndex].style.backgroundColor =
                  gridColors.black;
                mappedCellIds[checkerColorIndex].style.borderColor =
                  gridColors.black;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributes.blueSky:
            gridCellIds.forEach((_, blueSkyColorIndex) => {
              if (primaryColor.includes(blueSkyColorIndex)) {
                mappedCellIds[blueSkyColorIndex].style.backgroundColor =
                  gridColors.blue;
                mappedCellIds[blueSkyColorIndex].style.borderColor =
                  gridColors.blue;
              } else if (secondaryColor.includes(blueSkyColorIndex)) {
                mappedCellIds[blueSkyColorIndex].style.backgroundColor =
                  gridColors.white;
                mappedCellIds[blueSkyColorIndex].style.borderColor =
                  gridColors.white;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributes.funKingdom:
            gridCellIds.forEach((_, funKingdomColorIndex) => {
              if (primaryColor.includes(funKingdomColorIndex)) {
                mappedCellIds[funKingdomColorIndex].style.backgroundColor =
                  gridColors.purple;
                mappedCellIds[funKingdomColorIndex].style.borderColor =
                  gridColors.purple;
              } else if (secondaryColor.includes(funKingdomColorIndex)) {
                mappedCellIds[funKingdomColorIndex].style.backgroundColor =
                  gridColors.pink;
                mappedCellIds[funKingdomColorIndex].style.borderColor =
                  gridColors.pink;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributes.classic:
            gridCellIds.forEach((_, classicColorIndex) => {
              if (primaryColor.includes(classicColorIndex)) {
                mappedCellIds[classicColorIndex].style.backgroundColor =
                  gridColors.classicWhite;
                mappedCellIds[classicColorIndex].style.borderColor =
                  gridColors.classicWhite;
              } else if (secondaryColor.includes(classicColorIndex)) {
                mappedCellIds[classicColorIndex].style.backgroundColor =
                  gridColors.classicBlack;
                mappedCellIds[classicColorIndex].style.borderColor =
                  gridColors.classicBlack;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributes.kingdom:
            gridCellIds.forEach((_, kingdomColorIndex) => {
              if (primaryColor.includes(kingdomColorIndex)) {
                mappedCellIds[kingdomColorIndex].style.backgroundColor =
                  gridColors.blue;
                mappedCellIds[kingdomColorIndex].style.borderColor =
                  gridColors.blue;
              } else if (secondaryColor.includes(kingdomColorIndex)) {
                mappedCellIds[kingdomColorIndex].style.backgroundColor =
                  gridColors.yellow;
                mappedCellIds[kingdomColorIndex].style.borderColor =
                  gridColors.yellow;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributes.fireAndIce:
            gridCellIds.forEach((_, fireAndIceColorIndex) => {
              if (primaryColor.includes(fireAndIceColorIndex)) {
                mappedCellIds[fireAndIceColorIndex].style.backgroundColor =
                  gridColors.iceBlue;
                mappedCellIds[fireAndIceColorIndex].style.borderColor =
                  gridColors.iceBlue;
              } else if (secondaryColor.includes(fireAndIceColorIndex)) {
                mappedCellIds[fireAndIceColorIndex].style.backgroundColor =
                  gridColors.fireRed;
                mappedCellIds[fireAndIceColorIndex].style.borderColor =
                  gridColors.fireRed;
              }
            });
            break;
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
    clickKnightCell,
    clickBishopCell,
    clickQueenCell,
    clickKingCell,
    clickPawnCell,
    clickGridCells,
  };
};

export default chessBoard;
