import createChessBoard from "./dist/chessBoard/modules/ChessBoard.js"
import ChessBoardColors from "./dist/chessBoard/modules/ChessBoardColors.js"
import Pawn from "./dist/chessPieces/pawn/player/Pawn.js"

const ChessApp = () => {
  createChessBoard()
  ChessBoardColors()
  Pawn()
};

ChessApp();
