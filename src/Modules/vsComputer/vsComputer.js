import ChessPieceAssignments from "./ChessPieceAssignments.js";
import ChessBoardColors from "./ChessBoardColors.js";
import Pawn from "./Pawn.js";

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
