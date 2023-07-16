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
            pawnAssignmentObject.playerSide.pawnOne.assignedNumber,
            pawnAssignmentObject.playerSide.pawnOne.assignedName
          );
          break;
        case getCellIds[14]:
          handleStartSpaceClick(
            14,
            pawnAssignmentObject.playerSide.pawnTwo.assignedNumber,
            pawnAssignmentObject.playerSide.pawnTwo.assignedName
          );
          break;
        case getCellIds[22]:
          handleStartSpaceClick(
            22,
            pawnAssignmentObject.playerSide.pawnThree.assignedNumber,
            pawnAssignmentObject.playerSide.pawnThree.assignedName
          );
          break;
        case getCellIds[30]:
          handleStartSpaceClick(
            30,
            pawnAssignmentObject.playerSide.pawnFour.assignedNumber,
            pawnAssignmentObject.playerSide.pawnFour.assignedName
          );
          break;
        case getCellIds[38]:
          handleStartSpaceClick(
            38,
            pawnAssignmentObject.playerSide.pawnFive.assignedNumber,
            pawnAssignmentObject.playerSide.pawnFive.assignedName
          );
          break;
        case getCellIds[46]:
          handleStartSpaceClick(
            46,
            pawnAssignmentObject.playerSide.pawnSix.assignedNumber,
            pawnAssignmentObject.playerSide.pawnSix.assignedName
          );
          break;
        case getCellIds[54]:
          handleStartSpaceClick(
            54,
            pawnAssignmentObject.playerSide.pawnSeven.assignedNumber,
            pawnAssignmentObject.playerSide.pawnSeven.assignedName
          );
          break;
        case getCellIds[62]:
          handleStartSpaceClick(
            62,
            pawnAssignmentObject.playerSide.pawnEight.assignedNumber,
            pawnAssignmentObject.playerSide.pawnEight.assignedName
          );
      }
    });
    handleSingleSpacePositions(row, column);
  };

  const handleSingleSpacePositions = (row, column) => {
    let targetSingleSpaceRow = trackGameStateObject.emptyRowSelection;
    let targetSingleSpaceColumn = trackGameStateObject.emptyColumnSelection;
    let pawnSingleSpaceNumber = trackGameStateObject.emptyPieceSelection

    gridContainer.addEventListener("click", (e) => {
      const singleSpaceClicks = e.target.id;

      switch (singleSpaceClicks) {
        case getCellIds[5]:
          targetSingleSpaceRow = pawnAssignmentObject.playerSide.pawnOne.singleSpacingAtStartPosition.row
          targetSingleSpaceColumn = pawnAssignmentObject.playerSide.pawnOne.singleSpacingAtStartPosition.col 
          pawnSingleSpaceNumber = pawnAssignmentObject.playerSide.pawnOne.assignedNumber

          if (currentPawn === pawnSingleSpaceNumber) {
            row = targetSingleSpaceRow
            column = targetSingleSpaceColumn  
          }
        case getCellIds[13]:
          targetSingleSpaceRow = pawnAssignmentObject.playerSide.pawnTwo.singleSpacingAtStartPosition.row
          targetSingleSpaceColumn = pawnAssignmentObject.playerSide.pawnTwo.singleSpacingAtStartPosition.col
          pawnSingleSpaceNumber = pawnAssignmentObject.playerSide.pawnTwo.assignedNumber

          if(currentPawn === pawnSingleSpaceNumber){
            row = targetSingleSpaceRow
            column = targetSingleSpaceColumn
          }
          break;
        case getCellIds[22]:
          targetSingleSpaceRow = pawnAssignmentObject.playerSide.pawnThree.singleSpacingAtStartPosition.row
          targetSingleSpaceColumn = pawnAssignmentObject.playerSide.pawnThree.singleSpacingAtStartPosition.col
          pawnSingleSpaceNumber = pawnAssignmentObject.playerSide.pawnThree.assignedNumber

          if(currentPawn === pawnSingleSpaceNumber){
            row = targetSingleSpaceRow 
            column = targetSingleSpaceColumn
          }
          break;
        case getCellIds[30]:
          targetSingleSpaceRow = pawnAssignmentObject.playerSide.pawnFour.singleSpacingAtStartPosition.row
          targetSingleSpaceColumn = pawnAssignmentObject.playerSide.pawnFour.singleSpacingAtStartPosition.col
          pawnSingleSpaceNumber = pawnAssignmentObject.playerSide.pawnFour.assignedNumber

          if(currentPawn === pawnSingleSpaceNumber){
            row = targetSingleSpaceRow
            column = targetSingleSpaceColumn
          }
          break;
        case getCellIds[38]:
          targetSingleSpaceRow = pawnAssignmentObject.playerSide.pawnFive.singleSpacingAtStartPosition.row
          targetSingleSpaceColumn = pawnAssignmentObject.playerSide.pawnFive.singleSpacingAtStartPosition.col
          pawnSingleSpaceNumber = pawnAssignmentObject.playerSide.pawnFive.assignedNumber
          
          if(currentPawn === pawnSingleSpaceNumber){
            row = targetSingleSpaceRow
            column = targetSingleSpaceColumn 
          }
          break;
        case getCellIds[46]:
          targetSingleSpaceRow = pawnAssignmentObject.playerSide.pawnSix.singleSpacingAtStartPosition.row
          targetSingleSpaceColumn = pawnAssignmentObject.playerSide.pawnFive.singleSpacingAtStartPosition.col
          pawnSingleSpaceNumber = pawnAssignmentObject.playerSide.pawnSix.assignedNumber

          if(currentPawn === pawnSingleSpaceNumber){
            row = targetSingleSpaceRow
            column = targetSingleSpaceColumn
          }
          break;
        case getCellIds[54]:
          targetSingleSpaceRow = pawnAssignmentObject.playerSide.pawnSeven.singleSpacingAtStartPosition.row
          targetSingleSpaceColumn = pawnAssignmentObject.playerSide.pawnSeven.singleSpacingAtStartPosition.col
          pawnSingleSpaceNumber = pawnAssignmentObject.playerSide.pawnSeven.assignedNumber

          if(currentPawn === pawnSingleSpaceNumber){
            row = targetSingleSpaceRow
            column = targetSingleSpaceColumn 
          }
          break;
        case getCellIds[62]:
          targetSingleSpaceRow = pawnAssignmentObject.playerSide.pawnEight.singleSpacingAtStartPosition.row
          targetSingleSpaceColumn = pawnAssignmentObject.playerSide.pawnEight.singleSpacingAtStartPosition.col
          pawnSingleSpaceNumber = pawnAssignmentObject.playerSide.pawnEight.assignedNumber

          if(currentPawn === pawnSingleSpaceNumber){
            row = targetSingleSpaceRow
            column = targetSingleSpaceColumn
          }
          break;
      }
    });
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
    handleP6DoubleSpace(row, column, assignedNumberForP6, sixthPawn);
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
    handleP6SingleSpaceDisplay(sixthPawn);
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

  const handleP7StartSpace = (row, column) => {
    const assignedNumberForP7 =
      pawnAssignmentObject.playerSide.pawnSeven.assignedNumber;
    const seventhPawn = pawnAssignmentObject.playerSide.pawnSeven.assignedName;
    const startSpaceForP7 = mappedCellIds[54];

    startSpaceForP7.addEventListener("click", () => {
      const isP7FirstMove = !trackFirstMoves.includes(seventhPawn);

      if (isP7FirstMove) {
        currentPawn = assignedNumberForP7;
      }
    });
    handleP7SingleSpace(row, column, seventhPawn, assignedNumberForP7);
    handleP7DoubleSpace(row, column, seventhPawn, assignedNumberForP7);
  };

  const handleP7SingleSpace = (
    row,
    column,
    seventhPawn,
    assignedNumbrForP7
  ) => {
    const targetRowForP7SingleSpace =
      pawnAssignmentObject.playerSide.pawnSeven.singleSpacingAtStartPosition
        .row;
    const targetColumnForP7SingleSpace =
      pawnAssignmentObject.playerSide.pawnSeven.singleSpacingAtStartPosition
        .col;
    const targetSpaceForP7SingleSpace = mappedCellIds[53];

    targetSpaceForP7SingleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumbrForP7) {
        row = targetRowForP7SingleSpace;
        column = targetColumnForP7SingleSpace;
      }

      if (
        row === targetRowForP7SingleSpace &&
        column === targetColumnForP7SingleSpace
      ) {
        trackFirstMoves.push(seventhPawn);
      }
    });
    handleP7SingleSpaceDisplay(seventhPawn);
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

  const handleP8StartSpace = (row, column) => {
    const assignedNumberForP8 =
      pawnAssignmentObject.playerSide.pawnEight.assignedNumber;
    const eighthPawn = pawnAssignmentObject.computerSide.pawnEight.assignedName;
    const startSpaceForP8 = mappedCellIds[62];

    startSpaceForP8.addEventListener("click", () => {
      const isP8FirstMoveReady = !trackFirstMoves.includes(eighthPawn);
      if (mappedCellIds[54].textContent && isP8FirstMoveReady) {
        currentPawn = assignedNumberForP8;
      }
    });
    handleP8SingleSpace(row, column, assignedNumberForP8, eighthPawn);
    handleP8DoubleSpace(row, column, assignedNumberForP8, eighthPawn);
  };

  const handleP8SingleSpace = (
    row,
    column,
    assignedNumberForP8,
    eighthPawn
  ) => {
    const targetRowForP8SingleSpace =
      pawnAssignmentObject.playerSide.pawnEight.singleSpacingAtStartPosition
        .row;
    const targetColumnForP8SingleSpace =
      pawnAssignmentObject.playerSide.pawnEight.singleSpacingAtStartPosition
        .col;
    const targetSpaceForP8SingleSpace = mappedCellIds[61];

    targetSpaceForP8SingleSpace.addEventListener("click", () => {
      if (currentPawn === assignedNumberForP8) {
        row = targetRowForP8SingleSpace;
        column = targetColumnForP8SingleSpace;

        if (
          row === targetRowForP8SingleSpace &&
          column === targetColumnForP8SingleSpace
        ) {
          trackFirstMoves.push(eighthPawn);
        }
      }
    });
    handleP8SingleSpaceDisplay(eighthPawn);
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
    handleP7StartSpace,
  };
};

export default FirstMoves;
