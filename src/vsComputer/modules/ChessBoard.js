import gridElements from "../objects/chessboardObjects.js";

const ChessBoard = () => {
  const gridCellIds = [];
  const gridCellCount = 8;
  const createChessBoard = () => {
    const gridContainer = document.getElementById(gridElements.gridContainerId);

    for (let i = 0; i < gridCellCount; i++) {
      const rows = document.createElement(gridElements.div);
      rows.id = gridElements.rowId;
      rows.classList.add(gridElements.gridElementsClass);
      gridContainer.appendChild(rows);

      for (let j = 0; j < gridCellCount; j++) {
        const cells = document.createElement(gridElements.div);
        const cellsId = `cell-${i}-${j}`;
        cells.id = cellsId;
        cells.classList.add("cells");
        rows.appendChild(cells);

        gridCellIds.push(cellsId);
      }
    }

    return gridCellIds;
  };
  createChessBoard();

  return gridCellIds;
};

export default ChessBoard;
