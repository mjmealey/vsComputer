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
  const newPawn = Pawn()
  newPawn.PAWN_CELL_ASSIGNMENTS()
  newPawn.WATCH_PAWN_POSITIONS()
  newPawn.DOUBLE_SPACES()
  newPawn.MOVE_ONE_SPACE_AT_START()
  newPawn.PREVENT_PAWNS_ON_FIRST_SPACES_AFTER_DOUBLE()
  newPawn.PREVENT_PAWNS_FROM_DUPLICATING_ON_SECOND_SPACE_AFTER_FIRST_SINGLE_SPACE()
};

export default vsComputer;
