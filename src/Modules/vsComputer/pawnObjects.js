const PAWN_ASSIGNMENTS = {
  pieceName: "Pawn",
  //tracks the top side pawns
  topSidePawns: {
    pawnOne: {
      startingCell: { startingPosition: 1 },
      watchForNextPawnMove: {
        readyForNextPawnMove: { isReady: true },
        notReadyForNextPawnMove: { isReady: false },
      },
      watchForDoubleSpace: {
        doubleSpaceMoveComplete: { isComplete: true },
        doubleSpaceMoveNotComplete: { isComplete: false },
        doubleSpaceMoveNotUsed: { isComplete: null },
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
      pawnCellStartingPosition: 9,
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
      pawnCellStartingPosition: 17,
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
      pawnCellStartingPosition: 25,
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
      pawnCellStartingPosition: 33,
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
      pawnCellStartingPosition: 41,
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
      pawnCellStartingPosition: 49,
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
      pawnCellStartingPosition: 57,
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
      pawnCellStartingPosition: 6,
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
      pawnCellStartingPosition: 14,
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
      pawnCellStartingPosition: 22,
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
      pawnCellStartingPosition: 30,
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
      pawnCellStartingPosition: 38,
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
      pawnCellStartingPosition: 46,
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
      pawnCellStartingPosition: 54,
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
      pawnCellStartingPosition: 62,
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
