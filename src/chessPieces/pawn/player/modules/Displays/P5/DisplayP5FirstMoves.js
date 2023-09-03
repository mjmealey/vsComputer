import { getCellIds } from "../../../../../modules/ChessBoard.js";
import { displayStatus } from "../../../objects/displayStatus.js";
import { assignedPawnNames } from "../../../arrays/pawnAssignmentData.js";
import displayCells from "../../../objects/displayCells.js";
import removePawns from "../../../objects/removePawns.js";

const DisplayP5FirstMoves = () => {
  const trackP5FirstMoves = [];
  const P5Pawn = assignedPawnNames[4];

  const isP5Ready = () => {
    return trackP5FirstMoves.includes(P5Pawn);
  };

  const removeP5 = () => {
    const indexToRemove = removePawns.indexToRemove;
    const amountToRemove = removePawns.amountToRemove;
    return trackP5FirstMoves.splice(indexToRemove, amountToRemove);
  };

  const addP5 = () => {
    return trackP5FirstMoves.push(P5Pawn);
  };

  const handleP5StartSpaceClicks = (firstMoveP5Id) => {
    const validP5StartCell = getCellIds[38];
    const firstInvalidP5StartCell = getCellIds[6];
    const secondInvalidP5StartCell = getCellIds[14];
    const thirdInvalidP5StartCell = getCellIds[22];
    const fourthInvalidP5StartCell = getCellIds[30];
    const fifthInvalidP5StartCell = getCellIds[46];
    const sixthInvalidP5StartCell = getCellIds[54];
    const seventhInvalidP5StartCell = getCellIds[62];
    switch (firstMoveP5Id) {
      case validP5StartCell:
        addP5();
        break;
      case firstInvalidP5StartCell:
      case secondInvalidP5StartCell:
      case thirdInvalidP5StartCell:
      case fourthInvalidP5StartCell:
      case fifthInvalidP5StartCell:
      case sixthInvalidP5StartCell:
      case seventhInvalidP5StartCell:
        removeP5();
    }
  };

  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const updateP5FirstMoveContent = (filledCell) => {
    const moveIsReady = isP5Ready();
    if (moveIsReady) {
      const emptyStartSpace = displayCells.P5.startSpace;
      mappedCellIds[emptyStartSpace].textContent = displayStatus.emptyCell;
      mappedCellIds[filledCell].textContent = displayStatus.filledCell;
      isP5FirstMoveComplete();
    }
  };

  const handleP5FirstMoveDisplays = (firstMoveP5Id) => {
    const singleSpaceCell = getCellIds[37];
    const doubleSpaceCell = getCellIds[36];
    switch (firstMoveP5Id) {
      case singleSpaceCell:
        const singleSpaceDisplay = displayCells.P5.singleSpace;
        updateP5FirstMoveContent(singleSpaceDisplay);
        break;
      case doubleSpaceCell:
        const doubleSpaceDisplay = displayCells.P5.doubleSpace;
        updateP5FirstMoveContent(doubleSpaceDisplay);
        break;
      default:
        return null;
    }
  };

  const handleP5FirstMoveDuplication = () => {
    const filledSingleSpaceCell =
      mappedCellIds[37].textContent === displayStatus.filledCell;
    const filledDoubleSpaceCell =
      mappedCellIds[36].textContent === displayStatus.filledCell;
    const duplicationIsPossible =
      filledDoubleSpaceCell || filledSingleSpaceCell;
    if (duplicationIsPossible) {
      removeP5();
    }
  };

  const handleP5FirstMoveDuplicationClicks = (firstMoveP5Id) => {
    const duplicationCell = getCellIds[38];
    if (firstMoveP5Id === duplicationCell) {
      handleP5FirstMoveDuplication();
    }
  };

  const handleP5FirstMoveClicks = (firstMoveP5Id) => {
    handleP5StartSpaceClicks(firstMoveP5Id);
    handleP5FirstMoveDisplays(firstMoveP5Id);
    handleP5FirstMoveDuplicationClicks(firstMoveP5Id);
  };

  gridContainer.addEventListener("click", (e) => {
    const firstMoveP5Id = e.target.id;
    handleP5FirstMoveClicks(firstMoveP5Id);
  });
};

export default DisplayP5FirstMoves;
