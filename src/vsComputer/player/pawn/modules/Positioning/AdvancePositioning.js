import chessBoard from "../../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../../modules/ChessPieceAssignments.js";
import { pawnPositioning } from "../../objects/pawnPositioning.js";
import assignPawnNames from "../../assignPawnNames.js";
const PawnAdvancePositioning = () => {
  const validatePawnAdvancePositioning = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        const advancePositioning = chessBoard[row][col];
        if (advancePositioning) {
          handleAdvancePositioningForRowZero(row, col, advancePositioning);
          handleAdvancePositioningForRowOne(row, col, advancePositioning);
          handleAdvancePositioningForRowTwo(row, col, advancePositioning);
          handleAdvancePositioningForRowThree(row, col, advancePositioning);
          handleAdvancePositioningForRowFour(row, col, advancePositioning);
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
        row = rowOneAdvancePositions[1].row;
        col = rowOneAdvancePositions[1].column;
        break;
      case rowOneAdvanceIndices[2].rowOneIndice:
        row = rowOneAdvancePositions[2].row;
        col = rowOneAdvancePositions[2].column;
        break;
    }
  };

  const handleAdvancePositioningForRowTwo = (row, col, advancePositioning) => {
    const rowTwoAdvanceIndices = [
      { rowTwoIndice: 18 },
      { rowTwoIndice: 19 },
      { rowTwoIndice: 20 },
    ];

    const rowTwoAdvancePositions = [
      {
        row: pawnPositioning.advancePositioning.cellEighteen.row,
        column: pawnPositioning.advancePositioning.cellNinteen.column,
      },
      {
        row: pawnPositioning.advancePositioning.cellNinteen.row,
        column: pawnPositioning.advancePositioning.cellNinteen.column,
      },
      {
        row: pawnPositioning.advancePositioning.cellTwenty.row,
        column: pawnPositioning.advancePositioning.cellTwenty.column,
      },
    ];

    switch (advancePositioning) {
      case rowTwoAdvanceIndices[0].rowTwoIndice:
        row = rowTwoAdvancePositions[0].row;
        col = rowTwoAdvancePositions[0].column;
        break;
      case rowTwoAdvanceIndices[1].rowTwoIndice:
        row = rowTwoAdvancePositions[1].row;
        col = rowTwoAdvancePositions[1].column;
        break;
      case rowTwoAdvanceIndices[2].rowTwoIndice:
        row = rowTwoAdvancePositions[2].row;
        col = rowTwoAdvancePositions[2].column;
        break;
    }
  };

  const handleAdvancePositioningForRowThree = (
    row,
    col,
    advancePositioning
  ) => {
    const rowThreeAdvanceIndices = [
      { rowThreeIndice: 26 },
      { rowThreeIndice: 27 },
      { rowThreeIndice: 28 },
    ];

    const rowThreeAdvancePositions = [
      {
        row: pawnPositioning.advancePositioning.cellTwentySix.row,
        column: pawnPositioning.advancePositioning.cellTwentySix.column,
      },
      {
        row: pawnPositioning.advancePositioning.cellTwentySeven.row,
        column: pawnPositioning.advancePositioning.cellTwentySeven.column,
      },
      {
        row: pawnPositioning.advancePositioning.cellTwentyEight.row,
        column: pawnPositioning.advancePositioning.cellTwentyEight.column,
      },
    ];

    switch (advancePositioning) {
      case rowThreeAdvanceIndices[0].rowThreeIndice:
        row = rowThreeAdvancePositions[0].row;
        col = rowThreeAdvancePositions[0].column;
        break;
      case rowThreeAdvanceIndices[1].rowThreeIndice:
        row = rowThreeAdvancePositions[1].row;
        col = rowThreeAdvancePositions[1].column;
        break;
      case rowThreeAdvanceIndices[2].rowThreeIndice:
        row = rowThreeAdvancePositions[2].row;
        col = rowThreeAdvancePositions[2].column;
        break;
    }
  };

  const handleAdvancePositioningForRowFour = (row, col, advancePositioning) => {
    const rowFourAdvanceIndices = [
      { rowFourIndice: 34 },
      { rowFourIndice: 35 },
      { rowFourIndice: 36 },
    ];

    const rowFourAdvancePositions = [
      {
        row: pawnPositioning.advancePositioning.cellThirtyFour.row,
        column: pawnPositioning.advancePositioning.cellThirtyFour.column,
      },
      {
        row: pawnPositioning.advancePositioning.cellThirtyFive.row,
        column: pawnPositioning.advancePositioning.cellThirtyFive.column,
      },
      {
        row: pawnPositioning.advancePositioning.cellThirtySix.row,
        column: pawnPositioning.advancePositioning.cellThirtySix.column,
      },
    ];

    switch (advancePositioning) {
      case rowFourAdvanceIndices[0].rowFourIndice:
        row = rowFourAdvancePositions[0].row;
        col = rowFourAdvancePositions[0].column;
        break;
      case rowFourAdvanceIndices[1].rowFourIndice:
        row = rowFourAdvancePositions[1].row;
        col = rowFourAdvancePositions[1].column;
        break;
      case rowFourAdvanceIndices[2].rowFourIndice:
        row = rowFourAdvancePositions[2].row;
        col = rowFourAdvancePositions[2].column;
        break;
    }
  };

  return {
    validatePawnAdvancePositioning,
  };
};

export default PawnAdvancePositioning;
