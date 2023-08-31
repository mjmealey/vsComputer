import ChessBoard from "./modules/tsCompiler/ChessBoard.js";
import ChessBoardColors from "./modules/ChessBoardColors.js";

const vsComputer = () => {
  const newChessBoard = ChessBoard()
  newChessBoard.createChessBoard()
  const newChessBoardColors = ChessBoardColors() 
 

};

export default vsComputer;
