import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { firstMoveStatusArray } from "../../objects/pawnArrays.js";
const ComputerSingleSpaceAtStart = () => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;
  const watchPieceName = `${pawnAssignmentObject.pieceName}`;
  const watchForEmptyCellAfterSingleSpaceAtStart = `${trackGameStateObject.emptyCell}`;

  const handleFirstComputerSideSingleSpaceAtStartClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleFirstComputerSideSingleSpaceAtStart
    );

    return { handleFirstComputerSideSingleSpaceAtStartClicks };
  };

  const handleFirstComputerSideSingleSpaceAtStart = (e) => {
    const pawnOneStartingPosition = `${pawnAssignmentObject.computerSide.pawnOne.startingPosition}`;
    const pawnOneFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnOne.watchForFirstMove.firstMoveNotComplete}`;
    const pawnOneFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnOne.watchForFirstMove.firstMoveComplete}`;
    const firstComputerSideSingleSpaceAtStart = e.target.id;

    switch (firstComputerSideSingleSpaceAtStart) {
      case getCellIds[1]:
        if (
          mappedCellIds[1].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[0] === `${pawnOneFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnOneStartingPosition}`;
        }
        break;
      case getCellIds[2]:
        if (currentPawn === `${pawnOneStartingPosition}`) {
          firstMoveStatusArray[0] = `${pawnOneFirstMoveComplete}`;
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
    const pawnTwoStartingPosition = `${pawnAssignmentObject.computerSide.pawnTwo.startingPosition}`;
    const pawnTwoFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnTwo.watchForFirstMove.firstMoveNotComplete}`;
    const pawnTwoFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnTwo.watchForFirstMove.firstMoveComplete}`;
    const secondComputerSideSingleSpaceAtStart = e.target.id;

    switch (secondComputerSideSingleSpaceAtStart) {
      case getCellIds[9]:
        if (
          mappedCellIds[9].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[1] === `${pawnTwoFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnTwoStartingPosition}`;
        }
        break;
      case getCellIds[10]:
        if (currentPawn === `${pawnTwoStartingPosition}`) {
          mappedCellIds[9].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[10].textContent = `${watchPieceName}`;
          firstMoveStatusArray[1] = `${pawnTwoFirstMoveComplete}`;
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
    const pawnThreeStartingPosition = `${pawnAssignmentObject.computerSide.pawnThree.startingPosition}`;
    const pawnThreeFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnThree.watchForFirstMove.firstMoveNotComplete}`;
    const pawnThreeFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnThree.watchForFirstMove.firstMoveComplete}`;
    const thirdComputerSideSingleSpaceAtStart = e.target.id;

    switch (thirdComputerSideSingleSpaceAtStart) {
      case getCellIds[17]:
        if (
          mappedCellIds[17].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[2] === `${pawnThreeFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnThreeStartingPosition}`;
        }
        break;
      case getCellIds[18]:
        if (currentPawn === `${pawnThreeStartingPosition}`) {
          mappedCellIds[17].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[18].textContent = `${watchPieceName}`;
          firstMoveStatusArray[2] = `${pawnThreeFirstMoveComplete}`;
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
    const pawnFourStartingPosition = `${pawnAssignmentObject.computerSide.pawnFour.startingPosition}`;
    const pawnFourFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnFour.watchForFirstMove.firstMoveNotComplete}`;
    const pawnFourFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnFour.watchForFirstMove.firstMoveComplete}`;
    const fourthComputerSideSingleSpaceAtStart = e.target.id;

    switch (fourthComputerSideSingleSpaceAtStart) {
      case getCellIds[25]:
        if (
          mappedCellIds[25].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[3] === `${pawnFourFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnFourStartingPosition}`;
        }
        break;
      case getCellIds[26]:
        if (currentPawn === `${pawnFourStartingPosition}`) {
          mappedCellIds[25].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[26].textContent = `${watchPieceName}`;
          firstMoveStatusArray[3] = `${pawnFourFirstMoveComplete}`;
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
    const pawnFiveStartingPosition = `${pawnAssignmentObject.computerSide.pawnFive.startingPosition}`;
    const pawnFiveFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnFive.watchForFirstMove.firstMoveNotComplete}`;
    const pawnFiveFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnFive.watchForFirstMove.firstMoveComplete}`;
    const fifthComputerSideSingleSpaceAtStart = e.target.id;

    switch (fifthComputerSideSingleSpaceAtStart) {
      case getCellIds[33]:
        if (
          mappedCellIds[33].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[4] === `${pawnFiveFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnFiveStartingPosition}`;
        }
        break;
      case getCellIds[34]:
        if (currentPawn === `${pawnFiveStartingPosition}`) {
          mappedCellIds[33].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[34].textContent = `${watchPieceName}`;
          firstMoveStatusArray[4] = `${pawnFiveFirstMoveComplete}`;
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
    const pawnSixStartingPosition = `${pawnAssignmentObject.computerSide.pawnSix.startingPosition}`;
    const pawnSixFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnSix.watchForFirstMove.firstMoveNotComplete}`;
    const pawnSixFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnSix.watchForFirstMove.firstMoveComplete}`;
    const sixthComputerSideSingleSpaceAtStart = e.target.id;

    switch (sixthComputerSideSingleSpaceAtStart) {
      case getCellIds[41]:
        if (
          mappedCellIds[41].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[5] === `${pawnSixFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnSixStartingPosition}`;
        }
        break;
      case getCellIds[42]:
        if (currentPawn === `${pawnSixStartingPosition}`) {
          mappedCellIds[41].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[42].textContent = `${watchPieceName}`;
          firstMoveStatusArray[5] = `${pawnSixFirstMoveComplete}`;
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
    const pawnSevenStartingPosition = `${pawnAssignmentObject.computerSide.pawnSeven.startingPosition}`;
    const pawnSevenSingleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnSeven.watchForFirstMove.firstMoveNotComplete}`;
    const pawnSevenSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnSeven.watchForFirstMove.firstMoveComplete}`;
    const seventhComputerSideSingleSpaceAtStart = e.target.id;

    switch (seventhComputerSideSingleSpaceAtStart) {
      case getCellIds[49]:
        if (
          mappedCellIds[49].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[6] === `${pawnSevenSingleSpaceNotComplete}`
        ) {
          currentPawn = `${pawnSevenStartingPosition}`;
        }
        break;
      case getCellIds[50]:
        if (currentPawn === `${pawnSevenStartingPosition}`) {
          mappedCellIds[49].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[50].textContent = `${watchPieceName}`;
          firstMoveStatusArray[6] = `${pawnSevenSingleSpaceComplete}`;
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
    const pawnEightStartingPosition = `${pawnAssignmentObject.computerSide.pawnEight.startingPosition}`;
    const pawnEightSingleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnEight.watchForFirstMove.firstMoveNotComplete}`;
    const pawnEightSingleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnEight.watchForFirstMove.firstMoveComplete}`;
    const eighthComputerSideSingleSpaceAtStart = e.target.id;

    switch (eighthComputerSideSingleSpaceAtStart) {
      case getCellIds[57]:
        if (
          mappedCellIds[57].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[7] === `${pawnEightSingleSpaceNotComplete}`
        ) {
          currentPawn = `${pawnEightStartingPosition}`;
        }
        break;
      case getCellIds[58]:
        if (currentPawn === `${pawnEightStartingPosition}`) {
          mappedCellIds[57].textContent = `${watchForEmptyCellAfterSingleSpaceAtStart}`;
          mappedCellIds[58].textContent = `${watchPieceName}`;
          firstMoveStatusArray[7] = `${pawnEightSingleSpaceComplete}`;
        }
        break;
    }
  };

  return {
    handleFirstComputerSideSingleSpaceAtStartClicks,
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
