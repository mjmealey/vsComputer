import chessBoard from "../../../../objects/chessBoardArray.js";
import { assignedPawnNames } from "../../arrays/pawnAssignmentData.js";
import { setStartMovePositions } from "../../objects/SetStartMovePositioning.js";
const FirstMovesPositioning = () => {
  const validateFirstMoves = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        checkSingleSpaceValidity(row, col);
      }
    }
  };

  const startingMovePositions = [
    //starting spaces
    {
      startingSpaceP1: {
        row: setStartMovePositions.P1.startSpace.row,
        col: setStartMovePositions.P1.startSpace.col,
      },
    },
    {
      startingSpaceP2: {
        row: setStartMovePositions.P2.startSpace.row,
        col: setStartMovePositions.P2.startSpace.col,
      },
    },
    {
      startingSpaceP3: {
        row: setStartMovePositions.P3.startSpace.row,
        col: setStartMovePositions.P3.startSpace.col,
      },
    },
    {
      startingSpaceP4: {
        row: setStartMovePositions.P4.startSpace.row,
        col: setStartMovePositions.P4.startSpace.col,
      },
    },
    {
      startingSpaceP5: {
        row: setStartMovePositions.P5.startSpace.row,
        col: setStartMovePositions.P5.startSpace.col,
      },
    },
    {
      startingSpaceP6: {
        row: setStartMovePositions.P6.startSpace.row,
        col: setStartMovePositions.P6.startSpace.col,
      },
    },
    {
      startingSpaceP7: {
        row: setStartMovePositions.P7.startSpace.row,
        col: setStartMovePositions.P7.startSpace.col,
      },
    },
    {
      startingSpaceP8: {
        row: setStartMovePositions.P8.startSpace.row,
        col: setStartMovePositions.P8.startSpace.col,
      },
    },

    //single spaces
    {
      singleSpaceP1: {
        row: setStartMovePositions.P1.singleSpace.row,
        col: setStartMovePositions.P1.singleSpace.col,
      },
    },
    {
      singleSpaceP2: {
        row: setStartMovePositions.P2.singleSpace.row,
        col: setStartMovePositions.P2.singleSpace.col,
      },
    },
    {
      singleSpaceP3: {
        row: setStartMovePositions.P3.singleSpace.row,
        col: setStartMovePositions.P3.singleSpace.col,
      },
    },
    {
      singleSpaceP4: {
        row: setStartMovePositions.P4.singleSpace.row,
        col: setStartMovePositions.P4.singleSpace.col,
      },
    },
    {
      singleSpaceP5: {
        row: setStartMovePositions.P5.singleSpace.row,
        col: setStartMovePositions.P5.singleSpace.col,
      },
    },
    {
      singleSpaceP6: {
        row: setStartMovePositions.P6.singleSpace.row,
        col: setStartMovePositions.P6.singleSpace.col,
      },
    },
    {
      singleSpaceP7: {
        row: setStartMovePositions.P7.singleSpace.row,
        col: setStartMovePositions.P7.singleSpace.col,
      },
    },
    {
      singleSpaceP8: {
        row: setStartMovePositions.P8.singleSpace.row,
        col: setStartMovePositions.P8.singleSpace.col,
      },
    },

    //double spaces
    {
      doubleSpaceP1: {
        row: setStartMovePositions.P1.doubleSpace.row,
        col: setStartMovePositions.P1.doubleSpace.col,
      },
    },
    {
      doubleSpaceP2: {
        row: setStartMovePositions.P2.doubleSpace.row,
        col: setStartMovePositions.P2.doubleSpace.col,
      },
    },
    {
      doubleSpaceP3: {
        row: setStartMovePositions.P3.doubleSpace.row,
        col: setStartMovePositions.P3.doubleSpace.col,
      },
    },
    {
      doubleSpaceP4: {
        row: setStartMovePositions.P4.doubleSpace.row,
        col: setStartMovePositions.P4.doubleSpace.col,
      },
    },
    {
      doubleSpaceP5: {
        row: setStartMovePositions.P5.doubleSpace.row,
        col: setStartMovePositions.P5.doubleSpace.col,
      },
    },
    {
      doubleSpaceP6: {
        row: setStartMovePositions.P6.doubleSpace.row,
        col: setStartMovePositions.P6.doubleSpace.col,
      },
    },
    {
      doubleSpaceP7: {
        row: setStartMovePositions.P7.doubleSpace.row,
        col: setStartMovePositions.P7.doubleSpace.col,
      },
    },
    {
      doubleSpaceP8: {
        row: setStartMovePositions.P8.doubleSpace.row,
        col: setStartMovePositions.P8.doubleSpace.col,
      },
    },
  ];

  let clickedFirstMove = null; //checks which pawn is being used during the first move

  const firstMoveValidation = [
    { isValid: "Valid Move" },
    { notValid: "Invalid Move" },
  ];

  //rows go from 0 to 7 and columns go from 0 to 7 (rows are side by side and columns are up and down)
  //checkSingleSpaceValidity is meant to track when the user does single space instead of double space as their first move for pawns
  const checkStartMoveValidity = (row, col) => {
    const startMovePositioning = chessBoard[row][col];

    const isValidStartingPosition = (minCol, maxCol, targetRow, targetCol) => {
      const minRow = 0;
      const maxRow = 7;
      //rows and cols go from 0 to 7
      return (
        targetRow >= minRow &&
        targetRow <= maxRow &&
        targetCol >= minCol &&
        targetCol <= maxCol
      );
    };

    const setValidStartingPostions = (clickedPawn) => {
      clickedFirstMove = assignedPawnNames.indexOf(clickedPawn);
    };
  };
  return {
    validateFirstMoves,
    checkStartMoveValidity,
  };
};
export default FirstMovesPositioning;
