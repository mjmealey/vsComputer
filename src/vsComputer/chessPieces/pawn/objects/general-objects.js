const pawnAssignments = {
  pieceName: "Pawn",

  computerSide: {
    pawnOne: {
      assignedName: "p1",
      assignedNumber: 1,
      startingPosition: { row: 0, col: 1 },
      doubleSpacingPosition: { row: 0, col: 3 },
    },
    pawnTwo: {
      assignedName: "p2",
      assignedNumber: 2,
      startingPosition: { row: 1, col: 1 },
      doubleSpacingPosition: { row: 1, col: 3 },
    },

    pawnThree: {
      assignedName: "p3",
      assignedNumber: 3,
      startingPosition: { row: 2, col: 1 },
      doubleSpacingPosition: { row: 2, col: 3 },
    },

    pawnFour: {
      assignedName: "p4",
      assignedNumber: 4,
      startingPosition: { row: 3, col: 1 },
      doubleSpacingPosition: { row: 3, col: 3 },
    },

    pawnFive: {
      assignedName: "p5",
      assignedNumber: 5,
      startingPosition: { row: 4, col: 1 },
      doubleSpacingPosition: { row: 4, col: 3 },
    },

    pawnSix: {
      assignedName: "p6",
      assignedNumber: 6,
      startingPosition: { row: 5, col: 1 },
      doubleSpacingPosition: { row: 5, col: 3 },
    },

    pawnSeven: {
      assignedName: "p7",
      assignedNumber: 7,
      startingPosition: { row: 6, col: 1 },
      doubleSpacingPosition: { row: 6, col: 3 },
    },

    pawnEight: {
      assignedName: "p8",
      assignedNumber: 8,
      startingPosition: { row: 7, col: 1 },
      doubleSpacingPosition: { row: 7, col: 3 },
    },
  },
  playerSide: {
    pawnOne: {
      assignedName: "P1",
      assignedNumber: 1,
      startingPosition: { row: 0, col: 6 },
      singleSpacingAtStartPosition: { row: 0, col: 5 },
      doubleSpacingPosition: { row: 0, col: 4 },
      firstMoveIsSingleSpace: {isSingleSpace: true},
      firstMoveIsNotSingleSpace: {isSingleSpace: false},
      firstMoveIsDoubleSpace: {isDoubleSpace: true},
      firstMoveIsNotDoubleSpace: {isDoubleSpace: false},
      colors: {
        default: "black",
      },
    },
    pawnTwo: {
      assignedName: "P2",
      assignedNumber: 2,
      startingPosition: { row: 1, col: 14 },
      singleSpacingAtStartPosition: { row: 1, col: 13 },
      doubleSpacingPosition: { row: 1, col: 12 },
      colors: {
        default: "black",
      },
    },
    pawnThree: {
      assignedName: "P3",
      assignedNumber: 3,
      startingPosition: { row: 2, col: 22 },
      singleSpacingAtStartPosition: { row: 2, col: 21 },
      doubleSpacingPosition: { row: 2, col: 20 },
      colors: {
        default: "black",
      },
    },
    pawnFour: {
      assignedName: "P4",
      assignedNumber: 4,
      startingPosition: { row: 3, col: 30 },
      singleSpacingAtStartPosition: { row: 3, col: 29 },
      doubleSpacingPosition: { row: 3, col: 28 },
      colors: {
        default: "black",
      },
    },
    pawnFive: {
      assignedName: "P5",
      assignedNumber: 5,
      startingPosition: { row: 4, col: 38 },
      singleSpacingAtStartPosition: { row: 4, col: 37 },
      doubleSpacingPosition: { row: 4, col: 36 },
      colors: {
        default: "black",
      },
    },
    pawnSix: {
      assignedName: "P6",
      assignedNumber: 6,
      startingPosition: { row: 5, col: 46 },
      singleSpacingAtStartPosition: { row: 5, col: 45 },
      doubleSpacingPosition: { row: 5, col: 44 },
      colors: {
        default: "black",
      },
    },
    pawnSeven: {
      assignedName: "P7",
      assignedNumber: 7,
      startingPosition: { row: 6, col: 54 },
      singleSpacingAtStartPosition: { row: 6, col: 53 },
      doubleSpacingPosition: { row: 6, col: 52 },
      colors: {
        default: "black",
      },
    },
    pawnEight: {
      assignedName: "P8",
      assignedNumber: 8,
      startingPosition: { row: 7, col: 62 },
      singleSpacingAtStartPosition: { row: 7, col: 61 },
      doubleSpacingPosition: { row: 7, col: 60 },
      colors: {
        default: "black",
      },
    },
  },
};
export const pawnAssignmentObject = pawnAssignments;
