import { getCellIds } from "../../../../modules/ChessPieceAssignments.js";
import { assignedPawnNames } from "../../arrays/pawnAssignmentData.js";
import { pawnName } from "../../objects/pawnName.js";
import { assignedPawnNamesIndexNumbers } from "../../arrays/pawnAssignmentData.js";
const SingleSpaceDisplays = () => {
  const trackPreSingleSpace = [];
  const trackSingleSpaceDisplays = [];

  //cell numbers for each single space possibility for the pawn's first move(top to bottom left to right)

  const startSpacesForSingleSpaceDisplay = [
    { startSpace: 6 },
    { startSpace: 14 },
    { startSpace: 22 },
    { startSpace: 30 },
    { startSpace: 38 },
    { startSpace: 46 },
    { startSpace: 54 },
    { startSpace: 62 },
  ];

  const singleSpaceDisplayIndices = [
    { singleSpace: 5 },
    { singleSpace: 13 },
    { singleSpace: 21 },
    { singleSpace: 29 },
    { singleSpace: 37 },
    { singleSpace: 45 },
    { singleSpace: 53 },
    { singleSpace: 61 },
  ];

  const singleSpaceDisplayStatus = {
    emptyCell: "",
    filledCell: pawnName,
  };
 
  const emptyCellAfterSingleSpace = singleSpaceDisplayStatus.emptyCell;
  const filledCellAfterSingleSpace = singleSpaceDisplayStatus.filledCell;

  const possibleSingleSpaceCells = [
    { possibleSingleSpace: 5 },
    { possibleSingleSpace: 13 },
    { possibleSingleSpace: 21 },
    { possibleSingleSpace: 29 },
    { possibleSingleSpace: 37 },
    { possibleSingleSpace: 45 },
    { possibleSingleSpace: 53 },
    { possibleSingleSpace: 61 },
  ];
  
  /*
      Key Comments
      //P1-P8 goes from far left to far right on the chessboard
      //the display functions handle the contents for both the starting cell and the single space cell after movement is complete
      //the remove function removes specific pawns from the trackFirstMoves array based on which pawn is clicked
      //the completePawnSingleSpace function allows for each individual pawn to complete their single space based on trackFirstMoves's status*/
  //the currentSingleSpace variable tracks which cell is being interacted with during single spacing
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const handleSingleSpaceContent = (emptyCell, singleSpaceCell) => {
    mappedCellIds[emptyCell].textContent = emptyCellAfterSingleSpace;
    mappedCellIds[singleSpaceCell].textContent = filledCellAfterSingleSpace;
  };

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
      trackPreSingleSpace.splice(0, 1);
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

  const checkPawnsForSingleSpace = (checkPawn) => {
    return !trackSingleSpaceDisplays.includes(checkPawn) 
  }

  const completePawnSingleSpaceDisplay = (completeSingleSpace) => {
    return trackSingleSpaceDisplays.push(completeSingleSpace)
  }

  const singleSpaceDisplayClicks = () => {}

  gridContainer.addEventListener("click", (e) => {
    const handleStartSpaceClicks = e.target.id;
    startSpaceForSingleSpaceClicks(handleStartSpaceClicks);
  });

  return {
    SingleSpaceDisplays,
  };
};

export default SingleSpaceDisplays;
