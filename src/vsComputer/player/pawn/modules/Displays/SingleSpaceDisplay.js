import { getCellIds } from "../../../../modules/ChessBoard.js";
import { assignedPawnNames } from "../../arrays/pawnAssignmentData.js";
import { removePawns } from "../../objects/removePawns.js";
import { displayStatus } from "../../objects/displayStatus.js";
import { assignedPawnNamesIndexNumbers } from "../../arrays/pawnAssignmentData.js";
const SingleSpaceDisplays = () => {
  const trackPreSingleSpace = [];
  const trackSingleSpaceDisplays = [];
  const indexToRemove = removePawns.indexToRemove
  const amountToRemove = removePawns.amountToRemove
  //cell numbers for each single space possibility for the pawn's first move(top to bottom left to right)



  /*
      Key Comments
      //P1-P8 goes from far left to far right on the chessboard
      //the display functions handle the contents for both the starting cell and the single space cell after movement is complete
      //the remove function removes specific pawns from the trackFirstMoves array based on which pawn is clicked
      //the completePawnSingleSpace function allows for each individual pawn to complete their single space based on trackFirstMoves's status*/
  //the currentSingleSpace variable tracks which cell is being interacted with during single spacing
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const checkPawns = (checkContent) => {
    return !trackPreSingleSpace.includes(checkContent);
  };

  const completeStartSpaceClicks = (completeSingleSpace) => {
    return trackPreSingleSpace.push(completeSingleSpace);
  };

  const startSpaceForSingleSpace = (assignedIndex, checkForPawn) => {
    const checkAssignedIndex = assignedPawnNames[assignedIndex];
    const checkForPawns = checkPawns(checkForPawn);
    if (checkForPawns) {
      trackPreSingleSpace.splice(indexToRemove, amountToRemove);
      completeStartSpaceClicks(checkAssignedIndex);
      console.log(trackPreSingleSpace);
    }
  };

  const startSpaceForSingleSpaceClicks = (startSpaceId) => {
    switch (startSpaceId) {
      case getCellIds[6]:
        const checkP1 = assignedPawnNamesIndexNumbers[0].P1;
        const checkIndexForP1 = assignedPawnNames[0];
        startSpaceForSingleSpace(checkP1, checkIndexForP1);
        break;
      case getCellIds[14]:
        const checkP2 = assignedPawnNamesIndexNumbers[1].P2;
        const checkIndexForP2 = assignedPawnNames[1];
        startSpaceForSingleSpace(checkP2, checkIndexForP2);
        break;
      case getCellIds[22]:
        const checkP3 = assignedPawnNamesIndexNumbers[2].P3;
        const checkIndexForP3 = assignedPawnNames[2];
        startSpaceForSingleSpace(checkP3, checkIndexForP3);
        break;
      case getCellIds[30]:
        const checkP4 = assignedPawnNamesIndexNumbers[3].P4;
        const checkIndexForP4 = assignedPawnNames[3];
        startSpaceForSingleSpace(checkP4, checkIndexForP4);
        break;
      case getCellIds[38]:
        const checkP5 = assignedPawnNamesIndexNumbers[4].P5;
        const checkIndexForP5 = assignedPawnNames[4];
        startSpaceForSingleSpace(checkP5, checkIndexForP5);
        break;
      case getCellIds[46]:
        const checkP6 = assignedPawnNamesIndexNumbers[5].P6;
        const checkIndexForP6 = assignedPawnNames[5];
        startSpaceForSingleSpace(checkP6, checkIndexForP6);
        break;
      case getCellIds[54]:
        const checkP7 = assignedPawnNamesIndexNumbers[6].P7;
        const checkIndexForP7 = assignedPawnNames[6];
        startSpaceForSingleSpace(checkP7, checkIndexForP7);
        break;
      case getCellIds[62]:
        const checkP8 = assignedPawnNamesIndexNumbers[7].P8;
        const checkIndexForP8 = assignedPawnNames[7];
        startSpaceForSingleSpace(checkP8, checkIndexForP8);
        break;
    }

    return {
      startSpaceForSingleSpaceClicks,
    };
  };

  const checkPawnsForSingleSpaceDisplay = (assignedPawn) => {
    return trackPreSingleSpace.includes(assignedPawn);
  };

  const isPawnSingleSpaceDisplayReady = (assignedPawn) => {
    return trackSingleSpaceDisplays.push(assignedPawn);
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
      trackPreSingleSpace.splice(indexToRemove, amountToRemove);
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
    const handleStartSpaceClicks = e.target.id;
    const handleSingleSpaceClicks = e.target.id
    startSpaceForSingleSpaceClicks(handleStartSpaceClicks);
    isPawnSingleSpaceDisplayClicksReady(handleSingleSpaceClicks);
  });

  return {
    SingleSpaceDisplays,
  };
};

export default SingleSpaceDisplays;
