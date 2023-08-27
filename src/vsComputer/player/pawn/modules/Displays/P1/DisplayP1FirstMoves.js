import { getCellIds } from "../../../../../modules/ChessBoard.js";
import { assignedPawnNames } from "../../../arrays/pawnAssignmentData.js";
import { displayStatus } from "../../../objects/displayStatus.js";
import removePawns from "../../../objects/removePawns.js";
import displayCells from "../../../objects/displayCells.js";

const DisplayP1FirstMove = () => {
  const trackP1FirstMove = [];
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const checkForP1 = () => {
    const isP1PawnIncluded = assignedPawnNames[0];
    return trackP1FirstMove.includes(isP1PawnIncluded);
  };

  const addP1 = () => {
    const isP1NotIncuded = assignedPawnNames[0];
    return trackP1FirstMove.push(isP1NotIncuded);
  };

  const removeP1 = () => {
    const indexToRemove = removePawns.indexToRemove;
    const amountToRemove = removePawns.amountToRemove;
    return trackP1FirstMove.splice(indexToRemove, amountToRemove);
  };

  const isP1Ready = () => {
    const isCheckingP1 = checkForP1();
    if (!isCheckingP1) {
      addP1();
    }
  };

  const isStartSpaceReadyClicks = (firstMoveP1Id) => {
    const isValidCell = getCellIds[6];
    const invalidCellOne = getCellIds[14];
    const invalidCellTwo = getCellIds[22];
    const invalidCellThree = getCellIds[30];
    const invalidCellFour = getCellIds[38];
    const invalidCellFive = getCellIds[46];
    const invalidCellSix = getCellIds[54];
    const invalidCellSeven = getCellIds[62];
    switch (firstMoveP1Id) {
      case isValidCell:
        isP1Ready();
        break;
      case invalidCellOne:
        removeP1();
        break;
      case invalidCellTwo:
        removeP1();
        break;
      case invalidCellThree:
        removeP1();
        break;
      case invalidCellFour:
        removeP1();
        break;
      case invalidCellFive:
        removeP1();
        break;
      case invalidCellSix:
        removeP1();
        break;
      case invalidCellSeven:
        removeP1();
        break;
    }
  };

  const handleP1Content = (filledCell) => {
    const isP1Ready = checkForP1();
    if (isP1Ready) {
      const emptyStartSpace = displayCells.P1.startSpace;
      mappedCellIds[emptyStartSpace].textContent = displayStatus.emptyCell;
      mappedCellIds[filledCell].textContent = displayStatus.filledCell;
    }
  };

  const handleP1FirstMoveClicks = (firstMoveP1Id) => {
    const singleSpaceP1Cell = getCellIds[5];
    const doubleSpaceP1Cell = getCellIds[4];
    switch (firstMoveP1Id) {
      case singleSpaceP1Cell:
        const isSingleSpaceFilledCell = displayCells.P1.singleSpace;
        handleP1Content(isSingleSpaceFilledCell);
        removeP1();
        break;
      case doubleSpaceP1Cell:
        const isDoubleSpaceFilledCell = displayCells.P1.doubleSpace;
        handleP1Content(isDoubleSpaceFilledCell);
        removeP1();
    }
  };

  const handleP1FirstMoveDuplication = () => {
    const singleSpaceFilledCell =
      mappedCellIds[5].textContent === displayStatus.filledCell;
    const doubleSpaceFilledCell =
      mappedCellIds[4].textContent === displayStatus.filledCell;
    const duplicationIsPossible =
      singleSpaceFilledCell || doubleSpaceFilledCell;
    if (duplicationIsPossible) {
      removeP1();
    }
  };

  const handleP1FirstMoveDuplicationClicks = (firstMoveP1Id) => {
    const sourceOfDuplication = getCellIds[6];
    if (firstMoveP1Id === sourceOfDuplication) {
      handleP1FirstMoveDuplication();
    }
  };

  const handleP1FirstMoveDisplayClicks = (firstMoveP1Id) => {
    isStartSpaceReadyClicks(firstMoveP1Id);
    handleP1FirstMoveClicks(firstMoveP1Id);
    handleP1FirstMoveDuplicationClicks(firstMoveP1Id);
  };

  gridContainer.addEventListener("click", (e) => {
    const firstMoveP1Id = e.target.id;
    handleP1FirstMoveDisplayClicks(firstMoveP1Id);
  });
};

export default DisplayP1FirstMove;
