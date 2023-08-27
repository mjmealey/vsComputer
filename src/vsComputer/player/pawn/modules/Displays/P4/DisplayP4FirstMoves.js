import { getCellIds } from "../../../../../modules/ChessBoard.js";
import { assignedPawnNames } from "../../../arrays/pawnAssignmentData.js";
import { displayStatus } from "../../../objects/displayStatus.js";
import displayCells from "../../../objects/displayCells.js";
import removePawns from "../../../objects/removePawns.js";

const DisplayP4FirstMoves = () => {
  const trackP4FirstMoves = [];
  const P4Pawn = assignedPawnNames[4];

  const isP4Ready = () => {
    return trackP4FirstMoves.includes(P4Pawn);
  };

  const addP4 = () => {
    return trackP4FirstMoves.push(P4Pawn);
  };

  const handleStartSpaces = () => {
    const isReady = isP4Ready();
    if (!isReady) {
      addP4();
    }
  };

  const removeP4 = () => {
    const indexToRemove = removePawns.indexToRemove;
    const amountToRemove = removePawns.amountToRemove;
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
        handleStartSpaces(P4Pawn);
        break;
      case firstInvalidCell:
      case secondInvalidCell:
      case thirdInvalidCell:
      case fourthInvalidCell:
      case fifthInvalidCell:
      case sixthInvalidCell:
      case seventhInvalidCell:
        removeP4();
        break;
      default:
        return null;
    }
  };

  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const handleP4FirstMoves = (filledCell) => {
    const firstMoveIsReady = isP4Ready();
    if (firstMoveIsReady) {
      const emptyStartSpace = displayCells.P4.startSpace;
      mappedCellIds[emptyStartSpace].textContent = displayStatus.emptyCell;
      mappedCellIds[filledCell].textContent = displayStatus.filledCell;
    }
  };

  const handleP4FirstMoveDisplayClicks = (firstMoveP4Id) => {
    const singleSpaceCell = getCellIds[29];
    const doubleSpaceCell = getCellIds[28];
    switch (firstMoveP4Id) {
      case singleSpaceCell:
        const singleSpaceDisplay = displayCells.P4.singleSpace;
        handleP4FirstMoves(singleSpaceDisplay);
        removeP4();
        break;
      case doubleSpaceCell:
        const doubleSpaceDisplay = displayCells.P4.doubleSpace;
        handleP4FirstMoves(doubleSpaceDisplay);
        removeP4();
        break;
      default:
        return null;
    }
  };

  const isDuplicationReady = () => {
    const isSingleSpaceFilled =
      mappedCellIds[29].textContent === displayStatus.filledCell;
    const isDoubleSpaceFilled =
      mappedCellIds[28].textContent === displayStatus.filledCell;
    const duplicationIsPossible = isSingleSpaceFilled || isDoubleSpaceFilled;
    if (duplicationIsPossible) {
      removeP4();
    }
  };

  const preventP4FirstMoveDuplicationClicks = (firstMoveP4Id) => {
    const duplicationCell = getCellIds[30];
    if (firstMoveP4Id === duplicationCell) {
      isDuplicationReady();
    }
  };

  const handleP4FirstMoveClicks = (firstMoveP4Id) => {
    handleStartSpaceClicks(firstMoveP4Id);
    handleP4FirstMoveDisplayClicks(firstMoveP4Id);
    preventP4FirstMoveDuplicationClicks(firstMoveP4Id);
  };

  gridContainer.addEventListener("click", (e) => {
    const firstMoveP4Id = e.target.id;
    handleP4FirstMoveClicks(firstMoveP4Id);
  });
};

export default DisplayP4FirstMoves;
