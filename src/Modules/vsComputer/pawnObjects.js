const PAWN_ASSIGNMENTS = {
  pieceName: "Pawn",
  //tracks the top side pawns
  topSidePawns: {
    pawnOne: {
      pawnCellStartingPosition: 1,
      readyForNextPawnMove: "Ready for Cell One Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell One Pawn Move",
      doubleSpacePawnMoveComplete:
        "Double Space Pawn Move Complete for Cell One",
      doubleSpacePawnMoveNotComplete:
        "Double Space Move Not Complete for Cell One",
      doubleSpacePawnMoveNotUsed: "Double Space Move was Not Used for Cell One",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell One",
      firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell One",
      //watches for the position of cell one's pawn(going off of array index which starts from 0 and counts up)
      cellOnePawnOnCellOne: "Cell One Pawn is on Cell One",
      cellOnePawnOnCellTwo: "Cell One Pawn is on Cell Two",
      cellOnePawnOnCellThree: "Cell One Pawn is on Cell Three",
      cellOnePawnOnCellFour: "Cell One Pawn is on Cell Four",
      cellOnePawnOnCellFive: "Cell One Pawn is on Cell Five",
      //watches for the positions where the cell one pawn is not located
      cellOnePawnNotOnCellOne: "Cell One Pawn is not on Cell One",
      cellOnePawnNotOnCellTwo: "Cell One Pawn is not on Cell Two",
      cellOnePawnNotOnCellThree: "Cell One Pawn not is on Cell Three",
      cellOnePawnNotOnCellFour: "Cell One Pawn is not on Cell Four",
      cellOnePawnNotOnCellFive: "Cell One Pawn is not on Cell Five",
    },

    pawnTwo: {
      pawnCellStartingPosition: 9,
      doubleSpacePawnMoveComplete:
        "Double Space Pawn Move Complete for Cell Nine",
      doubleSpacePawnMoveNotComplete:
        "Double Space Move Not Complete for Cell Nine",
      doubleSpacePawnMoveNotUsed:
        "Double Space Move was Not Used for Cell Nine",
      readyForNextPawnMove: "Ready for Cell Nine Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Nine Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Nine",
      firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Nine",
    },

    pawnThree: {
      pawnCellStartingPosition: 17,
      doubleSpacePawnMoveComplete:
        "Double Space Pawn Move Complete for Cell Seventeen",
      doubleSpacePawnMoveNotComplete:
        "Double Space Move Not Complete for Cell Seventeen",
      doubleSpacePawnMoveNotUsed:
        "Double Space Move was Not Used for Cell Seventeen",
      readyForNextPawnMove: "Ready for Cell Seventeen Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Seventeen Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Seventeen",
      firstPawnMoveNotComplete:
        "First Pawn Move Not Complete for Cell Seventeen",
    },

    pawnFour: {
      pawnCellStartingPosition: 25,
      doubleSpacePawnMoveComplete:
        "Double Space Pawn Move Complete for Cell Twenty-Five",
      doubleSpacePawnMoveNotComplete:
        "Double Space Move Not Complete for Cell Twenty-Five",
      doubleSpacePawnMoveNotUsed:
        "Double Space Move was Not Used for Cell Twenty-Five",
      readyForNextPawnMove: "Ready for Cell Twenty-Five Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Twenty Five Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Twenty-Five",
      firstPawnMoveNotComplete:
        "First Pawn Move Not Complete for Cell Twenty-Five",
    },

    pawnFive: {
      pawnCellStartingPosition: 33,
      doubleSpacePawnMoveComplete:
        "Double Space Pawn Move Complete for Cell Thirty-Three",
      doubleSpacePawnMoveNotComplete:
        "Double Space Move Not Complete for Cell Thirty-Three",
      doubleSpacePawnMoveNotUsed:
        "Double Space Move was Not Used for Cell Thirty-Three",
      readyForNextPawnMove: "Ready for Cell Thirty-Three Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Thirty-Three Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Thirty-Three",
      firstPawnMoveNotComplete:
        "First Pawn Move Not Complete for Cell Thirty-Three",
    },

    pawnSix: {
      pawnCellStartingPosition: 41,
      doubleSpacePawnMoveComplete:
        "Double Space Pawn Move Complete for Cell Forty-One",
      doubleSpacePawnMoveNotComplete:
        "Double Space Move Not Complete for Cell Forty-One",
      doubleSpacePawnMoveNotUsed:
        "Double Space Move was Not Used for Cell Forty-One",
      readyForNextPawnMove: "Ready for Cell Forty-One Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Forty-One Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Forty-One",
      firstPawnMoveNotComplete:
        "First Pawn Move Not Complete for Cell Forty-One",
    },

    pawnCellFortyNine: {
      pawnCellStartingPosition: 49,
      doubleSpacePawnMoveComplete:
        "Double Space Pawn Move Complete for Cell Forty-Nine",
      doubleSpacePawnMoveNotComplete:
        "Double Space Move Not Complete for Cell Forty-Nine",
      doubleSpacePawnMoveNotUsed:
        "Double Space Move was Not Used for Cell Forty-Nine",
      readyForNextPawnMove: "Ready for Cell Forty-Nine Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Forty-Nine Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Forty-Nine",
      firstPawnMoveNotComplete:
        "First Pawn Move Not Complete for Cell Forty-Nine",
    },

    pawnCellFiftySeven: {
      pawnCellStartingPosition: 57,
      doubleSpacePawnMoveComplete:
        "Double Space Pawn Move Complete for Cell Fifty-Seven",
      doubleSpacePawnMoveNotComplete:
        "Double Space Move Not Complete for Cell Fifty-Seven",
      doubleSpacePawnMoveNotUsed:
        "Double Space Move was Not Used for Cell Fifty-Seven",
      readyForNextPawnMove: "Ready for Cell Fifty-Seven Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Fifty-Seven Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Fifty-Seven",
      firstPawnMoveNotComplete:
        "First Pawn Move Not Complete for Cell Fifty-Seven",
    },
  },

  pawnCellSix: {
    pawnCellStartingPosition: 6,
    doubleSpacePawnMoveComplete: "Double Space Pawn Move Complete for Cell Six",
    doubleSpacePawnMoveNotComplete:
      "Double Space Move Not Complete for Cell Six",
    doubleSpacePawnMoveNotUsed: "Double Space Move was Not Used for Cell Six",
    readyForNextPawnMove: "Ready for Cell Six Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Six Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Six",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Six",
    //watches for the position of cell six's pawn
    cellSixPawnOnCellOne: "Cell Six Pawn is on Cell One",
    cellSixPawnOnCellTwo: "Cell Six Pawn is on Cell Two",
    cellSixPawnOnCellThree: "Cell Six Pawn is on Cell Three",
    cellSixPawnOnCellFour: "Cell Six Pawn is on Cell Four",
    cellSixPawnOnCellFive: "Cell Six Pawn is on Cell Five",
  },
  pawnCellFourteen: {
    pawnCellStartingPosition: 14,
    doubleSpacePawnMoveComplete:
      "Double Space Pawn Move Complete for Cell Fourteen",
    doubleSpacePawnMoveNotComplete:
      "Double Space Move Not Complete for Cell Fourteen",
    doubleSpacePawnMoveNotUsed:
      "Double Space Move was Not Used for Cell Fourteen",
    readyForNextPawnMove: "Ready for Cell Fourteen Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Fourteen Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Fourteen",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Fourteen",
  },
  pawnCellTwentyTwo: {
    pawnCellStartingPosition: 22,
    doubleSpacePawnMoveComplete:
      "Double Space Pawn Move Complete for Cell Twenty-Two",
    doubleSpacePawnMoveNotComplete:
      "Double Space Move Not Complete for Cell Twenty-Two",
    doubleSpacePawnMoveNotUsed:
      "Double Space Move was Not Used for Cell Twenty-Two",
    readyForNextPawnMove: "Ready for Cell Twenty-Two Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Twenty Two Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Twenty-Two",
    firstPawnMoveNotComplete:
      "First Pawn Move Not Complete for Cell Twenty-Two",
  },
  pawnCellThirty: {
    pawnCellStartingPosition: 30,
    doubleSpacePawnMoveComplete:
      "Double Space Pawn Move Complete for Cell Thirty",
    doubleSpacePawnMoveNotComplete:
      "Double Space Move Not Complete for Cell Thirty",
    doubleSpacePawnMoveNotUsed:
      "Double Space Move was Not Used for Cell Thirty",
    readyForNextPawnMove: "Not Ready for Cell Thirty Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Thirty Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Thirty",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Thirty",
  },
  pawnCellThirtyEight: {
    pawnCellStartingPosition: 38,
    doubleSpacePawnMoveComplete:
      "Double Space Pawn Move Complete for Cell Thirty-Eight",
    doubleSpacePawnMoveNotComplete:
      "Double Space Move Not Complete for Cell Thirty-Eight",
    doubleSpacePawnMoveNotUsed:
      "Double Space Move was Not Used for Cell Thirty-Eight",
    readyForNextPawnMove: "Ready for Cell Thirty-Eight Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Thirty-Eight Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Thirty-Eight",
    firstPawnMoveNotComplete:
      "First Pawn Move Not Complete for Cell Thirty-Eight",
  },
  pawnCellFortySix: {
    pawnCellStartingPosition: 46,
    doubleSpacePawnMoveComplete:
      "Double Space Pawn Move Complete for Cell Forty-Six",
    doubleSpacePawnMoveNotComplete:
      "Double Space Move Not Complete for Cell Forty-Six",
    doubleSpacePawnMoveNotUsed:
      "Double Space Move was Not Used for Cell Forty-Six",
    readyForNextPawnMove: "Ready for Cell Forty-Six Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Forty-Six Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Forty-Six",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Forty-Six",
  },
  pawnCellFiftyFour: {
    pawnCellStartingPosition: 54,
    doubleSpacePawnMoveComplete:
      "Double Space Pawn Move Complete for Cell Fifty-Four",
    doubleSpacePawnMoveNotComplete:
      "Double Space Move Not Complete for Cell Fifty-Four",
    doubleSpacePawnMoveNotUsed:
      "Double Space Move was Not Used for Cell Fifty-Four",
    readyForNextPawnMove: "Ready for Cell Fifty-Four Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Fifty-Four Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Fifty-Four",
    firstPawnMoveNotComplete:
      "First Pawn Move Not Complete for Cell Fifty-Four",
  },
  pawnCellSixtyTwo: {
    pawnCellStartingPosition: 62,
    doubleSpacePawnMoveComplete:
      "Double Space Pawn Move Complete for Cell Sixty-Two",
    doubleSpacePawnMoveNotComplete:
      "Double Space Move Not Complete for Cell Sixty-Two",
    doubleSpacePawnMoveNotUsed:
      "Double Space Move was Not Used for Cell Sixty-Two",
    readyForNextPawnMove: "Ready for Cell Sixty-Two Pawn Move",
    notReadyForNextPawnMove: "Ready for Cell Sixty-Two Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Sixty-Two",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Sixty-Two",
  },
};
export const pawnAssignmentObject = PAWN_ASSIGNMENTS;
