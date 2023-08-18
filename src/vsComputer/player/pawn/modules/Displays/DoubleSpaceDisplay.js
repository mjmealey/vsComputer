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
        startCell: getCellIds[6],
        targetCell: getCellIds[4],
      },
    },
    {
      P2: {
        assignedPawn: assignedPawnNamesIndex[1].P2,
        startCell: getCellIds[14],
        targetCell: getCellIds[12],
      },
    },
    {
      P3: {
        assignedPawn: assignedPawnNamesIndex[2].P3,
        startCell: getCellIds[22],
        targetCell: getCellIds[20],
      },
    },
    {
      P4: {
        assignedPawn: assignedPawnNamesIndex[3].P4,
        startCell: getCellIds[30],
        targetCell: getCellIds[28],
      },
    },
    {
      P5: {
        assignedPawn: assignedPawnNamesIndex[4].P5,
        startCell: getCellIds[38],
        targetCell: getCellIds[36],
      },
    },
    {
      P6: {
        assignedPawn: assignedPawnNamesIndex[5].P6,
        startCell: getCellIds[46],
        targetCell: getCellIds[44],
      },
    },
    {
      P7: {
        assignedPawn: assignedPawnNamesIndex[6].P7,
        startCell: getCellIds[54],
        targetCell: getCellIds[52],
      },
    },
    {
      P8: {
        assignedPawn: assignedPawnNamesIndex[7].P8,
        startCell: getCellIds[62],
        targetCell: getCellIds[60],
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
    const P1StartCell = doubleSpacePawns[0].P1.startCell;
    const P2StartCell = doubleSpacePawns[1].P2.startCell;
    const P3StartCell = doubleSpacePawns[2].P3.startCell;
    const P4StartCell = doubleSpacePawns[3].P4.startCell;
    const P5StartCell = doubleSpacePawns[4].P5.startCell;
    const P6StartCell = doubleSpacePawns[5].P6.startCell;
    const P7StartCell = doubleSpacePawns[6].P7.startCell;
    const P8StartCell = doubleSpacePawns[7].P8.startCell;
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
    const checkDoubleSpaceStatus = isDoubleSpacePrepared(assignedPawn)
    if(checkDoubleSpaceStatus){
      isPawnContentReady(emptyCell, filledCell)
    }
  };

  const handleDoubleSpaceClicks = (doubleSpaceId) => {
    switch (doubleSpaceId) {
      case getCellIds[4]:
        handleDoubleSpaces(0, 6, 4);
    }
  };

  gridContainer.addEventListener("click", (e) => {
    const doubleSpaceId = e.target.id;
    preDoubleSpaceClicks(doubleSpaceId);
    handleDoubleSpaceClicks(doubleSpaceId);
  });
};
export default DoubleSpaceDisplays;
