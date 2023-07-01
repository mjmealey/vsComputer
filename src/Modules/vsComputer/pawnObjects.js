const PAWN_ASSIGNMENTS = {
  pieceName: "Pawn",
  //tracks the top side pawns
  topSidePawns: {
    pawnOne: {
      startingPosition: 1,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { moveComplete: true },
        firstMoveNotComplete: { moveComplete: false },
      },

      watchForPosition: {
        onCellOneOfRowOne: { Cell: 1, Row: 1 },
        onCellTwoOfRowOne: { Cell: 2, Row: 1 },
        onCellThreeOfRowOne: { Cell: 3, Row: 1 },
        onCellFourOfRowOne: { Cell: 4, Row: 1 },
        onCellFiveOfRowOne: { Cell: 5, Row: 1 },
      },
    },

    pawnTwo: {
      startingPosition: 9,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnThree: {
      startingPosition: 17,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnFour: {
      startingPosition: 25,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnFive: {
      startingPosition: 33,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnSix: {
      startingPosition: 41,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnSeven: {
      startingPosition: 49,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },

    pawnEight: {
      startingPosition: 57,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
  },

  bottomSidePawns: {
    pawnOne: {
      startingPosition: 6,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnTwo: {
      startingPosition: 14,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnThree: {
      startingPosition: 22,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnFour: {
      startingPosition: 30,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnFive: {
      startingPosition: 38,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnSix: {
      startingPosition: 46,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnSeven: {
      startingPosition: 54,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
    pawnEight: {
      startingPosition: 62,
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { moveComplete: true },
        doubleSpaceMoveNotComplete: { moveComplete: false },
      },
      watchForFirstMove: {
        firstMoveComplete: { isComplete: true },
        firstMoveNotComplete: { isComplete: false },
      },
    },
  },
};
export const pawnAssignmentObject = PAWN_ASSIGNMENTS;
