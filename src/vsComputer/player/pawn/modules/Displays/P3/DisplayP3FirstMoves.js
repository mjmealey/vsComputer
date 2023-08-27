import { getCellIds } from "../../../../../modules/ChessBoard.js";
import { assignedPawnNames } from "../../../arrays/pawnAssignmentData.js";
import { displayStatus } from "../../../objects/displayStatus.js";
import removePawns from "../../../objects/removePawns.js";
import displayCells from "../../../objects/displayCells.js";

const DisplayP3FirstMoves = () => {
  const trackP3FirstMove = [];
  const P3Pawn = assignedPawnNames[2];

  const isP3Ready = () => {
    return trackP3FirstMove.includes(P3Pawn);
  };

  const addP3 = () => {
    return trackP3FirstMove.push(P3Pawn);
  };

  const removeP3 = () => {
    const indexToRemove = removePawns.indexToRemove;
    const amountToRemove = removePawns.amountToRemove;
    return trackP3FirstMove.splice(indexToRemove, amountToRemove);
  };

  const handleStartSpaces = () => {
    const isP3NotIncluded = !isP3Ready();
    if (isP3NotIncluded) {
      addP3();
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
        handleStartSpaces();
        break;
      case firstInvalidP3StartSpace:
      case secondInvalidP3StartSpace:
      case thirdInvalidP3StartSpace:
      case fourthInvalidP3StartSpace:
      case fifthInvalidP3StartSpace:
      case sixthInvalidP3StartSpace:
      case seventhInvalidP3StartSpace:
        removeP3();
        break;
    }
  };

  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const handleP3FirstMoveDisplay = (filledCell) => {
    const isReady = isP3Ready();
    if (isReady) {
      const emptyStartSpace = displayCells.P3.startSpace;
      mappedCellIds[emptyStartSpace].textContent = displayStatus.emptyCell;
      mappedCellIds[filledCell].textContent = displayStatus.filledCell;
    }
  };

  const handleP3FirstMoveDisplayClicks = (firstMoveP3DisplayId) => {
    const singleSpaceP3Cell = getCellIds[21];
    const doubleSpaceP3Cell = getCellIds[20];
    switch (firstMoveP3DisplayId) {
      case singleSpaceP3Cell:
        const singleSpaceCell = displayCells.P3.singleSpace;
        handleP3FirstMoveDisplay(singleSpaceCell);
        removeP3();
        break;
      case doubleSpaceP3Cell:
        const doubleSpaceCell = displayCells.P3.doubleSpace;
        handleP3FirstMoveDisplay(doubleSpaceCell);
        removeP3();
    }
  };

  const preventP3FirstMoveDuplication = () => {
    const isSingleSpaceCellFilled =
      mappedCellIds[21].textContent === displayStatus.filledCell;
    const isDoubleSpaceCellFilled =
      mappedCellIds[20].textContent === displayStatus.filledCell;
    const duplicationIsPossible =
      isSingleSpaceCellFilled || isDoubleSpaceCellFilled;
    if (duplicationIsPossible) {
      removeP3();
    }
  };

  const preventP3FirstMoveDuplicationClicks = (firstMoveP3DisplayId) => {
    const startP3Cell = getCellIds[22];
    if (firstMoveP3DisplayId === startP3Cell) {
      preventP3FirstMoveDuplication();
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

export default DisplayP3FirstMoves;
