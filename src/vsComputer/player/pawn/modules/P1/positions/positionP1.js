import { getCellIds } from "../../../../../modules/ChessBoard.js";
import chessBoard from "../../../../../objects/chessBoardArray.js";
import pawnPositions from "../../../objects/positions.js";

const FirstMoveP1Positioning = () => {
  for (let rows = 0; rows < chessBoard.length; rows++) {
    for (let cols = 0; cols < chessBoard[rows]; cols++) {
      const validateFirstMovePositions = (targetRow, targetCol) => {
        const minRow = pawnPositions.P1.doubleSpace;
        const minCol = pawnPositions.P1.singleSpace;
        const maxRow = pawnPositions.P1.doubleSpace;
        const maxCol = pawnPositions.P1.doubleSpace;

        return (
          minRow <= targetRow &&
          minCol <= targetCol &&
          maxRow >= targetRow &&
          maxCol >= targetCol
        );
      };

      const isValidSingleSpace = (targetRow, targetCol) => {
        return validateFirstMovePositions(targetRow, targetCol);
      };

               
    }
  }
};

export default FirstMoveP1Positioning