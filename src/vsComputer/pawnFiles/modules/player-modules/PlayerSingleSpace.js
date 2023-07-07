import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { firstMoveStatusArray } from "../../objects/pawnArrays.js";
const PlayerSingleSpaceAtStart = () => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;
  const watchPieceName = `${pawnAssignmentObject.pieceName}`;
  const watchForEmptyCellAfterSingleSpaceAtStart = `${trackGameStateObject.emptyCell}`;

  const handleFirstSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener("click", handleFirstSingleSpaceAtStart);

    return { handleFirstSingleSpaceAtStartClicks };
  };

  const handleFirstSingleSpaceAtStart = (e) => {
    const pawnOneStartingPosition = `${pawnAssignmentObject.playerSide.pawnOne.startingPosition}`;
    const pawnOneFirstMoveNotComplete = `${pawnAssignmentObject.playerSide.pawnOne.watchForFirstMove.firstMoveComplete}`;
    const pawnOneFirstMoveComplete = `${pawnAssignmentObject.playerSide.pawnOne.watchForFirstMove.firstMoveComplete}`;
    const firstSingleSpaceAtStart = e.target.id;

    switch (firstSingleSpaceAtStart) {
      case getCellIds[6]:
        if (
          mappedCellIds[6].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[7] === `${pawnOneFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnOneStartingPosition}`;
        }
        break;
      case getCellIds[5]:
        if (currentPawn === `${pawnOneStartingPosition}`) {
          mappedCellIds[6].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[5].textContent = `${watchPieceName}`;
          firstMoveStatusArray[7] = `${pawnOneFirstMoveComplete}`;
        }
        break;
    }
  };

  const handleSecondSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener("click", handleSecondSingleSpaceAtStart);

    return { handleSecondSingleSpaceAtStartClicks };
  };

  const handleSecondSingleSpaceAtStart = (e) => {
    const pawnTwoStartingPosition = `${pawnAssignmentObject.playerSide.pawnTwo.startingPosition}`;
    const pawnTwoFirstMoveNotComplete = `${pawnAssignmentObject.playerSide.pawnTwo.watchForFirstMove.firstMoveComplete}`;
    const pawnTwoFirstMoveComplete = `${pawnAssignmentObject.playerSide.pawnTwo.watchForFirstMove.firstMoveComplete}`;
    const secondSingleSpaceAtStart = e.target.id;

    switch (secondSingleSpaceAtStart) {
      case getCellIds[14]:
        if (
          mappedCellIds[14].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[8] === `${pawnTwoFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnTwoStartingPosition}`;
        }
        break;
      case getCellIds[13]:
        if (currentPawn === `${pawnTwoStartingPosition}`) {
          mappedCellIds[14].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[13].textContent = `${watchPieceName}`;
          firstMoveStatusArray[8] = `${pawnTwoFirstMoveComplete}`;
        }
        break;
    }
  };

  const handleThirdSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener("click", handleThirdSingleSpaceAtStart);

    return { handleThirdSingleSpaceAtStartClicks };
  };

  const handleThirdSingleSpaceAtStart = (e) => {
    const pawnThreeStartingPosition = `${pawnAssignmentObject.playerSide.pawnThree.startingPosition}`;
    const pawnThreeFirstMoveNotComplete = `${pawnAssignmentObject.playerSide.pawnThree.watchForFirstMove.firstMoveNotComplete}`;
    const pawnThreeFirstMoveComplete = `${pawnAssignmentObject.playerSide.pawnThree.watchForFirstMove.firstMoveComplete}`;
    const thirdSingleSpaceAtStart = e.target.id;

    switch (thirdSingleSpaceAtStart) {
      case getCellIds[22]:
        if (
          mappedCellIds[22].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[9] === `${pawnThreeFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnThreeStartingPosition}`;
        }
        break;
      case getCellIds[21]:
        if (currentPawn === `${pawnThreeStartingPosition}`) {
          mappedCellIds[22].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[21].textContent = `${watchPieceName}`;
          firstMoveStatusArray[9] = `${pawnThreeFirstMoveComplete}`;
        }
        break;
    }
  };

  const handleFourthSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleFourthPlayerSingleSpaceAtStart
    );

    return { handleFourthSingleSpaceAtStartClicks };
  };

  const handleFourthPlayerSingleSpaceAtStart = (e) => {
    const pawnFourStartingPosition = `${pawnAssignmentObject.playerSide.pawnFour.startingPosition}`;
    const pawnFourFirstMoveNotComplete = `${pawnAssignmentObject.playerSide.pawnFour.watchForFirstMove.firstMoveNotComplete}`;
    const pawnFourFirstMoveComplete = `${pawnAssignmentObject.playerSide.pawnFour.watchForFirstMove.firstMoveComplete}`;
    const fourthSingleSpaceAtStart = e.target.id;

    switch (fourthSingleSpaceAtStart) {
      case getCellIds[30]:
        if (
          mappedCellIds[30].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[10] === `${pawnFourFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnFourStartingPosition}`;
        }
        break;
      case getCellIds[29]:
        if (currentPawn === `${pawnFourStartingPosition}`) {
          mappedCellIds[30].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[29].textContent = `${watchPieceName}`;
          firstMoveStatusArray[10] = `${pawnFourFirstMoveComplete}`;
        }
        break;
    }
  };

  const handleFifthSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleFifthSingleSpaceAtStart
    );

    return { handleFifthSingleSpaceAtStartClicks };
  };

  const handleFifthSingleSpaceAtStart = (e) => {
    const pawnFiveStartingPosition = `${pawnAssignmentObject.playerSide.pawnFive.startingPosition}`;
    const pawnFiveSingleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnFive.watchForFirstMove.firstMoveNotComplete}`;
    const pawnFiveSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnFive.watchForFirstMove.firstMoveComplete}`;
    const fifthSingleSpaceAtStart = e.target.id;

    switch (fifthSingleSpaceAtStart) {
      case getCellIds[38]:
        if (
          mappedCellIds[38].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[11] ===
            `${pawnFiveSingleSpaceNotComplete}`
        ) {
          currentPawn = `${pawnFiveStartingPosition}`;
        }
        break;
      case getCellIds[37]:
        if (currentPawn === `${pawnFiveStartingPosition}`) {
          mappedCellIds[38].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[37].textContent = `${watchPieceName}`;
          firstMoveStatusArray[11] = `${pawnFiveSingleSpaceComplete}`;
        }
    }
  };

  const handleSixthSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleSixthSingleSpaceAtStart
    );

    return { handleSixthSingleSpaceAtStartClicks };
  };

  const handleSixthSingleSpaceAtStart = (e) => {
    const pawnSixStartingPosition = `${pawnAssignmentObject.playerSide.pawnSix.startingPosition}`;
    const pawnSixSingleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnSix.watchForFirstMove.firstMoveNotComplete}`;
    const pawnSixSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSix.watchForFirstMove.firstMoveComplete}`;
    const sixthSingleSpaceAtStart = e.target.id;

    switch (sixthSingleSpaceAtStart) {
      case getCellIds[46]:
        if (
          mappedCellIds[46].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[12] ===
            `${pawnSixSingleSpaceNotComplete}`
        ) {
          currentPawn = `${pawnSixStartingPosition}`;
        }
        break;
      case getCellIds[45]:
        if (currentPawn === `${pawnSixStartingPosition}`) {
          mappedCellIds[46].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[45].textContent = `${watchPieceName}`;
          firstMoveStatusArray[12] = `${pawnSixSingleSpaceComplete}`;
        }
    }
  };

  const handleSeventhSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleSeventhSingleSpaceAtStart
    );

    return { handleSeventhSingleSpaceAtStartClicks };
  };

  const handleSeventhSingleSpaceAtStart = (e) => {
    const pawnSevenStartingPosition = `${pawnAssignmentObject.playerSide.pawnSeven.startingPosition}`;
    const pawnSevenSingleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnSeven.watchForFirstMove.firstMoveNotComplete}`;
    const pawnSevenSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSeven.watchForFirstMove.firstMoveComplete}`;
    const seventhSingleSpaceAtStart = e.target.id;

    switch (seventhSingleSpaceAtStart) {
      case getCellIds[54]:
        if (
          mappedCellIds[54].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[13] ===
            `${pawnSevenSingleSpaceNotComplete}`
        ) {
          currentPawn = `${pawnSevenStartingPosition}`;
        }
        break;
      case getCellIds[53]:
        if (currentPawn === `${pawnSevenStartingPosition}`) {
          mappedCellIds[54].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[53].textContent = `${watchPieceName}`;
          firstMoveStatusArray[13] = `${pawnSevenSingleSpaceComplete}`;
        }
        break;
    }
  };

  const handleEighthSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleEighthSingleSpaceAtStart
    );

    return { handleEighthSingleSpaceAtStartClicks };
  };

  const handleEighthSingleSpaceAtStart = (e) => {
    const playerPawnEightStartingPosition = `${pawnAssignmentObject.playerSide.pawnEight.startingPosition}`;
    const playerPawnEightSingleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnEight.watchForFirstMove.firstMoveNotComplete}`;
    const playerPawnEightSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnEight.watchForFirstMove.firstMoveComplete}`;
    const eighthPlayerSingleSpaceAtStart = e.target.id;

    switch (eighthPlayerSingleSpaceAtStart) {
      case getCellIds[62]:
        if (
          mappedCellIds[62].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[14] ===
            `${playerPawnEightSingleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnEightStartingPosition}`;
        }
        break;
      case getCellIds[61]:
        if (currentPawn === `${playerPawnEightStartingPosition}`) {
          mappedCellIds[62].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[61].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[14] = `${playerPawnEightSingleSpaceComplete}`;
        }
        break;
    }
  };
  return {
    handleFirstSingleSpaceAtStartClicks,
    handleSecondSingleSpaceAtStartClicks,
    handleThirdSingleSpaceAtStartClicks,
    handleFourthSingleSpaceAtStartClicks,
    handleFifthSingleSpaceAtStartClicks,
    handleSixthSingleSpaceAtStartClicks,
    handleSeventhSingleSpaceAtStartClicks,
    handleEighthSingleSpaceAtStartClicks,
  };
};

export default PlayerSingleSpaceAtStart;
