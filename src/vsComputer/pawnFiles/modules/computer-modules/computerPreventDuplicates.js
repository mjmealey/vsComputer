import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { doubleSpacePawnMoveArray } from "../../objects/pawnArrays.js";
import { singleSpaceAtStartArray } from "../../objects/pawnArrays.js";

const PreventComputerDuplication = () => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  const watchPieceName = `${pawnAssignmentObject.pieceName}`;
  const watchForEmptyCellAfterDoubleSpace = `${trackGameStateObject.emptyCell}`;

  const firstComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", firstComputerPreventDuplication);

    return { firstComputerPreventDuplicationClicks };
  };

  const firstComputerPreventDuplication = (e) => {
    const firstDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const preventFirstDuplicationAfterDoubleSpace = e.target.id;
    switch (preventFirstDuplicationAfterDoubleSpace) {
      case getCellIds[2]:
        console.log("hi");
        if (
          mappedCellIds[3].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[0] === `${firstDoubleSpaceComplete}`
        ) {
          mappedCellIds[2].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
    }
  };

  const secondComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", secondComputerPreventDuplication);

    return { secondComputerPreventDuplicationClicks };
  };

  const secondComputerPreventDuplication = (e) => {
    const secondDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const preventSecondDuplicationAfterDoubleSpace = e.target.id;
    switch (preventSecondDuplicationAfterDoubleSpace) {
      case getCellIds[10]:
        if (
          mappedCellIds[11].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[1] === `${secondDoubleSpaceComplete}`
        ) {
          mappedCellIds[10].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
    }
  };

  const thirdComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", thirdComputerPreventDuplication);

    return { thirdComputerPreventDuplicationClicks };
  };

  const thirdComputerPreventDuplication = (e) => {
    const thirdDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const preventThirdDuplicationAfterDoubleSpace = e.target.id;
    switch (preventThirdDuplicationAfterDoubleSpace) {
      case getCellIds[18]:
        if (
          mappedCellIds[19].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[2] === `${thirdDoubleSpaceComplete}`
        ) {
          mappedCellIds[18].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
    }
  };

  const fourthComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", fourthComputerPreventDuplication);

    return { fourthComputerPreventDuplicationClicks };
  };

  const fourthComputerPreventDuplication = (e) => {
    const fourthDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const preventFourthDuplicationAfterDoubleSpace = e.target.id;
    switch (preventFourthDuplicationAfterDoubleSpace) {
      case getCellIds[26]:
        if (
          mappedCellIds[27].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[3] === `${fourthDoubleSpaceComplete}`
        ) {
          mappedCellIds[26].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
    }
  };

  const fifthComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", fifthComputerPreventDuplication);

    return { fifthComputerPreventDuplicationClicks };
  };

  const fifthComputerPreventDuplication = (e) => {
    const fifthDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const preventFifthDuplicationAfterDoubleSpace = e.target.id;
    switch (preventFifthDuplicationAfterDoubleSpace) {
      case getCellIds[34]:
        if (
          mappedCellIds[35].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[4] === `${fifthDoubleSpaceComplete}`
        ) {
          mappedCellIds[34].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
    }
  };

  const sixthComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", sixthComputerPreventDuplication);

    return { sixthComputerPreventDuplicationClicks };
  };

  const sixthComputerPreventDuplication = (e) => {
    const sixthDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const preventSixthDuplicationAfterDoubleSpace = e.target.id;
    switch (preventSixthDuplicationAfterDoubleSpace) {
      case getCellIds[42]:
        if (
          mappedCellIds[43].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[5] === `${sixthDoubleSpaceComplete}`
        ) {
          mappedCellIds[42].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
    }
  };

  const seventhComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", seventhComputerPreventDuplication);

    return { seventhComputerPreventDuplicationClicks };
  };

  const seventhComputerPreventDuplication = (e) => {
    const seventhDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const preventSeventhDuplicationAfterDoubleSpace = e.target.id;
    switch (preventSeventhDuplicationAfterDoubleSpace) {
      case getCellIds[50]:
        if (
          mappedCellIds[51].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[6] === `${seventhDoubleSpaceComplete}`
        ) {
          mappedCellIds[50].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
        }
        break;
    }
  };

  const eighthComputerPreventDuplicationClicks = () => {
    gridContainer.addEventListener("click", eighthComputerPreventDuplication);

    return { eighthComputerPreventDuplicationClicks };
  };

  const eighthComputerPreventDuplication = (e) => {
    const eighthDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const preventEighthDuplicationAfterDoubleSpace = e.target.id;
    switch (preventEighthDuplicationAfterDoubleSpace) {
      case getCellIds[58]:
        if (
          mappedCellIds[59].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[7] === `${eighthDoubleSpaceComplete}`
        ) {
          mappedCellIds[58].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
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
