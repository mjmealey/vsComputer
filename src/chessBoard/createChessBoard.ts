import gridElements from "../objects/chessboardObjects.js";
import { getCellIds } from "../gridCellIds.js";

const createChessBoard = () => {
  const gridCellCount = 8;
    const gridContainer = document.getElementById(
      "gridContainer"
    ) as HTMLDivElement;

    for (let i = 0; i < gridCellCount; i++) {
      const rows: HTMLElement = document.createElement(gridElements.div);
      rows.id = "row";
      rows.classList.add("rows");
      gridContainer.appendChild(rows);

      for (let j = 0; j < gridCellCount; j++) {
        const cells: HTMLElement = document.createElement(gridElements.div);
        const cellsId: string = `cell-${i}-${j}`;
        cells.id = cellsId;
        cells.classList.add("cells");
        rows.appendChild(cells);

        getCellIds.push(cellsId);
      }
    }
  };


export default createChessBoard