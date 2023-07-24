import chessBoard from "../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnPositioning } from "../objects/pawnPositioning.js";
import { assignedPawnNames } from "../arrays/pawnAssignmentData.js";
const PawnAdvancePositioning = () => {
  const validatePawnAdvancePositioning = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        const advancePositioning = chessBoard[row][col];
        if (advancePositioning) {
          handleAdvancePositioningForRowZero(row, col, advancePositioning);
          handleAdvancePositioningForRowOne(row, col, advancePositioning);
          handleAdvancePositioningForRowTwo(row, col, advancePositioning);
        }
      }
    }
  };

  //contains cells 2-4
  const handleAdvancePositioningForRowZero = (row, col, advancePositioning) => {
    const rowZeroAdvanceIndices = [
      { rowZeroIndice: 2 },
      { rowZeroIndice: 3 },
      { rowZeroIndice: 4 },
    ];

    const rowZeroAdvancePositions = [
      {
        row: pawnPositioning.advancePositioning.cellTwo.row,
        column: pawnPositioning.advancePositioning.cellTwo.column,
      },
      {
        row: pawnPositioning.advancePositioning.cellThree.row,
        column: pawnPositioning.advancePositioning.cellThree.column,
      },
      {
        row: pawnPositioning.advancePositioning.cellFour.row,
        column: pawnPositioning.advancePositioning.cellFour.column,
      },
    ];

    switch (advancePositioning) {
      case rowZeroAdvanceIndices[0].rowZeroIndice:
        row = rowZeroAdvancePositions[0].row;
        col = rowZeroAdvancePositions[0].column;
        break;
      case rowZeroAdvanceIndices[1].rowZeroIndice:
        row = rowZeroAdvancePositions[1].row;
        col = rowZeroAdvancePositions[1].column;
        break;
      case rowZeroAdvanceIndices[2].rowZeroIndice:
        row = rowZeroAdvancePositions[2].row;
        col = rowZeroAdvancePositions[2].column;
    }
  };

  const handleAdvancePositioningForRowOne = (row, col, advancePositioning) => {
    const rowOneAdvanceIndices = [
      { rowOneIndice: 10 },
      { rowOneIndice: 11 },
      { rowOneIndice: 12 },
    ];

    const rowOneAdvancePositions = [
      {
        row: pawnPositioning.advancePositioning.cellTen.row,
        column: pawnPositioning.advancePositioning.cellTen.column,
      },
      {
        row: pawnPositioning.advancePositioning.cellEleven.row,
        column: pawnPositioning.advancePositioning.cellEleven.column,
      },
      {
        row: pawnPositioning.advancePositioning.cellTwelve.row,
        column: pawnPositioning.advancePositioning.cellTwelve.column,
      },
    ];

    switch (advancePositioning) {
      case rowOneAdvanceIndices[0].rowOneIndice:
        row = rowOneAdvancePositions[0].row;
        col = rowOneAdvancePositions[0].column;
        break;
      case rowOneAdvanceIndices[1].rowOneIndice:
        row = rowOneAdvanceIndices[1].row;
        col = rowOneAdvanceIndices[1].column;
        break;
      case rowOneAdvanceIndices[2].rowOneIndice:
        row = rowOneAdvanceIndices[2].row;
        col = rowOneAdvanceIndices[2].column;
        break;
    }
  };

  const handleAdvancePositioningForRowTwo = (row, col, advancePositioning) => {
    const rowTwoAdvanceIndices = [
      { rowThreeIndice: 18 },
      { rowThreeIndice: 19 },
      { rowThreeIndice: 20 },
    ];

    const rowTwoAdvancePositions = [
      {
        row: pawnPositioning.advancePositioning.cellEighteen.row,
        column: pawnPositioning.advancePositioning.cellNinteen.column,
      },
    ];
  };

  return {
    validatePawnAdvancePositioning,
  };
};

export default PawnAdvancePositioning;
