import { getCellIds } from "../../../../modules/ChessPieceAssignments.js";
import { assignedPawnNames } from "../../arrays/pawnAssignmentData.js";
import { pawnName } from "../../objects/pawnName.js";
const SingleSpaceDisplays = () => {
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
  const removeSingleSpacePawns = 0;
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

  const removePawnsAfterSingleSpace = () => {
   return trackSingleSpaceDisplays.splice(removeSingleSpacePawns, 1);
  };

  const completeSingleSpaceDisplays = (completeSingleSpace) => {
    return trackSingleSpaceDisplays.push(completeSingleSpace)
  };

 const startSpaceForSingleSpaces = (startSpaceId) => {
    switch(startSpaceId){
        case getCellIds[6]:
               
    }
    return {
        startSpaceForSingleSpaces
    }
 }

 gridContainer.addEventListener("click", (e) => {
    const handleStartSpaceClicks = e.target.id
    startSpaceForSingleSpaces(handleStartSpaceClicks)
    
 })

 return {
    SingleSpaceDisplays
 }
};

export default SingleSpaceDisplays
