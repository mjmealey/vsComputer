import { getCellIds } from "../ChessPieceAssignments";
import { pawnAssignmentObject } from "../pawnObjects";
import { trackGameStateObject } from "../gameStateObjects";
const DoubleSpace = () => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

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

  const handleFirstComputerSideDoubleSpace = (e) => {
    const firstComputerSideDoubleSpace = e.target.id;
    switch (firstComputerSideDoubleSpace) {
      case getCellIds[1]:
        if (
          mappedCellIds[1].textContent === `${pawnAssignmentObject.pieceName}`
        ) {
          console.log("hi");
          currentPawn = `${pawnAssignmentObject.computerSide.pawnOne.startingPosition}`;
        }
        if (
          doubleSpacePawnMoveArray[0] ===
          `${pawnAssignmentObject.computerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          firstPawnMovesArray[0] ===
            `${pawnAssignmentObject.computerSide.pawnOne.firstMoveNotComplete}`;
        }
        break;
      case getCellIds[3]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnOne.startingPosition}`
        ) {
          mappedCellIds[1].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[3].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[0] = `${pawnAssignmentObject.computerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
    }
  };

  const handleSecondComputerSideDoubleSpace = (e) => {
    const secondComputerSideDoubleSpace = e.target.id;
    switch (secondComputerSideDoubleSpace) {
      case getCellIds[9]:
        if (
          mappedCellIds[9].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[1] ===
            `${pawnAssignmentObject.computerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          currentPawn = `${pawnAssignmentObject.computerSide.pawnTwo.startingPosition}`;
        }
        break;
      case getCellIds[11]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnTwo.startingPosition}`
        ) {
          mappedCellIds[9].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[11].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[1] = `${pawnAssignmentObject.computerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
    }
  };

  const handleThirdComputerSideDoubleSpace = (e) => {
    const thirdComputerSideDoubleSpace = e.target.id;
    switch (thirdComputerSideDoubleSpace) {
      case getCellIds[17]:
        if (
          mappedCellIds[17].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[2] ===
            `${pawnAssignmentObject.computerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          currentPawn = `${pawnAssignmentObject.computerSide.pawnThree.startingPosition}`;
        }
        break;
      case getCellIds[19]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnThree.startingPosition}`
        ) {
          mappedCellIds[17].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[19].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[2] = `${pawnAssignmentObject.computerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
    }
  };

  const handleFourthComputerSideDoubleSpace = (e) => {
    const fourthComputerSideDoubleSpace = e.target.id;
    switch (fourthComputerSideDoubleSpace) {
      case getCellIds[25]:
        if (
          mappedCellIds[25].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[3] ===
            `${pawnAssignmentObject.computerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          currentPawn = `${pawnAssignmentObject.computerSide.pawnFour.startingPosition}`;
        }
        break;
      case getCellIds[27]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnFour.startingPosition}`
        ) {
          mappedCellIds[25].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[27].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[3] = `${pawnAssignmentObject.computerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
    }
  };

  const handleFifthComputerSideDoubleSpace = (e) => {
    const fifthComputerSideDoubleSpace = e.target.id;
    switch (fifthComputerSideDoubleSpace) {
      case getCellIds[33]:
        if (
          mappedCellIds[33].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[4] ===
            `${pawnAssignmentObject.computerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          currentPawn = `${pawnAssignmentObject.computerSide.pawnFive.startingPosition}`;
        }
        break;
      case getCellIds[35]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnFive.startingPosition}`
        ) {
          mappedCellIds[33].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[35].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[4] = `${pawnAssignmentObject.computerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
    }
  };

  const handleSixthComputerSideDoubleSpace = (e) => {
    const sixthComputerSideDoubleSpace = e.target.id;
    switch (sixthComputerSideDoubleSpace) {
      case getCellIds[41]:
        if (
          mappedCellIds[41].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[5] ===
            `${pawnAssignmentObject.computerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          currentPawn = `${pawnAssignmentObject.computerSide.pawnSix.startingPosition}`;
        }
        break;
      case getCellIds[43]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnSix.startingPosition}`
        ) {
          mappedCellIds[41].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[43].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[5] = `${pawnAssignmentObject.computerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
    }
  };

  const handleSeventhComputerSideDoubleSpace = (e) => {
    const seventhComputerSideDoubleSpace = e.target.id;
    switch (seventhComputerSideDoubleSpace) {
      case getCellIds[49]:
        if (
          mappedCellIds[49].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[6] ===
            `${pawnAssignmentObject.computerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          currentPawn = `${pawnAssignmentObject.computerSide.pawnSeven.startingPosition}`;
        }
        break;
      case getCellIds[51]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnSeven.startingPosition}`
        ) {
          mappedCellIds[49].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[51].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[6] = `${pawnAssignmentObject.computerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
    }
  };

  const handleEighthComputerSideDoubleSpace = (e) => {
    const eighthComputerSideDoubleSpace = e.target.id;
    switch (eighthComputerSideDoubleSpace) {
      case getCellIds[57]:
        if (
          mappedCellIds[57].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[7] ===
            `${pawnAssignmentObject.computerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          console.log("hi");
          currentPawn = `${pawnAssignmentObject.computerSide.pawnEight.startingPosition}`;
        }
        break;
      case getCellIds[59]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnEight.startingPosition}`
        ) {
          mappedCellIds[57].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[59].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[7] = `${pawnAssignmentObject.computerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
    }
  };

  return {};
};

export default DoubleSpace;
