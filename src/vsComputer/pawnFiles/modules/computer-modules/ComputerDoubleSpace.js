import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { firstMoveStatusArray } from "../../objects/pawnArrays.js";

const ComputerDoubleSpace = () => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  //current pawn watches for the current pawn based on its starting position
  let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;
  const watchPieceName = `${pawnAssignmentObject.pieceName}`;
  const watchForEmptyCellAfterDoubleSpace = `${trackGameStateObject.emptyCell}`;

  const handleFirstComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleFirstComputerSideDoubleSpace);

    return { handleFirstComputerSideDoubleSpaceClicks };
  };

  const handleFirstComputerSideDoubleSpace = (e) => {
    const pawnOneStartingPosition = `${pawnAssignmentObject.computerSide.pawnOne.startingPosition}`;
    const pawnOneFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnOne.watchForFirstMove.firstMoveNotComplete}`
    const pawnOneFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnOne.watchForFirstMove.firstMoveComplete}`;
    const firstComputerSideDoubleSpace = e.target.id;

    switch (firstComputerSideDoubleSpace) {
      case getCellIds[1]:
        if (
          mappedCellIds[1].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[0] === `${pawnOneFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnOneStartingPosition}`;
        }
        break;
      case getCellIds[3]:
        if (currentPawn === pawnOneStartingPosition) {
          mappedCellIds[1].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[3].textContent = `${watchPieceName}`;
          firstMoveStatusArray[0] = `${pawnOneFirstMoveComplete}`
        }
    }
  };

  const handleSecondComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleSecondComputerSideDoubleSpace
    );

    return { handleSecondComputerSideDoubleSpaceClicks };
  };

  const handleSecondComputerSideDoubleSpace = (e) => {
    const pawnTwoStartingPosition = `${pawnAssignmentObject.computerSide.pawnTwo.startingPosition}`;
    const pawnTwoFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnTwo.watchForFirstMove.firstMoveNotComplete}`
    const pawnTwoFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnTwo.watchForFirstMove.firstMoveComplete}`;
    const secondComputerSideDoubleSpace = e.target.id;

    switch (secondComputerSideDoubleSpace) {
      case getCellIds[9]:
        if (
          mappedCellIds[9].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[1] === `${pawnTwoFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnTwoStartingPosition}`;
        }
        break;
      case getCellIds[11]:
        if (currentPawn === `${pawnTwoStartingPosition}`) {
          mappedCellIds[9].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[11].textContent = `${watchPieceName}`;
          firstMoveStatusArray[1] = `${pawnTwoFirstMoveComplete}`;
        }
        break;
    }
  };

  const handleThirdComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleThirdComputerSideDoubleSpace);

    return { handleThirdComputerSideDoubleSpaceClicks };
  };

  const handleThirdComputerSideDoubleSpace = (e) => {
    const pawnThreeStartingPosition = `${pawnAssignmentObject.computerSide.pawnThree.startingPosition}`;
    const pawnThreeFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnThree.watchForFirstMove.firstMoveNotComplete}`;
    const pawnThreeFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnThree.watchForFirstMove.firstMoveComplete}`;
    const thirdComputerSideDoubleSpace = e.target.id;
    switch (thirdComputerSideDoubleSpace) {
      case getCellIds[17]:
        if (
          mappedCellIds[17].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[2] === `${pawnThreeFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnThreeStartingPosition}`;
        }
        break;
      case getCellIds[19]:
        if (currentPawn === `${pawnThreeStartingPosition}`) {
          mappedCellIds[17].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[19].textContent = `${watchPieceName}`;
          firstMoveStatusArray[2] = `${pawnThreeFirstMoveComplete}`
        }
        break;
    }
  };

  const handleFourthComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleFourthComputerSideDoubleSpace
    );

    return { handleFourthComputerSideDoubleSpaceClicks };
  };

  const handleFourthComputerSideDoubleSpace = (e) => {
    const pawnFourStartingPosition = `${pawnAssignmentObject.computerSide.pawnFour.startingPosition}`;
    const pawnFourFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnFour.watchForFirstMove.firstMoveNotComplete}`;
    const pawnFourFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnFour.watchForFirstMove.firstMoveComplete}`;
    const fourthComputerSideDoubleSpace = e.target.id;
    switch (fourthComputerSideDoubleSpace) {
      case getCellIds[25]:
        if (
          mappedCellIds[25].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[3] === `${pawnFourFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnFourStartingPosition}`;
        }
        break;
      case getCellIds[27]:
        if (currentPawn === `${pawnFourStartingPosition}`) {
          mappedCellIds[25].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[27].textContent = `${watchPieceName}`;
          firstMoveStatusArray[3] = `${pawnFourFirstMoveComplete}`;
        }
        break;
    }
  };

  const handleFifthComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleFifthComputerSideDoubleSpace);

    return { handleFifthComputerSideDoubleSpaceClicks };
  };

  const handleFifthComputerSideDoubleSpace = (e) => {
    const pawnFiveStartingPosition = `${pawnAssignmentObject.computerSide.pawnFive.startingPosition}`;
    const pawnFiveFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnFive.watchForFirstMove.firstMoveNotComplete}`;
    const pawnFiveFirstMoveComplete  = `${pawnAssignmentObject.computerSide.pawnFive.watchForFirstMove.firstMoveComplete}`;
    const fifthComputerSideDoubleSpace = e.target.id;
    switch (fifthComputerSideDoubleSpace) {
      case getCellIds[33]:
        if (
          mappedCellIds[33].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[4] === `${pawnFiveFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnFiveStartingPosition}`;
        }
        break;
      case getCellIds[35]:
        if (currentPawn === `${pawnFiveStartingPosition}`) {
          mappedCellIds[33].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[35].textContent = `${watchPieceName}`;
          firstMoveStatusArray[4] = `${pawnFiveFirstMoveComplete}`
        }
        break;
    }
  };

  const handleSixthComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleSixthComputerSideDoubleSpace);

    return { handleSixthComputerSideDoubleSpaceClicks };
  };

  const handleSixthComputerSideDoubleSpace = (e) => {
    const pawnSixStartingPosition = `${pawnAssignmentObject.computerSide.pawnSix.startingPosition}`;
    const pawnSixFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveNotComplete}`;
    const pawnSixFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const sixthComputerSideDoubleSpace = e.target.id;
    switch (sixthComputerSideDoubleSpace) {
      case getCellIds[41]:
        if (
          mappedCellIds[41].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[5] === `${pawnSixFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnSixStartingPosition}`;
        }
        break;
      case getCellIds[43]:
        if (currentPawn === `${pawnSixStartingPosition}`) {
          mappedCellIds[41].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[43].textContent = `${watchPieceName}`;
          firstMoveStatusArray[5] = `${pawnSixFirstMoveComplete}`;
        }
        break;
    }
  };

  const handleSeventhComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleSeventhComputerSideDoubleSpace
    );

    return { handleSeventhComputerSideDoubleSpaceClicks };
  };

  const handleSeventhComputerSideDoubleSpace = (e) => {
    const pawnSevenStartingPosition = `${pawnAssignmentObject.computerSide.pawnSeven.startingPosition}`;
    const pawnSevenFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnSeven.watchForFirstMove.firstMoveNotComplete}`;
    const pawnSevenFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnSeven.watchForFirstMove.firstMoveComplete}`;
    const seventhComputerSideDoubleSpace = e.target.id;
    switch (seventhComputerSideDoubleSpace) {
      case getCellIds[49]:
        if (
          mappedCellIds[49].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[6] === `${pawnSevenFirstMoveNotComplete}`
        ) {
          currentPawn = `${pawnSevenStartingPosition}`;
        }
        break;
      case getCellIds[51]:
        if (currentPawn === `${pawnSevenStartingPosition}`) {
          mappedCellIds[49].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[51].textContent = `${watchPieceName}`;
          firstMoveStatusArray[6] = `${pawnSevenFirstMoveComplete}`
        }
        break;
    }
  };

  const handleEighthComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener(
      "click",
      handleEighthComputerSideDoubleSpace
    );

    return { handleEighthComputerSideDoubleSpaceClicks };
  };

  const handleEighthComputerSideDoubleSpace = (e) => {
    const pawnEightStartingPosition = `${pawnAssignmentObject.computerSide.pawnEight.startingPosition}`;
    const pawnEightFirstMoveNotComplete = `${pawnAssignmentObject.computerSide.pawnEight.watchForFirstMove.firstMoveNotComplete}`;
    const pawnEightFirstMoveComplete = `${pawnAssignmentObject.computerSide.pawnEight.watchForFirstMove.firstMoveComplete}`;
    const eighthComputerSideDoubleSpace = e.target.id;
    switch (eighthComputerSideDoubleSpace) {
      case getCellIds[57]:
        if (
          mappedCellIds[57].textContent === `${watchPieceName}` &&
          firstMoveStatusArray[7] === `${pawnEightFirstMoveNotComplete}`
        ) {
          console.log("hi");
          currentPawn = `${pawnEightStartingPosition}`;
        }
        break;
      case getCellIds[59]:
        if (currentPawn === `${pawnEightStartingPosition}`) {
          mappedCellIds[57].textContent = `${watchForEmptyCellAfterDoubleSpace}`;
          mappedCellIds[59].textContent = `${watchPieceName}`;
          firstMoveStatusArray[7] = `${pawnEightFirstMoveComplete}`
        }
        break;
    }
  };

  return {
    //double spacing
    handleFirstComputerSideDoubleSpaceClicks,
    handleSecondComputerSideDoubleSpaceClicks,
    handleThirdComputerSideDoubleSpaceClicks,
    handleFourthComputerSideDoubleSpaceClicks,
    handleFifthComputerSideDoubleSpaceClicks,
    handleSixthComputerSideDoubleSpaceClicks,
    handleSeventhComputerSideDoubleSpaceClicks,
    handleEighthComputerSideDoubleSpaceClicks,
  };
};

export default ComputerDoubleSpace;
