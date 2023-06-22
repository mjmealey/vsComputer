
import chessBoard from "./ChessBoard.js"

const vsComputer = () => {
  const newChessBoard = chessBoard()
  newChessBoard.createChessBoard()
  newChessBoard.startOfGame()
  newChessBoard.cellColors()
  newChessBoard.pawnCellAssignments()
  newChessBoard.rookCellAssignments()
  newChessBoard.knightCellAssignments()
  newChessBoard.bishopCellAssignments()
  newChessBoard.queenCellAssignments()
  newChessBoard.kingCellAssignments()
  newChessBoard.emptyCellAssignments()
  newChessBoard.clickGridCells()
  newChessBoard.clickRookCell()
  newChessBoard.clickKnightCell()
  newChessBoard.clickBishopCell()
  newChessBoard.clickQueenCell()
  newChessBoard.clickKingCell()
  newChessBoard.clickPawnCell() 
}



export default vsComputer

