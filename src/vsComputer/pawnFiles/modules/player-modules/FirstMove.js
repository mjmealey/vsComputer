import chessBoard from "../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { playerAssignedNumbersArray } from "../../objects/pawnArrays.js";

const FirstMoves = () => {
  let trackFirstMoves = [];
  const pieceName = `${pawnAssignmentObject.pieceName}`;
  const emptyCellAfterFirstMove = `${trackGameStateObject.emptyCell}`;
  let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;

  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const validateFirstMoves = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let column = 0; column < chessBoard[row].length; column++) {
        const firstMoveForEachPawn = chessBoard[row][column];
        handleP1StartSpace(row, column, firstMoveForEachPawn);

        switch (firstMoveForEachPawn) {
          case "P1":
            handleP1StartSpace(row, column);
            break;
          case "P2":
            handleP2StartSpace(row, column);
            break;
          case "P3":
            handleP3StartSpace(row, column);
        }
      }
    }
  };
  //handles the situation where P1 is picked in the chessboard array
  const handleP1StartSpace = (row, column) => {
    const assignedNumberForP1 = `${pawnAssignmentObject.playerSide.pawnOne.assignedNumber}`;
    const startSpace = getCellIds[6];
    gridContainer.addEventListener("click", (e) => {
      const handleP1StartSpaceClicks = e.target.id;
      switch (handleP1StartSpaceClicks) {
        case startSpace:
          if (
            mappedCellIds[6].textContent === `${pieceName}` &&
            !trackFirstMoves.includes("P1")
          ) {
            currentPawn = `${assignedNumberForP1}`;
            trackFirstMoves.push("P1");
          }

          break;
      }
    });
    handleP1SingleSpace(row, column, assignedNumberForP1);
    handleP1DoubleSpace(row, column, assignedNumberForP1);
  };

  const handleP1SingleSpace = (row, column, assignedNumberForP1) => {
    const targetRowForP1SingleSpace = `${pawnAssignmentObject.playerSide.pawnOne.singleSpacingAtStartPosition.row}`;
    const targetColumnForP1SingleSpace = `${pawnAssignmentObject.playerSide.pawnOne.singleSpacingAtStartPosition.col}`;
    const targetSpaceForSingleSpace = getCellIds[5];
    gridContainer.addEventListener("click", (e) => {
      const handleP1SingleSpaceClicks = e.target.id;
      switch (handleP1SingleSpaceClicks) {
        case targetSpaceForSingleSpace:
          if (currentPawn === `${assignedNumberForP1}`) {
            row = `${targetRowForP1SingleSpace}`;
            column = `${targetColumnForP1SingleSpace}`;
          }
          if (
            row === `${targetRowForP1SingleSpace}` &&
            column === `${targetColumnForP1SingleSpace}`
          ) {
            console.log("P1 is located on Cell 5 of Row 1");
          }
          break;
      }
    });
    handleP1SingleSpaceDisplay(
      row,
      column,
      targetRowForP1SingleSpace,
      targetColumnForP1SingleSpace
    );
  };

  const handleP1SingleSpaceDisplay = () => {
    gridContainer.addEventListener("click", (e) => {
      const P1SingleSpaceDisplayClicks = e.target.id;
      switch (P1SingleSpaceDisplayClicks) {
        case getCellIds[5]:
          if (trackFirstMoves.includes("P1")) {
            mappedCellIds[6].textContent = `${emptyCellAfterFirstMove}`;
            mappedCellIds[5].textContent = `${pieceName}`;
            trackFirstMoves = trackFirstMoves.filter(
              (remove_P1) => remove_P1 !== "P1"
            );
          }
      }
    });
  };

  const handleP1DoubleSpace = (row, column, assignedNumberForP1) => {
    const targetRowForP1DoubleSpace = `${pawnAssignmentObject.playerSide.pawnOne.doubleSpacingPosition.row}`;
    const targetColumnForP1DoubleSpace = `${pawnAssignmentObject.playerSide.pawnOne.doubleSpacingPosition.col}`;
    const targetSpaceForDoubleSpace = getCellIds[4];
    gridContainer.addEventListener("click", (e) => {
      const handleP1DoubleSpaceClicks = e.target.id;
      switch (handleP1DoubleSpaceClicks) {
        case targetSpaceForDoubleSpace:
          if (currentPawn === `${assignedNumberForP1}`) {
            row = `${targetRowForP1DoubleSpace}`;
            column = `${targetColumnForP1DoubleSpace}`;
          }
          if (
            row === `${targetRowForP1DoubleSpace}` &&
            column === `${targetColumnForP1DoubleSpace}`
          ) {
            console.log("P1 is located on cell 4 of row 1");
          }
          break;
      }
    });
    handleP1DoubleSpaceDisplay(targetSpaceForDoubleSpace);
  };

  const handleP1DoubleSpaceDisplay = (targetSpaceForDoubleSpace) => {
    gridContainer.addEventListener("click", (e) => {
      const P1DoubleSpaceDisplayClicks = e.target.id;
      switch (P1DoubleSpaceDisplayClicks) {
        case targetSpaceForDoubleSpace:
          if (trackFirstMoves.includes("P1")) {
            mappedCellIds[6].textContent = `${emptyCellAfterFirstMove}`;
            mappedCellIds[4].textContent = `${pieceName}`;
            trackFirstMoves = trackFirstMoves.filter(
              (remove_P1) => remove_P1 !== "P1"
            );
          }
      }
    });
  };

  const handleP2StartSpace = () => {
    const assignedNumberForP2 = `${pawnAssignmentObject.playerSide.pawnTwo.assignedNumber}`;
    const startSpace = getCellIds[14];
    gridContainer.addEventListener("click", (e) => {
      const handleP2StartSpaceClicks = e.target.id;
      switch (handleP2StartSpaceClicks) {
        case startSpace:
          if (
            mappedCellIds[14].textContent === `${pieceName}` &&
            !trackFirstMoves.includes("P2")
          ) {
            currentPawn = `${assignedNumberForP2}`;
            trackFirstMoves.push("P2");
          }
      }
    });
    handleP2SingleSpace(assignedNumberForP2);
    handleP2DoubleSpace(assignedNumberForP2);
  };

  const handleP2SingleSpace = (row, column, assignedNumberForP2) => {
    const targetRowForP2SingleSpace = `${pawnAssignmentObject.playerSide.pawnTwo.singleSpacingAtStartPosition.row}`;
    const targetColumnForP2SingleSpace = `${pawnAssignmentObject.playerSide.pawnTwo.singleSpacingAtStartPosition.col}`;
    const targetSpace = getCellIds[13];
    gridContainer.addEventListener("click", (e) => {
      const handleP2SingleSpaceClicks = e.target.id;
      switch (handleP2SingleSpaceClicks) {
        case targetSpace:
          if (currentPawn === `${assignedNumberForP2}`) {
            row = `${targetRowForP2SingleSpace}`;
            column = `${targetColumnForP2SingleSpace}`;
            console.log(trackFirstMoves);
          }
      }
    });
  };

  const handleP2SingleSpaceDisplay = () => {
    const targetSpaceForSingleSpace = getCellIds[13];
    gridContainer.addEventListener("click", (e) => {
      const P2SingleSpaceDisplayClicks = e.target.id;
      switch (P2SingleSpaceDisplayClicks) {
        case targetSpaceForSingleSpace:
          if (trackFirstMoves.includes("P2")) {
            mappedCellIds[14].textContent = `${emptyCellAfterFirstMove}`;
            mappedCellIds[13].textContent = `${pieceName}`;
            trackFirstMoves = trackFirstMoves.filter(
              (remove_P2) => remove_P2 !== "P2"
            );
            console.log(trackFirstMoves);
          }
      }
    });
  };

  const handleP2DoubleSpace = (assignedNumberForP2, column, row) => {
    const targetRowForP2DoubleSpace = `${pawnAssignmentObject.playerSide.pawnTwo.doubleSpacingPosition.row}`;
    const targetColumnForP2DoubleSpace = `${pawnAssignmentObject.playerSide.pawnTwo.doubleSpacingPosition.col}`;
    const targetSpace = getCellIds[12];
    gridContainer.addEventListener("click", (e) => {
      const handleP2DoubleSpaceClicks = e.target.id;
      switch (handleP2DoubleSpaceClicks) {
        case targetSpace:
          if (currentPawn === `${assignedNumberForP2}`) {
            row = `${targetRowForP2DoubleSpace}`;
            column = `${targetColumnForP2DoubleSpace}`;
          }
      }
    });
  };

  const handleP2DoubleSpaceDisplay = () => {
    const targetSpaceForDoubleSpace = getCellIds[12];
    gridContainer.addEventListener("click", (e) => {
      const handleP2DoubleSpaceDisplayClicks = e.target.id;
      switch (handleP2DoubleSpaceDisplayClicks) {
        case targetSpaceForDoubleSpace:
          if (trackFirstMoves.includes("P2")) {
            mappedCellIds[14].textContent = `${emptyCellAfterFirstMove}`;
            mappedCellIds[12].textContent = `${pieceName}`;
            trackFirstMoves = trackFirstMoves.filter(
              (remove_P2) => remove_P2 !== "P2"
            );
          }
      }
    });
  };

  const handleP3StartSpace = (row, column) => {
          
  }

  return {
    validateFirstMoves,
    handleP2SingleSpaceDisplay,
    handleP2DoubleSpaceDisplay,
  };
};

export default FirstMoves;
