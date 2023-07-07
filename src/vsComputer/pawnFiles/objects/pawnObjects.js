const PAWN_ASSIGNMENTS = {
  pieceName: "Pawn",
  //tracks the top side pawns
  computerSide: {
    pawnOne: {
      startingPosition: 1,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
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
      startingPosition: 9,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnThree: {
      startingPosition: 17,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnFour: {
      startingPosition: 25,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnFive: {
      startingPosition: 33,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnSix: {
      startingPosition: 41,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnSeven: {
      startingPosition: 49,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnEight: {
      startingPosition: 57,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
  },

  playerSide: {
    pawnOne: {
      startingPosition: 6,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnTwo: {
      startingPosition: 14,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnThree: {
      startingPosition: 22,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnFour: {
      startingPosition: 30,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnFive: {
      startingPosition: 38,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnSix: {
      startingPosition: 46,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnSeven: {
      startingPosition: 54,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnEight: {
      startingPosition: 62,
      watchForNextMove: {
        readyForNextMove: { isReadyForNextMove: true },
        notReadyForNextMove: { isReadyForNextMove: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForSingleSpaceAtStart: {
        singleSpaceAtStartUsed: { isUsed: true },
        singleSpaceAtStartNotUsed: { isUsed: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
  },
};
export const pawnAssignmentObject = PAWN_ASSIGNMENTS;
