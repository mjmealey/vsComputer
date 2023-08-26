import { getCellIds } from "../../../../../modules/ChessBoard.js";
import {
  assignedPawnNames,
  assignedPawnNamesIndex,
} from "../../../arrays/pawnAssignmentData.js";
import { displayStatus } from "../../../objects/displayStatus.js";

const displayP4FirstMoves = () => {
  const trackP4FirstMoves = [];

  const isP4StartSpaceReady = (assignedPawn) => {
    return trackP4FirstMoves.includes(assignedPawnNames[assignedPawn]);
  };

  const prepareStartSpace = (assignedPawn) => {
    return trackP4FirstMoves.push(assignedPawnNames[assignedPawn]);
  };

  const handleStartSpaces = (assignedPawn) => {
    const isReady = isP4StartSpaceReady(assignedPawn);
    if (!isReady) {
      prepareStartSpace(assignedPawn);
    }
  };

  const invalidStartSpace = () => {
    const indexToRemove = 0;
    const amountToRemove = 1;
    return trackP4FirstMoves.splice(indexToRemove, amountToRemove);
  };

  const handleStartSpaceClicks = (firstMoveP4Id) => {
    const validCell = getCellIds[30];
    const firstInvalidCell = getCellIds[6];
    const secondInvalidCell = getCellIds[14];
    const thirdInvalidCell = getCellIds[22];
    const fourthInvalidCell = getCellIds[38];
    const fifthInvalidCell = getCellIds[46];
    const sixthInvalidCell = getCellIds[54];
    const seventhInvalidCell = getCellIds[62];
    switch (firstMoveP4Id) {
      case validCell:
        const assignedPawn = assignedPawnNamesIndex[3].P4;
        handleStartSpaces(assignedPawn);
        console.log(trackP4FirstMoves);
        break;
      case firstInvalidCell:
      case secondInvalidCell:
      case thirdInvalidCell:
      case fourthInvalidCell:
      case fifthInvalidCell:
      case sixthInvalidCell:
      case seventhInvalidCell:
        invalidStartSpace();
        break;
      default:
        return null;
    }
  };

  const isP4FirstMoveReady = (assignedPawn) => {
    return trackP4FirstMoves.includes(assignedPawnNames[assignedPawn]);
  };

  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const handleP4FirstMoves = (assignedPawn, emptyCell, filledCell) => {
    const firstMoveIsReady = isP4FirstMoveReady(assignedPawn);
    if (firstMoveIsReady) {
      mappedCellIds[emptyCell].textContent = displayStatus.emptyCell;
      mappedCellIds[filledCell].textContent = displayStatus.filledCell;
    }
  };

  const assignedPawn = assignedPawnNamesIndex[3].P4;

  const trackP4SingleSpaceClicks = (firstMoveP4Id) => {
    const singleSpaceCell = getCellIds[29]
    if (firstMoveP4Id === singleSpaceCell) {
        const emptyCell = 30
        const filledCell = 29
        handleP4FirstMoves(assignedPawn, emptyCell, filledCell)
    }
  };

  const handleP4FirstMoveClicks = (firstMoveP4Id) => {
    handleStartSpaceClicks(firstMoveP4Id);
    trackP4SingleSpaceClicks(firstMoveP4Id);
  };

  document.addEventListener("click", (e) => {
    const firstMoveP4Id = e.target.id;
    handleP4FirstMoveClicks(firstMoveP4Id);
  });
};

export default displayP4FirstMoves;
