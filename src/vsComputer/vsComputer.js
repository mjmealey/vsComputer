import ChessPieceAssignments from "./modules/ChessPieceAssignments.js";
import ChessBoardColors from "./modules/ChessBoardColors.js";

const vsComputer = () => {
  const newChessPieceAssignments = ChessPieceAssignments();
  newChessPieceAssignments.kingCellAssignments()
  newChessPieceAssignments.queenCellAssignments()
  newChessPieceAssignments.bishopCellAssignments()
  newChessPieceAssignments.rookCellAssignments()
  newChessPieceAssignments.knightCellAssignments()
  newChessPieceAssignments.startOfGame()
  const newChessBoardColors = ChessBoardColors()
  newChessBoardColors.cellColors() 
  
};

export default vsComputer;
