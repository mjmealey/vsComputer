import { getCellIds } from "../../../../../modules/ChessBoard.js";
import { displayStatus } from "../../../objects/displayStatus.js";
import { assignedPawnNames } from "../../../arrays/pawnAssignmentData.js";
import { assignedPawnNamesIndex } from "../../../arrays/pawnAssignmentData.js";

const DisplayP2FirstMove = () => {
  const trackP2FirstMoves = [];

  const isStartSpaceReady = (assignedPawn) => {
    return trackP2FirstMoves.includes(assignedPawnNames[assignedPawn]);
  };

  const invalidStartSpace = () => {
    const indexToRemove = 0;
    const amountToRemove = 1;
    return trackP2FirstMoves.splice(indexToRemove, amountToRemove);
  };

  const handleStartSpaces = (assignedPawn, assignedName) => {
    const isReady = isStartSpaceReady(assignedPawn);
    if (!isReady) {
      trackP2FirstMoves.push(assignedName);
    }
  };

  const handleStartSpaceClicks = (displayFirstP2MovesId) => {
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
        const assignedIndex = assignedPawnNamesIndex[1].P1;
        const assignedName = assignedPawnNames[1];
        handleStartSpaces(assignedIndex, assignedName);
        break;
      case firstInvalidP2StartCell:
        invalidStartSpace();
        break;
      case secondInvalidP2StartCell:
        invalidStartSpace();
        break;
      case thirdInvalidP2StartCell:
        invalidStartSpace();
        break;
      case fourthInvalidP2StartCell:
        invalidStartSpace();
        break;
      case fifthInvalidP2StartCell:
        invalidStartSpace();
        break;
      case sixthInvalidP2StartCell:
        invalidStartSpace();
        break;
      case seventhInvalidP2StartCell:
        invalidStartSpace();
        break;
    }
  };

  const preventMoveAfterFirstMove = () => {
    const indexToRemove = 0;
    const amountToRemove = 1;
    return trackP2FirstMoves.splice(indexToRemove, amountToRemove);
  };

  const isFirstMoveDisplayReady = (assignedPawn) => {
    return trackP2FirstMoves.includes(assignedPawnNames[assignedPawn]);
  };

  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const handleSingleSpaceDisplay = (assignedPawn, emptyCell, filledCell) => {
    const isReady = isFirstMoveDisplayReady(assignedPawn);
    if (isReady) {
      mappedCellIds[emptyCell].textContent = displayStatus.emptyCell;
      mappedCellIds[filledCell].textContent = displayStatus.filledCell;
    }
  };

  const handleDoubleSpaceDisplay = (assignedPawn, emptyCell, filledCell) => {
    const isReady = isFirstMoveDisplayReady(assignedPawn);
    if (isReady) {
      mappedCellIds[emptyCell].textContent = displayStatus.emptyCell;
      mappedCellIds[filledCell].textContent = displayStatus.filledCell;
    }
  };

  const handleP2SingleSpaceDisplayClicks = (displayFirstP2MovesId) => {
    const isP2SingleSpace = getCellIds[13];
    switch (displayFirstP2MovesId) {
      case isP2SingleSpace:
        const assignedPawn = 1;
        const emptyCell = 14;
        const filledCell = 13;
        handleSingleSpaceDisplay(assignedPawn, emptyCell, filledCell);
        preventMoveAfterFirstMove();
    }
  };

  const handleP2DoubleSpaceDisplayClicks = (displayFirstP2MovesId) => {
    const isP2DoubleSpace = getCellIds[12];
    switch (displayFirstP2MovesId) {
      case isP2DoubleSpace:
        const assignedPawn = 1;
        const emptyCell = 14;
        const filledCell = 12;
        handleDoubleSpaceDisplay(assignedPawn, emptyCell, filledCell);
        preventMoveAfterFirstMove();
    }
  };

  const isDuplicationPossible = () => {
    const indexToRemove = 0;
    const amountToRemove = 1;
    trackP2FirstMoves.splice(indexToRemove, amountToRemove);
  };

  const handleP2FirstMoveDuplication = (singleSpaceCell, doubleSpaceCell) => {
    const singleSpaceCellIsFilled =
      mappedCellIds[singleSpaceCell].textContent === displayStatus.filledCell;
    const doubleSpaceCellIsFilled =
      mappedCellIds[doubleSpaceCell].textContent === displayStatus.filledCell;
    const duplicationIsPossible =
      singleSpaceCellIsFilled || doubleSpaceCellIsFilled;
    if (duplicationIsPossible) {
      isDuplicationPossible();
    }
  };

  const handleP2FirstMoveDuplicationClicks = (displayFirstP2MovesId) => {
    const sourceOfDuplication = getCellIds[14]
    switch (displayFirstP2MovesId) {
      case sourceOfDuplication:
        const singleSpaceCell = 13;
        const doubleSpaceCell = 12;
        handleP2FirstMoveDuplication(singleSpaceCell, doubleSpaceCell);
    }
  };

  const handleP2FirstMoveDisplayClicks = (displayFirstP2MovesId) => {
    handleP2SingleSpaceDisplayClicks(displayFirstP2MovesId);
    handleP2DoubleSpaceDisplayClicks(displayFirstP2MovesId);
    handleP2FirstMoveDuplicationClicks(displayFirstP2MovesId);
  };

  document.addEventListener("click", (e) => {
    const displayFirstP2MovesId = e.target.id;
    handleStartSpaceClicks(displayFirstP2MovesId);
    handleP2FirstMoveDisplayClicks(displayFirstP2MovesId);
  });
};

export default DisplayP2FirstMove;
