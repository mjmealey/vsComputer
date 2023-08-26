import { getCellIds } from "../../../../../modules/ChessBoard.js";
import { assignedPawnNames } from "../../../arrays/pawnAssignmentData.js";
import { assignedPawnNamesIndex } from "../../../arrays/pawnAssignmentData.js";
import { displayStatus } from "../../../objects/displayStatus.js";

const DisplayP3FirstMove = () => {
  const trackP3FirstMove = [];

  const isStartSpaceReady = (assignedPawn) => {
    const isReady = trackP3FirstMove.includes(assignedPawnNames[assignedPawn]);
    return isReady;
  };

  const updateStartSpace = (assignedPawn) => {
    const pawnName = assignedPawnNames[assignedPawn];
    return trackP3FirstMove.push(pawnName);
  };

  const falseStartSpace = () => {
    const indexToRemove = 0;
    const amountToRemove = 1;
    return trackP3FirstMove.splice(indexToRemove, amountToRemove);
  };

  const handleStartSpaces = (assignedPawn) => {
    if (!isStartSpaceReady(assignedPawn)) {
      updateStartSpace(assignedPawn);
    }
  };

  const handleStartSpaceClicks = (firstMoveP3DisplayId) => {
    const validP3StartSpace = getCellIds[22];
    const firstInvalidP3StartSpace = getCellIds[6];
    const secondInvalidP3StartSpace = getCellIds[14];
    const thirdInvalidP3StartSpace = getCellIds[30];
    const fourthInvalidP3StartSpace = getCellIds[38];
    const fifthInvalidP3StartSpace = getCellIds[46];
    const sixthInvalidP3StartSpace = getCellIds[54];
    const seventhInvalidP3StartSpace = getCellIds[62];
    switch (firstMoveP3DisplayId) {
      case validP3StartSpace:
        const validPawn = assignedPawnNamesIndex[2].P3;
        handleStartSpaces(validPawn);
        break;
      case firstInvalidP3StartSpace:
      case secondInvalidP3StartSpace:
      case thirdInvalidP3StartSpace:
      case fourthInvalidP3StartSpace:
      case fifthInvalidP3StartSpace:
      case sixthInvalidP3StartSpace:
      case seventhInvalidP3StartSpace:
        falseStartSpace();
        break;
    }
  };

  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const isP3FirstMoveReady = (assignedPawn) => {
    return trackP3FirstMove.includes(assignedPawnNames[assignedPawn]);
  };

  const firstMoveP3Cells = {
    startSpace: 22,
    singleSpace: 21,
    doubleSpace: 20,
  };

  const handleP3FirstMoveDisplay = (assignedPawn, emptyCell, filledCell) => {
    const isReady = isP3FirstMoveReady(assignedPawn);
    if (isReady) {
      mappedCellIds[emptyCell].textContent = displayStatus.emptyCell;
      mappedCellIds[filledCell].textContent = displayStatus.filledCell;
    }
  };

  const removeAdditionalPawns = () => {
    const indexToRemove = 0;
    const amountToRemove = 1;
    return trackP3FirstMove.splice(indexToRemove, amountToRemove);
  };

  const handleP3FirstMoveDisplayClicks = (firstMoveP3DisplayId) => {
    const assignedPawn = assignedPawnNamesIndex[2].P3;
    const startCell = firstMoveP3Cells.startSpace;
    const singleSpaceP3Cell = getCellIds[21];
    const doubleSpaceP3Cell = getCellIds[20];
    switch (firstMoveP3DisplayId) {
      case singleSpaceP3Cell:
        const singleSpaceCell = firstMoveP3Cells.singleSpace;
        handleP3FirstMoveDisplay(assignedPawn, startCell, singleSpaceCell);
        removeAdditionalPawns();
        break;
      case doubleSpaceP3Cell:
        const doubleSpaceCell = firstMoveP3Cells.doubleSpace;
        handleP3FirstMoveDisplay(assignedPawn, startCell, doubleSpaceCell);
        removeAdditionalPawns();
    }
  };

  const preventP3FirstMoveDuplication = (singleSpaceCell, doubleSpaceCell) => {
    if (
      mappedCellIds[singleSpaceCell].textContent ||
      mappedCellIds[doubleSpaceCell].textContent === displayStatus.filledCell
    ) {
      removeAdditionalPawns();
    }
  };

  const preventP3FirstMoveDuplicationClicks = (firstMoveP3DisplayId) => {
    const startP3Cell = getCellIds[22];
    switch (firstMoveP3DisplayId) {
      case startP3Cell:
        const singleSpaceCell = 21;
        const doubleSpaceCell = 20;
        preventP3FirstMoveDuplication(singleSpaceCell, doubleSpaceCell);
    }
  };

  const handleP3DisplayClicks = (firstMoveP3DisplayId) => {
    handleStartSpaceClicks(firstMoveP3DisplayId);
    preventP3FirstMoveDuplicationClicks(firstMoveP3DisplayId);
    handleP3FirstMoveDisplayClicks(firstMoveP3DisplayId);
  };

  document.addEventListener("click", (e) => {
    const firstMoveP3DisplayId = e.target.id;
    handleP3DisplayClicks(firstMoveP3DisplayId);
  });
};

export default DisplayP3FirstMove;
