import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { doubleSpacePawnMoveArray } from "../../objects/pawnArrays.js";
import { singleSpaceAtStartArray } from "../../objects/pawnArrays.js";

const PreventPlayerDuplication = () => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  const watchPieceName = `${pawnAssignmentObject.pieceName}`;
  const watchForEmptyCellAfterDoubleSpace = `${trackGameStateObject.emptyCell}`;
  const watchForEmptyCellAfterSingleSpace = `${trackGameStateObject.emptyCell}`;

  const firstPlayerPreventDuplication = (e) => {
    const firstPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const firstPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnOne.watchForFirstMove.firstMoveComplete}`;
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

  const secondPlayerPreventDuplication = (e) => {
    const secondPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const secondPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnTwo.watchForFirstMove.firstMoveComplete}`;
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
          mappedCellIds[12].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
        break;
    }
  };

  const thirdPlayerPreventDuplication = (e) => {
    const thirdPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const thirdPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnThree.watchForFirstMove.firstMoveComplete}`;
    const thirdPlayerPreventDuplication = e.target.id;

    switch (thirdPlayerPreventDuplication) {
      case getCellIds[21]:
        if (
          (mappedCellIds[20].textContent =
            `${watchPieceName}` &&
            doubleSpacePawnMoveArray[10] ===
              `${thirdPlayerDoubleSpaceComplete}`)
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

  const fourthPlayerPreventDuplication = (e) => {
    const fourthPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const fourthPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnFour.watchForFirstMove.firstMoveComplete}`;
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

  const fifthPlayerPreventDuplication = (e) => {
    const fifthPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const fifthPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnFive.watchForFirstMove.firstMoveComplete}`;
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
  const sixthPlayerPreventDuplication = (e) => {
    const sixthPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const sixthPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSix.watchForFirstMove.firstMoveComplete}`;
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
  const seventhPlayerPreventDuplication = (e) => {
    const seventhPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const seventhPlayerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnSeven.watchForFirstMove.firstMoveComplete}`;
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

  const eighthPlayerPreventDuplication = (e) => {
    const eighthPlayerDoubleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const eighthComputerSingleSpaceComplete = `${pawnAssignmentObject.playerSide.pawnEight.watchForFirstMove.firstMoveComplete}`;
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
};
