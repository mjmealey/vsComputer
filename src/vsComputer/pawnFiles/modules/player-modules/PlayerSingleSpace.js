import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import chessBoard from "../../../objects/chessBoardArray.js";
const PlayerSingleSpaceAtStart = () => {
  const validateSingleSpaceAtStart = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        const singleSpacing = chessBoard[row][col];
        console.log(singleSpacing);
      }
    }
    return { validateSingleSpaceAtStart };
  };
  return { validateSingleSpaceAtStart };
};

export default PlayerSingleSpaceAtStart;
