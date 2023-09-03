import { getCellIds } from "../../../modules/ChessBoard.js";

const startSpaceCellsData = {
    P1: getCellIds[6],
    P2: getCellIds[14],
    P3: getCellIds[22],
    P4: getCellIds[30],
    P5: getCellIds[38],
    P6: getCellIds[46],
    P7: getCellIds[54],
    P8: getCellIds[62] 
}

console.log(startSpaceCellsData.P1)

export const startSpaceCells = startSpaceCellsData