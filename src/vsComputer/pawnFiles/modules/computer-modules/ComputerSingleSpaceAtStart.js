import { singleSpaceAtStartArray } from "../../objects/pawnArrays.js"
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";

const ComputerSingleSpaceAtStart = () => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;
  const watchPieceName = `${pawnAssignmentObject.pieceName}`;
  const watchForEmptyCellAfterSingleSpaceAtStart = `${trackGameStateObject.emptyCell}`;

  const handleFirstComputerSideDoubleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleFirstComputerSideSingleSpaceAtStart
    );

    return { handleFirstComputerSideDoubleSpaceAtStartClicks };
  };

  const handleFirstComputerSideSingleSpaceAtStart = (e) => {
    const computerPawnOneStartingPosition = `${pawnAssignmentObject.computerSide.pawnOne.startingPosition}`;
    const computerPawnOneSingleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnOne.watchForFirstMove.firstMoveNotComplete}`;
    const computerPawnOneSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnOne.watchForFirstMove.firstMoveComplete}`;
    const firstComputerSideSingleSpaceAtStart = e.target.id;

    switch (firstComputerSideSingleSpaceAtStart) {
      case getCellIds[1]:
        if (
          mappedCellIds[1].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[0] === `${computerPawnOneSingleSpaceNotComplete}`
        ) {
          currentPawn = `${computerPawnOneStartingPosition}`;
        }
        break;
      case getCellIds[2]:
        if (currentPawn === `${computerPawnOneStartingPosition}`) {
          singleSpaceAtStartArray[0] = `${computerPawnOneSingleSpaceComplete}`;
          mappedCellIds[1].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[2].textContent = `${watchPieceName}`;
        }
        break;
    }
  };

  const handleSecondComputerSideSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleSecondComputerSideSingleSpaceAtStart
    );

    return { handleSecondComputerSideSingleSpaceAtStartClicks };
  };

  const handleSecondComputerSideSingleSpaceAtStart = (e) => {
    const computerPawnTwoStartingPosition = `${pawnAssignmentObject.computerSide.pawnTwo.startingPosition}`;
    const computerPawnTwoSingleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnTwo.watchForFirstMove.firstMoveNotComplete}`;
    const computerPawnTwoSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnTwo.watchForFirstMove.firstMoveComplete}`;
    const secondComputerSideSingleSpaceAtStart = e.target.id;

    switch (secondComputerSideSingleSpaceAtStart) {
      case getCellIds[9]:
        if (
          mappedCellIds[9].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[1] === `${computerPawnTwoSingleSpaceNotComplete}`
        ) {
          currentPawn = `${computerPawnTwoStartingPosition}`;
        }
        break;
      case getCellIds[10]:
        if (currentPawn === `${computerPawnTwoStartingPosition}`) {
          mappedCellIds[9].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[10].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[1] = `${computerPawnTwoSingleSpaceComplete}`;
        }
        break;
    }
  };

  const handleThirdComputerSideSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleThirdComputerSideSingleSpaceAtStart
    );

    return { handleThirdComputerSideSingleSpaceAtStartClicks };
  };

  const handleThirdComputerSideSingleSpaceAtStart = (e) => {
    const computerPawnThreeStartingPosition = `${pawnAssignmentObject.computerSide.pawnThree.startingPosition}`;
    const computerPawnThreeSingleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnThree.watchForFirstMove.firstMoveNotComplete}`;
    const computerPawnThreeSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnThree.watchForFirstMove.firstMoveComplete}`;
    const thirdComputerSideSingleSpaceAtStart = e.target.id;

    switch (thirdComputerSideSingleSpaceAtStart) {
      case getCellIds[17]:
        if (
          mappedCellIds[17].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[2] ===
            `${computerPawnThreeSingleSpaceNotComplete}`
        ) {
          currentPawn = `${computerPawnThreeStartingPosition}`;
        }
        break;
      case getCellIds[18]:
        if (currentPawn === `${computerPawnThreeStartingPosition}`) {
          mappedCellIds[17].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[18].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[2] = `${computerPawnThreeSingleSpaceComplete}`;
        }
        break;
    }
  };

  const handleFourthComputerSideSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleFourthComputerSideSingleSpaceAtStart
    );

    return { handleFourthComputerSideSingleSpaceAtStartClicks };
  };

  const handleFourthComputerSideSingleSpaceAtStart = (e) => {
    const computerPawnFourStartingPosition = `${pawnAssignmentObject.computerSide.pawnFour.startingPosition}`;
    const computerPawnFourSingleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnFour.watchForFirstMove.firstMoveNotComplete}`;
    const computerPawnFourSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnFour.watchForFirstMove.firstMoveComplete}`;
    const fourthComputerSideSingleSpaceAtStart = e.target.id;

    switch (fourthComputerSideSingleSpaceAtStart) {
      case getCellIds[25]:
        if (
          mappedCellIds[25].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[3] === `${computerPawnFourSingleSpaceNotComplete}`
        ) {
          currentPawn = `${computerPawnFourStartingPosition}`;
        }
        break;
      case getCellIds[26]:
        if (currentPawn === `${computerPawnFourStartingPosition}`) {
          mappedCellIds[25].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[26].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[3] = `${computerPawnFourSingleSpaceComplete}`;
        }
        break;
    }
  };

  const handleFifthComputerSideSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleFifthComputerSideSingleSpaceAtStart
    );

    return { handleFifthComputerSideSingleSpaceAtStartClicks };
  };

  const handleFifthComputerSideSingleSpaceAtStart = (e) => {
    const computerPawnFiveStartingPosition = `${pawnAssignmentObject.computerSide.pawnFive.startingPosition}`;
    const computerPawnFiveSingleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnFive.watchForFirstMove.firstMoveNotComplete}`;
    const computerPawnFiveSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnFive.watchForFirstMove.firstMoveComplete}`;
    const fifthComputerSideSingleSpaceAtStart = e.target.id;

    switch (fifthComputerSideSingleSpaceAtStart) {
      case getCellIds[33]:
        if (
          mappedCellIds[33].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[4] === `${computerPawnFiveSingleSpaceNotComplete}`
        ) {
          console.log("hi");
          currentPawn = `${computerPawnFiveStartingPosition}`;
        }
        break;
      case getCellIds[34]:
        if (currentPawn === `${computerPawnFiveStartingPosition}`) {
          mappedCellIds[33].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[34].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[4] = `${computerPawnFiveSingleSpaceComplete}`;
        }
        break;
    }
  };

  const handleSixthComputerSideSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleSixthComputerSideSingleSpaceAtStart
    );

    return { handleSixthComputerSideSingleSpaceAtStartClicks };
  };

  const handleSixthComputerSideSingleSpaceAtStart = (e) => {
    const computerPawnSixStartingPosition = `${pawnAssignmentObject.computerSide.pawnSix.startingPosition}`;
    const computerPawnSixSingleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnSix.watchForFirstMove.firstMoveNotComplete}`;
    const computerPawnSixSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnFive.watchForFirstMove.firstMoveComplete}`;
    const sixthComputerSideSingleSpaceAtStart = e.target.id;

    switch (sixthComputerSideSingleSpaceAtStart) {
      case getCellIds[41]:
        if (
          mappedCellIds[41].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[5] === `${computerPawnSixSingleSpaceNotComplete}`
        ) {
          currentPawn = `${computerPawnSixStartingPosition}`;
        }
        break;
      case getCellIds[42]:
        if (currentPawn === `${computerPawnSixStartingPosition}`) {
          mappedCellIds[41].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[42].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[5] = `${computerPawnSixSingleSpaceComplete}`;
        }
        break;
    }
  };

  const handleSeventhComputerSideSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleSeventhComputerSideSingleSpaceAtStart
    );

    return { handleSeventhComputerSideSingleSpaceAtStartClicks };
  };

  const handleSeventhComputerSideSingleSpaceAtStart = (e) => {
    const computerPawnSevenStartingPosition = `${pawnAssignmentObject.computerSide.pawnSeven.startingPosition}`;
    const computerPawnSevenSingleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnSeven.watchForFirstMove.firstMoveNotComplete}`;
    const computerPawnSevenSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnSeven.watchForFirstMove.firstMoveComplete}`;
    const seventhComputerSideSingleSpaceAtStart = e.target.id;

    switch (seventhComputerSideSingleSpaceAtStart) {
      case getCellIds[49]:
        if (
          mappedCellIds[49].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[6] ===
            `${computerPawnSevenSingleSpaceNotComplete}`
        ) {
          currentPawn = `${computerPawnSevenStartingPosition}`;
        }
        break;
      case getCellIds[50]:
        if (currentPawn === `${computerPawnSevenStartingPosition}`) {
          mappedCellIds[49].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[50].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[6] = `${computerPawnSevenSingleSpaceComplete}`;
        }
        break;
    }
  };

  const handleEighthComputerSideSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleEighthComputerSideSingleSpaceAtStart
    );

    return { handleEighthComputerSideSingleSpaceAtStartClicks };
  };
  const handleEighthComputerSideSingleSpaceAtStart = (e) => {
    const computerPawnEightStartingPosition = `${pawnAssignmentObject.computerSide.pawnEight.startingPosition}`;
    const computerPawnEightSingleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnEight.watchForFirstMove.firstMoveNotComplete}`;
    const computerPawnEightSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnEight.watchForFirstMove.firstMoveComplete}`;
    const eighthComputerSideSingleSpaceAtStart = e.target.id;

    switch (eighthComputerSideSingleSpaceAtStart) {
      case getCellIds[57]:
        if (
          mappedCellIds[57].textContent === `${watchPieceName}` &&
          singleSpaceAtStartArray[7] ===
            `${computerPawnEightSingleSpaceNotComplete}`
        ) {
          currentPawn = `${computerPawnEightStartingPosition}`;
        }
        break;
      case getCellIds[58]:
        if (currentPawn === `${computerPawnEightStartingPosition}`) {
          mappedCellIds[57].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[58].textContent = `${watchPieceName}`;
          singleSpaceAtStartArray[7] = `${computerPawnEightSingleSpaceComplete}`;
        }
        break;
    }
  };

  return {
    handleFirstComputerSideDoubleSpaceAtStartClicks,
    handleSecondComputerSideSingleSpaceAtStartClicks,
    handleThirdComputerSideSingleSpaceAtStartClicks,
    handleFourthComputerSideSingleSpaceAtStartClicks,
    handleFifthComputerSideSingleSpaceAtStartClicks,
    handleSixthComputerSideSingleSpaceAtStartClicks,
    handleSeventhComputerSideSingleSpaceAtStartClicks,
    handleEighthComputerSideSingleSpaceAtStartClicks,
  };
};
export default ComputerSingleSpaceAtStart;
