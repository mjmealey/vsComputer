import chessBoard from "../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";

const PlayerDoubleSpacing = () => {
  const validateDoubleSpacing = (
    startRow,
    startCol,
    midRow,
    midCol,
    maxRow,
    maxCol,
    surplusRow,
    surplusCol
  ) => {
    const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    let doubleSpacingAtStart = [];

    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        const doubleSpacing = chessBoard[row][col];
        /* starting row is 0 for pawns */
        /* starting column is 1 for pawns */
        switch (doubleSpacing) {
          case "p1":
            //double spacing is done
            if (row === maxRow && col === maxCol) {
              doubleSpacingAtStart.push(doubleSpacing);
            } else if (
              (row === startRow && col === startCol) ||
              (row === midRow && col === midCol) ||
              (row >= surplusRow && col >= surplusCol)
            ) {
              doubleSpacingAtStart = doubleSpacingAtStart.filter(
                (remove_p1) => remove_p1 !== "p1"
              );
            }
            if (doubleSpacing === "p1") {
              validateDoubleSpacing(0, 3, 0, 1, 0, 2, 0, 4);
            }
            break;
          case "p2":
            if (row === maxRow && col === maxCol) {
              doubleSpacingAtStart.push(doubleSpacing);
            } else if (
              (row === startRow && col === startCol) ||
              (row === midRow && col === midCol) ||
              (row >= surplusRow && col >= surplusRow)
            ) {
              doubleSpacingAtStart = doubleSpacingAtStart.filter(
                (remove_p2) => remove_p2 !== "p2"
              );
              if (doubleSpacing === "p2") {
                validateDoubleSpacing(1, 3, 1, 1, 1, 2, 1, 4);
              }
              break;
            }
          case "p3":
            if (row === maxRow && col === maxCol) {
              doubleSpacingAtStart.push(doubleSpacing);
            } else if (
              (row === midRow && col === midCol) ||
              (row === startRow && col === startCol) ||
              (row >= surplusRow && col >= surplusCol)
            ) {
              doubleSpacingAtStart = doubleSpacingAtStart.filter(
                (remove_p3) => remove_p3 !== "p3"
              );
            }
            if (doubleSpacing === "p3") {
              validateDoubleSpacing(2, 3, 2, 1, 2, 2, 2, 4);
            }
            break;
          case "p4":
            if (row === maxRow && col === maxCol) {
              doubleSpacingAtStart.push(doubleSpacing);
            } else if (
              (row === midRow && col === midCol) ||
              (row === startRow && col === startCol) ||
              (row >= surplusRow && col >= surplusCol)
            ) {
              doubleSpacingAtStart = doubleSpacingAtStart.filter(
                (remove_p4) => remove_p4 !== "p4"
              );
            }
            if (doubleSpacing === "p4") {
              validateDoubleSpacing(3, 3, 3, 1, 3, 2, 3, 4);
            }
            break;
          case "p5":
            if (row === maxRow && col === maxCol) {
              doubleSpacingAtStart.push(doubleSpacing);
            } else if (
              (row === midRow && col === midCol) ||
              (row === startRow && col === startCol) ||
              (row >= surplusRow && col >= surplusCol)
            ) {
              doubleSpacingAtStart = doubleSpacingAtStart.filter(
                (remove_p5) => remove_p5 !== "p5"
              );
            }

            if (doubleSpacing === "p5") {
              validateDoubleSpacing(4, 3, 4, 1, 4, 2, 4, 4);
            }
            break;
          case "p6":
            if (row === maxRow && col === maxCol) {
              doubleSpacingAtStart.push(doubleSpacing);
            } else if (
              (row === midRow && col === midCol) ||
              (row === startRow && col === startCol) ||
              (row >= surplusRow && col >= surplusCol)
            ) {
              doubleSpacingAtStart = doubleSpacingAtStart.filter(
                (remove_p6) => remove_p6 !== "p6"
              );
            }
            if (doubleSpacing === "p6") {
              validateDoubleSpacing(5, 3, 5, 1, 5, 2, 5, 4);
            }
            break;
          case "p7":
            if (row === maxRow && col === maxCol) {
              doubleSpacingAtStart.push(doubleSpacing);
            } else if (
              (row === midRow && col === midCol) ||
              (row === startRow && col === startCol) ||
              (row >= surplusRow && col >= surplusCol)
            ) {
              doubleSpacingAtStart = doubleSpacingAtStart.filter(
                (remove_p7) => remove_p7 !== "p7"
              );
            }
            if (doubleSpacing === "p7") {
              validateDoubleSpacing(6, 3, 6, 1, 6, 2, 6, 4);
            }
            break;
          case "p8":
            if (row === maxRow && col === maxCol) {
              doubleSpacingAtStart.push(doubleSpacing);
            } else if (
              (row === midRow && col === midCol) ||
              (row === startRow && col === startCol) ||
              (row >= surplusRow && col >= surplusCol)
            ) {
              doubleSpacingAtStart = doubleSpacingAtStart.filter(
                (remove_p8) => remove_p8 !== "p8"
              );
            }
            if (doubleSpacing === "p8") {
              validateDoubleSpacing(7, 3, 7, 1, 7, 2, 7, 4);
            }
        }
      }
    }
  };

  return {
    watchForDoubleSpacing,
  };
};

export default PlayerDoubleSpacing;
