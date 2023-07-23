const pawnPositioningData = {
  pawnOne: {
    atStart: { row: 0, column: 6 },
    firstMove: {
      singleSpace: { row: 0, column: 5 },
      doubleSpace: { row: 0, column: 4 },
    },
    promotionCells: {
      rowZero: {
        prePromotion: { row: 0, column: 1 },
        timeForPromotion: { row: 0, column: 0 },
      },
      rowOne: {
        prePromotion: { row: 1, column: 9 },
        timeForPromotion: { row: 0, column: 8 },
      },
      rowTwo: {
        prePromotion: { row: 2, column: 17 },
        timeForPromotion: { row: 2, column: 16 },
      },
      rowThree: {
        prePromotion: { row: 3, column: 25 },
        timeForPromotion: { row: 3, column: 24 },
      },
      rowFour: {
        prePromotion: { row: 4, column: 33 },
        timeForPromotion: { row: 4, column: 32 },
      },
      rowFive: {
        prePromotion: { row: 5, column: 41 },
        timeForPromotion: { row: 5, column: 40 },
      },
      rowSix: {
        prePromotion: { row: 6, column: 49 },
        timeForPromotion: { row: 6, column: 48 },
      },
      rowSeven: {
        prePromotion: { row: 7, column: 57 },
        timeForPromotion: { row: 7, column: 56 },
      },
    },
    //general positioning
    rowZero: {
      cellTwo: { row: 0, column: 2 },
      cellThree: { row: 0, column: 3 },
      cellFour: { row: 0, column: 4 },
    },
    rowOne: {
      cellTwo: { row: 1, column: 10 },
      cellThree: { row: 1, column: 11 },
      cellFour: { row: 1, column: 12 },
    },
  },
  pawnTwo: {
    atStart: { row: 1, column: 14 },
    firstMove: {
      singleSpace: { row: 1, column: 13 },
      doubleSpace: { row: 1, column: 12 },
    },
  },
  pawnThree: {
    atStart: { row: 2, column: 22 },
    firstMove: {
      singleSpace: { row: 2, column: 21 },
      doubleSpace: { row: 2, column: 20 },
    },
  },

  pawnFour: {
    atStart: { row: 3, column: 30 },
    firstMove: {
      singleSpace: { row: 3, column: 29 },
      doubleSpace: { row: 3, column: 28 },
    },
  },

  pawnFive: {
    atStart: { row: 4, column: 38 },
    firstMove: {
      singleSpace: { row: 4, column: 37 },
      doubleSpace: { row: 4, column: 36 },
    },
  },
  pawnSix: {
    atStart: { row: 5, column: 46 },
    firstMove: {
      singleSpace: { row: 5, column: 45 },
      doubleSpace: { row: 5, column: 44 },
    },
  },
  pawnSeven: {
    atStart: { row: 6, column: 54 },
    firstMove: {
      singleSpace: { row: 6, column: 53 },
      doubleSpace: { row: 6, column: 52 },
    },
  },
  pawnEight: {
    atStart: { row: 7, column: 62 },
    firstMove: {
      singleSpace: { row: 7, column: 61 },
      doubleSpace: { row: 7, column: 60 },
    },
  },
};

export const pawnPositioning = pawnPositioningData;
