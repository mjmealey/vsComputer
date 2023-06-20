
import chessBoard from "./ChessBoard.js"

const vsComputer = () => {
  const newChessBoard = chessBoard()
  newChessBoard.createChessBoard()
  newChessBoard.startingCells()
  newChessBoard.cellColors()
  newChessBoard.clickGridCells()
  newChessBoard.clickRookCell()
  newChessBoard.clickKnightCell()
  newChessBoard.clickBishopCell()
  newChessBoard.clickQueenCell()
  newChessBoard.clickKingCell()
  newChessBoard.clickPawnCell()
 
}



export default vsComputer

