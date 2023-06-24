import createChessBoard from "./ChessBoard.js";
const gridCellIds = createChessBoard()
console.log(gridCellIds)

const ChessPieceAssignments = () => {
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

    const PAWN_ASSIGNMENTS = {
        //starting pawn positions
        pawnCell1: {
          pieceName: "Pawn",
          pieceNameOne: "Pawn",
          pieceNameTwo: "Pawn",
          pieceNameThree: "Pawn",
          pieceNameFour: "Pawn",
          pieceNameFive: "Pawn",
          pawnCellNumOne: 1,
          pawnCellNumTwo: 2,
          pawnCellNumThree: 3,
          pawnCellNumFour: 4,
          pawnCellNumFive: 5,
        },
        pawnCell6: {
          pieceName: "Pawn",
          pawnCellNum: 2,
        },
        pawnCell9: {
          pieceName: "Pawn",
          pawnCellNum: 9,
        },
        pawnCell14: {
          pieceName: "Pawn",
          pawnCellNum: 14,
        },
        pawnCell17: {
          pieceName: "Pawn",
          pawnCellNum: 17,
        },
        pawnCell22: {
          pieceName: "Pawn",
          pawnCellNum: 22,
        },
        pawnCell25: {
          pieceName: "Pawn",
          pawnCellNum: 25,
        },
        pawnCell30: {
          pieceName: "Pawn",
          pawnCellNum: 30,
        },
        pawnCell33: {
          pieceName: "Pawn",
          pawnCellNum: 33,
        },
        pawnCell38: {
          pieceName: "Pawn",
          pawnCellNum: 38,
        },
        pawnCell41: {
          pieceName: "Pawn",
          pawnCellNum: 41,
        },
        pawnCell46: {
          pieceName: "Pawn",
          pawnCellNum: 46,
        },
        pawnCell49: {
          pieceName: "Pawn",
          pawnCellNum: 49,
        },
        pawnCell54: {
          pieceName: "Pawn",
          pawnCellNum: 54,
        },
        pawnCell57: {
          pieceName: "Pawn",
          pawnCellNum: 57,
        },
        pawnCell62: {
          pieceName: "Pawn",
          pawnCellNum: 62,
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

    let currentPiece = trackGameState.emptyPieceSelection;
  let currentPawn = trackGameState.emptyPieceSelection;
  let currentPawnPiece = trackGameState.emptyPieceSelection;
  let currentlyClickedCell = "";
  let firstPiece = "";
  let firstPawn = "";
  //first move variable

  const displayGameState = document.createElement(
    displayGameStateText.textElement
  );
 

  const startOfGame = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    console.log(gridCellIds)
    //empty cell assignments
    if (emptyCellAssignments) {
      displayGameState.innerText = displayGameStateText.preGameStartingText;
      document.body.appendChild(displayGameState);
    } else {
      displayGameState.innerText = displayGameStateText.gameStartingText;
      document.body.appendChild(displayGameState);
    }
    return { startOfGame };
  };
    
      const pawnCellAssignments = (mappedCellIds) => {
        mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    
        mappedCellIds[1].textContent = PAWN_ASSIGNMENTS.pawnCell1.pieceName;
        mappedCellIds[6].textContent = PAWN_ASSIGNMENTS.pawnCell6.pieceName;
        mappedCellIds[9].textContent = PAWN_ASSIGNMENTS.pawnCell9.pieceName;
        mappedCellIds[14].textContent = PAWN_ASSIGNMENTS.pawnCell14.pieceName;
        mappedCellIds[17].textContent = PAWN_ASSIGNMENTS.pawnCell17.pieceName;
        mappedCellIds[22].textContent = PAWN_ASSIGNMENTS.pawnCell22.pieceName;
        mappedCellIds[25].textContent = PAWN_ASSIGNMENTS.pawnCell25.pieceName;
        mappedCellIds[30].textContent = PAWN_ASSIGNMENTS.pawnCell30.pieceName;
        mappedCellIds[33].textContent = PAWN_ASSIGNMENTS.pawnCell33.pieceName;
        mappedCellIds[38].textContent = PAWN_ASSIGNMENTS.pawnCell38.pieceName;
        mappedCellIds[41].textContent = PAWN_ASSIGNMENTS.pawnCell41.pieceName;
        mappedCellIds[46].textContent = PAWN_ASSIGNMENTS.pawnCell46.pieceName;
        mappedCellIds[49].textContent = PAWN_ASSIGNMENTS.pawnCell49.pieceName;
        mappedCellIds[54].textContent = PAWN_ASSIGNMENTS.pawnCell54.pieceName;
        mappedCellIds[57].textContent = PAWN_ASSIGNMENTS.pawnCell57.pieceName;
        mappedCellIds[62].textContent = PAWN_ASSIGNMENTS.pawnCell62.pieceName;
        
        return { pawnCellAssignments };
      };
    
      const rookCellAssignments = (mappedCellIds) => {
        mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    
        mappedCellIds[0].textContent = ROOK_ASSIGNMENTS.rookCell0;
        mappedCellIds[7].textContent = ROOK_ASSIGNMENTS.rookCell7;
        mappedCellIds[56].textContent = ROOK_ASSIGNMENTS.rookCell56;
        mappedCellIds[63].textContent = ROOK_ASSIGNMENTS.rookCell63;
    
        return { rookCellAssignments };
      };
    
      const knightCellAssignments = (mappedCellIds) => {
        mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    
        mappedCellIds[8].textContent = KNIGHT_ASSIGNMENTS.knightCell8;
        mappedCellIds[15].textContent = KNIGHT_ASSIGNMENTS.knightCell15;
        mappedCellIds[48].textContent = KNIGHT_ASSIGNMENTS.knightCell48;
        mappedCellIds[55].textContent = KNIGHT_ASSIGNMENTS.knightCell55;
    
        return { knightCellAssignments };
      };
    
      const bishopCellAssignments = (mappedCellIds) => {
        mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    
        mappedCellIds[16].textContent = BISHOP_ASSIGNMENTS.bishopCell16;
        mappedCellIds[23].textContent = BISHOP_ASSIGNMENTS.bishopCell23;
        mappedCellIds[40].textContent = BISHOP_ASSIGNMENTS.bishopCell40;
        mappedCellIds[47].textContent = BISHOP_ASSIGNMENTS.bishopCell47;
    
        return { bishopCellAssignments };
      };
    
      const queenCellAssignments = (mappedCellIds) => {
        mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    
        mappedCellIds[24].textContent = QUEEN_ASSIGNMENTS.queenCell24;
        mappedCellIds[31].textContent = QUEEN_ASSIGNMENTS.queenCell31;
    
        return { queenCellAssignments };
      };
    
      const kingCellAssignments = (mappedCellIds) => {
        mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    
        mappedCellIds[32].textContent = KING_ASSIGNMENTS.kingCell32;
        mappedCellIds[39].textContent = KING_ASSIGNMENTS.kingCell39;
    
        return { kingCellAssignments };
      };
    
      const emptyCellAssignments = (mappedCellIds) => {
        mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    
        mappedCellIds[2].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell2;
        mappedCellIds[3].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell3;
        mappedCellIds[4].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell4;
        mappedCellIds[5].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell5;
        mappedCellIds[10].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell10;
        mappedCellIds[11].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell11;
        mappedCellIds[12].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell12;
        mappedCellIds[13].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell13;
        mappedCellIds[18].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell18;
        mappedCellIds[19].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell19;
        mappedCellIds[20].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell20;
        mappedCellIds[21].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell21;
        mappedCellIds[26].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell26;
        mappedCellIds[27].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell27;
        mappedCellIds[28].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell28;
        mappedCellIds[29].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell29;
        mappedCellIds[34].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell34;
        mappedCellIds[35].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell35;
        mappedCellIds[36].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell36;
        mappedCellIds[37].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell37;
        mappedCellIds[42].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell42;
        mappedCellIds[43].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell43;
        mappedCellIds[44].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell44;
        mappedCellIds[45].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell45;
        mappedCellIds[50].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell50;
        mappedCellIds[51].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell51;
        mappedCellIds[52].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell52;
        mappedCellIds[53].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell53;
        mappedCellIds[58].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell58;
        mappedCellIds[59].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell59;
        mappedCellIds[60].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell60;
        mappedCellIds[61].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell61;
    
        return { emptyCellAssignments };
      };

      return {
        pawnCellAssignments,
        kingCellAssignments,
        rookCellAssignments,
        queenCellAssignments,
        bishopCellAssignments,
        emptyCellAssignments,
        knightCellAssignments,
      }
}

export default ChessPieceAssignments
export const getCellIds = gridCellIds