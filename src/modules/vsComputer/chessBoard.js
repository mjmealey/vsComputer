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

  const gridCellFunctionality = () => {
    const mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    const chessMovePlaceHolder = {
      pawn: "Pawn",
      rook: "Rook",
      queen: "Queen",
      king: "King",
      bishop: "Bishop",
      knight: "Knight",
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

    const arrangedPositions = chessPiecePositions.forEach(
      ([mappedCellIds, chessMovePlaceHolder]) =>
        (mappedCellIds.textContent = chessMovePlaceHolder)
    );
    //event delegation
    gridContainer.addEventListener("click", (e) => {
      const clickedCell = e.target;
      switch (true) {
        case clickedCell.id === gridCellIds[0] &&
          mappedCellIds[0].textContent === chessMovePlaceHolder.rook:
          currentMove = chessMovePlaceHolder.rook;
      }
    });
    return chessMovePlaceHolder;
  };

  const cellColors = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    const gridColors = {
      //default colors
      bisque: "bisque",
      brown: "#4b2424",
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
  return { chessBoard, cellColors, gridCellFunctionality };
};

export default chessBoard;
