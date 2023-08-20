import { getCellIds } from "../../../../modules/ChessBoard.js";
import { assignedPawnNames } from "../../arrays/pawnAssignmentData.js";
import { displayStatus } from "../../objects/displayStatus.js";
import { displayArrayRemoval } from "../../objects/startSpaceRemoval.js";
import { assignedPawnNamesIndex } from "../../arrays/pawnAssignmentData.js";

const FirstMoveDisplays = () => {
  const trackFirstMove = [];
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  //emptyCell is the cell the pawns start on (becomes empty after double space is complete)

  const firstMoveStatus = [
    {
      P1: {
        assignedPawn: assignedPawnNamesIndex[0].P1,
        startCell: 6,
        singleSpaceCell: 5,
        doubleSpaceCell: 4,
      },
    },
    {
      P2: {
        assignedPawn: assignedPawnNamesIndex[1].P2,
        startCell: 14,
        singleSpaceCell: 13,
        doubleSpaceCell: 12,
      },
    },
    {
      P3: {
        assignedPawn: assignedPawnNamesIndex[2].P3,
        startCell: 22,
        singleSpaceCell: 21,
        doubleSpaceCell: 20,
      },
    },
    {
      P4: {
        assignedPawn: assignedPawnNamesIndex[3].P4,
        startCell: 30,
        singleSpaceCell: 29,
        doubleSpaceCell: 28,
      },
    },
    {
      P5: {
        assignedPawn: assignedPawnNamesIndex[4].P5,
        startCell: 38,
        singleSpaceCell: 37,
        doubleSpaceCell: 36,
      },
    },
    {
      P6: {
        assignedPawn: assignedPawnNamesIndex[5].P6,
        startCell: 46,
        singleSpaceCell: 45,
        doubleSpaceCell: 44,
      },
    },
    {
      P7: {
        assignedPawn: assignedPawnNamesIndex[6].P7,
        startCell: 54,
        singleSpaceCell: 53,
        doubleSpaceCell: 52,
      },
    },
    {
      P8: {
        assignedPawn: assignedPawnNamesIndex[7].P8,
        startCell: 62,
        singleSpaceCell: 61,
        doubleSpaceCell: 60,
      },
    },
  ];

  const startP1Cell = getCellIds[6];
  const startP2Cell = getCellIds[14];
  const startP3Cell = getCellIds[22];
  const startP4Cell = getCellIds[30];
  const startP5Cell = getCellIds[38];
  const startP6Cell = getCellIds[46];
  const startP7Cell = getCellIds[54];
  const startP8Cell = getCellIds[62];

  const removePrevPawn = (indexToRemove, amountToRemove) => {
    return trackFirstMove.splice(indexToRemove, amountToRemove);
  };
  const trackStartSpaces = (assignedPawn) => {
    return trackFirstMove.push(assignedPawnNames[assignedPawn]);
  };

  const removePrevAssignedPawn = (firstMoveId) => {
    const indexToRemove = displayArrayRemoval.indexToRemove;
    const amountToRemove = displayArrayRemoval.amountToRemove;
    switch (firstMoveId) {
      case startP1Cell:
        removePrevPawn(indexToRemove, amountToRemove);
        break;
      case startP2Cell:
        removePrevPawn(indexToRemove, amountToRemove);
        break;
      case startP3Cell:
        removePrevPawn(indexToRemove, amountToRemove);
        break;
      case startP4Cell:
        removePrevPawn(indexToRemove, amountToRemove);
        break;
      case startP5Cell:
        removePrevPawn(indexToRemove, amountToRemove);
        break;
      case startP6Cell:
        removePrevPawn(indexToRemove, amountToRemove);
        break;
      case startP7Cell:
        removePrevPawn(indexToRemove, amountToRemove);
        break;
      case startP8Cell:
        removePrevPawn(indexToRemove, amountToRemove);
        break;
      default:
        return null;
    }
  };
  let assignedPawn = null;
  const assignPawns = (firstMoveId) => {
    switch (firstMoveId) {
      case getCellIds[6]:
        assignedPawn = firstMoveStatus[0].P1.assignedPawn;
        trackStartSpaces(assignedPawn);
        console.log(trackFirstMove);
        break;
      case getCellIds[14]:
        assignedPawn = firstMoveStatus[1].P2.assignedPawn;
        trackStartSpaces(assignedPawn);
        break;
      case getCellIds[22]:
        assignedPawn = firstMoveStatus[2].P3.assignedPawn;
        trackStartSpaces(assignedPawn);
        break;
      case getCellIds[30]:
        assignedPawn = firstMoveStatus[3].P4.assignedPawn;
        trackStartSpaces(assignedPawn);
        break;
      case getCellIds[38]:
        assignedPawn = firstMoveStatus[4].P5.assignedPawn;
        trackStartSpaces(assignedPawn);
        break;
      case getCellIds[46]:
        assignedPawn = firstMoveStatus[5].P6.assignedPawn;
        trackStartSpaces(assignedPawn);
        break;
      case getCellIds[54]:
        assignedPawn = firstMoveStatus[6].P7.assignedPawn;
        trackStartSpaces(assignedPawn);
        break;
      case getCellIds[62]:
        assignedPawn = firstMoveStatus[7].P8.assignedPawn;
        trackStartSpaces(assignedPawn);
        break;
      default:
        return null;
    }
  };

  const handleStartSpaceClicks = (firstMoveId) => {
    removePrevAssignedPawn(firstMoveId);
    assignPawns(firstMoveId);
  };

  const isFirstMoveReady = (assignedPawn) => {
    return trackFirstMove.includes(assignedPawnNames[assignedPawn]);
  };

  const preventFurtherPawns = () => {
    return trackFirstMove.splice(0, 1)
  }


  let emptyCell = null;
  let filledCell = null;

  const singleSpaceP1Cell = getCellIds[5];
  const singleSpaceP2Cell = getCellIds[13];
  const singleSpaceP3Cell = getCellIds[21];
  const singleSpaceP4Cell = getCellIds[29];
  const singleSpaceP5Cell = getCellIds[37];
  const singleSpaceP6Cell = getCellIds[45];
  const singleSpaceP7Cell = getCellIds[53];
  const singleSpaceP8Cell = getCellIds[61];

  const postSingleSpaceEmptyCells = (emptyCell) => {
    return (mappedCellIds[emptyCell].textContent = displayStatus.emptyCell);
  };

  const postSingleSpaceFilledCells = (filledCell) => {
    return (mappedCellIds[filledCell].textContent = displayStatus.filledCell);
  };

  const checkCellsAfterSingleSpace = (assignedPawn, emptyCell, filledCell) => {
    const prepareEmptyCell = isFirstMoveReady(assignedPawn);
    if (prepareEmptyCell) {
      postSingleSpaceEmptyCells(emptyCell);
      postSingleSpaceFilledCells(filledCell);
    }
  };

  const cellsAfterSingleSpaceClicks = (singleSpaceId) => {
    switch (singleSpaceId) {
      case singleSpaceP1Cell:
        emptyCell = firstMoveStatus[0].P1.startCell;
        filledCell = firstMoveStatus[0].P1.singleSpaceCell;
        checkCellsAfterSingleSpace(assignedPawn, emptyCell, filledCell);
        preventFurtherPawns()
        break;
      case singleSpaceP2Cell:
        emptyCell = firstMoveStatus[1].P2.startCell;
        filledCell = firstMoveStatus[1].P2.singleSpaceCell;
        checkCellsAfterSingleSpace(assignedPawn, emptyCell, filledCell);
        preventFurtherPawns()
        break;
      case singleSpaceP3Cell:
        emptyCell = firstMoveStatus[2].P3.startCell;
        filledCell = firstMoveStatus[2].P3.singleSpaceCell;
        checkCellsAfterSingleSpace(assignedPawn, emptyCell, filledCell);
        preventFurtherPawns()
        break;
      case singleSpaceP4Cell:
        emptyCell = firstMoveStatus[3].P4.startCell;
        filledCell = firstMoveStatus[3].P4.singleSpaceCell;
        checkCellsAfterSingleSpace(assignedPawn, emptyCell, filledCell);
        preventFurtherPawns()
        break;
      case singleSpaceP5Cell:
        emptyCell = firstMoveStatus[4].P5.startCell;
        filledCell = firstMoveStatus[4].P5.singleSpaceCell;
        checkCellsAfterSingleSpace(assignedPawn, emptyCell, filledCell);
        preventFurtherPawns()
        break;
      case singleSpaceP6Cell:
        emptyCell = firstMoveStatus[5].P6.startCell;
        filledCell = firstMoveStatus[5].P6.singleSpaceCell;
        checkCellsAfterSingleSpace(assignedPawn, emptyCell, filledCell);
        preventFurtherPawns()
        break;
      case singleSpaceP7Cell:
        emptyCell = firstMoveStatus[6].P7.startCell;
        filledCell = firstMoveStatus[6].P7.singleSpaceCell;
        checkCellsAfterSingleSpace(assignedPawn, emptyCell, filledCell);
        preventFurtherPawns()
        break;
      case singleSpaceP8Cell:
        emptyCell = firstMoveStatus[7].P8.startCell;
        filledCell = firstMoveStatus[7].P8.singleSpaceCell;
        checkCellsAfterSingleSpace(assignedPawn, emptyCell, filledCell);
        preventFurtherPawns()
        break;
    }
  };  

  const handleSingleSpaceClicks = (singleSpaceId) => {
    cellsAfterSingleSpaceClicks(singleSpaceId);
  };
  
  const checkCellsAfterDoubleSpace = (assignedPawn, emptyCell, filledCell) => {
      
  }

  gridContainer.addEventListener("click", (e) => {
    const firstMoveId = e.target.id;
    handleStartSpaceClicks(firstMoveId);
    handleSingleSpaceClicks(firstMoveId);
  });
};
export default FirstMoveDisplays;
