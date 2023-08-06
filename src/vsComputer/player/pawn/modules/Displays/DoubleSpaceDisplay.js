import { getCellIds } from "../../../../modules/ChessPieceAssignments.js";
import { assignedPawnNames } from "../../arrays/pawnAssignmentData.js";
import { pawnName } from "../../objects/pawnName.js";
import { displayStatus } from "../../objects/displayStatus.js";
import { assignedPawnNamesIndexNumbers } from "../../arrays/pawnAssignmentData.js";

const DoubleSpaceDisplays = () => {
  const trackPreDoubleSpace = [];
  const trackDoubleSpaces = [];
  const removePawns = {
    indexToRemove: 0,
    amountToRemove: 1,
  };
  const checkStartSpaces = (assignedPawn) => {
    return !trackPreDoubleSpace.includes(assignedPawn);
  };

  const isStartSpaceReady = (assignedPawn) => {
    return trackPreDoubleSpace.push(assignedPawn);
  };

  const removeStartSpacePawns = (removePawn, amountToRemove) => {
    return trackPreDoubleSpace.splice(removePawn, amountToRemove);
  };

  const completeStartSpaces = (assignedPawns) => {
    const checkStartSpacePawns = checkStartSpaces(assignedPawns);
    if (checkStartSpacePawns) {
      //controls when other pawns are clicked to avoid overlap
      const prevClickedPawnIndex = removePawns.indexToRemove;
      const removePrevClickedPawn = removePawns.amountToRemove;
      removeStartSpacePawns(prevClickedPawnIndex, removePrevClickedPawn);
      isStartSpaceReady(assignedPawns);
      console.log(trackPreDoubleSpace);
    }
  };

  const startSpaceClicks = (startSpaceId) => {
    let assignedPawn = null;
    switch (startSpaceId) {
      case getCellIds[6]:
        assignedPawn = assignedPawnNames[0];
        completeStartSpaces(assignedPawn);
        break;
      case getCellIds[14]:
        assignedPawn = assignedPawnNames[1];
        completeStartSpaces(assignedPawn);
        break;
      case getCellIds[22]:
        assignedPawn = assignedPawnNames[2];
        completeStartSpaces(assignedPawn);
        break;
      case getCellIds[30]:
        assignedPawn = assignedPawnNames[3];
        completeStartSpaces(assignedPawn);
        break;
      case getCellIds[38]:
        assignedPawn = assignedPawnNames[4];
        completeStartSpaces(assignedPawn);
        break;
      case getCellIds[46]:
        assignedPawn = assignedPawnNames[5];
        completeStartSpaces(assignedPawn);
        break;
      case getCellIds[54]:
        assignedPawn = assignedPawnNames[6];
        completeStartSpaces(assignedPawn);
        break;
      case getCellIds[62]:
        assignedPawn = assignedPawnNames[7];
        completeStartSpaces(assignedPawn);
    }
  };

  const doubleSpaceDisplayIndices = [
    {
      P1: {
        emptyCell: 6,
        filledCell: 4,
      },
      P2: {
        emptyCell: 14,
        filledCell: 12,
      },
      P3: {
        emptyCell: 22,
        filledCell: 20,
      },
      P4: {
        emptyCell: 30,
        filledCell: 28,
      },
      P5: {
        emptyCell: 38,
        filledCell: 36,
      },
      P6: {
        emptyCell: 46,
        filledCell: 44,
      },
      P7: {
        emptyCell: 54,
        filledCell: 52,
      },
      P8: {
        emptyCell: 62,
        filledCell: 60,
      },
    },
  ];

  const checkDoubleSpaces = (assignedPawn) => {
    return trackPreDoubleSpace.includes(assignedPawn);
  };

  const removePreDoubleSpaceIndex = (indexToRemove, amountToRemove) => {
    return trackPreDoubleSpace.splice(indexToRemove, amountToRemove);
  };

  const checkDoubleSpaceDisplay = (assignedPawn) => {
    return !trackDoubleSpaces.includes(assignedPawn);
  };

  const isDoubleSpaceDisplayReady = (assignedPawn) => {
    return trackDoubleSpaces.push(assignedPawn);
  };

  const isDoubleSpaceDisplayContentReady = (assignedPawn) => {
    const isReadyToMoveFromIndex = checkDoubleSpaces(assignedPawn);
    const isReadyToPushIntoIndex = checkDoubleSpaceDisplay(assignedPawn);
    if (isReadyToMoveFromIndex && isReadyToPushIntoIndex) {
      const removeFromPrevIndex = removePawns.indexToRemove;
      const amountFromPrevIndex = removePawns.amountToRemove;
      removePreDoubleSpaceIndex(removeFromPrevIndex, amountFromPrevIndex);
      isDoubleSpaceDisplayReady(assignedPawn);
      console.log(trackDoubleSpaces)
    }
  };

  const displayDoubleSpaceContent = (emptyCell, filledCell) => {
    const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    mappedCellIds[emptyCell].textContent = displayStatus.emptyCell;
    mappedCellIds[filledCell].textContent = displayStatus.filledCell;
  };

  const handleDoubleSpaceDisplayClicks = (doubleSpaceDisplayId) => {
    switch (doubleSpaceDisplayId) {
      case getCellIds[4]:
        isDoubleSpaceDisplayContentReady(assignedPawnNames[0])
        if(trackDoubleSpaces.includes(assignedPawnNames[0])){
            displayDoubleSpaceContent(6, 4)
            console.log(trackPreDoubleSpace)
        }

  }};

  gridContainer.addEventListener("click", (e) => {
    const handleStartSpaceClicks = e.target.id;
    startSpaceClicks(handleStartSpaceClicks);
    handleDoubleSpaceDisplayClicks(handleStartSpaceClicks)
  });
};

export default DoubleSpaceDisplays;
