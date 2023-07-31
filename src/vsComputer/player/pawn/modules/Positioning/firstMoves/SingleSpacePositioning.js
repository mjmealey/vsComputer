import chessBoard from "../../../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../../../modules/ChessPieceAssignments.js";
import { setStartMovePositions } from "../../../objects/SetStartMovePositioning.js";
const SingleSpacePositioning = () => {
  const validateSingleSpace = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        const singleSpace = chessBoard[row][col];
        checkSingleSpaceValidity(singleSpace);
      }
    }
  };

  const singleSpacePositions = [
    {
      row: setStartMovePositions.P1.singleSpace.row,
      col: setStartMovePositions.P1.singleSpace.col,
    },
    {
      row: setStartMovePositions.P2.singleSpace.row,
      col: setStartMovePositions.P2.singleSpace.col,
    },
    {
      row: setStartMovePositions.P3.singleSpace.row,
      col: setStartMovePositions.P3.singleSpace.col,
    },
    {
      row: setStartMovePositions.P4.singleSpace.row,
      col: setStartMovePositions.P4.singleSpace.col,
    },
    {
      row: setStartMovePositions.P5.singleSpace.row,
      col: setStartMovePositions.P5.singleSpace.col,
    },
    {
      row: setStartMovePositions.P6.singleSpace.row,
      col: setStartMovePositions.P6.singleSpace.col,
    },
    {
      row: setStartMovePositions.P7.singleSpace.row,
      col: setStartMovePositions.P7.singleSpace.col,
    },
    {
      row: setStartMovePositions.P8.singleSpace.row,
      col: setStartMovePositions.P8.singleSpace.col,
    },
  ];

  const singleSpaceCellData = [
    {cell: getCellIds[5], message: "P1 is located on row 0 col 5"},
    {cell: getCellIds[12], message: "P2 is located on row 1 col 5"},
    {cell: getCellIds[20], message: "P3 is located on row 2 col 5"},
    {cell: getCellIds[28], message: "P4 is located on row 3 col 5"},
    {cell: getCellIds[38]} 
  ]

  const checkSingleSpace = (targetRow, targetCol) => {
    const minRow = singleSpacePositions[0].row;
    const maxRow = singleSpacePositions[7].row;
    const minCol = singleSpacePositions[0].col;
    const maxCol = singleSpacePositions[7].col;

    return (
      targetRow >= minRow &&
      targetRow <= maxRow &&
      targetCol >= minCol &&
      targetCol <= maxCol
    );
  };

  const isValidSingleSpace = (targetRow, targetCol) => {
    return checkSingleSpace(targetRow, targetCol);
  };

  const checkSingleSpaceValidity = (cellId) => {
    let isValidPawnSingleSpace = null;

    switch (cellId) {
      case getCellIds[5]:
        isValidPawnSingleSpace =
          singleSpacePositions[0].row && singleSpacePositions[0].col;
        if (isValidSingleSpace(isValidPawnSingleSpace)) {
          console.log("P1 is located on Row 0 Column 5");
        }
        break;
      case getCellIds[13]:
        isValidPawnSingleSpace =
          singleSpacePositions[1].row && singleSpacePositions[1].col;
        if (isValidSingleSpace(isValidPawnSingleSpace)) {
          console.log("P2 is located on Row 1 Column 5");
        }
        break;
      case getCellIds[22]:
        isValidPawnSingleSpace =
          singleSpacePositions[2].row && singleSpacePositions[2].col;
        if (isValidSingleSpace(isValidPawnSingleSpace)) {
          console.log("P3 is located on Row 2 Column 5");
        }
        break;
      case getCellIds[30]:
        isValidPawnSingleSpace = singleSpacePositions[3].row && singleSpacePositions[3].col
        if(isValidSingleSpace(isValidPawnSingleSpace)){
          console.log("P4 is located on Row 3 Column 5")
        }
        break;
      case getCellIds[38]:
        isValidPawnSingleSpace = singleSpacePositions[4].row && singleSpacePositions[4].col
        if(isValidSingleSpace(isValidPawnSingleSpace)){
          console.log("P5 is located on Row 4 Column 5")
        }
        break;
      case getCellIds[46]:
        isValidPawnSingleSpace = singleSpacePositions[5].row && singleSpacePositions[5].col
        if(isValidSingleSpace(isValidPawnSingleSpace)){
          console.log("P6 is located on Row 5 Column 5") 
        }
        break;
      case getCellIds[54]:
        isValidPawnSingleSpace = singleSpacePositions[6].row && singleSpacePositions[6].col
        if(isValidSingleSpace(isValidPawnSingleSpace)){
          console.log("P7 is located on Row 6 Column 5")
        }
        break;
      case getCellIds[62]:
        isValidPawnSingleSpace = singleSpacePositions[7].row && singleSpacePositions[7].col
        if(isValidSingleSpace(isValidPawnSingleSpace)){
          console.log("P8 is located on Row 7 Column 5")
        }
    }

    gridContainer.addEventListener("click", (e) => {
      const cellIndex = e.target.id
      checkSingleSpaceValidity(cellIndex)

    })
  };

  return {
    validateSingleSpace,
    checkSingleSpaceValidity,
  };
};

export default SingleSpacePositioning;
