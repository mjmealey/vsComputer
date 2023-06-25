const displayGameStateText = {
    textElement: "div",
    preGameStartingText: "Welcome to Chess!",
    gameStartingText: "The game has begun!",
    ifRookIsClickedAtStart: "You cannot move rooks at the start of the game",
    ifBishopIsClickedAtStart:
      "You cannot move bishops at the start of the game",
    ifQueenIsClickedAtStart:
      "You cannot move the queen at the start of the game",
    ifKingIsClickedAtStart: "You cannot move the king at the start of the game",
    ifKnightIsClicked: "Where would you like to move your knight?",
    ifPawnIsClicked: "Where would you like to move your pawn?",
    ifQueenIsClicked: "Where would you like to move your queen?",
    ifKingIsClicked: "Where would you like to move your king?",
    ifRookIsClicked: "Where would you like to move your rook?",
    ifBishopIsClicked: "Where would you like to move your bishop?",
  };

  const trackGameState = {
    //first move
    emptyFirstMove: "",
    emptyCell: "",
    emptyPieceSelection: "",
    pawnFirstMove: "Pawn",
    knightFirstMove: "Knight",
    isFirstMove: true,
    isNotFirstMove: false,
    isInvalidFirstMove: null,

    //rest of game
    currentRook: "Rook",
    currentBishop: "Bishop",
    currentKnight: "Knight",
    currentQueen: "Queen",
    currentKing: "King",
    currentPawn: "Pawn",
  };

  export const displayGameStateTextObject = displayGameStateText
  export const trackGameStateObject = trackGameState