import chessBoard from "../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { playerAssignedNumbersArray } from "../../objects/pawnArrays.js";

const FirstMoves = () => {
  let trackFirstMoves = [];
  const pieceName = pawnAssignmentObject.pieceName;
  const emptyCellAfterFirstMove = trackGameStateObject.emptyCell;
  let currentPawn = trackGameStateObject.emptyPieceSelection;

  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const validateFirstMoves = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let column = 0; column < chessBoard[row].length; column++) {
        const firstMoveForEachPawn = chessBoard[row][column];

        switch (firstMoveForEachPawn) {
          case "P1":
            handleP1StartSpace(row, column);
            break;
          case "P2":
            handleP2StartSpace(row, column);
            break;
          case "P3":
            handleP3StartSpace(row, column);
            break;
          case "P4":
            handleP4StartSpace(row, column);
            break;
          case "P5":
            handleP5StartSpace(row, column);
            break;
          case "P6":
            handleP6StartSpace(row, column);
            break;
        }
      }
    }
  };
  //handles the situation where P1 is picked in the chessboard array
  const handleP1StartSpace = (row, column) => {
    const assignedNumberForP1 =
      pawnAssignmentObject.playerSide.pawnOne.assignedNumber;
    const startSpaceForP1 = mappedCellIds[6];
    const firstPawn = pawnAssignmentObject.playerSide.pawnOne.assignedName;
    startSpaceForP1.addEventListener("click", () => {
      const isP1FirstMove = !trackFirstMoves.includes(firstPawn);
      if (mappedCellIds[6].textContent === pieceName && isP1FirstMove) {
        currentPawn = assignedNumberForP1;
      }
    });
    handleP1SingleSpace(row, column, assignedNumberForP1, firstPawn);
    handleP1DoubleSpace(row, column, assignedNumberForP1, firstPawn);
  };

  const handleP1SingleSpace = (row, column, assignedNumberForP1, firstPawn) => {
    const targetRowForP1SingleSpace =
      pawnAssignmentObject.playerSide.pawnOne.singleSpacingAtStartPosition.row;
    const targetColumnForP1SingleSpace =
      pawnAssignmentObject.playerSide.pawnOne.singleSpacingAtStartPosition.col;
    const targetSpaceForP1SingleSpace = mappedCellIds[5];

    targetSpaceForP1SingleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP1) {
        row = targetRowForP1SingleSpace;
        column = targetColumnForP1SingleSpace;
      }
      if (
        row === targetRowForP1SingleSpace &&
        column === targetColumnForP1SingleSpace
      ) {
        trackFirstMoves.push(firstPawn);
      }
    });
    handleP1SingleSpaceDisplay(firstPawn);
  };

  const handleP1SingleSpaceDisplay = (firstPawn) => {
    const targetSpaceForP1SingleSpaceDisplay = mappedCellIds[5];
    targetSpaceForP1SingleSpaceDisplay.addEventListener("click", () => {
      const isP1SingleSpaceReady = trackFirstMoves.includes(firstPawn);
      if (isP1SingleSpaceReady) {
        mappedCellIds[6].textContent = emptyCellAfterFirstMove;
        mappedCellIds[5].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P1) => remove_P1 !== firstPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP1DoubleSpace = (row, column, assignedNumberForP1, firstPawn) => {
    const targetRowForP1DoubleSpace =
      pawnAssignmentObject.playerSide.pawnOne.doubleSpacingPosition.row;
    const targetColumnForP1DoubleSpace =
      pawnAssignmentObject.playerSide.pawnOne.doubleSpacingPosition.col;
    const targetSpaceForP1DoubleSpace = mappedCellIds[4];
    targetSpaceForP1DoubleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP1) {
        row = targetRowForP1DoubleSpace;
        column = targetColumnForP1DoubleSpace;
      }
      if (
        row === targetRowForP1DoubleSpace &&
        column === targetColumnForP1DoubleSpace
      ) {
        trackFirstMoves.push(firstPawn);
      }
    });

    handleP1DoubleSpaceDisplay(targetSpaceForP1DoubleSpace, firstPawn);
  };

  const handleP1DoubleSpaceDisplay = (
    targetSpaceForP1DoubleSpace,
    firstPawn
  ) => {
    targetSpaceForP1DoubleSpace.addEventListener("click", () => {
      const isP1DoubleSpaceReady = trackFirstMoves.includes(firstPawn);
      if (isP1DoubleSpaceReady) {
        mappedCellIds[6].textContent = emptyCellAfterFirstMove;
        mappedCellIds[4].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P1) => remove_P1 !== firstPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP2StartSpace = (row, column) => {
    const assignedNumberForP2 =
      pawnAssignmentObject.playerSide.pawnTwo.assignedNumber;
    const startSpaceForP2 = mappedCellIds[14];
    const secondPawn = pawnAssignmentObject.playerSide.pawnTwo.assignedName;
    startSpaceForP2.addEventListener("click", () => {
      const isP2FirstMove = !trackFirstMoves.includes(secondPawn);
      if (mappedCellIds[14].textContent === pieceName && isP2FirstMove) {
        currentPawn = assignedNumberForP2;
      }
    });
    handleP2SingleSpace(row, column, assignedNumberForP2, secondPawn);
    handleP2DoubleSpace(row, column, assignedNumberForP2, secondPawn);
  };

  const handleP2SingleSpace = (
    row,
    column,
    assignedNumberForP2,
    secondPawn
  ) => {
    const targetRowForP2SingleSpace =
      pawnAssignmentObject.playerSide.pawnTwo.singleSpacingAtStartPosition.row;
    const targetColumnForP2SingleSpace =
      pawnAssignmentObject.playerSide.pawnTwo.singleSpacingAtStartPosition.col;
    const targetSpaceForP2SingleSpace = mappedCellIds[13];
    targetSpaceForP2SingleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP2) {
        row = targetRowForP2SingleSpace;
        column = targetColumnForP2SingleSpace;
      }

      if (
        row === targetRowForP2SingleSpace &&
        column === targetColumnForP2SingleSpace
      ) {
        trackFirstMoves.push(secondPawn);
      }
    });
    handleP2SingleSpaceDisplay(secondPawn);
  };

  const handleP2SingleSpaceDisplay = (secondPawn) => {
    const targetSpaceForP2SingleSpaceDisplay = mappedCellIds[13];
    targetSpaceForP2SingleSpaceDisplay.addEventListener("click", () => {
      const isP2SingleSpaceReady = trackFirstMoves.includes(secondPawn);
      if (isP2SingleSpaceReady) {
        mappedCellIds[14].textContent = emptyCellAfterFirstMove;
        mappedCellIds[13].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P2) => remove_P2 !== secondPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP2DoubleSpace = (
    row,
    column,
    assignedNumberForP2,
    secondPawn
  ) => {
    const targetRowForP2DoubleSpace =
      pawnAssignmentObject.playerSide.pawnTwo.doubleSpacingPosition.row;
    const targetColumnForP2DoubleSpace =
      pawnAssignmentObject.playerSide.pawnTwo.doubleSpacingPosition.col;
    const targetSpaceForP2DoubleSpace = mappedCellIds[12];
    targetSpaceForP2DoubleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP2) {
        row = targetRowForP2DoubleSpace;
        column = targetColumnForP2DoubleSpace;
      }

      if (
        row === targetRowForP2DoubleSpace &&
        column === targetColumnForP2DoubleSpace
      ) {
        trackFirstMoves.push(secondPawn);
      }
    });
    handleP2DoubleSpaceDisplay(secondPawn);
  };

  const handleP2DoubleSpaceDisplay = (secondPawn) => {
    const targetSpaceForP2DoubleSpaceDisplay = mappedCellIds[12];

    targetSpaceForP2DoubleSpaceDisplay.addEventListener("click", () => {
      const isP2DoubleSpaceReady = trackFirstMoves.includes(secondPawn);
      if (isP2DoubleSpaceReady) {
        mappedCellIds[14].textContent = emptyCellAfterFirstMove;
        mappedCellIds[12].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P2) => remove_P2 !== secondPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP3StartSpace = (row, column) => {
    const assignedNumberForP3 =
      pawnAssignmentObject.playerSide.pawnThree.assignedNumber;
    const startSpaceForP3 = mappedCellIds[22];
    const thirdPawn = pawnAssignmentObject.playerSide.pawnThree.assignedName;
    startSpaceForP3.addEventListener("click", () => {
      const isP3FirstMove = !trackFirstMoves.includes(thirdPawn);
      if (mappedCellIds[22].textContent === pieceName && isP3FirstMove) {
        currentPawn = assignedNumberForP3;
      }
    });
    handleP3SingleSpace(row, column, assignedNumberForP3, thirdPawn);
    handleP3DoubleSpace(row, column, assignedNumberForP3, thirdPawn);
  };

  const handleP3SingleSpace = (row, column, assignedNumberForP3, thirdPawn) => {
    const targetRowForP3SingleSpace =
      pawnAssignmentObject.playerSide.pawnThree.singleSpacingAtStartPosition
        .row;
    const targetColumnForP3SingleSpace =
      pawnAssignmentObject.playerSide.pawnThree.singleSpacingAtStartPosition
        .col;
    const targetSpaceForP3SingleSpace = mappedCellIds[21];

    targetSpaceForP3SingleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP3) {
        row = targetRowForP3SingleSpace;
        column = targetColumnForP3SingleSpace;
      }

      if (
        row === targetRowForP3SingleSpace &&
        column === targetColumnForP3SingleSpace
      ) {
        trackFirstMoves.push(thirdPawn);
      }
    });
    handleP3SingleSpaceDisplay(thirdPawn);
  };

  const handleP3SingleSpaceDisplay = (thirdPawn) => {
    const targetSpaceForP3SingleSpaceDisplay = mappedCellIds[21];
    targetSpaceForP3SingleSpaceDisplay.addEventListener("click", () => {
      const isP3SingleSpaceReady = trackFirstMoves.includes(thirdPawn);
      if (isP3SingleSpaceReady) {
        mappedCellIds[22].textContent = emptyCellAfterFirstMove;
        mappedCellIds[21].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P3) => remove_P3 !== thirdPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP3DoubleSpace = (row, column, assignedNumberForP3, thirdPawn) => {
    const targetRowForP3DoubleSpace =
      pawnAssignmentObject.playerSide.pawnThree.doubleSpacingPosition.row;
    const targetColumnForP3DoubleSpace =
      pawnAssignmentObject.playerSide.pawnThree.doubleSpacingPosition.col;
    const targetSpaceForP3DoubleSpace = mappedCellIds[20];

    targetSpaceForP3DoubleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP3) {
        row = targetRowForP3DoubleSpace;
        column = targetColumnForP3DoubleSpace;
      }

      if (
        row === targetRowForP3DoubleSpace &&
        column === targetColumnForP3DoubleSpace
      ) {
        trackFirstMoves.push(thirdPawn);
      }
    });
    handleP3DoubleSpaceDisplay(thirdPawn);
  };

  const handleP3DoubleSpaceDisplay = (thirdPawn) => {
    const targetSpaceForP3DoubleSpaceDisplay = mappedCellIds[20];
    targetSpaceForP3DoubleSpaceDisplay.addEventListener("click", () => {
      const isP3DoubleSpaceReady = trackFirstMoves.includes(thirdPawn);
      if (isP3DoubleSpaceReady) {
        mappedCellIds[22].textContent = emptyCellAfterFirstMove;
        mappedCellIds[20].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P3) => remove_P3 !== thirdPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP4StartSpace = (row, column) => {
    const assignedNumberForP4 =
      pawnAssignmentObject.playerSide.pawnFour.assignedNumber;
    const fourthPawn = pawnAssignmentObject.playerSide.pawnFour.assignedName;
    const startSpaceForP4 = mappedCellIds[30];

    startSpaceForP4.addEventListener("click", () => {
      const isP3FirstMove = !trackFirstMoves.includes(fourthPawn);
      if (mappedCellIds[30].textContent === pieceName && isP3FirstMove) {
        currentPawn = assignedNumberForP4;
      }
    });
    handleP4SingleSpace(row, column, assignedNumberForP4, fourthPawn);
    handleP4DoubleSpace(row, column, assignedNumberForP4, fourthPawn);
  };

  const handleP4SingleSpace = (
    row,
    column,
    assignedNumberForP4,
    fourthPawn
  ) => {
    const targetRowForP4SingleSpace =
      pawnAssignmentObject.playerSide.pawnFour.singleSpacingAtStartPosition.row;
    const targetColumnForP4SingleSpace =
      pawnAssignmentObject.playerSide.pawnFour.singleSpacingAtStartPosition.col;
    const targetSpaceForP4SingleSpace = mappedCellIds[29];

    targetSpaceForP4SingleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP4) {
        row = targetRowForP4SingleSpace;
        column = targetColumnForP4SingleSpace;
      }

      if (
        row === targetRowForP4SingleSpace &&
        column === targetColumnForP4SingleSpace
      ) {
        trackFirstMoves.push(fourthPawn);
      }
    });
    handleP4SingleSpaceDisplay(fourthPawn);
  };

  const handleP4SingleSpaceDisplay = (fourthPawn) => {
    const targetSpaceForP4SingleSpaceDisplay = mappedCellIds[29];

    targetSpaceForP4SingleSpaceDisplay.addEventListener("click", () => {
      const isP4SingleSpaceReady = trackFirstMoves.includes(fourthPawn);

      if (isP4SingleSpaceReady) {
        mappedCellIds[30].textContent = emptyCellAfterFirstMove;
        mappedCellIds[29].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P4) => remove_P4 !== fourthPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP4DoubleSpace = (
    row,
    column,
    assignedNumberForP4,
    fourthPawn
  ) => {
    const targetRowForP4DoubleSpace =
      pawnAssignmentObject.playerSide.pawnFour.doubleSpacingPosition.row;
    const targetColumnForP4DoubleSpace =
      pawnAssignmentObject.playerSide.pawnFour.doubleSpacingPosition.col;
    const targetSpaceForP4DoubleSpace = mappedCellIds[28];

    targetSpaceForP4DoubleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP4) {
        row = targetRowForP4DoubleSpace;
        column = targetColumnForP4DoubleSpace;
      }

      if (
        row === targetRowForP4DoubleSpace &&
        column === targetColumnForP4DoubleSpace
      ) {
        trackFirstMoves.push(fourthPawn);
      }
    });
    handleP4DoubleSpaceDisplay(fourthPawn);
  };

  const handleP4DoubleSpaceDisplay = (fourthPawn) => {
    const targetSpaceForP4DoubleSpaceDisplay = mappedCellIds[28];

    targetSpaceForP4DoubleSpaceDisplay.addEventListener("click", () => {
      const isP4DoubleSpaceReady = trackFirstMoves.includes(fourthPawn);

      if (isP4DoubleSpaceReady) {
        mappedCellIds[30].textContent = emptyCellAfterFirstMove;
        mappedCellIds[28].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P4) => remove_P4 !== fourthPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP5StartSpace = (row, column) => {
    const assignedNumberForP5 =
      pawnAssignmentObject.playerSide.pawnFive.assignedNumber;
    const fifthPawn = pawnAssignmentObject.playerSide.pawnFive.assignedName;
    const startSpaceForP5 = mappedCellIds[38];

    startSpaceForP5.addEventListener("click", () => {
      const isP5FirstMove = !trackFirstMoves.includes(fifthPawn);
      if (mappedCellIds[38].textContent === pieceName && isP5FirstMove) {
        currentPawn = assignedNumberForP5;
      }
    });
    handleP5SingleSpace(row, column, assignedNumberForP5, fifthPawn);
    handleP5DoubleSpace(row, column, assignedNumberForP5, fifthPawn);
  };

  const handleP5SingleSpace = (row, column, assignedNumberForP5, fifthPawn) => {
    const targetRowForP5SingleSpace =
      pawnAssignmentObject.playerSide.pawnFive.singleSpacingAtStartPosition.row;
    const targetColumnForP5SingleSpace =
      pawnAssignmentObject.playerSide.pawnFive.singleSpacingAtStartPosition.col;
    const targetSpaceForP5SingleSpace = mappedCellIds[37];
    targetSpaceForP5SingleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP5) {
        row = targetRowForP5SingleSpace;
        column = targetColumnForP5SingleSpace;
      }

      if (
        row === targetRowForP5SingleSpace &&
        column === targetColumnForP5SingleSpace
      ) {
        trackFirstMoves.push(fifthPawn);
      }
    });
    handleP5SingleSpaceDisplay(fifthPawn);
  };

  const handleP5SingleSpaceDisplay = (fifthPawn) => {
    const targetSpaceForP5SingleSpaceDisplay = mappedCellIds[37];

    targetSpaceForP5SingleSpaceDisplay.addEventListener("click", () => {
      const isP5SingleSpaceReady = trackFirstMoves.includes(fifthPawn);
      if (isP5SingleSpaceReady) {
        mappedCellIds[38].textContent = emptyCellAfterFirstMove;
        mappedCellIds[37].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P5) => remove_P5 !== fifthPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP5DoubleSpace = (row, column, assignedNumberForP5, fifthPawn) => {
    const targetRowForP5DoubleSpace = pawnAssignmentObject.playerSide.pawnFive.doubleSpacingPosition.row
    const targetColumnForP5DoubleSpace = pawnAssignmentObject.playerSide.pawnFive.doubleSpacingPosition.col 
    const targetSpaceForP5DoubleSpace = mappedCellIds[36]
    targetSpaceForP5DoubleSpace.addEventListener("click", () => {
      if(currentPawn === assignedNumberForP5){
        row = targetRowForP5DoubleSpace
        column = targetColumnForP5DoubleSpace
      }

      if(row === targetRowForP5DoubleSpace && column === targetColumnForP5DoubleSpace){
        trackFirstMoves.push(fifthPawn)
      }
    })
    handleP5DoubleSpaceDisplay(fifthPawn)
  }

  const handleP5DoubleSpaceDisplay = (fifthPawn) => {
    const targetSpaceForP5DoubleSpaceDisplay = mappedCellIds[36]

    targetSpaceForP5DoubleSpaceDisplay.addEventListener("click", () => {
      const isP5DoubleSpaceReady = trackFirstMoves.includes(fifthPawn)

      if(isP5DoubleSpaceReady){
        mappedCellIds[38].textContent = emptyCellAfterFirstMove
        mappedCellIds[36].textContent = pieceName
        trackFirstMoves = trackFirstMoves.filter((remove_P5) => remove_P5 !== fifthPawn)
        currentPawn = trackGameStateObject.emptyPieceSelection
      }
    })
  }

  const handleP6StartSpace = (row, column) => {
    const assignedNumberForP6 =
      pawnAssignmentObject.playerSide.pawnSix.assignedNumber;
    const sixthPawn = pawnAssignmentObject.playerSide.pawnSix.assignedName;
    const startSpaceForP6 = mappedCellIds[46];

    startSpaceForP6.addEventListener("click", () => {
      const isP6FirstMove = !trackFirstMoves.includes(sixthPawn);
      if (mappedCellIds[46].textContent === pieceName && isP6FirstMove) {
        currentPawn = assignedNumberForP6;
      }
    });
    handleP6SingleSpace(row, column, assignedNumberForP6, sixthPawn);
    handleP6DoubleSpace(row, column, assignedNumberForP6, sixthPawn)
  };

  const handleP6SingleSpace = (row, column, assignedNumberForP6, sixthPawn) => {
    const targetRowForP6SingleSpace =
      pawnAssignmentObject.playerSide.pawnSix.singleSpacingAtStartPosition.row;
    const targetColumnForP6SingleSpace =
      pawnAssignmentObject.playerSide.pawnSix.singleSpacingAtStartPosition.col;
    const targetSpaceForP6SingleSpace = mappedCellIds[45];

    targetSpaceForP6SingleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP6) {
        row = targetRowForP6SingleSpace;
        column = targetColumnForP6SingleSpace;
      }

      if (
        row === targetRowForP6SingleSpace &&
        column === targetColumnForP6SingleSpace
      ) {
        trackFirstMoves.push(sixthPawn);
      }
    });
    handleP6SingleSpaceDisplay(sixthPawn)
  };

  const handleP6SingleSpaceDisplay = (sixthPawn) => {
    const targetSpaceForP6SingleSpaceDisplay = mappedCellIds[45]

    targetSpaceForP6SingleSpaceDisplay.addEventListener("click", () => {
      const isP6SingleSpaceReady = trackFirstMoves.includes(sixthPawn)

      if(isP6SingleSpaceReady){
        mappedCellIds[46].textContent = emptyCellAfterFirstMove
        mappedCellIds[45].textContent = pieceName
        trackFirstMoves = trackFirstMoves.filter((remove_P6) => remove_P6 !== sixthPawn)
        currentPawn = trackGameStateObject.emptyPieceSelection
      }
    })
  }

  const handleP6DoubleSpace = (row,column, assignedNumberForP6, sixthPawn) => {
    const targetRowForP6DoubleSpace = pawnAssignmentObject.playerSide.pawnSix.doubleSpacingPosition.row
    const targetColumnForP6DoubleSpace = pawnAssignmentObject.playerSide.pawnSix.doubleSpacingPosition.col
    const targetSpaceForP6DoubleSpace = mappedCellIds[44]

    targetSpaceForP6DoubleSpace.addEventListener("click", () => {
      if(currentPawn === assignedNumberForP6){
        row = targetRowForP6DoubleSpace
        column = targetColumnForP6DoubleSpace        
      }
      if(row === targetRowForP6DoubleSpace && column === targetColumnForP6DoubleSpace){
        trackFirstMoves.push(sixthPawn)
      }
    })
    handleP6DoubleSpaceDisplay(sixthPawn)
  }

  const handleP6DoubleSpaceDisplay = (sixthPawn) => {
     const targetSpaceForP6DoubleSpaceDisplay = mappedCellIds[44]
     
     targetSpaceForP6DoubleSpaceDisplay.addEventListener("click", () => {
      const isP6DoubleSpaceReady = trackFirstMoves.includes(sixthPawn)
      if(isP6DoubleSpaceReady){
      mappedCellIds[46].textContent = emptyCellAfterFirstMove 
      mappedCellIds[44].textContent = pieceName
      trackFirstMoves = trackFirstMoves.filter((remove_P6) => remove_P6 !== sixthPawn)
      currentPawn = trackGameStateObject.emptyPieceSelection
     }})
  }
  return {
    validateFirstMoves,
    handleP2SingleSpaceDisplay,
    handleP2DoubleSpaceDisplay,
  };
};

export default FirstMoves;
