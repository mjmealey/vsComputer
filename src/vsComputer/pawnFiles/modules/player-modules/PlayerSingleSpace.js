import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { singleSpaceAtStartArray } from "../../objects/pawnArrays.js";

const PlayerSingleSpaceAtStart = () => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;
  const watchPieceName = `${pawnAssignmentObject.pieceName}`;
  const watchForEmptyCellAfterSingleSpaceAtStart = `${trackGameStateObject.emptyCell}`;

  const handleFirstPlayerSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleFirstPlayerSingleSpaceAtStart
    );

    return { handleFirstPlayerSingleSpaceAtStartClicks };
  };

  const handleFirstPlayerSingleSpaceAtStart = (e) => {
    const playerPawnOneStartingPosition = `${pawnAssignmentObject.playerSide.pawnOne.startingPosition}`;
    const playerPawnOneSingleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnOne.watchForFirstMove.firstMoveNotComplete}`;
    const playerPawnOneSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnOne.watchForFirstMove.firstMoveComplete}`;
    const firstPlayerSingleSpaceAtStart = e.target.id;

    switch (firstPlayerSingleSpaceAtStart) {
      case getCellIds[6]:
        if (
          mappedCellIds[6].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[7] ===
            `${playerPawnOneSingleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnOneStartingPosition}`;
        }
        break;
      case getCellIds[5]:
        if (currentPawn === `${playerPawnOneStartingPosition}`) {
          mappedCellIds[6].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[5].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[7] = `${playerPawnOneSingleSpaceComplete}`;
        }
        break;
    }
  };

  const handleSecondPlayerSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleSecondPlayerSingleSpaceAtStart
    );

    return { handleSecondPlayerSingleSpaceAtStartClicks };
  };

  const handleSecondPlayerSingleSpaceAtStart = (e) => {
    const playerPawnTwoStartingPosition = `${pawnAssignmentObject.playerSide.pawnTwo.startingPosition}`;
    const playerPawnTwoSingleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnTwo.watchForFirstMove.firstMoveNotComplete}`;
    const playerPawnTwoSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnTwo.watchForFirstMove.firstMoveComplete}`;
    const secondPlayerSingleSpaceAtStart = e.target.id;

    switch (secondPlayerSingleSpaceAtStart) {
      case getCellIds[14]:
        if (
          mappedCellIds[14].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[8] ===
            `${playerPawnTwoSingleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnTwoStartingPosition}`;
        }
        break;
      case getCellIds[13]:
        if (currentPawn === `${playerPawnTwoStartingPosition}`) {
          mappedCellIds[14].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[13].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[8] = `${playerPawnTwoSingleSpaceComplete}`;
        }
        break;
    }
  };

  const handleThirdPlayerSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleThirdPlayerSingleSpaceAtStart
    );

    return { handleThirdPlayerSingleSpaceAtStartClicks };
  };

  const handleThirdPlayerSingleSpaceAtStart = (e) => {
    const playerPawnThreeStartingPosition = `${pawnAssignmentObject.playerSide.pawnThree.startingPosition}`;
    const playerPawnThreeSingleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnThree.watchForFirstMove.firstMoveNotComplete}`;
    const playerPawnThreeSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnThree.watchForFirstMove.firstMoveComplete}`;
    const thirdPlayerSingleSpaceAtStart = e.target.id;

    switch (thirdPlayerSingleSpaceAtStart) {
      case getCellIds[22]:
        if (
          mappedCellIds[22].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[9] ===
            `${playerPawnThreeSingleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnThreeStartingPosition}`;
        }
        break;
      case getCellIds[21]:
        if (currentPawn === `${playerPawnThreeStartingPosition}`) {
          mappedCellIds[22].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[21].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[9] = `${playerPawnThreeSingleSpaceComplete}`;
        }
        break;
    }
  };

  const handleFourthPlayerSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleFourthPlayerSingleSpaceAtStart
    );

    return { handleFourthPlayerSingleSpaceAtStartClicks };
  };

  const handleFourthPlayerSingleSpaceAtStart = (e) => {
    const playerPawnFourStartingPosition = `${pawnAssignmentObject.playerSide.pawnFour.startingPosition}`;
    const playerPawnFourSingleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnFour.watchForFirstMove.firstMoveNotComplete}`;
    const playerPawnFourSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnFour.watchForFirstMove.firstMoveNotComplete}`;
    const fourthPlayerSingleSpaceAtStart = e.target.id;

    switch (fourthPlayerSingleSpaceAtStart) {
      case getCellIds[30]:
        if (
          mappedCellIds[30].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[10] ===
            `${playerPawnFourSingleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnFourStartingPosition}`;
        }
        break;
      case getCellIds[29]:
        if (currentPawn === `${playerPawnFourStartingPosition}`) {
          mappedCellIds[30].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[29].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[10] = `${playerPawnFourSingleSpaceComplete}`;
        }
        break;
    }
  };

  const handleFifthPlayerSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleFifthPlayerSingleSpaceAtStart
    );

    return { handleFifthPlayerSingleSpaceAtStartClicks };
  };

  const handleFifthPlayerSingleSpaceAtStart = (e) => {
    const playerPawnFiveStartingPosition = `${pawnAssignmentObject.playerSide.pawnFive.startingPosition}`;
    const playerPawnFiveSingleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnFive.watchForFirstMove.firstMoveNotComplete}`;
    const playerPawnFiveSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnFive.watchForFirstMove.firstMoveComplete}`;
    const fifthPlayerSingleSpaceAtStart = e.target.id;

    switch (fifthPlayerSingleSpaceAtStart) {
      case getCellIds[38]:
        if (
          mappedCellIds[38].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[11] ===
            `${playerPawnFiveSingleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnFiveStartingPosition}`;
        }
        break;
      case getCellIds[37]:
        if (currentPawn === `${playerPawnFiveStartingPosition}`) {
          mappedCellIds[38].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[37].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[11] = `${playerPawnFiveSingleSpaceComplete}`;
        }
    }
  };

  const handleSixthPlayerSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleSixthPlayerSingleSpaceAtStart
    );

    return { handleSixthPlayerSingleSpaceAtStartClicks };
  };

  const handleSixthPlayerSingleSpaceAtStart = (e) => {
    const playerPawnSixStartingPosition = `${pawnAssignmentObject.playerSide.pawnSix.startingPosition}`;
    const playerPawnSixSingleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnSix.watchForFirstMove.firstMoveNotComplete}`;
    const playerPawnSixSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSix.watchForFirstMove.firstMoveComplete}`;
    const sixthPlayerSingleSpaceAtStart = e.target.id;

    switch (sixthPlayerSingleSpaceAtStart) {
      case getCellIds[46]:
        if (
          mappedCellIds[46].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[12] ===
            `${playerPawnSixSingleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnSixStartingPosition}`;
        }
        break;
      case getCellIds[45]:
        if (currentPawn === `${playerPawnSixStartingPosition}`) {
          mappedCellIds[46].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[45].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[12] = `${playerPawnSixSingleSpaceComplete}`;
        }
    }
  };

  const handleSeventhPlayerSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleSeventhPlayerSingleSpaceAtStart
    );

    return { handleSeventhPlayerSingleSpaceAtStartClicks };
  };

  const handleSeventhPlayerSingleSpaceAtStart = (e) => {
    const playerPawnSevenStartingPosition = `${pawnAssignmentObject.playerSide.pawnSeven.startingPosition}`;
    const playerPawnSevenSingleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnSeven.watchForFirstMove.firstMoveNotComplete}`;
    const playerPawnSevenSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSeven.watchForFirstMove.firstMoveComplete}`;
    const seventhPlayerSingleSpaceAtStart = e.target.id;

    switch (seventhPlayerSingleSpaceAtStart) {
      case getCellIds[54]:
        if (
          mappedCellIds[54].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[13] ===
            `${playerPawnSevenSingleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnSevenStartingPosition}`;
        }
        break;
      case getCellIds[53]:
        if (currentPawn === `${playerPawnSevenStartingPosition}`) {
          mappedCellIds[54].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[53].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[13] = `${playerPawnSevenSingleSpaceComplete}`;
        }
        break;
    }
  };

  const handleEighthPlayerSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleEighthPlayerSingleSpaceAtStart
    );

    return { handleEighthPlayerSingleSpaceAtStartClicks };
  };

  const handleEighthPlayerSingleSpaceAtStart = (e) => {
    const playerPawnEightStartingPosition = `${pawnAssignmentObject.playerSide.pawnEight.startingPosition}`;
    const playerPawnEightSingleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnEight.watchForFirstMove.firstMoveNotComplete}`;
    const playerPawnEightSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnEight.watchForFirstMove.firstMoveComplete}`;
    const eighthPlayerSingleSpaceAtStart = e.target.id;

    switch (eighthPlayerSingleSpaceAtStart) {
      case getCellIds[62]:
        if (
          mappedCellIds[62].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[14] ===
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
    handleFirstPlayerSingleSpaceAtStartClicks,
    handleSecondPlayerSingleSpaceAtStartClicks,
    handleThirdPlayerSingleSpaceAtStartClicks,
    handleFourthPlayerSingleSpaceAtStartClicks,
    handleFifthPlayerSingleSpaceAtStartClicks,
    handleSixthPlayerSingleSpaceAtStartClicks,
    handleSeventhPlayerSingleSpaceAtStartClicks,
    handleEighthPlayerSingleSpaceAtStartClicks,
  }
};

export default PlayerSingleSpaceAtStart;
