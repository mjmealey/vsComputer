import chessBoard from "../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { computerStartingRowsArray } from "../../objects/pawnArrays.js";
import { computerStartingColumnsArray } from "../../objects/pawnArrays.js";

const ComputerDoubleSpacing = () => {
  const watchForDoubleSpacing = () => {
    const getChessBoard = chessBoard.length;
    const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    const pawnDoubleSpaceAtStart = [];

    let doubleSpacingUsed = false;
    for (let row = 0; row < getChessBoard; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        const doubleSpacing = chessBoard[row][col];
        /* starting row is 0 for pawns */
        /* starting column is 1 for pawns */
        switch (doubleSpacing) {
          case "p1":
            if (
              row === computerStartingRowsArray[0] &&
              col === computerStartingColumnsArray[0]
            ) {
              doubleSpacingUsed = false;
              
            } else if (
              row === computerStartingRowsArray[0] &&
              col === computerStartingColumnsArray[0] + 1
            ) {
              doubleSpacingUsed = false;
            } else if (
              row === computerStartingRowsArray[0] &&
              col === computerStartingColumnsArray[0] + 2
            ) {
              doubleSpacingUsed = true;
              pawnDoubleSpaceAtStart.push(doubleSpacing);
            }
            break;
          case "p2":
            if (
              row === computerStartingRowsArray[1] &&
              computerStartingColumnsArray[1]
            ) {
              doubleSpacingUsed = false;
            } else if (
              row === computerStartingRowsArray[1] &&
              col === computerStartingColumnsArray[1] + 1
            ) {
              doubleSpacingUsed = false;
            } else if (
              row === computerStartingRowsArray[1] &&
              col === computerStartingColumnsArray[1] + 2
            ) {
              doubleSpacingUsed = true;
            }
        }
      }
    }
    return { watchForDoubleSpacing };
  };
  return { watchForDoubleSpacing };
};

export default ComputerDoubleSpacing;
