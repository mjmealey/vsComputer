import chessBoard from "../../../../objects/chessBoardArray.js";

const FirstMovesPositioning = () => {
  const validateFirstMoves = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        checkSingleSpaceValidity(row, col);
        checkDoubleSpaceValidity(row, col);
      }
    }
  };
  //rows go from 0 to 7 and columns go from 0 to 7 (rows are side by side and columns are up and down)
  //checkSingleSpaceValidity is meant to track when the user does single space instead of double space as their first move for pawns
  const checkSingleSpaceValidity = (row, col) => {
    const singleSpacePositioning = chessBoard[row][col];
    const isValidSingleSpace = (targetRow, targetCol) => {
      return (
        targetRow >= 0 && targetRow <= 7 && targetCol >= 0 && targetCol <= 5
      );
    };

    const validateSingleSpace = () => {
      let targetRow = null;
      let targetCol = null;

      const singleSpacePositioningIndices = [
        { row: 0, col: 5 },
        { row: 1, col: 5 },
        { row: 2, col: 5 },
        { row: 3, col: 5 },
        { row: 4, col: 5 },
        { row: 5, col: 5 },
        { row: 6, col: 5 },
        { row: 7, col: 5 },
      ];

      switch (singleSpacePositioning) {
        case "P1":
          targetRow = singleSpacePositioningIndices[0].row;
          targetCol = singleSpacePositioningIndices[0].col;
          if (isValidSingleSpace(targetRow, targetCol)) {
            console.log("Valid Move");
          } else {
            console.log("Invalid Move");
          }
          break;
        case "P2":
          targetRow = singleSpacePositioningIndices[1].row;
          targetCol = singleSpacePositioningIndices[1].col;
          if (isValidSingleSpace(targetRow, targetCol)) {
            console.log("Valid Move");
          } else {
            console.log("Invalid Move");
          }
          break;
        case "P3":
          targetRow = singleSpacePositioningIndices[2].row;
          targetCol = singleSpacePositioningIndices[2].col;
          if (isValidSingleSpace(targetRow, targetCol)) {
            console.log("Valid Move");
          } else {
            console.log("Invalid Move");
          }
          break;
        case "P4":
          targetRow = singleSpacePositioningIndices[3].row;
          targetCol = singleSpacePositioningIndices[3].col;
          if (isValidSingleSpace(targetRow, targetCol)) {
            console.log("Valid Move");
          } else {
            console.log("Invalid Move");
          }
          break;
        case "P5":
          targetRow = singleSpacePositioningIndices[4].row;
          targetCol = singleSpacePositioningIndices[4].col;
          if (isValidSingleSpace(targetRow, targetCol)) {
            console.log("Valid Move");
          } else {
            console.log("Invalid Move");
          }
          break;
        case "P6":
          targetRow = singleSpacePositioningIndices[5].row;
          targetCol = singleSpacePositioningIndices[5].col;
          if (isValidSingleSpace(targetRow, targetCol)) {
            console.log("Valid Move");
          } else {
            console.log("Invalid Move");
          }
          break;
        case "P7":
          targetRow = singleSpacePositioningIndices[6].row;
          targetCol = singleSpacePositioningIndices[6].col;
          if (isValidSingleSpace(targetRow, targetCol)) {
            console.log("Valid Move");
          } else {
            console.log("Invalid Move");
          }
          break;
        case "P8":
          targetRow = singleSpacePositioningIndices[7].row;
          targetCol = singleSpacePositioningIndices[7].col;
          if (isValidSingleSpace(targetRow, targetCol)) {
            console.log("Valid Move");
          } else {
            console.log("Invalid Move");
          }
      }
    };
    validateSingleSpace();
  };

  const checkDoubleSpaceValidity = (row, col) => {
    const doubleSpacePositioning = chessBoard[row][col]
    const isValidDoubleSpace = (targetRow, targetCol) => {
      return (
        targetRow >= 0 && targetRow <= 7 && targetCol >= 0 && targetCol <= 4
      )
    }

    const validateDoubleSpace = () => {
        const doubleSpacePositioningIndices = [
          {}
        ]
    }
    

  }
  return {
    validateFirstMoves,
  };
};

export default FirstMovesPositioning;
