import ChessBoard from "./modules/ChessBoard.js";
import ChessBoardColors from "./modules/ChessBoardColors.js";

const vsComputer = () => {
  const newChessBoard = ChessBoard()
  newChessBoard.createChessBoard()
  const newChessBoardColors = ChessBoardColors()
  newChessBoardColors.cellColors() 
 

};

export default vsComputer;
