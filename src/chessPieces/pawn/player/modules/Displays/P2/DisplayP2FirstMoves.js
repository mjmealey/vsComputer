import { getCellIds } from "../../../../../modules/ChessBoard.js";
import { displayStatus } from "../../../objects/displayStatus.js";
import { assignedPawnNames } from "../../../arrays/pawnAssignmentData.js";
import removePawns from "../../../objects/removePawns.js";
import displayCells from "../../../objects/displayCells.js";

const DisplayP2FirstMoves = () => {
  const trackP2FirstMoves = [];
  const P2Pawn = assignedPawnNames[1];

  const isP2Ready = () => {
    return trackP2FirstMoves.includes(P2Pawn);
  };

  const addP2 = () => {
    const isReady = isP2Ready();
    if (!isReady) {
      trackP2FirstMoves.push(P2Pawn);
    }
  };

  const removeP2 = () => {
    const indexToRemove = removePawns.indexToRemove;
    const amountToRemove = removePawns.amountToRemove;
    return trackP2FirstMoves.splice(indexToRemove, amountToRemove);
  };

  const handleP2StartSpaceClicks = (displayFirstP2MovesId) => {
    const validP2StartCell = getCellIds[14];
    const firstInvalidP2StartCell = getCellIds[6];
    const secondInvalidP2StartCell = getCellIds[22];
    const thirdInvalidP2StartCell = getCellIds[30];
    const fourthInvalidP2StartCell = getCellIds[38];
    const fifthInvalidP2StartCell = getCellIds[46];
    const sixthInvalidP2StartCell = getCellIds[54];
    const seventhInvalidP2StartCell = getCellIds[62];

    switch (displayFirstP2MovesId) {
      case validP2StartCell:
        addP2();
        break;
      case firstInvalidP2StartCell:
        removeP2();
        break;
      case secondInvalidP2StartCell:
        removeP2();
        break;
      case thirdInvalidP2StartCell:
        removeP2();
        break;
      case fourthInvalidP2StartCell:
        removeP2();
        break;
      case fifthInvalidP2StartCell:
        removeP2();
        break;
      case sixthInvalidP2StartCell:
        removeP2();
        break;
      case seventhInvalidP2StartCell:
        removeP2();
        break;
    }
  };

  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const handleP2FirstMovesDisplay = (filledCell) => {
    const isP2DisplayReady = isP2Ready();
    if (isP2DisplayReady) {
      const emptyStartSpace = displayCells.P2.startSpace;
      mappedCellIds[emptyStartSpace].textContent = displayStatus.emptyCell;
      mappedCellIds[filledCell].textContent = displayStatus.filledCell;
      removeP2();
    }
  };

  const updateP2FirstMovesDisplay = (displayFirstP2MovesId) => {
    const singleSpaceCell = getCellIds[13];
    const doubleSpaceCell = getCellIds[12];
    switch (displayFirstP2MovesId) {
      case singleSpaceCell:
        const singleSpaceDisplay = displayCells.P2.singleSpace;
        handleP2FirstMovesDisplay(singleSpaceDisplay);
        break;
      case doubleSpaceCell:
        const doubleSpaceDisplay = displayCells.P2.doubleSpace;
        handleP2FirstMovesDisplay(doubleSpaceDisplay);
        break;
      default:
        return null;
    }
  };

  const handleP2FirstMoveDuplication = () => {
    const singleSpaceCellIsFilled =
      mappedCellIds[13].textContent === displayStatus.filledCell;
    const doubleSpaceCellIsFilled =
      mappedCellIds[12].textContent === displayStatus.filledCell;
    const duplicationIsPossible =
      singleSpaceCellIsFilled || doubleSpaceCellIsFilled;
    if (duplicationIsPossible) {
      removeP2();
    }
  };

  const handleP2FirstMoveDuplicationClicks = (displayFirstP2MovesId) => {
    const sourceOfDuplication = getCellIds[14];
    switch (displayFirstP2MovesId) {
      case sourceOfDuplication:
        handleP2FirstMoveDuplication();
    }
  };

  const handleP2FirstMoveDisplayClicks = (displayFirstP2MovesId) => {
    handleP2StartSpaceClicks(displayFirstP2MovesId);
    updateP2FirstMovesDisplay(displayFirstP2MovesId);
    handleP2FirstMoveDuplicationClicks(displayFirstP2MovesId);
  };

  gridContainer.addEventListener("click", (e) => {
    const displayFirstP2MovesId = e.target.id;
    handleP2FirstMoveDisplayClicks(displayFirstP2MovesId);
  });
};

export default DisplayP2FirstMoves;
