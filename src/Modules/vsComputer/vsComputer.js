import ChessPieceAssignments from "./ChessPieceAssignments.js";
import ChessBoardColors from "./ChessBoardColors.js";

const vsComputer = () => {
  const newChessPieceAssignments = ChessPieceAssignments();
  newChessPieceAssignments.pawnCellAssignments();
  newChessPieceAssignments.kingCellAssignments()
  newChessPieceAssignments.queenCellAssignments()
  newChessPieceAssignments.bishopCellAssignments()
  newChessPieceAssignments.rookCellAssignments()
  newChessPieceAssignments.knightCellAssignments()
  const newChessBoardColors = ChessBoardColors()
  newChessBoardColors.cellColors()
};

export default vsComputer;
