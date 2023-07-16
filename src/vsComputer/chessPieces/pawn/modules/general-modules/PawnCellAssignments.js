import { getCellIds } from "../../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js"
const PawnCellAssignments = () => {
  const computerSideAssignments = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    const computerSide = [1, 9, 17, 25, 33, 41, 49, 57];
    const pieceName = `${pawnAssignmentObject.pieceName}`;
    for (
      let topPawnsIndex = 0;
      topPawnsIndex < getCellIds.length;
      topPawnsIndex++
    ) {
      if (computerSide.includes(topPawnsIndex)) {
        mappedCellIds[topPawnsIndex].textContent = pieceName;
      }
    }
    return { computerSideAssignments };
  };

  //handles bottom side pawn names
  const playerSideAssignments = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    const playerSide = [6, 14, 22, 30, 38, 46, 54, 62];
    const pieceName = `${pawnAssignmentObject.pieceName}`;
    for (
      let bottomPawnsIndex = 0;
      bottomPawnsIndex < getCellIds.length;
      bottomPawnsIndex++
    ) {
      if (playerSide.includes(bottomPawnsIndex)) {
        mappedCellIds[bottomPawnsIndex].textContent = pieceName;
      }
    }
    return { playerSideAssignments };
  };
  return {
    computerSideAssignments,
    playerSideAssignments,
  };
};

export default PawnCellAssignments;
