const gridCellIds = [];
const ChessBoard = () => {
    const gridCellCount = 8;
    const createChessBoard = () => {
        const gridContainer = document.getElementById("gridContainer");
        for (let i = 0; i < gridCellCount; i++) {
            const rows = document.createElement("div");
            rows.id = "row";
            rows.classList.add("rows");
            gridContainer.appendChild(rows);
            for (let j = 0; j < gridCellCount; j++) {
                const cells = document.createElement("div");
                const cellsId = `cell-${i}-${j}`;
                cells.id = cellsId;
                cells.classList.add("cells");
                rows.appendChild(cells);
                gridCellIds.push(cellsId);
            }
        }
    };
    return { createChessBoard };
};
export default ChessBoard;
export const getCellIds = gridCellIds;
