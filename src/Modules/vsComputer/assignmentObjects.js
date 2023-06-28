const PAWN_ASSIGNMENTS = {
  pieceName: "Pawn",

  
  pawnCellOne: {
    pawnCellStartingPosition: 1,
    readyForNextPawnMove: "Ready for Cell One Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell One Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell One",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell One",
    //watches for the position of cell one's pawn(going off of array index)
    cellOnePawnOnCellOne:"Cell One Pawn is on Cell One",
    cellOnePawnOnCellTwo:"Cell One Pawn is on Cell Two",
    cellOnePawnOnCellThree:"Cell One Pawn is on Cell Three",
    cellOnePawnOnCellFour:"Cell One Pawn is on Cell Four",
    cellOnePawnOnCellFive:"Cell One Pawn is on Cell Five",
  },
  pawnCellSix: {
    pawnCellStartingPosition: 6,
    readyForNextPawnMove: "Ready for Cell Six Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Six Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Six",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Six",
    //watches for the position of cell six's pawn
    cellSixPawnOnCellOne:"Cell Six Pawn is on Cell One",
    cellSixPawnOnCellTwo:"Cell Six Pawn is on Cell Two",
    cellSixPawnOnCellThree:"Cell Six Pawn is on Cell Three",
    cellSixPawnOnCellFour:"Cell Six Pawn is on Cell Four",
    cellSixPawnOnCellFive:"Cell Six Pawn is on Cell Five",
   
  },
  pawnCellNine: {
    pawnCellStartingPosition: 9,
    readyForNextPawnMove: "Ready for Cell Nine Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Nine Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Nine",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Nine",
  },
  pawnCellFourteen: {
    pawnCellStartingPosition: 14,
    readyForNextPawnMove: "Ready for Cell Fourteen Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Fourteen Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Fourteen",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Fourteen",
  },
  pawnCellSeventeen: {
    pawnCellStartingPosition: 17,
    readyForNextPawnMove: "Ready for Cell Seventeen Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Seventeen Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Seventeen",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Seventeen",
  },
  pawnCellTwentyTwo: {
    pawnCellStartingPosition: 22,
    readyForNextPawnMove: "Ready for Cell Twenty-Two Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Twenty Two Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Twenty-Two",
    firstPawnMoveNotComplete:
      "First Pawn Move Not Complete for Cell Twenty-Two",
  },
  pawnCellTwentyFive: {
    pawnCellStartingPosition: 25,
    readyForNextPawnMove: "Ready for Cell Twenty-Five Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Twenty Five Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Twenty-Five",
    firstPawnMoveNotComplete:
      "First Pawn Move Not Complete for Cell Twenty-Five",
  },
  pawnCellThirty: {
    pawnCellStartingPosition: 30,
    readyForNextPawnMove: "Not Ready for Cell Thirty Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Thirty Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Thirty",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Thirty",
  },
  pawnCellThirtyThree: {
    pawnCellStartingPosition: 33,
    readyForNextPawnMove: "Ready for Cell Thirty-Three Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Thirty-Three Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Thirty-Three",
    firstPawnMoveNotComplete:
      "First Pawn Move Not Complete for Cell Thirty-Three",
  },
  pawnCellThirtyEight: {
    pawnCellStartingPosition: 38,
    readyForNextPawnMove: "Ready for Cell Thirty-Eight Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Thirty-Eight Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Thirty-Eight",
    firstPawnMoveNotComplete:
      "First Pawn Move Not Complete for Cell Thirty-Eight",
  },
  pawnCellFortyOne: {
    pawnCellStartingPosition: 41,
    readyForNextPawnMove: "Ready for Cell Forty-One Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Forty-One Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Forty-One",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Forty-One",
  },
  pawnCellFortySix: {
    pawnCellStartingPosition: 46,
    readyForNextPawnMove: "Ready for Cell Forty-Six Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Forty-Six Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Forty-Six",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Forty-Six",
  },
  pawnCellFortyNine: {
    pawnCellStartingPosition: 49,
    readyForNextPawnMove: "Ready for Cell Forty-Nine Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Forty-Nine Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Forty-Nine",
    firstPawnMoveNotComplete:
      "First Pawn Move Not Complete for Cell Forty-Nine",
  },
  pawnCellFiftyFour: {
    pawnCellStartingPosition: 54,
    readyForNextPawnMove: "Ready for Cell Fifty-Four Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Fifty-Four Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Fifty-Four",
    firstPawnMoveNotComplete:
      "First Pawn Move Not Complete for Cell Fifty-Four",
  },
  pawnCellFiftySeven: {
    pawnCellStartingPosition: 57,
    readyForNextPawnMove: "Ready for Cell Fifty-Seven Pawn Move",
    notReadyForNextPawnMove: "Not Ready for Cell Fifty-Seven Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Fifty-Seven",
    firstPawnMoveNotComplete:
      "First Pawn Move Not Complete for Cell Fifty-Seven",
  },
  pawnCellSixtyTwo: {
    pawnCellStartingPosition: 62,
    readyForNextPawnMove: "Ready for Cell Sixty-Two Pawn Move",
    notReadyForNextPawnMove: "Ready for Cell Sixty-Two Pawn Move",
    firstPawnMoveComplete: "First Pawn Move Complete for Cell Sixty-Two",
    firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Sixty-Two",
  },
};

const ROOK_ASSIGNMENTS = {
  //starting rook positions
  rookCell0: "Rook",
  rookCell7: "Rook",
  rookCell56: "Rook",
  rookCell63: "Rook",
};

const KNIGHT_ASSIGNMENTS = {
  //starting knight positions
  knightCell8: "Knight",
  knightCell15: "Knight",
  knightCell48: "Knight",
  knightCell55: "Knight",
};

const BISHOP_ASSIGNMENTS = {
  //starting bishop positions
  bishopCell16: "Bishop",
  bishopCell23: "Bishop",
  bishopCell40: "Bishop",
  bishopCell47: "Bishop",
};

const QUEEN_ASSIGNMENTS = {
  //starting queen positions
  queenCell24: "Queen",
  queenCell31: "Queen",
};

const KING_ASSIGNMENTS = {
  //starting king positions
  kingCell32: "King",
  kingCell39: "King",
};

const EMPTY_CELL_ASSIGNMENTS = {
  //empty at start
  emptyCell2: "",
  emptyCell3: "",
  emptyCell4: "",
  emptyCell5: "",
  emptyCell10: "",
  emptyCell11: "",
  emptyCell12: "",
  emptyCell13: "",
  emptyCell18: "",
  emptyCell19: "",
  emptyCell20: "",
  emptyCell21: "",
  emptyCell26: "",
  emptyCell27: "",
  emptyCell28: "",
  emptyCell29: "",
  emptyCell34: "",
  emptyCell35: "",
  emptyCell36: "",
  emptyCell37: "",
  emptyCell42: "",
  emptyCell43: "",
  emptyCell44: "",
  emptyCell45: "",
  emptyCell50: "",
  emptyCell51: "",
  emptyCell52: "",
  emptyCell53: "",
  emptyCell58: "",
  emptyCell59: "",
  emptyCell60: "",
  emptyCell61: "",
};

export const pawnAssignmentObject = PAWN_ASSIGNMENTS;
export const rookAssignmentObject = ROOK_ASSIGNMENTS;
export const knightAssignmentObject = KNIGHT_ASSIGNMENTS;
export const bishopAssignmentObject = BISHOP_ASSIGNMENTS;
export const queenAssignmentObject = QUEEN_ASSIGNMENTS;
export const kingAssignmentObject = KING_ASSIGNMENTS;
export const emptyCellAssignments = EMPTY_CELL_ASSIGNMENTS;
