import chessBoard from "./ChessBoard.js"

const vsComputer = () => {
  const newChessBoard = chessBoard()
  newChessBoard.chessGame()
  newChessBoard.cellColors()
 
}

export default vsComputer

