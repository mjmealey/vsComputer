import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { firstMoveStatusArray } from "../../objects/pawnArrays.js";
const PreventPlayerDuplication = () => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  const watchPieceName = `${pawnAssignmentObject.pieceName}`;
  const watchForEmptyCellAfterDoubleSpace = `${trackGameStateObject.emptyCell}`;
  const watchForEmptyCellAfterSingleSpace = `${trackGameStateObject.emptyCell}`;

  const firstPlayerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", firstPlayerPreventDuplication);

    return { firstPlayerPreventDuplicationClicks };
  };

  const firstPlayerPreventDuplication = (e) => {
    const firstPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const firstPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnOne.watchForSingleSpaceAtStart.singleSpaceAtStartUsed}`;
    const firstPlayerPreventDuplication = e.target.id;

    switch (firstPlayerPreventDuplication) {
      case getCellIds[5]:
        if (
          mappedCellIds[4].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[8] === `${firstPlayerDoubleSpaceComplete}`
        ) {
          mappedCellIds[5].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[4]:
        if (
          mappedCellIds[5].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[8] === `${firstPlayerSingleSpaceComplete}`
        ) {
          mappedCellIds[4].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
        break;
    }
  };

  const secondPlayerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", secondPlayerPreventDuplication);

    return { secondPlayerPreventDuplicationClicks };
  };

  const secondPlayerPreventDuplication = (e) => {
    const secondPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const secondPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnTwo.watchForSingleSpaceAtStart.singleSpaceAtStartUsed}}`;
    const secondPlayerPreventDuplication = e.target.id;

    switch (secondPlayerPreventDuplication) {
      case getCellIds[13]:
        if (
          mappedCellIds[12].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[9] === `${secondPlayerDoubleSpaceComplete}`
        ) {
          mappedCellIds[13].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[12]:
        if (
          mappedCellIds[13].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[9] === `${secondPlayerSingleSpaceComplete}`
        ) {
          console.log("hi");
          mappedCellIds[12].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
        break;
    }
  };

  const thirdPlayerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", thirdPlayerPreventDuplication);

    return { thirdPlayerPreventDuplicationClicks };
  };

  const thirdPlayerPreventDuplication = (e) => {
    const thirdPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const thirdPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnThree.watchForSingleSpaceAtStart.singleSpaceAtStartUsed}}`;
    const thirdPlayerPreventDuplication = e.target.id;

    switch (thirdPlayerPreventDuplication) {
      case getCellIds[21]:
        if (
          mappedCellIds[20].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[10] === `${thirdPlayerDoubleSpaceComplete}`
        ) {
          mappedCellIds[21].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[20]:
        if (
          mappedCellIds[21].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[10] === `${thirdPlayerSingleSpaceComplete}`
        ) {
          mappedCellIds[20].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
        break;
    }
  };

  const fourthPlayerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", fourthPlayerPreventDuplication);

    return { fourthPlayerPreventDuplicationClicks };
  };

  const fourthPlayerPreventDuplication = (e) => {
    const fourthPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const fourthPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnFour.watchForSingleSpaceAtStart.singleSpaceAtStartUsed}}`;
    const fourthPlayerPreventDuplication = e.target.id;

    switch (fourthPlayerPreventDuplication) {
      case getCellIds[29]:
        if (
          mappedCellIds[28].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[11] === `${fourthPlayerDoubleSpaceComplete}`
        ) {
          mappedCellIds[29].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[28]:
        if (
          mappedCellIds[29].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[11] === `${fourthPlayerSingleSpaceComplete}`
        ) {
          mappedCellIds[28].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
        break;
    }
  };

  const fifthPlayerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", fifthPlayerPreventDuplication);

    return { fifthPlayerPreventDuplicationClicks };
  };

  const fifthPlayerPreventDuplication = (e) => {
    const fifthPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const fifthPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnFive.watchForSingleSpaceAtStart.singleSpaceAtStartUsed}}`;
    const fifthPlayerPreventDuplication = e.target.id;

    switch (fifthPlayerPreventDuplication) {
      case getCellIds[37]:
        if (
          mappedCellIds[36].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[12] === `${fifthPlayerDoubleSpaceComplete}`
        ) {
          mappedCellIds[37].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[36]:
        if (
          mappedCellIds[37].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[13] === `${fifthPlayerSingleSpaceComplete}`
        ) {
          mappedCellIds[36].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
        break;
    }
  };

  const sixthPlayerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", sixthPlayerPreventDuplication);

    return { sixthPlayerPreventDuplicationClicks };
  };

  const sixthPlayerPreventDuplication = (e) => {
    const sixthPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const sixthPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSix.watchForSingleSpaceAtStart.singleSpaceAtStartUsed}}`;
    const sixthPlayerPreventDuplication = e.target.id;

    switch (sixthPlayerPreventDuplication) {
      case getCellIds[45]:
        if (
          mappedCellIds[44].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[13] === `${sixthPlayerDoubleSpaceComplete}`
        ) {
          mappedCellIds[45].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[44]:
        if (
          mappedCellIds[45].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[14] === `${sixthPlayerSingleSpaceComplete}`
        ) {
          mappedCellIds[44].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
        break;
    }
  };

  const seventhPlayerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", seventhPlayerPreventDuplication);

    return { seventhPlayerPreventDuplicationClicks };
  };

  const seventhPlayerPreventDuplication = (e) => {
    const seventhPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const seventhPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSeven.watchForSingleSpaceAtStart.singleSpaceAtStartUsed}}`;
    const seventhPlayerPreventDuplication = e.target.id;

    switch (seventhPlayerPreventDuplication) {
      case getCellIds[53]:
        if (
          mappedCellIds[52].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[14] === `${seventhPlayerDoubleSpaceComplete}`
        ) {
          mappedCellIds[53].textContent = `${watchPieceName}`;
        }
        break;
      case getCellIds[52]:
        if (
          mappedCellIds[53].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[14] === `${seventhPlayerSingleSpaceComplete}`
        ) {
          mappedCellIds[52].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
        break;
    }
  };

  const eighthPlayerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", eighthPlayerPreventDuplication);

    return { eighthPlayerPreventDuplicationClicks };
  };

  const eighthPlayerPreventDuplication = (e) => {
    const eighthPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const eighthComputerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnEight.watchForSingleSpaceAtStart.singleSpaceAtStartUsed}}`;
    const eighthPlayerPreventDuplication = e.target.id;

    switch (eighthPlayerPreventDuplication) {
      case getCellIds[61]:
        if (
          mappedCellIds[60].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[15] === `${eighthPlayerDoubleSpaceComplete}`
        ) {
          mappedCellIds[61].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
        break;
      case getCellIds[60]:
        if (
          mappedCellIds[61].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[15] === `${eighthComputerSingleSpaceComplete}`
        ) {
          mappedCellIds[60].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
        break;
    }
  };
  return {
    firstPlayerPreventDuplicationClicks,
    secondPlayerPreventDuplicationClicks,
    thirdPlayerPreventDuplicationClicks,
    fourthPlayerPreventDuplicationClicks,
    fifthPlayerPreventDuplicationClicks,
    sixthPlayerPreventDuplicationClicks,
    seventhPlayerPreventDuplicationClicks,
    eighthPlayerPreventDuplicationClicks,
  };
};

export default PreventPlayerDuplication;
