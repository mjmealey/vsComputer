import { getCellIds } from "../../../../../modules/ChessBoard.js";
import { assignedPawnNames } from "../../../arrays/pawnAssignmentData.js";
import { displayStatus } from "../../../objects/displayStatus.js";
const DisplayP1FirstMove = () => {
  const trackP1FirstMove = [];
  const firstMoveP1Displays = {
    pawnForP1: 0,
    startPosition: getCellIds[6],
    singleSpacePosition: getCellIds[5],
    doubleSpacePosition: getCellIds[4],
    startCell: 6,
    singleSpaceCell: 5,
    doubleSpaceCell: 4,
  };
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const checkP1 = (assignedPawn) => {
    return trackP1FirstMove.includes(assignedPawnNames[assignedPawn]);
  };

  const addP1 = (assignedPawn) => {
    return trackP1FirstMove.push(assignedPawnNames[assignedPawn]);
  };

  const removeP1 = () => {
    return trackP1FirstMove.splice(0, 1);
  };

  const startSpaceP1 = (assignedPawn) => {
    const isCheckingP1 = checkP1(assignedPawn);
    if (!isCheckingP1) {
      addP1(assignedPawn);
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
        startSpaceP1(0);
        console.log(trackP1FirstMove);
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

  const handleP1Content = (emptyCell, filledCell) => {
    mappedCellIds[emptyCell].textContent = displayStatus.emptyCell;
    mappedCellIds[filledCell].textContent = displayStatus.filledCell;
  };

  const handleP1 = (assignedPawn, emptyCell, filledCell) => {
    const isP1Ready = checkP1(assignedPawn);
    if (isP1Ready) {
      handleP1Content(emptyCell, filledCell);
    }
  };

  const handleP1FirstMoveClicks = (firstMoveP1Id) => {
    const assignedPawn = firstMoveP1Displays.pawnForP1;
    const emptyCell = firstMoveP1Displays.startCell;
    const isSingleSpaceFilledCell = firstMoveP1Displays.singleSpaceCell;
    const isDoubleSpaceFilledCell = firstMoveP1Displays.doubleSpaceCell;
    const singleSpaceP1Cell = firstMoveP1Displays.singleSpacePosition;
    const doubleSpaceP1Cell = firstMoveP1Displays.doubleSpacePosition;

    switch (firstMoveP1Id) {
      case singleSpaceP1Cell:
        handleP1(assignedPawn, emptyCell, isSingleSpaceFilledCell);
        removeP1();
        break;
      case doubleSpaceP1Cell:
        handleP1(assignedPawn, emptyCell, isDoubleSpaceFilledCell);
        removeP1();
    }
  };

  const preventP2FirstMoveDuplication = () => {
    const indexToRemove = 0;
    const amountToRemove = 1;
    trackP1FirstMove.splice(indexToRemove, amountToRemove);
  };

  const handleP1FirstMoveDuplication = (singleSpaceCell, doubleSpaceCell) => {
    const isSingleSpaceFilledCell =
      mappedCellIds[singleSpaceCell].textContent === displayStatus.filledCell;
    const isDoubleSpaceFilledCell =
      mappedCellIds[doubleSpaceCell].textContent === displayStatus.filledCell;
    const duplicationIsPossible =
      isSingleSpaceFilledCell || isDoubleSpaceFilledCell;
    if (duplicationIsPossible) {
      preventP2FirstMoveDuplication();
    }
  };

  const handleP1FirstMoveDuplicationClicks = (firstMoveP1Id) => {
    const sourceOfDuplication = getCellIds[6];
    switch (firstMoveP1Id) {
      case sourceOfDuplication:
        const singleSpaceCell = 5;
        const doubleSpaceCell = 4;
        handleP1FirstMoveDuplication(singleSpaceCell, doubleSpaceCell);
    }
  };

  const handleP1FirstMoveDisplayClicks = (firstMoveP1Id) => {
    isStartSpaceReadyClicks(firstMoveP1Id);
    handleP1FirstMoveClicks(firstMoveP1Id);
    handleP1FirstMoveDuplicationClicks(firstMoveP1Id);
  };

  document.addEventListener("click", (e) => {
    const firstMoveP1Id = e.target.id;
    handleP1FirstMoveDisplayClicks(firstMoveP1Id);
  });
};

export default DisplayP1FirstMove;
