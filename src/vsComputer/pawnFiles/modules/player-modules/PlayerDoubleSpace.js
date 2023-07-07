import { getCellIds } from "../../../modules/ChessPieceAssignments.js"
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";

const PlayerDoubleSpace = () => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  let currentPawn = `${trackGameStateObject.emptyCell}`;
  const watchPieceName = `${pawnAssignmentObject.pieceName}`;
  const watchForEmptyCellAfterDoubleSpace = `${trackGameStateObject.emptyCell}`;

  const firstPlayerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleFirstPlayerSideDoubleSpace);

    return { firstPlayerSideDoubleSpaceClicks };
  };

  const secondPlayerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleSecondPlayerSideDoubleSpace)

    return {secondPlayerSideDoubleSpaceClicks}
  }

  const thirdPlayerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleThirdPlayerSideDoubleSpace )
    
    return {thirdPlayerSideDoubleSpaceClicks}
  }

  const fourthPlayerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleFourthPlayerSideDoubleSpace)

    return {fourthPlayerSideDoubleSpaceClicks}
  }

  const fifthPlayerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleFifthPlayerSideDoubleSpace)

    return {fifthPlayerSideDoubleSpaceClicks}
  }

  const sixthPlayerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleSixthPlayerSideDoubleSpace)

    return {sixthPlayerSideDoubleSpaceClicks}
  }

  const seventhPlayerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleSeventhPlayerSideDoubleSpace)

    return {seventhPlayerSideDoubleSpaceClicks}
  }

  const eighthPlayerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleEighthPlayerSideDoubleSpace)

    return {eighthPlayerSideDoubleSpaceClicks}
  }

  const handleFirstPlayerSideDoubleSpace = (e) => {
    const playerPawnOneStartingPosition = `${pawnAssignmentObject.playerSide.pawnOne.startingPosition}`;
    const playerPawnOneDoubleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const playerPawnOneDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const firstPlayerSideDoubleSpace = e.target.id;

    switch (firstPlayerSideDoubleSpace) {
      case getCellIds[6]:
        if (
          mappedCellIds[6].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[8] ===
            `${playerPawnOneDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnOneStartingPosition}`;
        }
        break;
      case getCellIds[4]:
        if (currentPawn === `${playerPawnOneStartingPosition}`) {
          mappedCellIds[6].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[4].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[8] = `${playerPawnOneDoubleSpaceComplete}`;
        }
        break;
    }
  };

  const handleSecondPlayerSideDoubleSpace = (e) => {
    const playerPawnTwoStartingPosition = `${pawnAssignmentObject.playerSide.pawnTwo.startingPosition}`;
    const playerPawnTwoDoubleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const playerPawnTwoDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const secondPlayerSideDoubleSpace = e.target.id;

    switch (secondPlayerSideDoubleSpace) {
      case getCellIds[14]:
        if (
          mappedCellIds[14].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[9] ===
            `${playerPawnTwoDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnTwoStartingPosition}`;
        }
        break;
      case getCellIds[12]:
        if (currentPawn === `${playerPawnTwoStartingPosition}`) {
          mappedCellIds[14].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[12].textContent = `${watchPieceName}`;
          currentPawn = `${playerPawnTwoDoubleSpaceComplete}`;
        }
        break;
    }
  };

  const handleThirdPlayerSideDoubleSpace = (e) => {
    const playerPawnThreeStartingPosition = `${pawnAssignmentObject.playerSide.pawnThree.startingPosition}`;
    const playerPawnThreeDoubleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const playerPawnThreeDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const thirdPlayerSideDoubleSpace = e.target.id;

    switch (thirdPlayerSideDoubleSpace) {
      case getCellIds[22]:
        if (
          mappedCellIds[22].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[10] ===
            `${playerPawnThreeDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnThreeStartingPosition}`;
        }
        break;
      case getCellIds[20]:
        if (currentPawn === `${playerPawnThreeStartingPosition}`) {
          mappedCellIds[22].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[20].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[10] = `${playerPawnThreeDoubleSpaceComplete}`;
        }
        break;
    }
  };

  const handleFourthPlayerSideDoubleSpace = (e) => {
    const playerPawnFourStartingPosition = `${pawnAssignmentObject.playerSide.pawnFour.startingPosition}`;
    const playerPawnFourDoubleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const playerPawnFourDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const fourthPlayerSideDoubleSpace = e.target.id;

    switch (fourthPlayerSideDoubleSpace) {
      case getCellIds[30]:
        if (
          mappedCellIds[30].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[11] ===
            `${playerPawnFourDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnFourStartingPosition}`;
        }
        break;
      case getCellIds[28]:
        if (currentPawn === `${playerPawnFourStartingPosition}`) {
          mappedCellIds[30].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[28].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[11] = `${playerPawnFourDoubleSpaceComplete}`;
        }
        break;
    }
  };

  const handleFifthPlayerSideDoubleSpace = (e) => {
    const playerPawnFiveStartingPosition = `${pawnAssignmentObject.playerSide.pawnFive.startingPosition}`;
    const playerPawnFiveDoubleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const playerPawnFiveDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const fifthPlayerSideDoubleSpace = e.target.id;

    switch (fifthPlayerSideDoubleSpace) {
      case getCellIds[38]:
        if (
          mappedCellIds[38].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[12] === `${playerPawnFiveDoubleSpaceNotComplete}` 
        ) {
          console.log("hi")
          currentPawn = `${playerPawnFiveStartingPosition}`;
        }
        break;
      case getCellIds[36]:
        if (currentPawn === `${playerPawnFiveStartingPosition}`) {
          mappedCellIds[38].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[36].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[12] = `${playerPawnFiveDoubleSpaceComplete}`;
        }
        break;
    }
  };

  const handleSixthPlayerSideDoubleSpace = (e) => {
    const playerPawnSixStartingPosition = `${pawnAssignmentObject.playerSide.pawnSix.startingPosition}`;
    const playerPawnSixDoubleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const playerPawnSixDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const sixthPlayerSideDoubleSpace = e.target.id;

    switch (sixthPlayerSideDoubleSpace) {
      case getCellIds[46]:
        if (
          mappedCellIds[46].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[13] ===
            `${playerPawnSixDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnSixStartingPosition}`;
        }
        break;
      case getCellIds[44]:
        if (currentPawn === `${playerPawnSixStartingPosition}`) {
          mappedCellIds[46].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[44].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[13] = `${playerPawnSixDoubleSpaceComplete}`;
        }
        break;
    }
  };

  const handleSeventhPlayerSideDoubleSpace = (e) => {
    const playerPawnSevenStartingPosition = `${pawnAssignmentObject.playerSide.pawnSeven.startingPosition}`;
    const playerPawnSevenDoubleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const playerPawnSevenDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const seventhPlayerSideDoubleSpace = e.target.id;

    switch (seventhPlayerSideDoubleSpace) {
      case getCellIds[54]:
        if (
          mappedCellIds[54].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[14] ===
            `${playerPawnSevenDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnSevenStartingPosition}`;
        }
        break;
      case getCellIds[52]:
        if (currentPawn === `${playerPawnSevenStartingPosition}`) {
          mappedCellIds[54].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[52].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[14] = `${playerPawnSevenDoubleSpaceComplete}`;
        }
        break;
    }
  };

  const handleEighthPlayerSideDoubleSpace = (e) => {
    const playerPawnEightStartingPosition = `${pawnAssignmentObject.playerSide.pawnEight.startingPosition}`;
    const playerPawnEightDoubleSpaceNotComplete = `${pawnAssignmentObject.playerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const playerPawnEightDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const eighthPlayerSideDoubleSpace = e.target.id;

    switch (eighthPlayerSideDoubleSpace) {
      case getCellIds[62]:
        if (
          mappedCellIds[62].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[15] ===
            `${playerPawnEightDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${playerPawnEightStartingPosition}`;
        }
        break;
      case getCellIds[60]:
        if (currentPawn === `${playerPawnEightStartingPosition}`) {
          mappedCellIds[62].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[60].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[15] = `${playerPawnEightDoubleSpaceComplete}`;
        }
    }
  };

  return {
    firstPlayerSideDoubleSpaceClicks,
    secondPlayerSideDoubleSpaceClicks,
    thirdPlayerSideDoubleSpaceClicks,
    fourthPlayerSideDoubleSpaceClicks,
    fifthPlayerSideDoubleSpaceClicks,
    sixthPlayerSideDoubleSpaceClicks,
    seventhPlayerSideDoubleSpaceClicks,
    eighthPlayerSideDoubleSpaceClicks,
  };
};

export default PlayerDoubleSpace;
