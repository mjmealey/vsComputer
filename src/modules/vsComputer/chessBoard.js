const chessBoard = () => {
  const gridElements = {
    gridContainerId: "gridContainer",
    div: "div",
    rowId: "rows",
    gridElementsClass: "gridElements",
  };

  const gridContainer = document.getElementById(gridElements.gridContainerId);

  const gridCellIds = [];

  for (let i = 0; i < 8; i++) {
    const rows = document.createElement(gridElements.section);
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

  const chessGame = () => {
    const mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    const chessMovePlaceHolder = {
      pawn: "Pawn",
      rook: "Rook",
      queen: "Queen",
      king: "King",
      bishop: "Bishop",
      knight: "Knight",
    };

    const displayGameStateText = {
      textElement: "div",
      preGameStartingText: "Welcome to Chess!",
      gameStartingText: "The game has begun!",
    };

    const stateOfCells = {
      emptyCell: "",
    };

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
      ([mappedCellIds, chessMovePlaceHolder]) =>
        (mappedCellIds.textContent = chessMovePlaceHolder)
    );

    //start of game
    const displayGameState = document.createElement(
      displayGameStateText.textElement
    );
    if (
      mappedCellIds[0].textContent === chessMovePlaceHolder.rook &&
      mappedCellIds[1].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[2].textContent === stateOfCells.emptyCell &&
      mappedCellIds[3].textContent === stateOfCells.emptyCell &&
      mappedCellIds[4].textContent === stateOfCells.emptyCell &&
      mappedCellIds[5].textContent === stateOfCells.emptyCell &&
      mappedCellIds[6].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[7].textContent === chessMovePlaceHolder.rook &&
      mappedCellIds[8].textContent === chessMovePlaceHolder.knight &&
      mappedCellIds[9].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[10].textContent === stateOfCells.emptyCell &&
      mappedCellIds[11].textContent === stateOfCells.emptyCell &&
      mappedCellIds[12].textContent === stateOfCells.emptyCell &&
      mappedCellIds[13].textContent === stateOfCells.emptyCell &&
      mappedCellIds[14].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[15].textContent === chessMovePlaceHolder.knight &&
      mappedCellIds[16].textContent === chessMovePlaceHolder.bishop &&
      mappedCellIds[17].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[18].textContent === stateOfCells.emptyCell &&
      mappedCellIds[19].textContent === stateOfCells.emptyCell &&
      mappedCellIds[20].textContent === stateOfCells.emptyCell &&
      mappedCellIds[21].textContent === stateOfCells.emptyCell &&
      mappedCellIds[22].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[23].textContent === chessMovePlaceHolder.bishop &&
      mappedCellIds[24].textContent === chessMovePlaceHolder.queen &&
      mappedCellIds[25].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[26].textContent === stateOfCells.emptyCell &&
      mappedCellIds[27].textContent === stateOfCells.emptyCell &&
      mappedCellIds[28].textContent === stateOfCells.emptyCell &&
      mappedCellIds[29].textContent === stateOfCells.emptyCell &&
      mappedCellIds[30].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[31].textContent === chessMovePlaceHolder.queen &&
      mappedCellIds[32].textContent === chessMovePlaceHolder.king &&
      mappedCellIds[33].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[34].textContent === stateOfCells.emptyCell &&
      mappedCellIds[35].textContent === stateOfCells.emptyCell &&
      mappedCellIds[36].textContent === stateOfCells.emptyCell &&
      mappedCellIds[37].textContent === stateOfCells.emptyCell &&
      mappedCellIds[38].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[39].textContent === chessMovePlaceHolder.king &&
      mappedCellIds[40].textContent === chessMovePlaceHolder.bishop &&
      mappedCellIds[41].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[42].textContent === stateOfCells.emptyCell &&
      mappedCellIds[43].textContent === stateOfCells.emptyCell &&
      mappedCellIds[44].textContent === stateOfCells.emptyCell &&
      mappedCellIds[45].textContent === stateOfCells.emptyCell &&
      mappedCellIds[46].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[47].textContent === chessMovePlaceHolder.bishop &&
      mappedCellIds[48].textContent === chessMovePlaceHolder.knight &&
      mappedCellIds[49].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[50].textContent === stateOfCells.emptyCell &&
      mappedCellIds[51].textContent === stateOfCells.emptyCell &&
      mappedCellIds[52].textContent === stateOfCells.emptyCell &&
      mappedCellIds[53].textContent === stateOfCells.emptyCell &&
      mappedCellIds[54].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[55].textContent === chessMovePlaceHolder.knight &&
      mappedCellIds[56].textContent === chessMovePlaceHolder.rook &&
      mappedCellIds[57].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[58].textContent === stateOfCells.emptyCell &&
      mappedCellIds[59].textContent === stateOfCells.emptyCell &&
      mappedCellIds[60].textContent === stateOfCells.emptyCell &&
      mappedCellIds[61].textContent === stateOfCells.emptyCell &&
      mappedCellIds[62].textContent === chessMovePlaceHolder.pawn &&
      mappedCellIds[63].textContent === chessMovePlaceHolder.rook
    ) {
      displayGameState.innerText = displayGameStateText.preGameStartingText;
      document.body.appendChild(displayGameState);
    } else {
      displayGameState.innerText = displayGameStateText.gameStartingText;
    }

    if (
      //rook starting positions
      mappedCellIds[0].textContent &&
      mappedCellIds[7].textContent &&
      mappedCellIds[57].textContent &&
      mappedCellIds[63].textContent === chessMovePlaceHolder.rook

      //knight starting positions
      && mappedCellIds[8].textContent &&
      mappedCellIds[15].textContent &&
      mappedCellIds[48].textContent &&
      mappedCellIds[55].textContent === chessMovePlaceHolder.knight

      && mappedCellIds[]

    ) {
      console.log("Hi");
    }

    return chessMovePlaceHolder;
  };

  const cellColors = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    const gridColors = {
      //default colors
      bisque: "bisque",
      brown: "#4b2424",
      green: "green",
    };

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
  };
  return { chessBoard, cellColors, chessGame };
};

export default chessBoard;
