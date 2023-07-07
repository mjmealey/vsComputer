import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { firstMoveStatusArray } from "../../objects/pawnArrays.js";

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
    const pawnOneFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnOne.watchForFirstMove.firstMoveComplete}`;
    const preventFirstDuplicationAfterFirstMove = e.target.id;
    switch (preventFirstDuplicationAfterFirstMove) {
      //handles duplication possible when double spacing is done
      case getCellIds[2]:
        if (
          mappedCellIds[3].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[0] === `${pawnOneFirstMoveComplete}`
        ) {
          mappedCellIds[2].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      //handles duplication possible when single spacing is done at the start instead of double spacing
      case getCellIds[3]:
        if (
          mappedCellIds[2].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[0] === `${pawnOneFirstMoveComplete}`
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
    const pawnTwoFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnTwo.watchForFirstMove.firstMoveComplete}`;
    const preventSecondDuplicationAfterFirstMove = e.target.id;
    switch (preventSecondDuplicationAfterFirstMove) {
      case getCellIds[10]:
        if (
          mappedCellIds[11].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[1] === `${pawnTwoFirstMoveComplete}`
        ) {
          mappedCellIds[10].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[11]:
        if (
          mappedCellIds[10].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[1] === `${pawnTwoFirstMoveComplete}`
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
    const pawnThreeFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnThree.watchForFirstMove.firstMoveComplete}`;
    const preventThirdDuplicationAfterFirstMove = e.target.id;
    switch (preventThirdDuplicationAfterFirstMove) {
      case getCellIds[18]:
        if (
          mappedCellIds[19].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[2] === `${pawnThreeFirstMoveComplete}`
        ) {
          mappedCellIds[18].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[19]:
        if (
          mappedCellIds[18].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[2] === `${pawnThreeFirstMoveComplete}`
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
    const pawnFourFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnFour.watchForFirstMove.firstMoveComplete}`;
    const preventFourthDuplicationAfterFirstMove = e.target.id;
    switch (preventFourthDuplicationAfterFirstMove) {
      case getCellIds[26]:
        if (
          mappedCellIds[27].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[3] === `${pawnFourFirstMoveComplete}`
        ) {
          mappedCellIds[26].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[27]:
        if (
          mappedCellIds[26].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[3] === `${pawnFourFirstMoveComplete}`
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
    const pawnFiveFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnFive.watchForFirstMove.firstMoveComplete}`;
    const preventFifthDuplicationAfterFirstMove = e.target.id;
    switch (preventFifthDuplicationAfterFirstMove) {
      case getCellIds[34]:
        if (
          mappedCellIds[35].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[4] === `${pawnFiveFirstMoveComplete}`
        ) {
          mappedCellIds[34].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[35]:
        if (
          mappedCellIds[34].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[4] === `${pawnFiveFirstMoveComplete}`
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
    const sixthComputerFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnSix.watchForFirstMove.firstMoveComplete}`;
    const preventSixthDuplicationAfterFirstMove = e.target.id;
    switch (preventSixthDuplicationAfterFirstMove) {
      case getCellIds[42]:
        if (
          mappedCellIds[43].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[5] === `${sixthComputerFirstMoveComplete}`
        ) {
          mappedCellIds[42].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[43]:
        if (
          mappedCellIds[42].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[5] === `${sixthComputerFirstMoveComplete}`
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
    const seventhComputerFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnSeven.watchForFirstMove.firstMoveComplete}`;
    const preventSeventhDuplicationAfterDoubleSpace = e.target.id;
    switch (preventSeventhDuplicationAfterDoubleSpace) {
      case getCellIds[50]:
        if (
          mappedCellIds[51].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[6] ===
            `${seventhComputerFirstMoveComplete}`
        ) {
          mappedCellIds[50].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[51]:
        if (
          mappedCellIds[50].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[6] === `${seventhComputerFirstMoveComplete}`
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
    const eighthComputerFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnEight.watchForFirstMove.firstMoveComplete}`;
    const preventEighthDuplicationAfterFirstMove = e.target.id;
    switch (preventEighthDuplicationAfterFirstMove) {
      case getCellIds[58]:
        if (
          mappedCellIds[59].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[7] === `${eighthComputerFirstMoveComplete}`
        ) {
          mappedCellIds[58].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
      case getCellIds[59]:
        if (
          mappedCellIds[58].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[7] === `${eighthComputerFirstMoveComplete}`
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
