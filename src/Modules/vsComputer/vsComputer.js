
import chessBoard from "./ChessBoard.js"

const vsComputer = () => {
  const newChessBoard = chessBoard()
  newChessBoard.createChessBoard()
  newChessBoard.startingCells()
  newChessBoard.cellColors()
  newChessBoard.clickRookCell()
  newChessBoard.knightMoves()
  newChessBoard.pawnPositioning()
  newChessBoard.pawnMovement()
  newChessBoard.queenMoves()
  newChessBoard.bishopMoves()
  newChessBoard.kingMoves()
  newChessBoard.gridCellLocations()
 
}

export default vsComputer

