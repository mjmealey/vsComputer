const vsComputer = () => {
  const gridElements = {
    gridContainerId: "gridContainer",
    div: "div",
    rowId: "rows",
    gridElementsClass: "gridElements",
  };

  const gridCellIds = [
    //row one
    "cell-0-0",
    "cell-0-1",
    "cell-0-2",
    "cell-0-3",
    "cell-0-4",
    "cell-0-5",
    "cell-0-6",
    "cell-0-7",

    //row two
    "cell-1-0",
    "cell-1-1",
    "cell-1-2",
    "cell-1-3",
    "cell-1-4",
    "cell-1-5",
    "cell-1-6",
    "cell-1-7",

    //row three
    "cell-2-0",
    "cell-2-1",
    "cell-2-2",
    "cell-2-3",
    "cell-2-4",
    "cell-2-5",
    "cell-2-6",
    "cell-2-7",

    //row four
    "cell-3-0",
    "cell-3-1",
    "cell-3-2",
    "cell-3-3",
    "cell-3-4",
    "cell-3-5",
    "cell-3-6",
    "cell-3-7",

    //row five
    "cell-4-0",
    "cell-4-1",
    "cell-4-2",
    "cell-4-3",
    "cell-4-4",
    "cell-4-5",
    "cell-4-6",
    "cell-4-7",

    //row six,
    "cell-5-0",
    "cell-5-1",
    "cell-5-2",
    "cell-5-3",
    "cell-5-4",
    "cell-5-5",
    "cell-5-6",
    "cell-5-7",

    //row seven
    "cell-6-0",
    "cell-6-1",
    "cell-6-2",
    "cell-6-3",
    "cell-6-4",
    "cell-6-5",
    "cell-6-6",
    "cell-6-7",

    //row eight

    "cell-7-0",
    "cell-7-1",
    "cell-7-2",
    "cell-7-3",
    "cell-7-4",
    "cell-7-5",
    "cell-7-6",
    "cell-7-7",
  ];

  const computerGrid = () => {
    console.log(gridElements.cellId);
    const gridContainer = document.getElementById(gridElements.gridContainerId);

    for (let i = 0; i < 8; i++) {
      const rows = document.createElement(gridElements.div);
      rows.id = gridElements.rowId;
      rows.classList.add(gridElements.gridElementsClass);
      gridContainer.appendChild(rows);

      for (let j = 0; j < 8; j++) {
        const cells = document.createElement(gridElements.div);
        cells.id = `cell-${i}-${j}`;
        cells.classList.add("cells");
        rows.appendChild(cells);
        console.log(cells.id);
      }
    }
    return { computerGrid };
  };

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

    const emptyCell = "";
    let filledCell = chessMovePlaceHolder.pawn;

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
      ([mappedCellIds, chessMovePlaceHolder]) => {
        mappedCellIds.textContent = chessMovePlaceHolder;
      }
    );

    return { gridCellFunctionality };
  };

  return { computerGrid, gridCellFunctionality };
};

export default vsComputer;
