import { getCellIds } from "../../../../modules/ChessBoard.js";
import { assignedPawnNames } from "../../arrays/pawnAssignmentData.js";
import { removePawns } from "../../objects/removePawns.js";
import { displayStatus } from "../../objects/displayStatus.js";


const SingleSpaceDisplays = () => {
  const indexToRemove = removePawns.indexToRemove
  const amountToRemove = removePawns.amountToRemove
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  
  
  const checkPawnsForSingleSpaceDisplay = (assignedPawn) => {
    return trackStartSpace.includes(assignedPawn);
  };

  const isPawnSingleSpaceDisplayReady = (assignedPawn) => {
    return trackStartSpace.push(assignedPawn);
  };

  const completePawnSingleSpaceDisplay = (
    assignedPawn,
    emptyCell,
    displayPawn
  ) => {

    const emptyCellAfterSingleSpace = displayStatus.emptyCell;
    const filledCellAfterSingleSpace = displayStatus.filledCell;
    if (checkPawnsForSingleSpaceDisplay(assignedPawn)) {
      isPawnSingleSpaceDisplayReady(assignedPawn);
      mappedCellIds[emptyCell].textContent = emptyCellAfterSingleSpace;
      mappedCellIds[displayPawn].textContent = filledCellAfterSingleSpace;
      trackStartSingleSpace.splice(indexToRemove, amountToRemove);
    }
  };

  const isPawnSingleSpaceDisplayClicksReady = (singleSpaceDisplayId) => {
    const singleSpaceStatus = [{
      P1: {
        emptyCell: 6,
        filledCell: 5
      },
      P2: {
        emptyCell: 14,
        filledCell: 13
      },
      P3: {
        emptyCell: 22,
        filledCell: 21
      },
      P4: {
        emptyCell: 30,
        filledCell: 29
      },
      P5: {
        emptyCell: 38,
        filledCell: 37
      },
      P6: {
        emptyCell: 46,
        filledCell: 45
      },
      P7: {
        emptyCell: 54,
        filledCell: 53
      },
      P8: {
        emptyCell: 62,
        filledCell: 61
      }
    }]

    switch (singleSpaceDisplayId) {
      case getCellIds[5]:
        const assignedP1 = assignedPawnNames[0];
        const emptyP1Cell = singleSpaceStatus[0].P1.emptyCell
        const filledP1Cell = singleSpaceStatus[0].P1.filledCell
        completePawnSingleSpaceDisplay(assignedP1, emptyP1Cell, filledP1Cell);
        break;
      case getCellIds[13]:
        const assignedP2 = assignedPawnNames[1];
        const emptyP2Cell = singleSpaceStatus[0].P2.emptyCell
        const filledP2Cell = singleSpaceStatus[0].P2.filledCell
        completePawnSingleSpaceDisplay(assignedP2, emptyP2Cell, filledP2Cell);
        break;
      case getCellIds[21]:
        const assignedP3 = assignedPawnNames[2];
        const emptyP3Cell = singleSpaceStatus[0].P3.emptyCell
        const filledP3Cell = singleSpaceStatus[0].P3.filledCell
        completePawnSingleSpaceDisplay(assignedP3, emptyP3Cell, filledP3Cell);
        break;
      case getCellIds[29]:
        const assignedP4 = assignedPawnNames[3];
        const emptyP4Cell = singleSpaceStatus[0].P4.emptyCell
        const filledP4Cell = singleSpaceStatus[0].P4.filledCell
        completePawnSingleSpaceDisplay(assignedP4, emptyP4Cell, filledP4Cell);
        break;
      case getCellIds[37]:
        const assignedP5 = assignedPawnNames[4];
        const emptyP5Cell = singleSpaceStatus[0].P5.emptyCell
        const filledP5Cell = singleSpaceStatus[0].P5.filledCell
        completePawnSingleSpaceDisplay(assignedP5, emptyP5Cell, filledP5Cell);
        break;
      case getCellIds[45]:
        const assignedP6 = assignedPawnNames[5];
        const emptyP6Cell = singleSpaceStatus[0].P6.emptyCell
        const filledP6Cell = singleSpaceStatus[0].P6.filledCell
        completePawnSingleSpaceDisplay(assignedP6, emptyP6Cell, filledP6Cell);
        break;
      case getCellIds[53]:
        const assignedP7 = assignedPawnNames[6];
        const emptyP7Cell = singleSpaceStatus[0].P7.emptyCell
        const filledP7Cell = singleSpaceStatus[0].P7.filledCell
        completePawnSingleSpaceDisplay(assignedP7, emptyP7Cell, filledP7Cell);
        break;
      case getCellIds[61]:
        const assignedP8 = assignedPawnNames[7];
        const emptyP8Cell = singleSpaceStatus[0].P8.emptyCell
        const filledP8Cell = singleSpaceStatus[0].P8.filledCell
        completePawnSingleSpaceDisplay(assignedP8, emptyP8Cell, filledP8Cell);
    }
  };

  gridContainer.addEventListener("click", (e) => {
    const handleSingleSpaceClicks = e.target.id;
    isPawnSingleSpaceDisplayClicksReady(handleSingleSpaceClicks);
  });

  return {
    SingleSpaceDisplays,
  };
};

export default SingleSpaceDisplays;
