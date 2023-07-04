import { getCellIds } from "./ChessPieceAssignments.js";
import { pawnAssignmentObject } from "./pawnObjects.js";
import { trackGameStateObject } from "./gameStateObjects.js";
import { doubleSpacePawnMoveArray } from "./pawnArrays.js";
const ComputerDoubleSpace = () => {
  const handleFirstComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleFirstComputerSideDoubleSpace);

    return { handleFirstComputerSideDoubleSpaceClicks };
  };

  const handleSecondComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleSecondComputerSideDoubleSpace
    );

    return { handleSecondComputerSideDoubleSpaceClicks };
  };

  const handleThirdComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleThirdComputerSideDoubleSpace);

    return { handleThirdComputerSideDoubleSpaceClicks };
  };

  const handleFourthComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleFourthComputerSideDoubleSpace
    );

    return { handleFourthComputerSideDoubleSpaceClicks };
  };

  const handleFifthComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleFifthComputerSideDoubleSpace);

    return { handleFifthComputerSideDoubleSpaceClicks };
  };

  const handleSixthComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleSixthComputerSideDoubleSpace);

    return { handleSixthComputerSideDoubleSpaceClicks };
  };

  const handleSeventhComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleSeventhComputerSideDoubleSpace
    );

    return { handleSeventhComputerSideDoubleSpaceClicks };
  };

  const handleEighthComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleEighthComputerSideDoubleSpace
    );

    return { handleEighthComputerSideDoubleSpaceClicks };
  };

  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  //current pawn watches for the current pawn based on its starting position
  let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;
  const watchPieceName = `${pawnAssignmentObject.pieceName}`;
  const watchForEmptyCellAfterDoubleSpace = `${trackGameStateObject.emptyCell}`;

  const handleFirstComputerSideDoubleSpace = (e) => {
    const pawnOneStartingPosition = `${pawnAssignmentObject.computerSide.pawnOne.startingPosition}`;
    const pawnOneDoubleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const pawnOneDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const firstComputerSideDoubleSpace = e.target.id;

    switch (firstComputerSideDoubleSpace) {
      case getCellIds[1]:
        if (
          mappedCellIds[1].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[0] === `${pawnOneDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${pawnOneStartingPosition}`;
        }
        break;
      case getCellIds[3]:
        if (currentPawn === pawnOneStartingPosition) {
          mappedCellIds[1].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[3].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[0] = `${pawnOneDoubleSpaceComplete}`;
        }
    }
  };

  const handleSecondComputerSideDoubleSpace = (e) => {
    const pawnTwoStartingPosition = `${pawnAssignmentObject.computerSide.pawnTwo.startingPosition}`;
    const pawnTwoDoubleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const pawnTwoDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const secondComputerSideDoubleSpace = e.target.id;

    switch (secondComputerSideDoubleSpace) {
      case getCellIds[9]:
        if (
          mappedCellIds[9].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[1] === `${pawnTwoDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${pawnTwoStartingPosition}`;
        }
        break;
      case getCellIds[11]:
        if (currentPawn === `${pawnTwoStartingPosition}`) {
          mappedCellIds[9].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[11].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[1] = `${pawnTwoDoubleSpaceComplete}`;
        }
        break;
    }
  };

  const handleThirdComputerSideDoubleSpace = (e) => {
    const pawnThreeStartingPosition = `${pawnAssignmentObject.computerSide.pawnThree.startingPosition}`;
    const pawnThreeDoubleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const pawnThreeDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const thirdComputerSideDoubleSpace = e.target.id;
    switch (thirdComputerSideDoubleSpace) {
      case getCellIds[17]:
        if (
          mappedCellIds[17].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[2] === `${pawnThreeDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${pawnThreeStartingPosition}`;
        }
        break;
      case getCellIds[19]:
        if (currentPawn === `${pawnThreeStartingPosition}`) {
          mappedCellIds[17].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[19].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[2] = `${pawnThreeDoubleSpaceComplete}`;
        }
        break;
    }
  };

  const handleFourthComputerSideDoubleSpace = (e) => {
    const pawnFourStartingPosition = `${pawnAssignmentObject.computerSide.pawnFour.startingPosition}`;
    const pawnFourDoubleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const pawnFourDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const fourthComputerSideDoubleSpace = e.target.id;
    switch (fourthComputerSideDoubleSpace) {
      case getCellIds[25]:
        if (
          mappedCellIds[25].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[3] === `${pawnFourDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${pawnFourStartingPosition}`;
        }
        break;
      case getCellIds[27]:
        if (currentPawn === `${pawnFourStartingPosition}`) {
          mappedCellIds[25].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[27].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[3] = `${pawnFourDoubleSpaceComplete}`;
        }
        break;
    }
  };

  const handleFifthComputerSideDoubleSpace = (e) => {
    const pawnFiveStartingPosition = `${pawnAssignmentObject.computerSide.pawnFive.startingPosition}`;
    const pawnFiveDoubleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const pawnFiveDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const fifthComputerSideDoubleSpace = e.target.id;
    switch (fifthComputerSideDoubleSpace) {
      case getCellIds[33]:
        if (
          mappedCellIds[33].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[4] === `${pawnFiveDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${pawnFiveStartingPosition}`;
        }
        break;
      case getCellIds[35]:
        if (currentPawn === `${pawnFiveStartingPosition}`) {
          mappedCellIds[33].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[35].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[4] = `${pawnFiveDoubleSpaceComplete}`;
        }
        break;
    }
  };

  const handleSixthComputerSideDoubleSpace = (e) => {
    const pawnSixStartingPosition = `${pawnAssignmentObject.computerSide.pawnSix.startingPosition}`;
    const pawnSixDoubleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const pawnSixDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const sixthComputerSideDoubleSpace = e.target.id;
    switch (sixthComputerSideDoubleSpace) {
      case getCellIds[41]:
        if (
          mappedCellIds[41].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[5] === `${pawnSixDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${pawnSixStartingPosition}`;
        }
        break;
      case getCellIds[43]:
        if (currentPawn === `${pawnSixStartingPosition}`) {
          mappedCellIds[41].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[43].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[5] = `${pawnSixDoubleSpaceComplete}`;
        }
        break;
    }
  };

  const handleSeventhComputerSideDoubleSpace = (e) => {
    const pawnSevenStartingPosition = `${pawnAssignmentObject.computerSide.pawnSeven.startingPosition}`;
    const pawnSevenDoubleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const pawnSevenDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const seventhComputerSideDoubleSpace = e.target.id;
    switch (seventhComputerSideDoubleSpace) {
      case getCellIds[49]:
        if (
          mappedCellIds[49].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[6] === `${pawnSevenDoubleSpaceNotComplete}`
        ) {
          currentPawn = `${pawnSevenStartingPosition}`;
        }
        break;
      case getCellIds[51]:
        if (currentPawn === `${pawnSevenStartingPosition}`) {
          mappedCellIds[49].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[51].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[6] = `${pawnSevenDoubleSpaceComplete}`;
        }
        break;
    }
  };

  const handleEighthComputerSideDoubleSpace = (e) => {
    const pawnEightStartingPosition = `${pawnAssignmentObject.computerSide.pawnEight.startingPosition}`;
    const pawnEightDoubleSpaceNotComplete = `${pawnAssignmentObject.computerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const pawnEightDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const eighthComputerSideDoubleSpace = e.target.id;
    switch (eighthComputerSideDoubleSpace) {
      case getCellIds[57]:
        if (
          mappedCellIds[57].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[7] === `${pawnEightDoubleSpaceNotComplete}`
        ) {
          console.log("hi");
          currentPawn = `${pawnEightStartingPosition}`;
        }
        break;
      case getCellIds[59]:
        if (currentPawn === `${pawnEightStartingPosition}`) {
          mappedCellIds[57].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[59].textContent = `${watchPieceName}`;
          doubleSpacePawnMoveArray[7] = `${pawnEightDoubleSpaceComplete}`;
        }
        break;
    }
  }; 
  return {
    handleFirstComputerSideDoubleSpaceClicks,
    handleSecondComputerSideDoubleSpaceClicks,
    handleThirdComputerSideDoubleSpaceClicks,
    handleFourthComputerSideDoubleSpaceClicks,
    handleFifthComputerSideDoubleSpaceClicks,
    handleSixthComputerSideDoubleSpaceClicks,
    handleSeventhComputerSideDoubleSpaceClicks,
    handleEighthComputerSideDoubleSpaceClicks
  };
};

export default ComputerDoubleSpace;
