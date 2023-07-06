import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { doubleSpacePawnMoveArray } from "../../objects/pawnArrays.js";
import { singleSpaceAtStartArray } from "../../objects/pawnArrays.js";

const PreventComputerDuplication = () => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  const watchPieceName = `${pawnAssignmentObject.pieceName}`;
  const watchForEmptyCellAfterDoubleSpace = `${trackGameStateObject.emptyCell}`;
  const watchForEmptyCellAfterSingleSpace = `${trackGameStateObject.emptyCell}`;
  const firstComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", firstComputerPreventDuplication);

    return { firstComputerPreventDuplicationClicks };
  };

  const firstComputerPreventDuplication = (e) => {
    const firstComputerDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const firstComputerSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnOne.watchForFirstMove.firstMoveComplete}`;
    const preventFirstDuplicationAfterDoubleSpace = e.target.id;
    switch (preventFirstDuplicationAfterDoubleSpace) {
      //handles duplication possible when double spacing is done
      case getCellIds[2]:
        if (
          mappedCellIds[3].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[0] === `${firstComputerDoubleSpaceComplete}`
        ) {
          mappedCellIds[2].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      //handles duplication possible when single spacing is done at the start instead of double spacing
      case getCellIds[3]:
        if (
          mappedCellIds[2].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[0] === `${firstComputerSingleSpaceComplete}`
        ) {
          mappedCellIds[3].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
    }
  };

  const secondComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", secondComputerPreventDuplication);

    return { secondComputerPreventDuplicationClicks };
  };

  const secondComputerPreventDuplication = (e) => {
    const secondComputerDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const secondComputerSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnTwo.watchForFirstMove.firstMoveComplete}`;
    const preventSecondDuplicationAfterDoubleSpace = e.target.id;
    switch (preventSecondDuplicationAfterDoubleSpace) {
      case getCellIds[10]:
        if (
          mappedCellIds[11].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[1] === `${secondComputerDoubleSpaceComplete}`
        ) {
          mappedCellIds[10].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[11]:
        if (
          mappedCellIds[10].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[1] === `${secondComputerSingleSpaceComplete}`
        ) {
          mappedCellIds[11].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
        break;
    }
  };

  const thirdComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", thirdComputerPreventDuplication);

    return { thirdComputerPreventDuplicationClicks };
  };

  const thirdComputerPreventDuplication = (e) => {
    const thirdComputerDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const thirdComputerSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnThree.watchForFirstMove.firstMoveComplete}`;
    const preventThirdDuplicationAfterDoubleSpace = e.target.id;
    switch (preventThirdDuplicationAfterDoubleSpace) {
      case getCellIds[18]:
        if (
          mappedCellIds[19].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[2] === `${thirdComputerDoubleSpaceComplete}`
        ) {
          mappedCellIds[18].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[19]:
        if (
          mappedCellIds[18].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[2] === `${thirdComputerSingleSpaceComplete}`
        ) {
          mappedCellIds[19].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
        break;
    }
  };

  const fourthComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", fourthComputerPreventDuplication);

    return { fourthComputerPreventDuplicationClicks };
  };

  const fourthComputerPreventDuplication = (e) => {
    const fourthComputerDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const fourthComputerSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnFour.watchForFirstMove.firstMoveComplete}`;
    const preventFourthDuplicationAfterDoubleSpace = e.target.id;
    switch (preventFourthDuplicationAfterDoubleSpace) {
      case getCellIds[26]:
        if (
          mappedCellIds[27].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[3] === `${fourthComputerDoubleSpaceComplete}`
        ) {
          mappedCellIds[26].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[27]:
        if (
          mappedCellIds[26].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[3] === `${fourthComputerSingleSpaceComplete}`
        ) {
          mappedCellIds[27].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
    }
  };

  const fifthComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", fifthComputerPreventDuplication);

    return { fifthComputerPreventDuplicationClicks };
  };

  const fifthComputerPreventDuplication = (e) => {
    const fifthComputerDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const fifthComputerSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnFive.watchForFirstMove.firstMoveComplete}`;
    const preventFifthDuplicationAfterDoubleSpace = e.target.id;
    switch (preventFifthDuplicationAfterDoubleSpace) {
      case getCellIds[34]:
        if (
          mappedCellIds[35].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[4] === `${fifthComputerDoubleSpaceComplete}`
        ) {
          mappedCellIds[34].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[35]:
        if (
          mappedCellIds[34].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[4] === `${fifthComputerSingleSpaceComplete}`
        ) {
          mappedCellIds[35].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
    }
  };

  const sixthComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", sixthComputerPreventDuplication);

    return { sixthComputerPreventDuplicationClicks };
  };

  const sixthComputerPreventDuplication = (e) => {
    const sixthComputerDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const sixthComputerSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnSix.watchForFirstMove.firstMoveComplete}`;
    const preventSixthDuplicationAfterDoubleSpace = e.target.id;
    switch (preventSixthDuplicationAfterDoubleSpace) {
      case getCellIds[42]:
        if (
          mappedCellIds[43].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[5] === `${sixthComputerDoubleSpaceComplete}`
        ) {
          mappedCellIds[42].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[43]:
        if (
          mappedCellIds[42].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[5] === `${sixthComputerSingleSpaceComplete}`
        ) {
          mappedCellIds[43].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
    }
  };

  const seventhComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", seventhComputerPreventDuplication);

    return { seventhComputerPreventDuplicationClicks };
  };

  const seventhComputerPreventDuplication = (e) => {
    const seventhComputerDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const seventhComputerSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnSeven.watchForFirstMove.firstMoveComplete}`;
    const preventSeventhDuplicationAfterDoubleSpace = e.target.id;
    switch (preventSeventhDuplicationAfterDoubleSpace) {
      case getCellIds[50]:
        if (
          mappedCellIds[51].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[6] === `${seventhComputerDoubleSpaceComplete}`
        ) {
          mappedCellIds[50].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[51]:
        if (
          mappedCellIds[50].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[6] === `${seventhComputerSingleSpaceComplete}`
        ) {
          mappedCellIds[51].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
    }
  };

  const eighthComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", eighthComputerPreventDuplication);

    return { eighthComputerPreventDuplicationClicks };
  };

  const eighthComputerPreventDuplication = (e) => {
    const eighthComputerDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const eighthComputerSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnEight.watchForFirstMove.firstMoveComplete}`;
    const preventEighthDuplicationAfterDoubleSpace = e.target.id;
    switch (preventEighthDuplicationAfterDoubleSpace) {
      case getCellIds[58]:
        if (
          mappedCellIds[59].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[7] === `${eighthComputerDoubleSpaceComplete}`
        ) {
          mappedCellIds[58].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[59]:
        if (
          mappedCellIds[58].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[7] === `${eighthComputerSingleSpaceComplete}`
        ) {
          mappedCellIds[59].textContent = `${watchForEmptyCellAfterSingleSpace}`;
        }
    }
  };
  return {
    firstComputerPreventDuplicationClicks,
    secondComputerPreventDuplicationClicks,
    thirdComputerPreventDuplicationClicks,
    fourthComputerPreventDuplicationClicks,
    fifthComputerPreventDuplicationClicks,
    sixthComputerPreventDuplicationClicks,
    seventhComputerPreventDuplicationClicks,
    eighthComputerPreventDuplicationClicks,
  };
};
export default PreventComputerDuplication;
