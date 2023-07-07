import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { firstMoveStatusArray } from "../../objects/pawnArrays.js";

const PlayerDoubleSpace = () => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  let currentPawn = `${trackGameStateObject.emptyCell}`;
  const watchPieceName = `${pawnAssignmentObject.pieceName}`;
  const watchForEmptyCellAfterDoubleSpace = `${trackGameStateObject.emptyCell}`;

  const firstDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleFirstDoubleSpace);

    return { firstDoubleSpaceClicks };
  };

  const handleFirstDoubleSpace = (e) => {
    const pawnOneStartingPosition = `${pawnAssignmentObject.playerSide.pawnOne.startingPosition}`;
    const pawnOneFirstMoveNotComplete = `${pawnAssignmentObject.playerSide.pawnOne.watchForFirstMove.firstMoveComplete}`;
    const pawnOneFirstMoveComplete = `${pawnAssignmentObject.playerSide.pawnOne.watchForFirstMove.firstMoveComplete}`;
    const firstDoubleSpace = e.target.id;

    switch (firstDoubleSpace) {
      case getCellIds[6]:
        if (
          mappedCellIds[6].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[8] ===
            `${pawnOneFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnOneStartingPosition}`;
        }
        break;
      case getCellIds[4]:
        if (currentPawn === `${pawnOneStartingPosition}`) {
          mappedCellIds[6].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[4].textContent = `${watchPieceName}`;
          firstMoveStatusArray[8] = `${pawnOneFirstMoveComplete}`;
        }
        break;
    }
  };

  const secondDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleSecondPlayerSideDoubleSpace);

    return { secondDoubleSpaceClicks };
  };

  const handleSecondPlayerSideDoubleSpace = (e) => {
    const pawnTwoStartingPosition = `${pawnAssignmentObject.playerSide.pawnTwo.startingPosition}`;
    const pawnTwoFirstMoveNotComplete = `${pawnAssignmentObject.playerSide.pawnTwo.watchForFirstMove.firstMoveNotComplete}`;
    const pawnTwoFirstMoveComplete = `${pawnAssignmentObject.playerSide.pawnTwo.watchForFirstMove.firstMoveComplete}`;
    const secondDoubleSpace = e.target.id;

    switch (secondDoubleSpace) {
      case getCellIds[14]:
        if (
          mappedCellIds[14].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[9] ===
            `${pawnTwoFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnTwoStartingPosition}`;
        }
        break;
      case getCellIds[12]:
        if (currentPawn === `${pawnTwoStartingPosition}`) {
          mappedCellIds[14].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[12].textContent = `${watchPieceName}`;
          firstMoveStatusArray[9] = `${pawnTwoFirstMoveComplete}`;
        }
        break;
    }
  };

  const thirdDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleThirdDoubleSpace);

    return { thirdDoubleSpaceClicks };
  };

  const handleThirdDoubleSpace = (e) => {
    const pawnThreeStartingPosition = `${pawnAssignmentObject.playerSide.pawnThree.startingPosition}`;
    const pawnThreeFirstMoveNotComplete = `${pawnAssignmentObject.playerSide.pawnThree.watchForFirstMove.firstMoveNotComplete}`;
    const pawnThreeFirstMoveComplete = `${pawnAssignmentObject.playerSide.pawnThree.watchForFirstMove.firstMoveComplete}`;
    const thirdDoubleSpace = e.target.id;

    switch (thirdDoubleSpace) {
      case getCellIds[22]:
        if (
          mappedCellIds[22].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[10] ===
            `${pawnThreeFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnThreeStartingPosition}`;
        }
        break;
      case getCellIds[20]:
        if (currentPawn === `${pawnThreeStartingPosition}`) {
          mappedCellIds[22].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[20].textContent = `${watchPieceName}`;
          firstMoveStatusArray[10] = `${pawnThreeFirstMoveComplete}`;
        }
        break;
    }
  };

  const fourthDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleFourthDoubleSpace);

    return { fourthDoubleSpaceClicks };
  };

  const handleFourthDoubleSpace = (e) => {
    const pawnFourStartingPosition = `${pawnAssignmentObject.playerSide.pawnFour.startingPosition}`;
    const pawnFourFirstMoveNotComplete = `${pawnAssignmentObject.playerSide.pawnFour.watchForFirstMove.firstMoveNotComplete}`;
    const pawnFourFirstMoveComplete = `${pawnAssignmentObject.playerSide.pawnFour.watchForFirstMove.firstMoveComplete}`;
    const fourthDoubleSpace = e.target.id;

    switch (fourthDoubleSpace) {
      case getCellIds[30]:
        if (
          mappedCellIds[30].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[11] ===
            `${pawnFourFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnFourStartingPosition}`;
        }
        break;
      case getCellIds[28]:
        if (currentPawn === `${pawnFourStartingPosition}`) {
          mappedCellIds[30].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[28].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[11] = `${pawnFourFirstMoveComplete}`;
        }
        break;
    }
  };

  const fifthDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleFifthDoubleSpace);

    return { fifthDoubleSpaceClicks };
  };

  const handleFifthDoubleSpace = (e) => {
    const pawnFiveStartingPosition = `${pawnAssignmentObject.playerSide.pawnFive.startingPosition}`;
    const pawnFiveFirstMoveNotComplete = `${pawnAssignmentObject.playerSide.pawnFive.watchForFirstMove.firstMoveNotComplete}`;
    const pawnFiveFirstMoveComplete = `${pawnAssignmentObject.playerSide.pawnFive.watchForFirstMove.firstMoveComplete}`;
    const fifthDoubleSpace = e.target.id;

    switch (fifthDoubleSpace) {
      case getCellIds[38]:
        if (
          mappedCellIds[38].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[12] ===
            `${pawnFiveFirstMoveNotComplete}`
        ) {
          console.log("hi");
          currentPawn = `${pawnFiveStartingPosition}`;
        }
        break;
      case getCellIds[36]:
        if (currentPawn === `${pawnFiveStartingPosition}`) {
          mappedCellIds[38].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[36].textContent = `${watchPieceName}`;
          firstMoveStatusArray[12] = `${pawnFiveFirstMoveComplete}`;
        }
        break;
    }
  };

  const sixthDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleSixthDoubleSpace);

    return { sixthDoubleSpaceClicks };
  };

  const handleSixthDoubleSpace = (e) => {
    const pawnSixStartingPosition = `${pawnAssignmentObject.playerSide.pawnSix.startingPosition}`;
    const pawnSixFirstMoveNotComplete = `${pawnAssignmentObject.playerSide.pawnSix.watchForFirstMove.firstMoveNotComplete}`;
    const pawnSixFirstMoveComplete = `${pawnAssignmentObject.playerSide.pawnSix.watchForFirstMove.firstMoveComplete}`;
    const sixthDoubleSpace = e.target.id;

    switch (sixthDoubleSpace) {
      case getCellIds[46]:
        if (
          mappedCellIds[46].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[13] ===
            `${pawnSixFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnSixStartingPosition}`;
        }
        break;
      case getCellIds[44]:
        if (currentPawn === `${pawnSixStartingPosition}`) {
          mappedCellIds[46].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[44].textContent = `${watchPieceName}`;
          firstMoveStatusArray[13] = `${pawnSixFirstMoveComplete}`;
        }
        break;
    }
  };

  const seventhDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleSeventhDoubleSpace);

    return { seventhDoubleSpaceClicks };
  };

  const handleSeventhDoubleSpace = (e) => {
    const pawnSevenStartingPosition = `${pawnAssignmentObject.playerSide.pawnSeven.startingPosition}`;
    const pawnSevenFirstMoveNotComplete = `${pawnAssignmentObject.playerSide.pawnSeven.watchForFirstMove.firstMoveNotComplete}`;
    const pawnSevenFirstMoveComplete = `${pawnAssignmentObject.playerSide.pawnSeven.watchForFirstMove.firstMoveComplete}`;
    const seventhDoubleSpace = e.target.id;

    switch (seventhDoubleSpace) {
      case getCellIds[54]:
        if (
          mappedCellIds[54].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[14] ===
            `${pawnSevenFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnSevenStartingPosition}`;
        }
        break;
      case getCellIds[52]:
        if (currentPawn === `${pawnSevenStartingPosition}`) {
          mappedCellIds[54].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[52].textContent = `${watchPieceName}`;
          firstMoveStatusArray[14] = `${pawnSevenFirstMoveComplete}`;
        }
        break;
    }
  };

  const eighthDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleEighthDoubleSpace);

    return { eighthDoubleSpaceClicks };
  };

  const handleEighthDoubleSpace = (e) => {
    const pawnEightStartingPosition = `${pawnAssignmentObject.playerSide.pawnEight.startingPosition}`;
    const pawnEightFirstMoveNotComplete = `${pawnAssignmentObject.playerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const pawnEightFirstMoveComplete = `${pawnAssignmentObject.playerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const eighthDoubleSpace = e.target.id;

    switch (eighthDoubleSpace) {
      case getCellIds[62]:
        if (
          mappedCellIds[62].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[15] ===
            `${pawnEightFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnEightStartingPosition}`;
        }
        break;
      case getCellIds[60]:
        if (currentPawn === `${pawnEightStartingPosition}`) {
          mappedCellIds[62].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[60].textContent = `${watchPieceName}`;
          firstMoveStatusArray[15] = `${pawnEightFirstMoveComplete}`;
        }
    }
  };

  return {
    firstDoubleSpaceClicks,
    secondDoubleSpaceClicks,
    thirdDoubleSpaceClicks,
    fourthDoubleSpaceClicks,
    fifthDoubleSpaceClicks,
    sixthDoubleSpaceClicks,
    seventhDoubleSpaceClicks,
    eighthDoubleSpaceClicks,
  };
};

export default PlayerDoubleSpace;
