const pawnPositioningData = {
  /* Key Comments 
  the pawns go from left to right starting from pawnOne and ending at pawnEight
  atStart tracks the pawns in their starting position
  firstMove tracks the single spacing and double spacing possibilities for the pawn's first move
  promotionCells tracks the pawns when they are at the other side of the board and able to be promoted to a higher power i.e queen, bishop, knight, rook, etc
  generalPositioning tracks the pawns when they are in cells that serve no specific purpose except to move the game
 */
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
    advancePositioning: {
      cellTwo: { row: 0, column: 2 },
      cellThree: { row: 0, column: 3 },
      cellFour: { row: 0, column: 4 },

      cellTen: { row: 1, column: 10 },
      cellEleven: { row: 1, column: 11 },
      cellTwelve: { row: 1, column: 12 },

      cellEighteen: { row: 2, column: 18 },
      cellNinteen: { row: 2, column: 19 },
      cellTwenty: { row: 2, column: 20 },

      cellTwentySix: { row: 3, column: 26 },
      cellTwentySeven: { row: 3, column: 27 },
      cellTwentyEight: { row: 3, column: 28 },

      cellThirtyFour: { row: 4, column: 34 },
      cellThirtyFive: { row: 4, column: 35 },
      cellThirtySix: { row: 4, column: 36 },

      cellFortyTwo: { row: 5, column: 42 },
      cellFortyThree: { row: 5, column: 43 },
      cellFortyFour: { row: 5, column: 44 },

      cellFifty: { row: 6, column: 50 },
      cellFiftyOne: { row: 6, column: 51 },
      cellFiftyTwo: { row: 6, column: 52 },

      cellFiftyEight: { row: 7, column: 58 },
      cellFiftyNine: { row: 7, column: 59 },
      cellSixty: { row: 7, column: 60 },
    },
  },
  pawnTwo: {
    atStart: { row: 1, column: 14 },
    firstMove: {
      singleSpace: { row: 1, column: 13 },
      doubleSpace: { row: 1, column: 12 },
    },
    promotionCells: {
      rowZero: {
        prePromotion: { row: 0, column: 1 },
        timeForPromotion: { row: 0, column: 0 },
      },
      rowOne: {
        prePromotion: { row: 1, column: 9 },
        timeForPromotion: { row: 1, column: 8 },
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
    advancePositioning: {
      cellTwo: { row: 0, column: 2 },
      cellThree: { row: 0, column: 3 },
      cellFour: { row: 0, column: 4 },

      cellTen: { row: 1, column: 10 },
      cellEleven: { row: 1, column: 11 },
      cellTwelve: { row: 1, column: 12 },

      cellEighteen: { row: 2, column: 18 },
      cellNinteen: { row: 2, column: 19 },
      cellTwenty: { row: 2, column: 20 },

      cellTwentySix: { row: 3, column: 26 },
      cellTwentySeven: { row: 3, column: 27 },
      cellTwentyEight: { row: 3, column: 28 },

      cellThirtyFour: { row: 4, column: 34 },
      cellThirtyFive: { row: 4, column: 35 },
      cellThirtySix: { row: 4, column: 36 },

      cellFortyTwo: { row: 5, column: 42 },
      cellFortyThree: { row: 5, column: 43 },
      cellFortyFour: { row: 5, column: 44 },

      cellFifty: { row: 6, column: 50 },
      cellFiftyOne: { row: 6, column: 51 },
      cellFiftyTwo: { row: 6, column: 52 },

      cellFiftyEight: { row: 7, column: 58 },
      cellFiftyNine: { row: 7, column: 59 },
      cellSixty: { row: 7, column: 60 },
    },
  },
  pawnThree: {
    atStart: { row: 2, column: 22 },
    firstMove: {
      singleSpace: { row: 2, column: 21 },
      doubleSpace: { row: 2, column: 20 },
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
    advancePositioning: {
      cellTwo: { row: 0, column: 2 },
      cellThree: { row: 0, column: 3 },
      cellFour: { row: 0, column: 4 },

      cellTen: { row: 1, column: 10 },
      cellEleven: { row: 1, column: 11 },
      cellTwelve: { row: 1, column: 12 },

      cellEighteen: { row: 2, column: 18 },
      cellNinteen: { row: 2, column: 19 },
      cellTwenty: { row: 2, column: 20 },

      cellTwentySix: { row: 3, column: 26 },
      cellTwentySeven: { row: 3, column: 27 },
      cellTwentyEight: { row: 3, column: 28 },

      cellThirtyFour: { row: 4, column: 34 },
      cellThirtyFive: { row: 4, column: 35 },
      cellThirtySix: { row: 4, column: 36 },

      cellFortyTwo: { row: 5, column: 42 },
      cellFortyThree: { row: 5, column: 43 },
      cellFortyFour: { row: 5, column: 44 },

      cellFifty: { row: 6, column: 50 },
      cellFiftyOne: { row: 6, column: 51 },
      cellFiftyTwo: { row: 6, column: 52 },

      cellFiftyEight: { row: 7, column: 58 },
      cellFiftyNine: { row: 7, column: 59 },
      cellSixty: { row: 7, column: 60 },
    },
  },

  pawnFour: {
    atStart: { row: 3, column: 30 },
    firstMove: {
      singleSpace: { row: 3, column: 29 },
      doubleSpace: { row: 3, column: 28 },
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
    advancePositioning: {
      cellTwo: { row: 0, column: 2 },
      cellThree: { row: 0, column: 3 },
      cellFour: { row: 0, column: 4 },

      cellTen: { row: 1, column: 10 },
      cellEleven: { row: 1, column: 11 },
      cellTwelve: { row: 1, column: 12 },

      cellEighteen: { row: 2, column: 18 },
      cellNinteen: { row: 2, column: 19 },
      cellTwenty: { row: 2, column: 20 },

      cellTwentySix: { row: 3, column: 26 },
      cellTwentySeven: { row: 3, column: 27 },
      cellTwentyEight: { row: 3, column: 28 },

      cellThirtyFour: { row: 4, column: 34 },
      cellThirtyFive: { row: 4, column: 35 },
      cellThirtySix: { row: 4, column: 36 },

      cellFortyTwo: { row: 5, column: 42 },
      cellFortyThree: { row: 5, column: 43 },
      cellFortyFour: { row: 5, column: 44 },

      cellFifty: { row: 6, column: 50 },
      cellFiftyOne: { row: 6, column: 51 },
      cellFiftyTwo: { row: 6, column: 52 },

      cellFiftyEight: { row: 7, column: 58 },
      cellFiftyNine: { row: 7, column: 59 },
      cellSixty: { row: 7, column: 60 },
    },
  },

  pawnFive: {
    atStart: { row: 4, column: 38 },
    firstMove: {
      singleSpace: { row: 4, column: 37 },
      doubleSpace: { row: 4, column: 36 },
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
    advancePositioning: {
      cellTwo: { row: 0, column: 2 },
      cellThree: { row: 0, column: 3 },
      cellFour: { row: 0, column: 4 },

      cellTen: { row: 1, column: 10 },
      cellEleven: { row: 1, column: 11 },
      cellTwelve: { row: 1, column: 12 },

      cellEighteen: { row: 2, column: 18 },
      cellNinteen: { row: 2, column: 19 },
      cellTwenty: { row: 2, column: 20 },

      cellTwentySix: { row: 3, column: 26 },
      cellTwentySeven: { row: 3, column: 27 },
      cellTwentyEight: { row: 3, column: 28 },

      cellThirtyFour: { row: 4, column: 34 },
      cellThirtyFive: { row: 4, column: 35 },
      cellThirtySix: { row: 4, column: 36 },

      cellFortyTwo: { row: 5, column: 42 },
      cellFortyThree: { row: 5, column: 43 },
      cellFortyFour: { row: 5, column: 44 },

      cellFifty: { row: 6, column: 50 },
      cellFiftyOne: { row: 6, column: 51 },
      cellFiftyTwo: { row: 6, column: 52 },

      cellFiftyEight: { row: 7, column: 58 },
      cellFiftyNine: { row: 7, column: 59 },
      cellSixty: { row: 7, column: 60 },
    },
  },
  pawnSix: {
    atStart: { row: 5, column: 46 },
    firstMove: {
      singleSpace: { row: 5, column: 45 },
      doubleSpace: { row: 5, column: 44 },
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
    advancePositioning: {
      cellTwo: { row: 0, column: 2 },
      cellThree: { row: 0, column: 3 },
      cellFour: { row: 0, column: 4 },

      cellTen: { row: 1, column: 10 },
      cellEleven: { row: 1, column: 11 },
      cellTwelve: { row: 1, column: 12 },

      cellEighteen: { row: 2, column: 18 },
      cellNinteen: { row: 2, column: 19 },
      cellTwenty: { row: 2, column: 20 },

      cellTwentySix: { row: 3, column: 26 },
      cellTwentySeven: { row: 3, column: 27 },
      cellTwentyEight: { row: 3, column: 28 },

      cellThirtyFour: { row: 4, column: 34 },
      cellThirtyFive: { row: 4, column: 35 },
      cellThirtySix: { row: 4, column: 36 },

      cellFortyTwo: { row: 5, column: 42 },
      cellFortyThree: { row: 5, column: 43 },
      cellFortyFour: { row: 5, column: 44 },

      cellFifty: { row: 6, column: 50 },
      cellFiftyOne: { row: 6, column: 51 },
      cellFiftyTwo: { row: 6, column: 52 },

      cellFiftyEight: { row: 7, column: 58 },
      cellFiftyNine: { row: 7, column: 59 },
      cellSixty: { row: 7, column: 60 },
    },
  },
  pawnSeven: {
    atStart: { row: 6, column: 54 },
    firstMove: {
      singleSpace: { row: 6, column: 53 },
      doubleSpace: { row: 6, column: 52 },
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
    advancePositioning: {
      cellTwo: { row: 0, column: 2 },
      cellThree: { row: 0, column: 3 },
      cellFour: { row: 0, column: 4 },

      cellTen: { row: 1, column: 10 },
      cellEleven: { row: 1, column: 11 },
      cellTwelve: { row: 1, column: 12 },

      cellEighteen: { row: 2, column: 18 },
      cellNinteen: { row: 2, column: 19 },
      cellTwenty: { row: 2, column: 20 },

      cellTwentySix: { row: 3, column: 26 },
      cellTwentySeven: { row: 3, column: 27 },
      cellTwentyEight: { row: 3, column: 28 },

      cellThirtyFour: { row: 4, column: 34 },
      cellThirtyFive: { row: 4, column: 35 },
      cellThirtySix: { row: 4, column: 36 },

      cellFortyTwo: { row: 5, column: 42 },
      cellFortyThree: { row: 5, column: 43 },
      cellFortyFour: { row: 5, column: 44 },

      cellFifty: { row: 6, column: 50 },
      cellFiftyOne: { row: 6, column: 51 },
      cellFiftyTwo: { row: 6, column: 52 },

      cellFiftyEight: { row: 7, column: 58 },
      cellFiftyNine: { row: 7, column: 59 },
      cellSixty: { row: 7, column: 60 },
    },
  },
  pawnEight: {
    atStart: { row: 7, column: 62 },
    firstMove: {
      singleSpace: { row: 7, column: 61 },
      doubleSpace: { row: 7, column: 60 },
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
  },
  advancePositioning: {
    cellTwo: { row: 0, column: 2 },
    cellThree: { row: 0, column: 3 },
    cellFour: { row: 0, column: 4 },

    cellTen: { row: 1, column: 10 },
    cellEleven: { row: 1, column: 11 },
    cellTwelve: { row: 1, column: 12 },

    cellEighteen: { row: 2, column: 18 },
    cellNinteen: { row: 2, column: 19 },
    cellTwenty: { row: 2, column: 20 },

    cellTwentySix: { row: 3, column: 26 },
    cellTwentySeven: { row: 3, column: 27 },
    cellTwentyEight: { row: 3, column: 28 },

    cellThirtyFour: { row: 4, column: 34 },
    cellThirtyFive: { row: 4, column: 35 },
    cellThirtySix: { row: 4, column: 36 },

    cellFortyTwo: { row: 5, column: 42 },
    cellFortyThree: { row: 5, column: 43 },
    cellFortyFour: { row: 5, column: 44 },

    cellFifty: { row: 6, column: 50 },
    cellFiftyOne: { row: 6, column: 51 },
    cellFiftyTwo: { row: 6, column: 52 },

    cellFiftyEight: { row: 7, column: 58 },
    cellFiftyNine: { row: 7, column: 59 },
    cellSixty: { row: 7, column: 60 },
  },
};

export const pawnPositioning = pawnPositioningData;
