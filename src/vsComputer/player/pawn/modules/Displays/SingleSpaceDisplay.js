import { getCellIds } from "../../../../modules/ChessBoard.js";
import { assignedPawnNames } from "../../arrays/pawnAssignmentData.js";
import { displayArrayRemoval } from "../../objects/startSpaceRemoval.js";
import { displayStatus } from "../../objects/displayStatus.js";
import { assignedPawnNamesIndex } from "../../arrays/pawnAssignmentData.js";

const SingleSpaceDisplays = () => {
  const trackSingleSpace = [];  
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  let assignedPawn = null
  const singleSpacePawns = [
    {
      P1: {
        assignedPawn: assignedPawnNamesIndex[0].P1,
        startCell: 6,
        targetCell: 5,
      },
    },
    {
      P2: {
        assignedPawn: assignedPawnNamesIndex[1].P2,
        startCell: 14,
        targetCell: 13,
      },
    },
    {
      P3: {
        assignedPawn: assignedPawnNamesIndex[2].P3,
        startCell: 22,
        targetCell: 21,
      },
    },
    {
      P4: {
        assignedPawn: assignedPawnNamesIndex[3].P4,
        startCell: 30,
        targetCell: 29,
      },
    },
    {
      P5: {
        assignedPawn: assignedPawnNamesIndex[4].P5,
        startCell: 38,
        targetCell: 37,
      },
    },
    {
      P6: {
        assignedPawn: assignedPawnNamesIndex[5].P6,
        startCell: 46,
        targetCell: 45,
      },
    },
    {
      P7: {
        assignedPawn: assignedPawnNamesIndex[6].P7,
        startCell: 54,
        targetCell: 53,
      },
    },
    {
      P8: {
        assignedPawn: assignedPawnNamesIndex[7].P8,
        startCell: 62,
        targetCell: 61,
      },
    },
  ];
  

  const checkForEmptySelection = (assignedPawn) => {
    return !trackSingleSpace.includes(assignedPawnNames[assignedPawn]);
  };

  const removePreviousPawn = (indexToRemove, amountToRemove) => {
    return trackSingleSpace.splice(indexToRemove, amountToRemove);
  };

  const addNextPawn = (assignedPawn) => {
    return trackSingleSpace.push(assignedPawnNames[assignedPawn]);
  };

  const isPawnReady = (assignedPawn) => {
    const isEmptyPawnSelection = checkForEmptySelection(assignedPawn);
    if (isEmptyPawnSelection) {
      const indexToRemove = 0;
      const amountToRemove = 1;
      removePreviousPawn(indexToRemove, amountToRemove);
      addNextPawn(assignedPawn);
      console.log(trackSingleSpace);
    }
  };

  const handlePreSingleSpaceClicks = (preSingleSpaceId) => {
    let assignedPawn = null;
    const startP1Cell = getCellIds[6];
    const startP2Cell = getCellIds[14];
    const startP3Cell = getCellIds[22];
    const startP4Cell = getCellIds[30];
    const startP5Cell = getCellIds[38];
    const startP6Cell = getCellIds[46];
    const startP7Cell = getCellIds[54];
    const startP8Cell = getCellIds[62];
    switch (preSingleSpaceId) {
      case startP1Cell:
        assignedPawn = assignedPawnNamesIndex[0].P1;
        isPawnReady(assignedPawn);
        break;
      case startP2Cell:
        assignedPawn = assignedPawnNamesIndex[1].P2;
        isPawnReady(assignedPawn);
        break;
      case startP3Cell:
        assignedPawn = assignedPawnNamesIndex[2].P3;
        isPawnReady(assignedPawn);
        break;
      case startP4Cell:
        assignedPawn = assignedPawnNamesIndex[3].P4;
        isPawnReady(assignedPawn);
        break;
      case startP5Cell:
        assignedPawn = assignedPawnNamesIndex[4].P5;
        isPawnReady(assignedPawn);
        break;
      case startP6Cell:
        assignedPawn = assignedPawnNamesIndex[5].P6;
        isPawnReady(assignedPawn);
        break;
      case startP7Cell:
        assignedPawn = assignedPawnNamesIndex[6].P7;
        isPawnReady(assignedPawn);
        break;
      case startP8Cell:
        assignedPawn = assignedPawnNamesIndex[7].P8;
        isPawnReady(assignedPawn);
        break;
      default:
        return null;
    }
  };

  const singleSpaceP1Cell = getCellIds[5]
  const singleSpaceP2Cell = getCellIds[13]
  const singleSpaceP3Cell = getCellIds[21]
  const singleSpaceP4Cell = getCellIds[29]
  const singleSpaceP5Cell = getCellIds[37]
  const singleSpaceP6Cell = getCellIds[45]
  const singleSpaceP7Cell = getCellIds[53]
  const singleSpaceP8Cell = getCellIds[61]

  const isPawnReadyForSingleSpace = (assignedPawn) => {
    return trackSingleSpace.includes(assignedPawnNames[assignedPawn]);
  };

  const emptyCellContent = (emptyCell) => {
    const emptyCellAfterSingleSpace = displayStatus.emptyCell;
    mappedCellIds[emptyCell].textContent = emptyCellAfterSingleSpace;
  };

  const isEmptyCellReady = (assignedPawn, emptyCell) => {
    const isEmptyCell = isPawnReadyForSingleSpace(assignedPawn)
    if(isEmptyCell){
      emptyCellContent(emptyCell)
    }
  }

  const emptyCellsAfterSingleSpace = (singleSpaceId) => {
    let emptyCell = null
    switch(singleSpaceId){
      case singleSpaceP1Cell:
          assignedPawn = assignedPawnNamesIndex[0].P1
          emptyCell = singleSpacePawns[0].P1.startCell
          isEmptyCellReady(assignedPawn, emptyCell)
          break;
        case singleSpaceP2Cell:
    }
  }

  

  gridContainer.addEventListener("click", (e) => {
    const singleSpaceId = e.target.id;
    handlePreSingleSpaceClicks(singleSpaceId);
    emptyCellsAfterSingleSpace(singleSpaceId)
  });
};

export default SingleSpaceDisplays;
