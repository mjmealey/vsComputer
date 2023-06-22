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

  const PIECE_ASSIGNMENTS = {
    //assigned rook pieces
    rookCell0: "Rook",
    rookCell7: "Rook",
    rookCell56: "Rook",
    rookCell63: "Rook",

    //assigned knight pieces
    knightCell8: "Knight",
    knightCell15: "Knight",
    knightCell48: "Knight",
    knightCell55: "Knight",

    //assigned bishop pieces
    bishopCell16: "Bishop",
    bishopCell23: "Bishop",
    bishopCell40: "Bishop",
    bishopCell47: "Bishop",

    //assigned queen pieces
    queenCell24: "Queen",
    queenCell31: "Queen",

    //assigned king pieces
    kingCell32: "King",
    kingCell39: "King",

    //assigned pawn pieces
    pawnCell1: "Pawn",
    pawnCell6: "Pawn",
    pawnCell9: "Pawn",
    pawnCell14: "Pawn",
    pawnCell17: "Pawn",
    pawnCell22: "Pawn",
    pawnCell25: "Pawn",
    pawnCell30: "Pawn",
    pawnCell33: "Pawn",
    pawnCell38: "Pawn",
    pawnCell41: "Pawn",
    pawnCell46: "Pawn",
    pawnCell49: "Pawn",
    pawnCell54: "Pawn",
    pawnCell57: "Pawn",
    pawnCell62: "Pawn",

    //empty cells at start
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
  let currentlyClickedCell = "";
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

    mappedCellIds[1].textContent = PIECE_ASSIGNMENTS.pawnCell1;
    mappedCellIds[6].textContent = PIECE_ASSIGNMENTS.pawnCell6;
    mappedCellIds[9].textContent = PIECE_ASSIGNMENTS.pawnCell9;
    mappedCellIds[14].textContent = PIECE_ASSIGNMENTS.pawnCell14;
    mappedCellIds[17].textContent = PIECE_ASSIGNMENTS.pawnCell17;
    mappedCellIds[22].textContent = PIECE_ASSIGNMENTS.pawnCell22;
    mappedCellIds[25].textContent = PIECE_ASSIGNMENTS.pawnCell25;
    mappedCellIds[30].textContent = PIECE_ASSIGNMENTS.pawnCell30;
    mappedCellIds[33].textContent = PIECE_ASSIGNMENTS.pawnCell33;
    mappedCellIds[38].textContent = PIECE_ASSIGNMENTS.pawnCell38;
    mappedCellIds[41].textContent = PIECE_ASSIGNMENTS.pawnCell41;
    mappedCellIds[46].textContent = PIECE_ASSIGNMENTS.pawnCell46;
    mappedCellIds[49].textContent = PIECE_ASSIGNMENTS.pawnCell49;
    mappedCellIds[54].textContent = PIECE_ASSIGNMENTS.pawnCell54;
    mappedCellIds[57].textContent = PIECE_ASSIGNMENTS.pawnCell57;
    mappedCellIds[62].textContent = PIECE_ASSIGNMENTS.pawnCell62;

    return { pawnCellAssignments };
  };

  const rookCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[0].textContent = PIECE_ASSIGNMENTS.rookCell0;
    mappedCellIds[7].textContent = PIECE_ASSIGNMENTS.rookCell7;
    mappedCellIds[56].textContent = PIECE_ASSIGNMENTS.rookCell56;
    mappedCellIds[63].textContent = PIECE_ASSIGNMENTS.rookCell63;

    return { rookCellAssignments };
  };

  const knightCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[8].textContent = PIECE_ASSIGNMENTS.knightCell8;
    mappedCellIds[15].textContent = PIECE_ASSIGNMENTS.knightCell15;
    mappedCellIds[48].textContent = PIECE_ASSIGNMENTS.knightCell48;
    mappedCellIds[55].textContent = PIECE_ASSIGNMENTS.knightCell55;

    return { knightCellAssignments };
  };

  const bishopCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[16].textContent = PIECE_ASSIGNMENTS.bishopCell16;
    mappedCellIds[23].textContent = PIECE_ASSIGNMENTS.bishopCell23;
    mappedCellIds[40].textContent = PIECE_ASSIGNMENTS.bishopCell40;
    mappedCellIds[47].textContent = PIECE_ASSIGNMENTS.bishopCell47;

    return { bishopCellAssignments };
  };

  const queenCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[24].textContent = PIECE_ASSIGNMENTS.queenCell24;
    mappedCellIds[31].textContent = PIECE_ASSIGNMENTS.queenCell31;

    return { queenCellAssignments };
  };

  const kingCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[32].textContent = PIECE_ASSIGNMENTS.kingCell32;
    mappedCellIds[39].textContent = PIECE_ASSIGNMENTS.kingCell39;

    return { kingCellAssignments };
  };

  const emptyCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[2].textContent = PIECE_ASSIGNMENTS.emptyCell2;
    mappedCellIds[3].textContent = PIECE_ASSIGNMENTS.emptyCell3;
    mappedCellIds[4].textContent = PIECE_ASSIGNMENTS.emptyCell4;
    mappedCellIds[5].textContent = PIECE_ASSIGNMENTS.emptyCell5;
    mappedCellIds[10].textContent = PIECE_ASSIGNMENTS.emptyCell10;
    mappedCellIds[11].textContent = PIECE_ASSIGNMENTS.emptyCell11;
    mappedCellIds[12].textContent = PIECE_ASSIGNMENTS.emptyCell12;
    mappedCellIds[13].textContent = PIECE_ASSIGNMENTS.emptyCell13;
    mappedCellIds[18].textContent = PIECE_ASSIGNMENTS.emptyCell18;
    mappedCellIds[19].textContent = PIECE_ASSIGNMENTS.emptyCell19;
    mappedCellIds[20].textContent = PIECE_ASSIGNMENTS.emptyCell20;
    mappedCellIds[21].textContent = PIECE_ASSIGNMENTS.emptyCell21;
    mappedCellIds[26].textContent = PIECE_ASSIGNMENTS.emptyCell26;
    mappedCellIds[27].textContent = PIECE_ASSIGNMENTS.emptyCell27;
    mappedCellIds[28].textContent = PIECE_ASSIGNMENTS.emptyCell28;
    mappedCellIds[29].textContent = PIECE_ASSIGNMENTS.emptyCell29;
    mappedCellIds[34].textContent = PIECE_ASSIGNMENTS.emptyCell34;
    mappedCellIds[35].textContent = PIECE_ASSIGNMENTS.emptyCell35;
    mappedCellIds[36].textContent = PIECE_ASSIGNMENTS.emptyCell36;
    mappedCellIds[37].textContent = PIECE_ASSIGNMENTS.emptyCell37;
    mappedCellIds[42].textContent = PIECE_ASSIGNMENTS.emptyCell42;
    mappedCellIds[43].textContent = PIECE_ASSIGNMENTS.emptyCell43;
    mappedCellIds[44].textContent = PIECE_ASSIGNMENTS.emptyCell44;
    mappedCellIds[45].textContent = PIECE_ASSIGNMENTS.emptyCell45;
    mappedCellIds[50].textContent = PIECE_ASSIGNMENTS.emptyCell50;
    mappedCellIds[51].textContent = PIECE_ASSIGNMENTS.emptyCell51;
    mappedCellIds[52].textContent = PIECE_ASSIGNMENTS.emptyCell52;
    mappedCellIds[53].textContent = PIECE_ASSIGNMENTS.emptyCell53;
    mappedCellIds[58].textContent = PIECE_ASSIGNMENTS.emptyCell58;
    mappedCellIds[59].textContent = PIECE_ASSIGNMENTS.emptyCell59;
    mappedCellIds[60].textContent = PIECE_ASSIGNMENTS.emptyCell60;
    mappedCellIds[61].textContent = PIECE_ASSIGNMENTS.emptyCell61;

    return { emptyCellAssignments };
  };

  const clickGridCells = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    let currentCell = trackGameState.emptyCell;
    let firstPiece = "";
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
          mappedCellIds[6].textContent = trackGameState.emptyCell;
          mappedCellIds[6].textContent = PIECE_ASSIGNMENTS.pawnCell6;
          break;
        case gridCellIds[9]:
          currentlyClickedCell = gridCellIds[9];
          mappedCellIds[9].textContent = trackGameState.emptyCell;
          mappedCellIds[9].textContent = PIECE_ASSIGNMENTS.pawnCell9;
          break;
        case gridCellIds[14]:
          currentlyClickedCell = gridCellIds[14];
          mappedCellIds[14].textContent = trackGameState.emptyCell;
          mappedCellIds[14].textContent = PIECE_ASSIGNMENTS.pawnCell14;
          break;
        case gridCellIds[17]:
          currentlyClickedCell = gridCellIds[17];
          mappedCellIds[17].textContent = trackGameState.emptyCell;
          mappedCellIds[17].textContent = PIECE_ASSIGNMENTS.pawnCell17;
          break;
        case gridCellIds[22]:
          currentlyClickedCell = gridCellIds[22];
          mappedCellIds[22].textContent = trackGameState.emptyCell;
          mappedCellIds[22].textContent = PIECE_ASSIGNMENTS.pawnCell22;
          break;
        case gridCellIds[25]:
          currentlyClickedCell = gridCellIds[25];
          mappedCellIds[25].textContent = trackGameState.emptyCell;
          mappedCellIds[25].textContent = PIECE_ASSIGNMENTS.pawnCell25;
          break;
        case gridCellIds[30]:
          currentlyClickedCell = gridCellIds[30];
          mappedCellIds[30].textContent = trackGameState.emptyCell;
          mappedCellIds[30].textContent = PIECE_ASSIGNMENTS.pawnCell30;
          break;
        case gridCellIds[33]:
          currentlyClickedCell = gridCellIds[33];
          mappedCellIds[33].textContent = trackGameState.emptyCell;
          mappedCellIds[33].textContent = PIECE_ASSIGNMENTS.pawnCell33;
          break;
        case gridCellIds[38]:
          currentlyClickedCell = gridCellIds[38];
          mappedCellIds[38].textContent = trackGameState.emptyCell;
          mappedCellIds[38].textContent = PIECE_ASSIGNMENTS.pawnCell38;
          break;
        case gridCellIds[41]:
          currentlyClickedCell = gridCellIds[41];
          mappedCellIds[41].textContent = trackGameState.emptyCell;
          mappedCellIds[41].textContent = PIECE_ASSIGNMENTS.pawnCell41;
          break;
        case gridCellIds[46]:
          currentlyClickedCell = gridCellIds[46];
          mappedCellIds[46].textContent = trackGameState.emptyCell;
          mappedCellIds[46].textContent = PIECE_ASSIGNMENTS.pawnCell46;
          break;
        case gridCellIds[49]:
          currentlyClickedCell = gridCellIds[49];
          mappedCellIds[49].textContent = trackGameState.emptyCell;
          mappedCellIds[49].textContent = PIECE_ASSIGNMENTS.pawnCell49;
          break;
        case gridCellIds[54]:
          currentlyClickedCell = gridCellIds[54];
          mappedCellIds[54].textContent = trackGameState.emptyCell;
          mappedCellIds[54].textContent = PIECE_ASSIGNMENTS.pawnCell54;
          break;
        case gridCellIds[57]:
          currentlyClickedCell = gridCellIds[57];
          mappedCellIds[57].textContent = trackGameState.emptyCell;
          mappedCellIds[57].textContent = PIECE_ASSIGNMENTS.pawnCell57;
          break;
        case gridCellIds[62]:
          currentlyClickedCell = gridCellIds[62];
          mappedCellIds[62].textContent = trackGameState.emptyCell;
          mappedCellIds[62].textContent = PIECE_ASSIGNMENTS.pawnCell62;
          break;

        //empty cells at start
        case gridCellIds[2]:
          currentlyClickedCell = gridCellIds[2];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell2;

          break;
        case gridCellIds[3]:
          currentlyClickedCell = gridCellIds[3];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell3;

          break;
        case gridCellIds[4]:
          currentlyClickedCell = gridCellIds[4];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell4;

          break;
        case gridCellIds[5]:
          currentlyClickedCell = gridCellIds[5];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell5;

          break;
        case gridCellIds[10]:
          currentlyClickedCell = gridCellIds[10];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell10;

          break;
        case gridCellIds[11]:
          currentlyClickedCell = gridCellIds[11];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell11;

          break;
        case gridCellIds[12]:
          currentlyClickedCell = gridCellIds[12];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell12;

          break;
        case gridCellIds[13]:
          currentlyClickedCell = gridCellIds[13];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell13;
          break;
        case gridCellIds[18]:
          currentlyClickedCell = gridCellIds[18];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell18;
          break;
        case gridCellIds[19]:
          currentlyClickedCell = gridCellIds[19];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell19;
          break;
        case gridCellIds[20]:
          currentlyClickedCell = gridCellIds[20];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell20;
          break;
        case gridCellIds[21]:
          currentlyClickedCell = gridCellIds[21];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell21;
          break;
        case gridCellIds[26]:
          currentlyClickedCell = gridCellIds[26];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell26;
          break;
        case gridCellIds[27]:
          currentlyClickedCell = gridCellIds[27];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell27;
          break;
        case gridCellIds[28]:
          currentlyClickedCell = gridCellIds[28];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell28;
          break;
        case gridCellIds[29]:
          currentlyClickedCell = gridCellIds[29];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell29;
          break;
        case gridCellIds[34]:
          currentlyClickedCell = gridCellIds[34];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell34;
          break;
        case gridCellIds[35]:
          currentlyClickedCell = gridCellIds[35];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell35;
          break;
        case gridCellIds[36]:
          currentlyClickedCell = gridCellIds[36];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell36;
          break;
        case gridCellIds[37]:
          currentlyClickedCell = gridCellIds[37];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell37;
          break;
        case gridCellIds[42]:
          currentlyClickedCell = gridCellIds[42];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell42;
          break;
        case gridCellIds[43]:
          currentlyClickedCell = gridCellIds[43];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell43;
          break;
        case gridCellIds[44]:
          currentlyClickedCell = gridCellIds[44];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell44;
          break;
        case gridCellIds[45]:
          currentlyClickedCell = gridCellIds[45];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell45;
          break;
        case gridCellIds[50]:
          currentlyClickedCell = gridCellIds[50];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell50;
          break;
        case gridCellIds[51]:
          currentlyClickedCell = gridCellIds[51];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell51;
          break;
        case gridCellIds[52]:
          currentlyClickedCell = gridCellIds[52];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell52;
          break;
        case gridCellIds[53]:
          currentlyClickedCell = gridCellIds[53];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell53;
          break;
        case gridCellIds[58]:
          currentlyClickedCell = gridCellIds[58];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell58;
          break;
        case gridCellIds[59]:
          currentlyClickedCell = gridCellIds[59];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell59;
          break;
        case gridCellIds[60]:
          currentlyClickedCell = gridCellIds[60];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell60;
          break;
        case gridCellIds[61]:
          currentlyClickedCell = gridCellIds[61];
          currentCell = trackGameState.emptyCell;
          currentCell = PIECE_ASSIGNMENTS.emptyCell61;
          break;
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
            (gridCellIds[62] &&
              mappedCellIds[1].textContent &&
              mappedCellIds[6].textContent &&
              mappedCellIds[9].textContent &&
              mappedCellIds[14].textContent &&
              mappedCellIds[17].textContent &&
              mappedCellIds[22].textContent &&
              mappedCellIds[25].textContent &&
              mappedCellIds[30].textContent &&
              mappedCellIds[33].textContent &&
              mappedCellIds[38].textContent &&
              mappedCellIds[41].textContent &&
              mappedCellIds[46].textContent &&
              mappedCellIds[49].textContent &&
              mappedCellIds[54].textContent &&
              mappedCellIds[57].textContent &&
              mappedCellIds[62].textContent === startingChessPieces.pawn)
          ) {
            displayGameState.innerText = displayGameStateText.ifPawnIsClicked;
          }
          break;
      }
      switch (PAWN_CLICKS) {
        case gridCellIds[1]:
          if (mappedCellIds[1].textContent === startingChessPieces.pawn) {
          }
      }
    });
    return { clickPawnCell };
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
    clickGridCells,
  };
};

export default chessBoard;
