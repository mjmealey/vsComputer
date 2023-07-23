import chessBoard from "../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnPositioning } from "../objects/pawnPositioning.js";
import { assignedPawnNames } from "../arrays/pawnAssignmentData.js";
const GeneralPositioning = () => {
  const trackGeneralPositioning = [
    //first row
    {
      cellTwoRow: pawnPositioning.generalPositioning.cellTwo.row,
      cellTwoColumn: pawnPositioning.generalPositioning.cellTwo.column,
    },
    {
      cellThreeRow: pawnPositioning.generalPositioning.cellThree.row,
      cellThreeColumn: pawnPositioning.generalPositioning.cellThree.column,
    },
    {
      cellFourRow: pawnPositioning.generalPositioning.cellFour.row,
      cellFourColumn: pawnPositioning.generalPositioning.cellFour.column,
    },
    //second row
    {
      cellTenRow: pawnPositioning.generalPositioning.cellTen.row,
      cellTenColumn: pawnPositioning.generalPositioning.cellTen.column,
    },
    {
      cellElevenRow: pawnPositioning.generalPositioning.cellEleven.row,
      cellElevenColumn: pawnPositioning.generalPositioning.cellEleven.column,
    },
    {
      cellTwelveRow: pawnPositioning.generalPositioning.cellTwelve.row,
      cellTwelveColumn: pawnPositioning.generalPositioning.cellTwelve.column,
    },
    //third row
    {
      cellEighteenRow: pawnPositioning.generalPositioning.cellEighteen.row,
      cellEighteenColumn:
        pawnPositioning.generalPositioning.cellEighteen.column,
    },
    {
      cellNinteenRow: pawnPositioning.generalPositioning.cellNinteen.row,
      cellNinteenColumn: pawnPositioning.generalPositioning.cellNinteen.column,
    },
    {
      cellTwentyRow: pawnPositioning.generalPositioning.cellTwenty.row,
      cellTwentyColumn: pawnPositioning.generalPositioning.cellTwenty.column,
    },
    //fourth row
    {
      cellTwentySixRow: pawnPositioning.generalPositioning.cellTwentySix.row,
      cellTwentySixColumn:
        pawnPositioning.generalPositioning.cellTwentySix.column,
    },
    {
      cellTwentySevenRow:
        pawnPositioning.generalPositioning.cellTwentySeven.row,
      cellTwentySevenColumn:
        pawnPositioning.generalPositioning.cellTwentySeven.column,
    },
    {
      cellTwentyEightRow:
        pawnPositioning.generalPositioning.cellTwentyEight.row,
      cellTwentyEightColumn:
        pawnPositioning.generalPositioning.cellTwentyEight.column,
    },
    //fifth row
    {
      cellThirtyFourRow: pawnPositioning.generalPositioning.cellThirtyFour.row,
      cellThirtyFourColumn:
        pawnPositioning.generalPositioning.cellThirtyFour.column,
    },
    {
      cellThirtyFiveRow: pawnPositioning.generalPositioning.cellThirtyFive.row,
      cellThirtyFiveColumn:
        pawnPositioning.generalPositioning.cellThirtyFive.column,
    },
    {
      cellThirtySixRow: pawnPositioning.generalPositioning.cellThirtySix.row,
      cellThirtySixColumn:
        pawnPositioning.generalPositioning.cellThirtySix.column,
    },
    //sixth row
    {
      cellFortyTwoRow: pawnPositioning.generalPositioning.cellFortyTwo.row,
      cellFortyTwoColumn:
        pawnPositioning.generalPositioning.cellFortyTwo.column,
    },
    {
      cellFortyThreeRow: pawnPositioning.generalPositioning.cellFortyThree.row,
      cellFortyThreeColumn:
        pawnPositioning.generalPositioning.cellFortyThree.column,
    },
    {
      cellFortyFourRow: pawnPositioning.generalPositioning.cellFortyFour.row,
      cellFortyFourColumn:
        pawnPositioning.generalPositioning.cellFortyFour.column,
    },
    //seventh row
    {
      cellFiftyRow: pawnPositioning.generalPositioning.cellFifty.row,
      cellFiftyColumn: pawnPositioning.generalPositioning.cellFifty.column,
    },
    {
      cellFiftyOneRow: pawnPositioning.generalPositioning.cellFiftyOne.row,
      cellFiftyOneColumn:
        pawnPositioning.generalPositioning.cellFiftyOne.column,
    },
    {
      cellFiftyTwoRow: pawnPositioning.generalPositioning.cellFiftyTwo.row,
      cellFiftyTwoColumn:
        pawnPositioning.generalPositioning.cellFiftyTwo.column,
    },
    //eighth row
    {
      cellFiftyEightRow: pawnPositioning.generalPositioning.cellFiftyEight.row,
      cellFiftyEightColumn:
        pawnPositioning.generalPositioning.cellFiftyEight.column,
    },
    {
      cellFiftyNineRow: pawnPositioning.generalPositioning.cellFiftyNine.row,
      cellFiftyNineColumn:
        pawnPositioning.generalPositioning.cellFiftyNine.column,
    },
    {
      cellSixtyRow: pawnPositioning.generalPositioning.cellSixty.row,
      cellSixtyColumn: pawnPositioning.generalPositioning.cellSixty.column,
    },
  ];
  const validateGeneralPositioning = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        const generalPositioning = chessBoard[row][col];
        if (generalPositioning) {
          handleGeneralPositioningForRowZero(row, col, generalPositioning);
        }
      }
    }
  };

  const handleGeneralPositioningForRowZero = (row, col, generalPositioning) => {
    const rowZeroGeneralIndices = [
      { rowZeroIndice: 2 },
      { rowZeroIndice: 3 },
      { rowZeroIndice: 4 },
    ];

    const handleCellTwoPositioning = () => {
        
    }
  };

  return {
    validateGeneralPositioning,
  };
};

export default GeneralPositioning;
