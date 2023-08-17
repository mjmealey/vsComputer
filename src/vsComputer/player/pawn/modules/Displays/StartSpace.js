import { getCellIds } from "../../../../modules/ChessBoard.js";
import { assignedPawnNames } from "../../arrays/pawnAssignmentData.js";

const trackStartSpaceData = [];

const preparePawn = (assignedPawn) => {
  return trackStartSpace.push(assignedPawn);
};

const removePreviousPawn = (indexToRemove, amountToRemove) => {
  return trackStartSpace.splice(indexToRemove, amountToRemove);
};
const handleStartSpaceClicks = (startSpaceId) => {
  const assignedPawns = [
    { assignedPawn: assignedPawnNames[0], startCell: getCellIds[6] },
    { assignedPawn: assignedPawnNames[1], startCell: getCellIds[14] },
    { assignedPawn: assignedPawnNames[2], startCell: getCellIds[22] },
    { assignedPawn: assignedPawnNames[3], startCell: getCellIds[30] },
    { assignedPawn: assignedPawnNames[4], startCell: getCellIds[38] },
    { assignedPawn: assignedPawnNames[5], startCell: getCellIds[46] },
    { assignedPawn: assignedPawnNames[6], startCell: getCellIds[54] },
    { assignedPawn: assignedPawnNames[7], startCell: getCellIds[64] },
  ];

  const P1Cell = assignedPawns[0].startCell;
  switch (startSpaceId) {
    case P1Cell:
      removePreviousPawn(0, 1);
      preparePawn(assignedPawns[0].assignedPawn);
      break;
    
  }
};

document.addEventListener("click", (e) => {
  const startSpaceId = e.target.id;
  handleStartSpaceClicks(startSpaceId);
});

export const trackStartSpace = trackStartSpaceData;
