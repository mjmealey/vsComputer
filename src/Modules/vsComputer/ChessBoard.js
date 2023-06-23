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

  const trackGameState = {
    //first move
    emptyFirstMove: "",
    emptyCell: "",
    emptyPieceSelection: "",
    pawnFirstMove: "Pawn",
    knightFirstMove: "Knight",
    isFirstMove: true,
    isNotFirstMove: false,
    isInvalidFirstMove: null,

    //rest of game
    currentRook: "Rook",
    currentBishop: "Bishop",
    currentKnight: "Knight",
    currentQueen: "Queen",
    currentKing: "King",
    currentPawn: "Pawn",
  };

  const startingChessPieces = {
    pawn: "Pawn",
    rook: "Rook",
    queen: "Queen",
    king: "King",
    bishop: "Bishop",
    knight: "Knight",
  };
  const clickedPieces = {
    emptyPiece: "",
    currentPawn: "Pawn",
    currentRook: "Rook",
    currentBishop: "Bishop",
    currentKnight: "Knight",
    currentQueen: "Queen",
    currentKing: "King",
  };

  const PAWN_ASSIGNMENTS = {
    //starting pawn positions
    pawnCell1: {
      pieceName: "Pawn",
      pawnCellNum: 1,
    },
    pawnCell6: {
      pieceName: "Pawn",
      pawnCellNum: 2,
    },
    pawnCell9: {
      pieceName: "Pawn",
      pawnCellNum: 9,
    },
    pawnCell14: {
      pieceName: "Pawn",
      pawnCellNum: 14,
    },
    pawnCell17: {
      pieceName: "Pawn",
      pawnCellNum: 17,
    },
    pawnCell22: {
      pieceName: "Pawn",
      pawnCellNum: 22,
    },
    pawnCell25: {
      pieceName: "Pawn",
      pawnCellNum: 25,
    },
    pawnCell30: {
      pieceName: "Pawn",
      pawnCellNum: 30,
    },
    pawnCell33: {
      pieceName: "Pawn",
      pawnCellNum: 33,
    },
    pawnCell38: {
      pieceName: "Pawn",
      pawnCellNum: 38,
    },
    pawnCell41: {
      pieceName: "Pawn",
      pawnCellNum: 41,
    },
    pawnCell46: {
      pieceName: "Pawn",
      pawnCellNum: 46,
    },
    pawnCell49: {
      pieceName: "Pawn",
      pawnCellNum: 49,
    },
    pawnCell54: {
      pieceName: "Pawn",
      pawnCellNum: 54,
    },
    pawnCell57: {
      pieceName: "Pawn",
      pawnCellNum: 57,
    },
    pawnCell62: {
      pieceName: "Pawn",
      pawnCellNum: 62,
    },
  };

  const ROOK_ASSIGNMENTS = {
    //starting rook positions
    rookCell0: "Rook",
    rookCell7: "Rook",
    rookCell56: "Rook",
    rookCell63: "Rook",
  };

  const KNIGHT_ASSIGNMENTS = {
    //starting knight positions
    knightCell8: "Knight",
    knightCell15: "Knight",
    knightCell48: "Knight",
    knightCell55: "Knight",
  };

  const BISHOP_ASSIGNMENTS = {
    //starting bishop positions
    bishopCell16: "Bishop",
    bishopCell23: "Bishop",
    bishopCell40: "Bishop",
    bishopCell47: "Bishop",
  };

  const QUEEN_ASSIGNMENTS = {
    //starting queen positions
    queenCell24: "Queen",
    queenCell31: "Queen",
  };

  const KING_ASSIGNMENTS = {
    //starting king positions
    kingCell32: "King",
    kingCell39: "King",
  };

  const EMPTY_CELL_ASSIGNMENTS = {
    //empty at start
    emptyCell2: "",
    emptyCell3: "",
    emptyCell4: "",
    emptyCell5: "",
    emptyCell10: "",
    emptyCell11: "",
    emptyCell12: "",
    emptyCell13: "",
    emptyCell18: "",
    emptyCell19: "",
    emptyCell20: "",
    emptyCell21: "",
    emptyCell26: "",
    emptyCell27: "",
    emptyCell28: "",
    emptyCell29: "",
    emptyCell34: "",
    emptyCell35: "",
    emptyCell36: "",
    emptyCell37: "",
    emptyCell42: "",
    emptyCell43: "",
    emptyCell44: "",
    emptyCell45: "",
    emptyCell50: "",
    emptyCell51: "",
    emptyCell52: "",
    emptyCell53: "",
    emptyCell58: "",
    emptyCell59: "",
    emptyCell60: "",
    emptyCell61: "",
  };

  let currentPiece = trackGameState.emptyPieceSelection;
  let currentPawn = trackGameState.emptyPieceSelection;
  let currentlyClickedCell = "";
  let firstPiece = "";
  let firstPawn = "";
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
    return { createChessBoard };
  };

  const startOfGame = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    //empty cell assignments
    if (emptyCellAssignments) {
      displayGameState.innerText = displayGameStateText.preGameStartingText;
      document.body.appendChild(displayGameState);
    } else {
      displayGameState.innerText = displayGameStateText.gameStartingText;
      document.body.appendChild(displayGameState);
    }
    return { startOfGame };
  };

  const pawnCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[1].textContent = PAWN_ASSIGNMENTS.pawnCell1.pieceName;
    mappedCellIds[6].textContent = PAWN_ASSIGNMENTS.pawnCell6.pieceName;
    mappedCellIds[9].textContent = PAWN_ASSIGNMENTS.pawnCell9.pieceName;
    mappedCellIds[14].textContent = PAWN_ASSIGNMENTS.pawnCell14.pieceName;
    mappedCellIds[17].textContent = PAWN_ASSIGNMENTS.pawnCell17.pieceName;
    mappedCellIds[22].textContent = PAWN_ASSIGNMENTS.pawnCell22.pieceName;
    mappedCellIds[25].textContent = PAWN_ASSIGNMENTS.pawnCell25.pieceName;
    mappedCellIds[30].textContent = PAWN_ASSIGNMENTS.pawnCell30.pieceName;
    mappedCellIds[33].textContent = PAWN_ASSIGNMENTS.pawnCell33.pieceName;
    mappedCellIds[38].textContent = PAWN_ASSIGNMENTS.pawnCell38.pieceName;
    mappedCellIds[41].textContent = PAWN_ASSIGNMENTS.pawnCell41.pieceName;
    mappedCellIds[46].textContent = PAWN_ASSIGNMENTS.pawnCell46.pieceName;
    mappedCellIds[49].textContent = PAWN_ASSIGNMENTS.pawnCell49.pieceName;
    mappedCellIds[54].textContent = PAWN_ASSIGNMENTS.pawnCell54.pieceName;
    mappedCellIds[57].textContent = PAWN_ASSIGNMENTS.pawnCell57.pieceName;
    mappedCellIds[62].textContent = PAWN_ASSIGNMENTS.pawnCell62.pieceName;

    return { pawnCellAssignments };
  };

  const rookCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[0].textContent = ROOK_ASSIGNMENTS.rookCell0;
    mappedCellIds[7].textContent = ROOK_ASSIGNMENTS.rookCell7;
    mappedCellIds[56].textContent = ROOK_ASSIGNMENTS.rookCell56;
    mappedCellIds[63].textContent = ROOK_ASSIGNMENTS.rookCell63;

    return { rookCellAssignments };
  };

  const knightCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[8].textContent = KNIGHT_ASSIGNMENTS.knightCell8;
    mappedCellIds[15].textContent = KNIGHT_ASSIGNMENTS.knightCell15;
    mappedCellIds[48].textContent = KNIGHT_ASSIGNMENTS.knightCell48;
    mappedCellIds[55].textContent = KNIGHT_ASSIGNMENTS.knightCell55;

    return { knightCellAssignments };
  };

  const bishopCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[16].textContent = BISHOP_ASSIGNMENTS.bishopCell16;
    mappedCellIds[23].textContent = BISHOP_ASSIGNMENTS.bishopCell23;
    mappedCellIds[40].textContent = BISHOP_ASSIGNMENTS.bishopCell40;
    mappedCellIds[47].textContent = BISHOP_ASSIGNMENTS.bishopCell47;

    return { bishopCellAssignments };
  };

  const queenCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[24].textContent = QUEEN_ASSIGNMENTS.queenCell24;
    mappedCellIds[31].textContent = QUEEN_ASSIGNMENTS.queenCell31;

    return { queenCellAssignments };
  };

  const kingCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[32].textContent = KING_ASSIGNMENTS.kingCell32;
    mappedCellIds[39].textContent = KING_ASSIGNMENTS.kingCell39;

    return { kingCellAssignments };
  };

  const emptyCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[2].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell2;
    mappedCellIds[3].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell3;
    mappedCellIds[4].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell4;
    mappedCellIds[5].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell5;
    mappedCellIds[10].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell10;
    mappedCellIds[11].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell11;
    mappedCellIds[12].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell12;
    mappedCellIds[13].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell13;
    mappedCellIds[18].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell18;
    mappedCellIds[19].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell19;
    mappedCellIds[20].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell20;
    mappedCellIds[21].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell21;
    mappedCellIds[26].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell26;
    mappedCellIds[27].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell27;
    mappedCellIds[28].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell28;
    mappedCellIds[29].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell29;
    mappedCellIds[34].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell34;
    mappedCellIds[35].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell35;
    mappedCellIds[36].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell36;
    mappedCellIds[37].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell37;
    mappedCellIds[42].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell42;
    mappedCellIds[43].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell43;
    mappedCellIds[44].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell44;
    mappedCellIds[45].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell45;
    mappedCellIds[50].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell50;
    mappedCellIds[51].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell51;
    mappedCellIds[52].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell52;
    mappedCellIds[53].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell53;
    mappedCellIds[58].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell58;
    mappedCellIds[59].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell59;
    mappedCellIds[60].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell60;
    mappedCellIds[61].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell61;

    return { emptyCellAssignments };
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
              mappedCellIds[63].textContent === startingChessPieces.rook)
          ) {
            displayGameState.innerText =
              displayGameStateText.ifRookIsClickedAtStart;
          }
          break;
        case gridCellIds[0]:
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
              mappedCellIds[55].textContent === startingChessPieces.knight)
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
              mappedCellIds[47].textContent === startingChessPieces.bishop)
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
              mappedCellIds[31].textContent === startingChessPieces.queen)
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
              mappedCellIds[39].textContent === startingChessPieces.king)
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
    gridContainer.addEventListener("click", (e) => {
      const PAWN_CLICKS = e.target.id;

      switch (PAWN_CLICKS) {
        case gridCellIds[1]:
          if (mappedCellIds[1].textContent === PAWN_ASSIGNMENTS.pawnCell1.pieceName) {
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell1.pawnCellNum;
            console.log(currentPawn);
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[6]:
          if (mappedCellIds[6].textContent === PAWN_ASSIGNMENTS.pawnCell6.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell6.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[9]:
          if (mappedCellIds[9].textContent === PAWN_ASSIGNMENTS.pawnCell9.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell9.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[14]:
          if (mappedCellIds[14].textContent === PAWN_ASSIGNMENTS.pawnCell14.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell14.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[17]:
          if (mappedCellIds[17].textContent === PAWN_ASSIGNMENTS.pawnCell17.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell17.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[22]:
          if (mappedCellIds[22].textContent === PAWN_ASSIGNMENTS.pawnCell22.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell22.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[25]:
          if (mappedCellIds[25].textContent === PAWN_ASSIGNMENTS.pawnCell25.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell25.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[30]:
          if (mappedCellIds[30].textContent === PAWN_ASSIGNMENTS.pawnCell30.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell30.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[33]:
          if (mappedCellIds[33].textContent === PAWN_ASSIGNMENTS.pawnCell33.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell33.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[38]:
          if (mappedCellIds[38].textContent === PAWN_ASSIGNMENTS.pawnCell38.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell38.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[41]:
          if (mappedCellIds[41].textContent === PAWN_ASSIGNMENTS.pawnCell41.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell41.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[46]:
          if (mappedCellIds[46].textContent === PAWN_ASSIGNMENTS.pawnCell46.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell46.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[49]:
          if (mappedCellIds[49].textContent === PAWN_ASSIGNMENTS.pawnCell49.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell49.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[54]:
          if (mappedCellIds[54].textContent === PAWN_ASSIGNMENTS.pawnCell54.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell54.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
        case gridCellIds[57]:
          if (mappedCellIds[57].textContent === PAWN_ASSIGNMENTS.pawnCell57.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell57.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
        case gridCellIds[62]:
          if (mappedCellIds[62].textContent === PAWN_ASSIGNMENTS.pawnCell62.pieceName) {
            
            currentPawn = trackGameState.emptyPieceSelection;
            currentPawn = PAWN_ASSIGNMENTS.pawnCell62.pawnCellNum;
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
      }
    });
    return { clickPawnCell };
  };

  const clickEmptyCell = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    let currentEmptyCell = trackGameState.emptyCell;
    gridContainer.addEventListener("click", (e) => {
      const EMPTY_CELL_CLICKS = e.target.id;

      switch (EMPTY_CELL_CLICKS) {
        case gridCellIds[2]:
          if (
            mappedCellIds[2].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell2
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell2;
          }
          //allows for the farthest left pawn to move from its cell to the next cell
          if (
            mappedCellIds[2].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell2 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell1.pawnCellNum
          ) {
            mappedCellIds[1].textContent = trackGameState.emptyCell;
            mappedCellIds[2].textContent = PAWN_ASSIGNMENTS.pawnCell1.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }

          break;

        case gridCellIds[3]:
          if (
            mappedCellIds[3].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell3
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell3;
          }

          if (
            mappedCellIds[3].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell3 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell1.pawnCellNum
          ) {
            mappedCellIds[1].textContent = trackGameState.emptyCell;
            mappedCellIds[3].textContent = PAWN_ASSIGNMENTS.pawnCell1.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }

          break;
        case gridCellIds[4]:
          if (
            mappedCellIds[4].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell4
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell4;
          }
          if (
            mappedCellIds[4].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell4 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell6.pawnCellNum
          ) {
            mappedCellIds[6].textContent = trackGameState.emptyCell;
            mappedCellIds[4].textContent = PAWN_ASSIGNMENTS.pawnCell6.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[5]:
          if (
            mappedCellIds[5].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell5
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell5;
          }
          if (
            mappedCellIds[5].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell5 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell6.pawnCellNum
          ) {
            mappedCellIds[6].textContent = trackGameState.emptyCell;
            mappedCellIds[5].textContent = PAWN_ASSIGNMENTS.pawnCell6.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[10]:
          if (
            mappedCellIds[10].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell10
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell10;
          }
          if (
            mappedCellIds[10].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell12 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell9.pawnCellNum
          ) {
            mappedCellIds[9].textContent = trackGameState.emptyCell;
            mappedCellIds[10].textContent = PAWN_ASSIGNMENTS.pawnCell9.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }

          break;
        case gridCellIds[11]:
          if (
            mappedCellIds[11].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell11
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell11;
          }
          if (
            mappedCellIds[11].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell11 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell9.pawnCellNum
          ) {
            mappedCellIds[9].textContent = trackGameState.emptyCell;
            mappedCellIds[11].textContent = PAWN_ASSIGNMENTS.pawnCell11.pieceName;
          }
          break;
        case gridCellIds[12]:
          if (
            mappedCellIds[12].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell12
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell12;
          }
          if (
            mappedCellIds[12].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell12 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell14.pawnCellNum
          ) {
            mappedCellIds[14].textContent = trackGameState.emptyPieceSelection;
            mappedCellIds[12].textContent = currentPawn;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[13]:
          if (
            mappedCellIds[13].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell13
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell13;
          }
          if (
            mappedCellIds[13].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell13 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell14.pawnCellNum
          ) {
            mappedCellIds[14].textContent = trackGameState.emptyCell;
            mappedCellIds[13].textContent = PAWN_ASSIGNMENTS.pawnCell14.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[18]:
          if (
            mappedCellIds[18].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell18
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell18;
          }
          if (
            mappedCellIds[18].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell18 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell17.pawnCellNum
          ) {
            mappedCellIds[17].textContent = trackGameState.emptyCell;
            mappedCellIds[18].textContent = PAWN_ASSIGNMENTS.pawnCell17.pieceName
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[19]:
          if (
            mappedCellIds[19].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell19
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell19;
          }
          if (
            mappedCellIds[19].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell19 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell17.pawnCellNum
          ) {
            mappedCellIds[17].textContent = trackGameState.emptyCell;
            mappedCellIds[19].textContent = PAWN_ASSIGNMENTS.pawnCell17.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[20]:
          if (
            mappedCellIds[20].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell20
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell20;
          }
          if (
            mappedCellIds[20].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell20 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell22.pawnCellNum
          ) {
            mappedCellIds[22].textContent = trackGameState.emptyCell;
            mappedCellIds[20].textContent = PAWN_ASSIGNMENTS.pawnCell22.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[21]:
          if (
            mappedCellIds[21].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell21
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell20;
          }
          if (
            mappedCellIds[21].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell21 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell22.pawnCellNum
          ) {
            mappedCellIds[22].textContent = trackGameState.emptyCell;
            mappedCellIds[21].textContent = PAWN_ASSIGNMENTS.pawnCell22.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[26]:
          if (
            mappedCellIds[26].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell26
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell26;
          }
          if (
            mappedCellIds[26].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell26 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell25.pawnCellNum
          ) {
            mappedCellIds[25].textContent = trackGameState.emptyCell;
            mappedCellIds[26].textContent = PAWN_ASSIGNMENTS.pawnCell25.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[27]:
          if (
            mappedCellIds[27].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell26
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell27;
          }
          if (
            mappedCellIds[27].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell27 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell25.pawnCellNum
          ) {
            mappedCellIds[25].textContent = trackGameState.emptyCell;
            mappedCellIds[27].textContent = PAWN_ASSIGNMENTS.pawnCell25.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[28]:
          if (
            mappedCellIds[28].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell28
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell28;
          }
          if (
            mappedCellIds[28].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell28 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell30.pawnCellNum
          ) {
            mappedCellIds[30].textContent = trackGameState.emptyCell;
            mappedCellIds[28].textContent = PAWN_ASSIGNMENTS.pawnCell30.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[29]:
          if (
            mappedCellIds[29].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell29
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell29;
          }
          if (
            mappedCellIds[29].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell29 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell30.pawnCellNum
          ) {
            mappedCellIds[30].textContent = trackGameState.emptyCell;
            mappedCellIds[29].textContent = PAWN_ASSIGNMENTS.pawnCell30.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[34]:
          if (
            mappedCellIds[34].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell29
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell34;
          }
          if (
            mappedCellIds[34].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell34 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell33.pawnCellNum
          ) {
            mappedCellIds[33].textContent = trackGameState.emptyCell;
            mappedCellIds[34].textContent = PAWN_ASSIGNMENTS.pawnCell33.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[35]:
          if (
            mappedCellIds[35].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell35
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell35;
          }
          if (
            mappedCellIds[35].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell35 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell33.pawnCellNum
          ) {
            mappedCellIds[33].textContent = trackGameState.emptyCell;
            mappedCellIds[35].textContent = PAWN_ASSIGNMENTS.pawnCell33.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[36]:
          if (
            mappedCellIds[36].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell36
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell36;
          }
          if (
            mappedCellIds[36].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell36 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell38.pawnCellNum
          ) {
            mappedCellIds[38].textContent = trackGameState.emptyCell;
            mappedCellIds[36].textContent = PAWN_ASSIGNMENTS.pawnCell38.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[37]:
          if (
            mappedCellIds[37].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell37
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell37;
          }
          if (
            mappedCellIds[37].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell37 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell38.pawnCellNum
          ) {
            mappedCellIds[38].textContent = trackGameState.emptyCell;
            mappedCellIds[37].textContent = PAWN_ASSIGNMENTS.pawnCell38.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[42]:
          if (
            mappedCellIds[42].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell42
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell42;
          }
          if (
            mappedCellIds[42].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell42 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell41.pawnCellNum
          ) {
            mappedCellIds[41].textContent = trackGameState.emptyCell;
            mappedCellIds[42].textContent = PAWN_ASSIGNMENTS.pawnCell41.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[43]:
          if (
            mappedCellIds[43].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell43
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell43;
          }
          break;
        case gridCellIds[44]:
          if (
            mappedCellIds[44].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell44
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell44;
          }
          break;
        case gridCellIds[45]:
          if (
            mappedCellIds[45].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell45
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell45;
          }
          if (
            mappedCellIds[45].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell45 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell46.pawnCellNum
          ) {
            mappedCellIds[46].textContent = trackGameState.emptyCell;
            mappedCellIds[45].textContent = PAWN_ASSIGNMENTS.pawnCell46.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[50]:
          if (
            mappedCellIds[50].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell50
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell50;
          }
          if (
            mappedCellIds[50].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell50 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell49.pawnCellNum
          ) {
            mappedCellIds[49].textContent = trackGameState.emptyCell;
            mappedCellIds[50].textContent = PAWN_ASSIGNMENTS.pawnCell49.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }

          break;
        case gridCellIds[51]:
          if (
            mappedCellIds[51].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell51
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell51;
          }
          if (
            mappedCellIds[51].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell51 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell49.pawnCellNum
          ) {
            mappedCellIds[49].textContent = trackGameState.emptyCell;
            mappedCellIds[51].textContent = PAWN_ASSIGNMENTS.pawnCell49.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[52]:
          if (
            mappedCellIds[52].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell52
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell52;
          }
          if (
            mappedCellIds[52].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell52 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell54.pawnCellNum
          ) {
            mappedCellIds[54].textContent = trackGameState.emptyCell;
            mappedCellIds[52].textContent = PAWN_ASSIGNMENTS.pawnCell54.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[53]:
          if (
            mappedCellIds[53].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell53
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell53;
          }
          if (
            mappedCellIds[53].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell53 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell54.pawnCellNum
          ) {
            mappedCellIds[54].textContent = trackGameState.emptyCell;
            mappedCellIds[53].textContent = PAWN_ASSIGNMENTS.pawnCell54.pieceName;
            currentPawn = trackGameState.emptyCell;
          }
          break;
        case gridCellIds[58]:
          if (
            mappedCellIds[58].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell58
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell58;
          }
          if (
            mappedCellIds[58].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell58 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell57.pawnCellNum
          ) {
            mappedCellIds[57].textContent = trackGameState.emptyCell;
            mappedCellIds[58].textContent = PAWN_ASSIGNMENTS.pawnCell57.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[59]:
          if (
            mappedCellIds[59].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell59
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell59;
          }

          if (
            mappedCellIds[59].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell59 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell57.pawnCellNum
          ) {
            mappedCellIds[57].textContent = trackGameState.emptyCell;
            mappedCellIds[59].textContent = PAWN_ASSIGNMENTS.pawnCell57.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
          break;
        case gridCellIds[60]:
          if (
            mappedCellIds[60].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell60
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell60;
          }
          if (
            mappedCellIds[60].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell60 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell62.pawnCellNum
          ) {
            mappedCellIds[62].textContent = trackGameState.emptyCell;
            mappedCellIds[60].textContent = PAWN_ASSIGNMENTS.pawnCell62.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
        case gridCellIds[61]:
          if (
            mappedCellIds[61].textContent === EMPTY_CELL_ASSIGNMENTS.emptyCell61.pawnCellNum
          ) {
            currentEmptyCell = trackGameState.emptyCell;
            currentEmptyCell = EMPTY_CELL_ASSIGNMENTS.emptyCell61;
          }
          if (
            mappedCellIds[61].textContent ===
              EMPTY_CELL_ASSIGNMENTS.emptyCell61 &&
            currentPawn === PAWN_ASSIGNMENTS.pawnCell62.pawnCellNum
          ) {
            mappedCellIds[62].textContent = trackGameState.emptyCell;
            mappedCellIds[61].textContent = PAWN_ASSIGNMENTS.pawnCell62.pieceName;
            currentPawn = trackGameState.emptyPieceSelection;
          }
      }
    });
    return { clickEmptyCell };
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
    startOfGame,
    pawnCellAssignments,
    rookCellAssignments,
    knightCellAssignments,
    bishopCellAssignments,
    queenCellAssignments,
    kingCellAssignments,
    emptyCellAssignments,
    clickRookCell,
    clickKnightCell,
    clickBishopCell,
    clickQueenCell,
    clickKingCell,
    clickPawnCell,
    clickEmptyCell,
  };
};

export default chessBoard;
