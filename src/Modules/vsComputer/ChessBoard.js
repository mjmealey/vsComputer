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

  const chessGame = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    console.log(mappedCellIds);
    console.log(gridCellIds);

    const chessPiecePositions = [
      //top two rows
      [mappedCellIds[0], chessMovePlaceHolder.rook],
      [mappedCellIds[1], chessMovePlaceHolder.pawn],
      [mappedCellIds[8], chessMovePlaceHolder.knight],
      [mappedCellIds[9], chessMovePlaceHolder.pawn],
      [mappedCellIds[16], chessMovePlaceHolder.bishop],
      [mappedCellIds[17], chessMovePlaceHolder.pawn],
      [mappedCellIds[24], chessMovePlaceHolder.queen],
      [mappedCellIds[25], chessMovePlaceHolder.pawn],
      [mappedCellIds[32], chessMovePlaceHolder.king],
      [mappedCellIds[33], chessMovePlaceHolder.pawn],
      [mappedCellIds[40], chessMovePlaceHolder.bishop],
      [mappedCellIds[41], chessMovePlaceHolder.pawn],
      [mappedCellIds[48], chessMovePlaceHolder.knight],
      [mappedCellIds[49], chessMovePlaceHolder.pawn],
      [mappedCellIds[56], chessMovePlaceHolder.rook],
      [mappedCellIds[57], chessMovePlaceHolder.pawn],

      //bottom two rows
      [mappedCellIds[6], chessMovePlaceHolder.pawn],
      [mappedCellIds[7], chessMovePlaceHolder.rook],
      [mappedCellIds[14], chessMovePlaceHolder.pawn],
      [mappedCellIds[15], chessMovePlaceHolder.knight],
      [mappedCellIds[22], chessMovePlaceHolder.pawn],
      [mappedCellIds[23], chessMovePlaceHolder.bishop],
      [mappedCellIds[30], chessMovePlaceHolder.pawn],
      [mappedCellIds[31], chessMovePlaceHolder.queen],
      [mappedCellIds[38], chessMovePlaceHolder.pawn],
      [mappedCellIds[39], chessMovePlaceHolder.king],
      [mappedCellIds[46], chessMovePlaceHolder.pawn],
      [mappedCellIds[47], chessMovePlaceHolder.bishop],
      [mappedCellIds[54], chessMovePlaceHolder.pawn],
      [mappedCellIds[55], chessMovePlaceHolder.knight],
      [mappedCellIds[62], chessMovePlaceHolder.pawn],
      [mappedCellIds[63], chessMovePlaceHolder.rook],
    ];

    chessPiecePositions.forEach(
      ([gridCellIds, chessMovePlaceHolder]) =>
        (gridCellIds.textContent = chessMovePlaceHolder)
    );

    //start of game

    if (
      //rook starting positions
      mappedCellIds[0].textContent === chessMovePlaceHolder.rook &&
      mappedCellIds[7].textContent === chessMovePlaceHolder.rook &&
      mappedCellIds[56].textContent === chessMovePlaceHolder.rook &&
      mappedCellIds[63].textContent === chessMovePlaceHolder.rook &&
      //knight starting positions
      mappedCellIds[8].textContent === chessMovePlaceHolder.knight &&
      mappedCellIds[15].textContent === chessMovePlaceHolder.knight &&
      mappedCellIds[48].textContent === chessMovePlaceHolder.knight &&
      mappedCellIds[55].textContent === chessMovePlaceHolder.knight &&
      //bishop starting positions
      mappedCellIds[16].textContent === chessMovePlaceHolder.bishop &&
      mappedCellIds[23].textContent === chessMovePlaceHolder.bishop &&
      mappedCellIds[40].textContent === chessMovePlaceHolder.bishop &&
      mappedCellIds[47].textContent === chessMovePlaceHolder.bishop &&
      //queen starting positions
      mappedCellIds[24].textContent === chessMovePlaceHolder.queen &&
      mappedCellIds[31].textContent === chessMovePlaceHolder.queen &&
      //king starting positions
      mappedCellIds[32].textContent === chessMovePlaceHolder.king &&
      mappedCellIds[39].textContent === chessMovePlaceHolder.king &&
      //pawn starting positions
      mappedCellIds[1].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[6].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[9].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[14].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[17].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[22].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[25].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[30].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[33].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[38].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[41].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[46].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[49].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[54].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[57].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[62].textContent === chessMovePlaceHolder.pawn &&
      //empty cells (at start of game)
      mappedCellIds[2].textContent === stateOfCells.emptyCell &&
      mappedCellIds[3].textContent === stateOfCells.emptyCell &&
      mappedCellIds[4].textContent === stateOfCells.emptyCell &&
      mappedCellIds[5].textContent === stateOfCells.emptyCell &&
      mappedCellIds[10].textContent === stateOfCells.emptyCell &&
      mappedCellIds[11].textContent === stateOfCells.emptyCell &&
      mappedCellIds[12].textContent === stateOfCells.emptyCell &&
      mappedCellIds[13].textContent === stateOfCells.emptyCell &&
      mappedCellIds[18].textContent === stateOfCells.emptyCell &&
      mappedCellIds[19].textContent === stateOfCells.emptyCell &&
      mappedCellIds[20].textContent === stateOfCells.emptyCell &&
      mappedCellIds[21].textContent === stateOfCells.emptyCell &&
      mappedCellIds[26].textContent === stateOfCells.emptyCell &&
      mappedCellIds[27].textContent === stateOfCells.emptyCell &&
      mappedCellIds[28].textContent === stateOfCells.emptyCell &&
      mappedCellIds[29].textContent === stateOfCells.emptyCell &&
      mappedCellIds[34].textContent === stateOfCells.emptyCell &&
      mappedCellIds[35].textContent === stateOfCells.emptyCell &&
      mappedCellIds[36].textContent === stateOfCells.emptyCell &&
      mappedCellIds[37].textContent === stateOfCells.emptyCell &&
      mappedCellIds[42].textContent === stateOfCells.emptyCell &&
      mappedCellIds[43].textContent === stateOfCells.emptyCell &&
      mappedCellIds[44].textContent === stateOfCells.emptyCell &&
      mappedCellIds[45].textContent === stateOfCells.emptyCell &&
      mappedCellIds[50].textContent === stateOfCells.emptyCell &&
      mappedCellIds[51].textContent === stateOfCells.emptyCell &&
      mappedCellIds[52].textContent === stateOfCells.emptyCell &&
      mappedCellIds[53].textContent === stateOfCells.emptyCell &&
      mappedCellIds[58].textContent === stateOfCells.emptyCell &&
      mappedCellIds[59].textContent === stateOfCells.emptyCell &&
      mappedCellIds[60].textContent === stateOfCells.emptyCell &&
      mappedCellIds[61].textContent === stateOfCells.emptyCell
    ) {
      displayGameState.innerText = displayGameStateText.preGameStartingText;
      document.body.appendChild(displayGameState);
    } else {
      displayGameState.innerText = displayGameStateText.gameStartingText;
    }
  };
  const gridCellLocations = () => {
    document.addEventListener("click", (e) => {
      let clickedId = e.target;
      switch (clickedId.id) {
        case gridCellIds[0]:
          currentClickedCell = gridCellIds[0];
          
          break;
        case gridCellIds[1]:
          currentClickedCell = gridCellIds[1];
          break;
        case gridCellIds[2]:
          currentClickedCell = gridCellIds[2];
          break;
        case gridCellIds[3]:
          currentClickedCell = gridCellIds[3];
          break;
        case gridCellIds[4]:
          currentClickedCell = gridCellIds[4];
          break;
        case gridCellIds[5]:
          currentClickedCell = gridCellIds[5];
          break;
        case gridCellIds[6]:
          currentClickedCell = gridCellIds[6];
          break;
        case gridCellIds[7]:
          currentClickedCell = gridCellIds[7];
          break;
        case gridCellIds[8]:
          currentClickedCell = gridCellIds[8];
          break;
        case gridCellIds[9]:
          currentClickedCell = gridCellIds[9];
           break;
        case gridCellIds[10]:
          currentClickedCell = gridCellIds[10];
          break;
        case gridCellIds[11]:
          currentClickedCell = gridCellIds[11];
          break;
        case gridCellIds[12]:
          currentClickedCell = gridCellIds[12];
          break;
        case gridCellIds[13]:
          currentClickedCell = gridCellIds[13];
          break;
        case gridCellIds[14]:
          currentClickedCell = gridCellIds[14];
          break;
        case gridCellIds[15]:
          currentClickedCell = gridCellIds[15];
          break;
        case gridCellIds[16]:
          currentClickedCell = gridCellIds[16];
          break;
        case gridCellIds[17]:
          currentClickedCell = gridCellIds[17];
          break;
        case gridCellIds[18]:
          currentClickedCell = gridCellIds[18];  
      }
    });
    return { gridCellLocations };
  };

  //event delegation

  const rookMoves = (mappedCellIds) => {
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
    return { rookMoves };
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
            firstPiece = trackGameState.pawnFirstMove
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
        if(currentClickedCell === gridCellIds[1] && firstPiece === trackGameState.pawnFirstMove){
          mappedCellIds[1].textContent = ""
          mappedCellIds[2].textContent = chessMovePlaceHolder.pawn
        } else if(currentClickedCell === gridCellIds[2] && firstPiece === trackGameState.pawnFirstMove){
            mappedCellIds[14].textContent = trackGameState.emptyCell
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

    const colorSelect = document.getElementById(colorSelectAttributes.selectId);
    //enabled by default
    const defaultCellColors = [
      [mappedCellIds[0], gridColors.bisque],
      [mappedCellIds[1], gridColors.brown],
      [mappedCellIds[2], gridColors.bisque],
      [mappedCellIds[3], gridColors.brown],
      [mappedCellIds[4], gridColors.bisque],
      [mappedCellIds[5], gridColors.brown],
      [mappedCellIds[6], gridColors.bisque],
      [mappedCellIds[7], gridColors.brown],
      [mappedCellIds[8], gridColors.brown],
      [mappedCellIds[9], gridColors.bisque],
      [mappedCellIds[10], gridColors.brown],
      [mappedCellIds[11], gridColors.bisque],
      [mappedCellIds[12], gridColors.brown],
      [mappedCellIds[13], gridColors.bisque],
      [mappedCellIds[14], gridColors.brown],
      [mappedCellIds[15], gridColors.bisque],
      [mappedCellIds[16], gridColors.bisque],
      [mappedCellIds[17], gridColors.brown],
      [mappedCellIds[18], gridColors.bisque],
      [mappedCellIds[19], gridColors.brown],
      [mappedCellIds[20], gridColors.bisque],
      [mappedCellIds[21], gridColors.brown],
      [mappedCellIds[22], gridColors.bisque],
      [mappedCellIds[23], gridColors.brown],
      [mappedCellIds[24], gridColors.brown],
      [mappedCellIds[25], gridColors.bisque],
      [mappedCellIds[26], gridColors.brown],
      [mappedCellIds[27], gridColors.bisque],
      [mappedCellIds[28], gridColors.brown],
      [mappedCellIds[29], gridColors.bisque],
      [mappedCellIds[30], gridColors.brown],
      [mappedCellIds[31], gridColors.bisque],
      [mappedCellIds[32], gridColors.bisque],
      [mappedCellIds[33], gridColors.brown],
      [mappedCellIds[34], gridColors.bisque],
      [mappedCellIds[35], gridColors.brown],
      [mappedCellIds[36], gridColors.bisque],
      [mappedCellIds[37], gridColors.brown],
      [mappedCellIds[38], gridColors.bisque],
      [mappedCellIds[39], gridColors.brown],
      [mappedCellIds[40], gridColors.brown],
      [mappedCellIds[41], gridColors.bisque],
      [mappedCellIds[42], gridColors.brown],
      [mappedCellIds[43], gridColors.bisque],
      [mappedCellIds[44], gridColors.brown],
      [mappedCellIds[45], gridColors.bisque],
      [mappedCellIds[46], gridColors.brown],
      [mappedCellIds[47], gridColors.bisque],
      [mappedCellIds[48], gridColors.bisque],
      [mappedCellIds[49], gridColors.brown],
      [mappedCellIds[50], gridColors.bisque],
      [mappedCellIds[51], gridColors.brown],
      [mappedCellIds[52], gridColors.bisque],
      [mappedCellIds[53], gridColors.brown],
      [mappedCellIds[54], gridColors.bisque],
      [mappedCellIds[55], gridColors.brown],
      [mappedCellIds[56], gridColors.brown],
      [mappedCellIds[57], gridColors.bisque],
      [mappedCellIds[58], gridColors.brown],
      [mappedCellIds[59], gridColors.bisque],
      [mappedCellIds[60], gridColors.brown],
      [mappedCellIds[61], gridColors.bisque],
      [mappedCellIds[62], gridColors.brown],
      [mappedCellIds[63], gridColors.bisque],
    ];
    defaultCellColors.forEach(([mappedCellIds, gridColors]) => {
      mappedCellIds.style.backgroundColor = gridColors;
      mappedCellIds.style.borderColor = gridColors;
    });

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
    chessGame,
    rookMoves,
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
