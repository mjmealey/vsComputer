import gridElements from "../objects/chessboardObjects.js";

const ChessBoard = () => {
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
  
    return gridCellIds;
  };
  createChessBoard();

  return gridCellIds;
};

export default ChessBoard;
