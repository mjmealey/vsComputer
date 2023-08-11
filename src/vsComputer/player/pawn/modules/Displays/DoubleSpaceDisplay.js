import { getCellIds } from "../../../../modules/ChessBoard.js";
import { assignedPawnNames } from "../../arrays/pawnAssignmentData.js";
import { displayStatus } from "../../objects/displayStatus.js";

const DoubleSpaceDisplays = () => {
  const trackPreDoubleSpace = [];
  const trackDoubleSpaces = [];
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const checkStartSpaces = (assignedPawn) => {
    return !trackPreDoubleSpace.includes(assignedPawn);
  };

  const isFirstMoveReady = (assignedPawn) => {
    return trackPreDoubleSpace.push(assignedPawn);
  };

  const removePreviousFirstMove = (removeIndex, amount) => {
    return trackPreDoubleSpace.splice(removeIndex, amount);
  };

  const assignPawns = (startSpaceId) => {
    switch (startSpaceId) {
      case getCellIds[6]:
        return assignedPawnNames[0]
      case getCellIds[14]:
        return assignedPawnNames[1];
      case getCellIds[22]:
        return assignedPawnNames[2];
      case getCellIds[30]:
        return assignedPawnNames[3];
      case getCellIds[38]:
        return assignedPawnNames[4];
      case getCellIds[46]:
        return assignedPawnNames[5];
      case getCellIds[54]:
        return assignedPawnNames[6];
      case getCellIds[62]:
        return assignedPawnNames[7];
      default:
        return null;
    }
  };

  const removeFirstMoveClicks = (startSpaceId) => {
    const removeAssignedPawn = assignPawns(startSpaceId);
    const unknownAssignedPawn = null;
    const isValidPawn = removeAssignedPawn !== unknownAssignedPawn;
    if (isValidPawn) {
      const indexToRemove = 0;
      const amountToRemove = 1;
      removePreviousFirstMove(indexToRemove, amountToRemove);
    } else {
      return unknownAssignedPawn;
    }
  };

  const prepareFirstMoveClicks = (startSpaceId) => {
    const addAssignedPawn = assignPawns(startSpaceId);
    const unknownAssignedPawn = null;
    const isValidPawn = addAssignedPawn !== unknownAssignedPawn;
    if (isValidPawn) {
      trackPreDoubleSpace.push(addAssignedPawn);
      console.log(trackPreDoubleSpace)
    } else {
      return unknownAssignedPawn;
    }
  };
  //emptyCell is the cell the pawns start on (becomes empty after double space is complete)
  //filledCell is the cell the pawns end on after double space
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
      const removeFromPrevIndex = 0;
      const amountFromPrevIndex = 1;
      removePreDoubleSpaceIndex(removeFromPrevIndex, amountFromPrevIndex);
      isDoubleSpaceDisplayReady(assignedPawn);
    }
  };

  const displayDoubleSpaceContent = (emptyCell, filledCell) => {
    mappedCellIds[emptyCell].textContent = displayStatus.emptyCell;
    mappedCellIds[filledCell].textContent = displayStatus.filledCell;
  };

  const handleDoubleSpaceClicks = (doubleSpaceDisplayId) => {
    switch (doubleSpaceDisplayId) {
      case getCellIds[4]:
        const checkP1State = assignedPawnNames[0];
        isDoubleSpaceDisplayContentReady(checkP1State);
        break;
      case getCellIds[12]:
        const checkP2State = assignedPawnNames[1];
        isDoubleSpaceDisplayContentReady(checkP2State);
        break;
      case getCellIds[20]:
        const checkP3State = assignedPawnNames[2];
        isDoubleSpaceDisplayReady(checkP3State);
        break;
      case getCellIds[28]:
        const checkP4State = assignedPawnNames[3];
        isDoubleSpaceDisplayReady(checkP4State);
        break;
      case getCellIds[36]:
        const checkP5State = assignedPawnNames[4];
        isDoubleSpaceDisplayReady(checkP5State);
        break;
      case getCellIds[44]:
        const checkP6State = assignedPawnNames[5];
        isDoubleSpaceDisplayReady(checkP6State);
        break;
      case getCellIds[52]:
        const checkP7State = assignedPawnNames[6];
        isDoubleSpaceDisplayReady(checkP7State);
        break;
      case getCellIds[60]:
        const checkP8State = assignedPawnNames[7];
        isDoubleSpaceDisplayReady(checkP8State);
        break;
    }
  };

  const handleDoubleSpaceDisplayClicks = (doubleSpaceDisplayId) => {
    let emptyCell = null;
    let filledCell = null;
    switch (doubleSpaceDisplayId) {
      case getCellIds[4]:
        const isP1Display = assignedPawnNames[0];
        const isP1DoubleSpaceDisplayReady =
          trackDoubleSpaces.includes(isP1Display);
        if (isP1DoubleSpaceDisplayReady) {
          emptyCell = doubleSpaceDisplayIndices[0].P1.emptyCell;
          filledCell = doubleSpaceDisplayIndices[0].P1.filledCell;
          displayDoubleSpaceContent(emptyCell, filledCell);
        }
        break;
      case getCellIds[12]:
        const isP2Display = assignedPawnNames[1];
        const isP2DoubleSpaceDisplayReady =
          trackDoubleSpaces.includes(isP2Display);
        if (isP2DoubleSpaceDisplayReady) {
          emptyCell = doubleSpaceDisplayIndices[0].P2.emptyCell;
          filledCell = doubleSpaceDisplayIndices[0].P2.filledCell;
          displayDoubleSpaceContent(emptyCell, filledCell);
        }
        break;
      case getCellIds[20]:
        const isP3Display = assignedPawnNames[2];
        const isP3DoubleSpaceDisplayReady =
          trackDoubleSpaces.includes(isP3Display);
        if (isP3DoubleSpaceDisplayReady) {
          emptyCell = doubleSpaceDisplayIndices[0].P3.emptyCell;
          filledCell = doubleSpaceDisplayIndices[0].P3.filledCell;
          displayDoubleSpaceContent(emptyCell, filledCell);
        }
        break;
      case getCellIds[28]:
        const isP4Display = assignedPawnNames[3];
        const isP4DoubleSpaceDisplayReady =
          trackDoubleSpaces.includes(isP4Display);
        if (isP4DoubleSpaceDisplayReady) {
          emptyCell = doubleSpaceDisplayIndices[0].P4.emptyCell;
          filledCell = doubleSpaceDisplayIndices[0].P4.filledCell;
          displayDoubleSpaceContent(emptyCell, filledCell);
        }
        break;
      case getCellIds[36]:
        const isP5Display = assignedPawnNames[4];
        const isP5DoubleSpaceDisplayReady =
          trackDoubleSpaces.includes(isP5Display);
        if (isP5DoubleSpaceDisplayReady) {
          emptyCell = doubleSpaceDisplayIndices[0].P5.emptyCell;
          filledCell = doubleSpaceDisplayIndices[0].P5.filledCell;
          displayDoubleSpaceContent(emptyCell, filledCell);
        }
        break;
      case getCellIds[44]:
        const isP6Display = assignedPawnNames[5];
        const isP6DoubleSpaceDisplayReady =
          trackDoubleSpaces.includes(isP6Display);
        if (isP6DoubleSpaceDisplayReady) {
          emptyCell = doubleSpaceDisplayIndices[0].P6.emptyCell;
          filledCell = doubleSpaceDisplayIndices[0].P6.filledCell;
          displayDoubleSpaceContent(emptyCell, filledCell);
        }
        break;
      case getCellIds[52]:
        const isP7Display = assignedPawnNames[6];
        const isP7DoubleSpaceDisplayReady =
          trackDoubleSpaces.includes(isP7Display);
        if (isP7DoubleSpaceDisplayReady) {
          emptyCell = doubleSpaceDisplayIndices[0].P7.emptyCell;
          filledCell = doubleSpaceDisplayIndices[0].P7.filledCell;
          displayDoubleSpaceContent(emptyCell, filledCell);
        }
        break;
      case getCellIds[60]:
        const isP8Display = assignedPawnNames[7];
        const isP8DoubleSpaceDisplayReady =
          trackDoubleSpaces.includes(isP8Display);
        if (isP8DoubleSpaceDisplayReady) {
          emptyCell = doubleSpaceDisplayIndices[0].P8.emptyCell;
          filledCell = doubleSpaceDisplayIndices[0].P8.filledCell;
          displayDoubleSpaceContent(emptyCell, filledCell);
        }
        break;
    }
  };

  const handleDuplicationAfterDoubleSpace = (assignedPawn) => {
    return trackDoubleSpaces.includes(assignedPawn);
  };

  const handleEmptyCellsAfterDoubleSpace = (assignedPawn, emptyCell) => {
    const isDuplicationPossible =
      handleDuplicationAfterDoubleSpace(assignedPawn);
    if (isDuplicationPossible) {
      const emptyCellAfterDoubleSpace = displayStatus.emptyCell;
      mappedCellIds[emptyCell].textContent = emptyCellAfterDoubleSpace;
    }
  };

  const handleDuplicationAfterDoubleSpaceClicks = (doubleSpaceDisplayId) => {
    const duplicationStatus = [
      { duplicationCell: 5, duplicationPawn: assignedPawnNames[0] },
      { duplicationCell: 13, duplicationPawn: assignedPawnNames[1] },
      { duplicationCell: 21, duplicationPawn: assignedPawnNames[2] },
      { duplicationCell: 29, duplicationPawn: assignedPawnNames[3] },
      { duplicationCell: 37, duplicationPawn: assignedPawnNames[4] },
      { duplicationCell: 45, duplicationPawn: assignedPawnNames[5] },
      { duplicationCell: 53, duplicationPawn: assignedPawnNames[6] },
      { duplicationCell: 61, duplicationPawn: assignedPawnNames[7] },
    ];
    let duplicationCell = null;
    let duplicationPawn = null;
    switch (doubleSpaceDisplayId) {
      case getCellIds[5]:
        duplicationPawn = duplicationStatus[0].duplicationPawn;
        duplicationCell = duplicationStatus[0].duplicationCell;
        handleEmptyCellsAfterDoubleSpace(duplicationPawn, duplicationCell);
        break;
      case getCellIds[13]:
        duplicationPawn = duplicationStatus[1].duplicationPawn;
        duplicationCell = duplicationStatus[1].duplicationCell;
        handleEmptyCellsAfterDoubleSpace(duplicationPawn, duplicationCell);
        break;
      case getCellIds[21]:
        duplicationPawn = duplicationStatus[2].duplicationPawn;
        duplicationCell = duplicationStatus[2].duplicationCell;
        handleEmptyCellsAfterDoubleSpace(duplicationPawn, duplicationCell);
        break;
      case getCellIds[29]:
        duplicationPawn = duplicationStatus[3].duplicationPawn;
        duplicationCell = duplicationStatus[3].duplicationCell;
        handleEmptyCellsAfterDoubleSpace(duplicationPawn, duplicationCell);
        break;
      case getCellIds[37]:
        duplicationPawn = duplicationStatus[4].duplicationPawn;
        duplicationCell = duplicationStatus[4].duplicationCell;
        handleEmptyCellsAfterDoubleSpace(duplicationPawn, duplicationCell);
        break;
      case getCellIds[45]:
        duplicationPawn = duplicationStatus[5].duplicationPawn;
        duplicationCell = duplicationStatus[5].duplicationCell;
        handleEmptyCellsAfterDoubleSpace(duplicationPawn, duplicationCell);
        break;
      case getCellIds[53]:
        duplicationPawn = duplicationStatus[6].duplicationPawn;
        duplicationCell = duplicationStatus[6].duplicationCell;
        handleEmptyCellsAfterDoubleSpace(duplicationPawn, duplicationCell);
        break;
      case getCellIds[61]:
        duplicationPawn = duplicationStatus[7].duplicationPawn;
        duplicationCell = duplicationStatus[7].duplicationCell;
        handleEmptyCellsAfterDoubleSpace(duplicationPawn, duplicationCell);
    }
  };

  const handleClicks = () => {
    document.addEventListener("click", (e) => {
      const isDoubleSpaceClicksReady = e.target.id;
      removeFirstMoveClicks(isDoubleSpaceClicksReady);
      prepareFirstMoveClicks(isDoubleSpaceClicksReady);
      handleDoubleSpaceClicks(isDoubleSpaceClicksReady);
      handleDoubleSpaceDisplayClicks(isDoubleSpaceClicksReady);
      handleDuplicationAfterDoubleSpaceClicks(isDoubleSpaceClicksReady);
    });
  };

  handleClicks()

  return {
    checkStartSpaces,
    isFirstMoveReady,
    removePreviousFirstMove,
    assignPawns,
  };
};

export default DoubleSpaceDisplays;
