import { getCellIds } from "../../../../modules/ChessBoard.js";
import { assignedPawnNames } from "../../arrays/pawnAssignmentData.js";
import { displayStatus } from "../../objects/displayStatus.js";
import { displayArrayRemoval } from "../../objects/startSpaceRemoval.js";
import { assignedPawnNamesIndex } from "../../arrays/pawnAssignmentData.js";

const DoubleSpaceDisplays = () => {
  const trackDoubleSpaces = [];
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  //emptyCell is the cell the pawns start on (becomes empty after double space is complete)

  const doubleSpacePawns = [
    {
      P1: {
        assignedPawn: assignedPawnNamesIndex[0].P1,
        startCell: 6,
        targetCell: 4,
      },
    },
    {
      P2: {
        assignedPawn: assignedPawnNamesIndex[1].P2,
        startCell: 14,
        targetCell: 12,
      },
    },
    {
      P3: {
        assignedPawn: assignedPawnNamesIndex[2].P3,
        startCell: 22,
        targetCell: 20,
      },
    },
    {
      P4: {
        assignedPawn: assignedPawnNamesIndex[3].P4,
        startCell: 30,
        targetCell: 28,
      },
    },
    {
      P5: {
        assignedPawn: assignedPawnNamesIndex[4].P5,
        startCell: 38,
        targetCell: 36,
      },
    },
    {
      P6: {
        assignedPawn: assignedPawnNamesIndex[5].P6,
        startCell: 46,
        targetCell: 44,
      },
    },
    {
      P7: {
        assignedPawn: assignedPawnNamesIndex[6].P7,
        startCell: 54,
        targetCell: 52,
      },
    },
    {
      P8: {
        assignedPawn: assignedPawnNamesIndex[7].P8,
        startCell: 62,
        targetCell: 60,
      },
    },
  ];

  const preparePawns = (assignedPawn) => {
    return trackDoubleSpaces.push(assignedPawn);
  };

  const removePrevPawns = (indexToRemove, amountToRemove) => {
    return trackDoubleSpaces.splice(indexToRemove, amountToRemove);
  };

  const assignedPawnIndex = (assignedPawn) => {
    return assignedPawnNames[assignedPawn];
  };

  const checkForPawn = (assignedPawn) => {
    return !trackDoubleSpaces.includes(assignedPawnIndex(assignedPawn));
  };

  const indexToRemove = displayArrayRemoval.indexToRemove;
  const amountToRemove = displayArrayRemoval.amountToRemove;

  const handleStartSpaces = (assignedPawn) => {
    const checkPawn = checkForPawn(assignedPawn);
    if (checkPawn) {
      removePrevPawns(indexToRemove, amountToRemove);
      const preparedPawn = assignedPawnIndex(assignedPawn);
      preparePawns(preparedPawn);
    }
  };

  const preDoubleSpaceClicks = (preDoubleSpaceId) => {
    let assignedPawn = null;
    const P1StartCell = getCellIds[6];
    const P2StartCell = getCellIds[14];
    const P3StartCell = getCellIds[22];
    const P4StartCell = getCellIds[30];
    const P5StartCell = getCellIds[38];
    const P6StartCell = getCellIds[46];
    const P7StartCell = getCellIds[54];
    const P8StartCell = getCellIds[62];
    switch (preDoubleSpaceId) {
      case P1StartCell:
        assignedPawn = doubleSpacePawns[0].P1.assignedPawn;
        handleStartSpaces(assignedPawn);
        console.log(trackDoubleSpaces);
        break;
      case P2StartCell:
        assignedPawn = doubleSpacePawns[1].P2.assignedPawn;
        handleStartSpaces(assignedPawn);
        console.log(trackDoubleSpaces);
        break;
      case P3StartCell:
        assignedPawn = doubleSpacePawns[2].P3.assignedPawn;
        handleStartSpaces(assignedPawn);
        console.log(trackDoubleSpaces);
        break;
      case P4StartCell:
        assignedPawn = doubleSpacePawns[3].P4.assignedPawn;
        handleStartSpaces(assignedPawn);
        console.log(trackDoubleSpaces);
        break;
      case P5StartCell:
        assignedPawn = doubleSpacePawns[4].P5.assignedPawn;
        handleStartSpaces(assignedPawn);
        console.log(trackDoubleSpaces);
        break;
      case P6StartCell:
        assignedPawn = doubleSpacePawns[5].P6.assignedPawn;
        handleStartSpaces(assignedPawn);
        console.log(trackDoubleSpaces);
        break;
      case P7StartCell:
        assignedPawn = doubleSpacePawns[6].P7.assignedPawn;
        handleStartSpaces(assignedPawn);
        console.log(trackDoubleSpaces);
        break;
      case P8StartCell:
        assignedPawn = doubleSpacePawns[7].P8.assignedPawn;
        handleStartSpaces(assignedPawn);
        console.log(trackDoubleSpaces);
        break;
      default:
        return null;
    }
  };

  const isPawnContentReady = (emptyCell, filledCell) => {
    mappedCellIds[emptyCell].textContent = displayStatus.emptyCell;
    mappedCellIds[filledCell].textContent = displayStatus.filledCell;
  };

  const isDoubleSpacePrepared = (assignedPawn) => {
    return trackDoubleSpaces.includes(assignedPawnIndex(assignedPawn));
  };

  const handleDoubleSpaces = (assignedPawn, emptyCell, filledCell) => {
    const checkDoubleSpaceStatus = isDoubleSpacePrepared(assignedPawn);
    if (checkDoubleSpaceStatus) {
      isPawnContentReady(emptyCell, filledCell);
    }
  };

  const handleDoubleSpaceClicks = (doubleSpaceId) => {
    let assignedIndex = null;
    let startCell = null;
    let targetCell = null;
    const targetP1Cell = getCellIds[4];
    const targetP2Cell = getCellIds[12];
    const targetP3Cell = getCellIds[20];
    const targetP4Cell = getCellIds[28];
    const targetP5Cell = getCellIds[36];
    const targetP6Cell = getCellIds[44];
    const targetP7Cell = getCellIds[52];
    const targetP8Cell = getCellIds[60];
    switch (doubleSpaceId) {
      case targetP1Cell:
        assignedIndex = assignedPawnNamesIndex[0].P1;
        startCell = doubleSpacePawns[0].P1.startCell;
        targetCell = doubleSpacePawns[0].P1.targetCell;
        handleDoubleSpaces(assignedIndex, startCell, targetCell);
        break;
      case targetP2Cell:
        assignedIndex = assignedPawnNamesIndex[1].P2;
        startCell = doubleSpacePawns[1].P2.startCell;
        targetCell = doubleSpacePawns[1].P2.targetCell;
        handleDoubleSpaces(assignedIndex, startCell, targetCell);
        break;
      case targetP3Cell:
        assignedIndex = assignedPawnNamesIndex[2].P3;
        startCell = doubleSpacePawns[2].P3.startCell;
        targetCell = doubleSpacePawns[2].P3.targetCell;
        handleDoubleSpaces(assignedIndex, startCell, targetCell);
        break;
      case targetP4Cell:
        assignedIndex = assignedPawnNamesIndex[3].P4;
        startCell = doubleSpacePawns[3].P4.startCell;
        targetCell = doubleSpacePawns[3].P4.targetCell;
        handleDoubleSpaces(assignedIndex, startCell, targetCell);
        break;
      case targetP5Cell:
        assignedIndex = assignedPawnNamesIndex[4].P5;
        startCell = doubleSpacePawns[4].P5.startCell;
        targetCell = doubleSpacePawns[4].P5.targetCell;
        handleDoubleSpaces(assignedIndex, startCell, targetCell);
        break;
      case targetP6Cell:
        assignedIndex = assignedPawnNamesIndex[5].P6;
        startCell = doubleSpacePawns[5].P6.startCell;
        targetCell = doubleSpacePawns[5].P6.targetCell;
        handleDoubleSpaces(assignedIndex, startCell, targetCell);
        break;
      case targetP7Cell:
        assignedIndex = assignedPawnNamesIndex[6].P7;
        startCell = doubleSpacePawns[6].P7.startCell;
        targetCell = doubleSpacePawns[6].P7.targetCell;
        handleDoubleSpaces(assignedIndex, startCell, targetCell);
        break;
      case targetP8Cell:
        assignedIndex = assignedPawnNamesIndex[7].P8;
        startCell = doubleSpacePawns[7].P8.startCell;
        targetCell = doubleSpacePawns[7].P8.targetCell;
        handleDoubleSpaces(assignedIndex, startCell, targetCell);
        break;
      default:
        return null;
    }
  };

  gridContainer.addEventListener("click", (e) => {
    const doubleSpaceId = e.target.id;
    preDoubleSpaceClicks(doubleSpaceId);
    handleDoubleSpaceClicks(doubleSpaceId);
  });
};
export default DoubleSpaceDisplays;
