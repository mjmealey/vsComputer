const PAWN_ASSIGNMENTS = {
  pieceName: "Pawn",
  //tracks the top side pawns
  topSidePawns: {
    pawnOne: {
      pawnCellStartingPosition: { startingPosition: 1 },
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },

      watchForPosition: {
        //watches for the position of cell one's pawn(going off of array index which starts from 0 and counts up)
        onCellOneOfRowOne: { Cell: 1, Row: 1 },
        onCellTwo: { Cell: 2, Row: 1 },
        onCellThree: { Cell: 3, Row: 1 },
        onCellFour: { Cell: 4, Row: 1 },
        onCellFive: { Cell: 5, Row: 1 },
        //watches for the positions where the cell one pawn is not located
        cellOnePawnNotOnCellOne: "Cell One Pawn is not on Cell One",
        cellOnePawnNotOnCellTwo: "Cell One Pawn is not on Cell Two",
        cellOnePawnNotOnCellThree: "Cell One Pawn not is on Cell Three",
        cellOnePawnNotOnCellFour: "Cell One Pawn is not on Cell Four",
        cellOnePawnNotOnCellFive: "Cell One Pawn is not on Cell Five",
      },
    },

    pawnTwo: {
      pawnCellStartingPosition: 9,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnThree: {
      pawnCellStartingPosition: 17,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnFour: {
      pawnCellStartingPosition: 25,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnFive: {
      pawnCellStartingPosition: 33,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnSix: {
      pawnCellStartingPosition: 41,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnSeven: {
      pawnCellStartingPosition: 49,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnEight: {
      pawnCellStartingPosition: 57,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
  },

  bottomSidePawns: {
    pawnOne: {
      pawnCellStartingPosition: 6,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnTwo: {
      pawnCellStartingPosition: 14,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnThree: {
      pawnCellStartingPosition: 22,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnFour: {
      pawnCellStartingPosition: 30,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnFive: {
      pawnCellStartingPosition: 38,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnSix: {
      pawnCellStartingPosition: 46,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnSeven: {
      pawnCellStartingPosition: 54,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnEight: {
      pawnCellStartingPosition: 62,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReadyForNextMove: true },
        notReadyForNextPawnMove: { notReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpacePawnMoveComplete: { isComplete: true },
        doubleSpacePawnMoveNotComplete: { notComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
  },
};
export const pawnAssignmentObject = PAWN_ASSIGNMENTS;
