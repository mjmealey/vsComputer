
import chessBoard from "./ChessBoard.js"

const vsComputer = () => {
  const newChessBoard = chessBoard()
  newChessBoard.createChessBoard()
  newChessBoard.chessGame()
  newChessBoard.cellColors()
  newChessBoard.rookMoves()
  newChessBoard.knightMoves()
  newChessBoard.pawnMoves()
  newChessBoard.queenMoves()
  newChessBoard.bishopMoves()
  newChessBoard.kingMoves()
 
}

export default vsComputer

