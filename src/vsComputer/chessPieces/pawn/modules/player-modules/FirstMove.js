import chessBoard from "../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { assignedPawnNumbers } from "../../objects/playerArrays/pawnArrays.js";
import { assignedPawnNames } from "../../objects/playerArrays/pawnArrays.js";

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
            handleStartSpaces(row, column);
            break;
        }
      }
    }
  };

  const handleStartSpaces = (row, column) => {
    let assignedNumber = trackGameStateObject.emptyPieceSelection;
    let assignedName = trackGameStateObject.emptyPieceSelection;
    let isFirstMoveReady = trackGameStateObject.emptyFirstMove;

    const isPawnFirstMoveReady = (name) => {
      return !trackFirstMoves.includes(name);
    };

    const handleStartSpaceClick = (index, pawnNumber, pawnName) => {
      assignedNumber = pawnNumber;
      assignedName = pawnName;
      isFirstMoveReady = isPawnFirstMoveReady(assignedName);

      if (mappedCellIds[index].textContent === pieceName && isFirstMoveReady) {
        currentPawn = assignedNumber;
      }
    };

    gridContainer.addEventListener("click", (e) => {
      const startSpaceClicks = e.target.id;
      //the pawns go from left to right
      switch (startSpaceClicks) {
        case getCellIds[6]:
          handleStartSpaceClick(
            6,
            assignedNumbers[0],
            assignedNames[0]
          );
          break;
        case getCellIds[14]:
          handleStartSpaceClick(
            14,
            assignedPawnNumbers[1],
            assignedPawnNames[1]
          );
          break;
        case getCellIds[22]:
          handleStartSpaceClick(
            22,
            assignedPawnNumbers[2],
            assignedPawnNames[2]
          );
          break;
        case getCellIds[30]:
          handleStartSpaceClick(
            30,
            assignedPawnNumbers[3],
            assignedPawnNames[3]
          );
          break;
        case getCellIds[38]:
          handleStartSpaceClick(
            38,
            assignedPawnNumbers[4],
            assignedPawnNames[4]
          );
          break;
        case getCellIds[46]:
          handleStartSpaceClick(
            46,
            assignedPawnNumbers[5],
            assignedPawnNames[5]
          );
          break;
        case getCellIds[54]:
          handleStartSpaceClick(
            54,
            assignedPawnNumbers[6],
            assignedPawnNames[6]
          );
          break;
        case getCellIds[62]:
          handleStartSpaceClick(
            62,
            assignedPawnNumbers[7],
            assignedPawnNames[7]
          );
      }
    });
    handleSingleSpacePositions(row, column);
  };

  const handleSingleSpacePositions = (row, column) => {
    const handleSingleSpaceClicks = (
      targetSingleSpaceRow,
      targetSingleSpaceColumn,
      singleSpaceNumber,
      isSingleSpaceMoveReady,
      singleSpaceMoveIsReady
    ) => {
      row = targetSingleSpaceRow;
      column = targetSingleSpaceColumn;
      currentPawn = singleSpaceNumber;
      const isFirstMoveReady = !trackFirstMoves.includes(
        isSingleSpaceMoveReady
      );

      if (isFirstMoveReady) {
        trackFirstMoves.push(singleSpaceMoveIsReady);
      }
    };

    gridContainer.addEventListener("click", (e) => {
      const singleSpaceClicks = e.target.id;

      switch (singleSpaceClicks) {
        case getCellIds[5]:
          if (currentPawn === 1) {
            handleSingleSpaceClicks(
              0,
              5,
              1,
              assignedPawnNames[0],
              assignedPawnNames[0]
            );
            console.log("P1 Pawn is located on row 0 column 5");
          }
          break;
        case getCellIds[13]:
          if (currentPawn === 2) {
            handleSingleSpaceClicks(
              1,
              13,
              2,
              assignedPawnNames[1],
              assignedPawnNames[1]
            );
            console.log("P2 Pawn is located on row 1 column 13");
          }
          break;
        case getCellIds[21]:
          if (currentPawn === 3) {
            handleSingleSpaceClicks(
              2,
              21,
              3,
              assignedPawnNames[2],
              assignedPawnNames[2]
            );
            console.log("P3 Pawn is located on row 2 column 21");
          }
          break;
        case getCellIds[29]:
          if (currentPawn === 4) {
            handleSingleSpaceClicks(
              3,
              29,
              4,
              assignedPawnNames[3],
              assignedPawnNames[3]
            );
            console.log("P4 Pawn is located on row 3 column 29");
          }
          break;
        case getCellIds[37]:
          if (currentPawn === 5) {
            handleSingleSpaceClicks(
              4,
              37,
              5,
              assignedPawnNames[4],
              assignedPawnNames[4]
            );
            console.log("P5 Pawn is located on row 4 column 37");
          }
          break;
        case getCellIds[45]:
          if (currentPawn === 6) {
            handleSingleSpaceClicks(
              5,
              45,
              6,
              assignedPawnNames[5],
              assignedPawnNames[5]
            );
            console.log("P6 Pawn is located on row 5 column 45");
          }
          break;
        case getCellIds[53]:
          if (currentPawn === 7) {
            handleSingleSpaceClicks(
              6,
              53,
              7,
              assignedPawnNames[6],
              assignedPawnNames[6]
            );
            console.log("P7 Pawn is located on row 6 column 53");
          }
          break;
        case getCellIds[61]:
          if (currentPawn === 8) {
            handleSingleSpaceClicks(
              7,
              61,
              8,
              assignedPawnNames[7],
              assignedPawnNames[7]
            );
            console.log("P8 Pawn is located on row 7 column 61");
          }
          break;
      }
    });
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
        currentPawn = trackGameStateObject.emptyPieceSelection;      }
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
    const targetRowForP5DoubleSpace =
      pawnAssignmentObject.playerSide.pawnFive.doubleSpacingPosition.row;
    const targetColumnForP5DoubleSpace =
      pawnAssignmentObject.playerSide.pawnFive.doubleSpacingPosition.col;
    const targetSpaceForP5DoubleSpace = mappedCellIds[36];
    targetSpaceForP5DoubleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP5) {
        row = targetRowForP5DoubleSpace;
        column = targetColumnForP5DoubleSpace;
      }

      if (
        row === targetRowForP5DoubleSpace &&
        column === targetColumnForP5DoubleSpace
      ) {
        trackFirstMoves.push(fifthPawn);
      }
    });
    handleP5DoubleSpaceDisplay(fifthPawn);
  };

  const handleP5DoubleSpaceDisplay = (fifthPawn) => {
    const targetSpaceForP5DoubleSpaceDisplay = mappedCellIds[36];

    targetSpaceForP5DoubleSpaceDisplay.addEventListener("click", () => {
      const isP5DoubleSpaceReady = trackFirstMoves.includes(fifthPawn);

      if (isP5DoubleSpaceReady) {
        mappedCellIds[38].textContent = emptyCellAfterFirstMove;
        mappedCellIds[36].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P5) => remove_P5 !== fifthPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP6SingleSpaceDisplay = (sixthPawn) => {
    const targetSpaceForP6SingleSpaceDisplay = mappedCellIds[45];

    targetSpaceForP6SingleSpaceDisplay.addEventListener("click", () => {
      const isP6SingleSpaceReady = trackFirstMoves.includes(sixthPawn);

      if (isP6SingleSpaceReady) {
        mappedCellIds[46].textContent = emptyCellAfterFirstMove;
        mappedCellIds[45].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P6) => remove_P6 !== sixthPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP6DoubleSpace = (row, column, assignedNumberForP6, sixthPawn) => {
    const targetRowForP6DoubleSpace =
      pawnAssignmentObject.playerSide.pawnSix.doubleSpacingPosition.row;
    const targetColumnForP6DoubleSpace =
      pawnAssignmentObject.playerSide.pawnSix.doubleSpacingPosition.col;
    const targetSpaceForP6DoubleSpace = mappedCellIds[44];

    targetSpaceForP6DoubleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP6) {
        row = targetRowForP6DoubleSpace;
        column = targetColumnForP6DoubleSpace;
      }
      if (
        row === targetRowForP6DoubleSpace &&
        column === targetColumnForP6DoubleSpace
      ) {
        trackFirstMoves.push(sixthPawn);
      }
    });
    handleP6DoubleSpaceDisplay(sixthPawn);
  };

  const handleP6DoubleSpaceDisplay = (sixthPawn) => {
    const targetSpaceForP6DoubleSpaceDisplay = mappedCellIds[44];

    targetSpaceForP6DoubleSpaceDisplay.addEventListener("click", () => {
      const isP6DoubleSpaceReady = trackFirstMoves.includes(sixthPawn);
      if (isP6DoubleSpaceReady) {
        mappedCellIds[46].textContent = emptyCellAfterFirstMove;
        mappedCellIds[44].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P6) => remove_P6 !== sixthPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

 
  const handleP7SingleSpaceDisplay = (seventhPawn) => {
    const targetSpaceForP7SingleSpaceDisplay = mappedCellIds[53];

    targetSpaceForP7SingleSpaceDisplay.addEventListener("click", () => {
      const isP7SingleSpaceReady = trackFirstMoves.includes(seventhPawn);

      if (isP7SingleSpaceReady) {
        mappedCellIds[54].textContent = emptyCellAfterFirstMove;
        mappedCellIds[53].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P7) => remove_P7 !== seventhPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP7DoubleSpace = (
    row,
    column,
    seventhPawn,
    assignedNumbrForP7
  ) => {
    const targetRowForP7DoubleSpace =
      pawnAssignmentObject.playerSide.pawnSeven.singleSpacingAtStartPosition
        .row;
    const targetColumnForP7DoubleSpace =
      pawnAssignmentObject.playerSide.pawnSeven.singleSpacingAtStartPosition
        .col;
    const targetSpaceForP7DoubleSpace = mappedCellIds[52];

    targetSpaceForP7DoubleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumbrForP7) {
        row = targetRowForP7DoubleSpace;
        column = targetColumnForP7DoubleSpace;

        if (
          row === targetRowForP7DoubleSpace &&
          column === targetColumnForP7DoubleSpace
        ) {
          trackFirstMoves.push(seventhPawn);
        }
      }
    });
    handleP7DoubleSpaceDisplay(seventhPawn);
  };

  const handleP7DoubleSpaceDisplay = (seventhPawn) => {
    const targetSpaceForP7DoubleSpaceDisplay = mappedCellIds[52];

    targetSpaceForP7DoubleSpaceDisplay.addEventListener("click", () => {
      const isP7DoubleSpaceReady = trackFirstMoves.includes(seventhPawn);

      if (isP7DoubleSpaceReady) {
        mappedCellIds[54].textContent = emptyCellAfterFirstMove;
        mappedCellIds[52].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P7) => remove_P7 !== seventhPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };



  const handleP8SingleSpaceDisplay = (eighthPawn) => {
    const targetSpaceForP8SingleSpaceDisplay = mappedCellIds[61];

    targetSpaceForP8SingleSpaceDisplay.addEventListener("click", () => {
      const isP8SingleSpaceReady = trackFirstMoves.includes(eighthPawn);

      if (isP8SingleSpaceReady) {
        mappedCellIds[62].textContent = emptyCellAfterFirstMove;
        mappedCellIds[61].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P8) => remove_P8 !== eighthPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP8DoubleSpace = (
    row,
    column,
    assignedNumberForP8,
    eighthPawn
  ) => {
    const targetRowForP8DoubleSpace =
      pawnAssignmentObject.playerSide.pawnEight.doubleSpacingPosition.row;
    const targetColumnForP8DoubleSpace =
      pawnAssignmentObject.playerSide.pawnEight.doubleSpacingPosition.col;
    const targetSpaceForP8DoubleSpace = mappedCellIds[60];

    targetSpaceForP8DoubleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP8) {
        row = targetRowForP8DoubleSpace;
        column = targetColumnForP8DoubleSpace;
      }

      if (
        row === targetRowForP8DoubleSpace &&
        column === targetColumnForP8DoubleSpace
      ) {
        trackFirstMoves.push(eighthPawn);
      }
    });
    handleP8DoubleSpaceDisplay(eighthPawn);
  };

  const handleP8DoubleSpaceDisplay = (eighthPawn) => {
    const targetSpaceForP8DoubleSpaceDisplay = mappedCellIds[60];

    targetSpaceForP8DoubleSpaceDisplay.addEventListener("click", () => {
      const isP8DoubleSpaceReady = trackFirstMoves.includes(eighthPawn);

      if (isP8DoubleSpaceReady) {
        mappedCellIds[62].textContent = emptyCellAfterFirstMove;
        mappedCellIds[60].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P8) => remove_P8 !== eighthPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  return {
    validateFirstMoves,
    handleP2SingleSpaceDisplay,
    handleP2DoubleSpaceDisplay,
  };
};

export default FirstMoves;
