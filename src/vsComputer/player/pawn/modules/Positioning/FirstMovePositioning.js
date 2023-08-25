import { getCellIds } from "../../../../modules/ChessBoard.js";
import chessBoard from "../../../../objects/chessBoardArray.js";
import pawnPositions from "../../objects/positions.js";
import { displayStatus } from "../../objects/displayStatus.js";
import { assignedPawnNames } from "../../arrays/pawnAssignmentData.js";

const FirstMovePositioning = () => {
  for (let rows = 0; rows < chessBoard.length; rows++) {
    for (let cols = 0; cols < chessBoard[rows].length; cols++) {
      const isValidFirstMove = (targetRow, targetCol) => {
        const minRow = pawnPositions.P1.startSpace.row;
        const maxRow = pawnPositions.P8.startSpace.row;
        const minCol = pawnPositions.P1.doubleSpace.col;
        const maxCol = pawnPositions.P1.singleSpace.col;

        return (
          minRow <= targetRow &&
          maxRow >= targetRow &&
          minCol <= targetCol &&
          maxCol >= targetCol
        );
      };

      const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
      const validateFirstMove = (
        fromRow,
        fromCol,
        targetRow,
        targetCol,
        filledCell
      ) => {
        const isValid = isValidFirstMove(targetRow, targetCol);
        const isFilled =
          mappedCellIds[filledCell].textContent === displayStatus.filledCell;
        if (isValid && isFilled) {
          chessBoard[fromRow][fromCol] = displayStatus.emptyCell;
          chessBoard[targetRow][targetCol] = displayStatus.filledCell;
          console.log(chessBoard[fromRow][fromCol]);
          console.log(chessBoard[targetRow][targetCol]);
        }
      };

      const handleSingleSpacePositionClicks = (firstMovePositionsId) => {
        let fromRow = null;
        let fromCol = null;
        let targetRow = null;
        let targetCol = null;
        let filledCell = null;
        const P1Cell = getCellIds[5];
        const P2Cell = getCellIds[13];
        const P3Cell = getCellIds[21];
        const P4Cell = getCellIds[29];
        const P5Cell = getCellIds[37];
        const P6Cell = getCellIds[45];
        const P7Cell = getCellIds[53];
        const P8Cell = getCellIds[61];
        switch (firstMovePositionsId) {
          case P1Cell:
            fromRow = pawnPositions.P1.startSpace.row;
            fromCol = pawnPositions.P1.startSpace.col;
            targetRow = pawnPositions.P1.singleSpace.row;
            targetCol = pawnPositions.P1.singleSpace.col;
            filledCell = pawnPositions.P1.singleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P2Cell:
            fromRow = pawnPositions.P2.startSpace.row;
            fromCol = pawnPositions.P2.startSpace.col;
            targetRow = pawnPositions.P2.singleSpace.row;
            targetCol = pawnPositions.P2.singleSpace.col;
            filledCell = pawnPositions.P2.singleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P3Cell:
            fromRow = pawnPositions.P3.startSpace.row;
            fromCol = pawnPositions.P3.startSpace.col;
            targetRow = pawnPositions.P3.singleSpace.row;
            targetCol = pawnPositions.P3.singleSpace.col;
            filledCell = pawnPositions.P3.singleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P4Cell:
            fromRow = pawnPositions.P4.startSpace.row;
            fromCol = pawnPositions.P4.startSpace.col;
            targetRow = pawnPositions.P4.singleSpace.row;
            targetCol = pawnPositions.P4.singleSpace.col;
            filledCell = pawnPositions.P4.singleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P5Cell:
            fromRow = pawnPositions.P5.startSpace.row;
            fromCol = pawnPositions.P5.startSpace.col;
            targetRow = pawnPositions.P5.singleSpace.row;
            targetCol = pawnPositions.P5.singleSpace.col;
            filledCell = pawnPositions.P5.singleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P6Cell:
            fromRow = pawnPositions.P6.startSpace.row;
            fromCol = pawnPositions.P6.startSpace.col;
            targetRow = pawnPositions.P6.singleSpace.row;
            targetCol = pawnPositions.P6.singleSpace.col;
            filledCell = pawnPositions.P6.singleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P7Cell:
            fromRow = pawnPositions.P7.startSpace.row;
            fromCol = pawnPositions.P7.startSpace.col;
            targetRow = pawnPositions.P7.singleSpace.row;
            targetCol = pawnPositions.P7.singleSpace.col;
            filledCell = pawnPositions.P7.singleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P8Cell:
            fromRow = pawnPositions.P8.startSpace.row;
            fromCol = pawnPositions.P8.startSpace.col;
            targetRow = pawnPositions.P8.singleSpace.row;
            targetCol = pawnPositions.P8.singleSpace.col;
            filledCell = pawnPositions.P8.singleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
        }
      };

      const handleDoubleSpacePositionClicks = (firstMovePositionsId) => {
        let fromRow = null;
        let fromCol = null;
        let targetRow = null;
        let targetCol = null;
        let filledCell = null;
        const P1Cell = getCellIds[4];
        const P2Cell = getCellIds[12];
        const P3Cell = getCellIds[20];
        const P4Cell = getCellIds[28];
        const P5Cell = getCellIds[36];
        const P6Cell = getCellIds[44];
        const P7Cell = getCellIds[54];
        const P8Cell = getCellIds[62];

        switch (firstMovePositionsId) {
          case P1Cell:
            fromRow = pawnPositions.P1.startSpace.row;
            fromCol = pawnPositions.P1.startSpace.col;
            targetRow = pawnPositions.P1.doubleSpace.row;
            targetCol = pawnPositions.P1.doubleSpace.col;
            filledCell = pawnPositions.P1.doubleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P2Cell:
            fromRow = pawnPositions.P2.startSpace.row;
            fromCol = pawnPositions.P2.startSpace.col;
            targetRow = pawnPositions.P2.doubleSpace.row;
            targetCol = pawnPositions.P2.doubleSpace.col;
            filledCell = pawnPositions.P2.doubleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P3Cell:
            fromRow = pawnPositions.P3.startSpace.row;
            fromCol = pawnPositions.P3.startSpace.col;
            targetRow = pawnPositions.P3.doubleSpace.row;
            targetCol = pawnPositions.P3.doubleSpace.col;
            filledCell = pawnPositions.P3.doubleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P4Cell:
            fromRow = pawnPositions.P4.startSpace.row;
            fromCol = pawnPositions.P4.startSpace.col;
            targetRow = pawnPositions.P4.doubleSpace.row;
            targetCol = pawnPositions.P4.doubleSpace.col;
            filledCell = pawnPositions.P4.doubleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P5Cell:
            fromRow = pawnPositions.P5.startSpace.row;
            fromCol = pawnPositions.P5.startSpace.col;
            targetRow = pawnPositions.P5.doubleSpace.row;
            targetCol = pawnPositions.P5.doubleSpace.col;
            filledCell = pawnPositions.P5.doubleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P6Cell:
            fromRow = pawnPositions.P6.startSpace.row;
            fromCol = pawnPositions.P6.startSpace.col;
            targetRow = pawnPositions.P6.doubleSpace.row;
            targetCol = pawnPositions.P6.doubleSpace.col;
            filledCell = pawnPositions.P6.doubleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P7Cell:
            fromRow = pawnPositions.P7.startSpace.row;
            fromCol = pawnPositions.P7.startSpace.col;
            targetRow = pawnPositions.P7.doubleSpace.row;
            targetCol = pawnPositions.P7.doubleSpace.col;
            filledCell = pawnPositions.P7.doubleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
          case P8Cell:
            fromRow = pawnPositions.P8.startSpace.row;
            fromCol = pawnPositions.P8.startSpace.col;
            targetRow = pawnPositions.P8.doubleSpace.row;
            targetCol = pawnPositions.P8.doubleSpace.col;
            filledCell = pawnPositions.P8.doubleSpace.filledCell;
            validateFirstMove(
              fromRow,
              fromCol,
              targetRow,
              targetCol,
              filledCell
            );
            break;
        }
      };

      const handleFirstMovePositionClicks = (firstMovePositionsId) => {
        handleSingleSpacePositionClicks(firstMovePositionsId);
        handleDoubleSpacePositionClicks(firstMovePositionsId);
      };

      document.addEventListener("click", (e) => {
        const firstMovePositionsId = e.target.id;
        handleFirstMovePositionClicks(firstMovePositionsId);
      });
    }
  }
};

export default FirstMovePositioning;
