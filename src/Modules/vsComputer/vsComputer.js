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
  newPawn.handleComputerSideDoubleSpaceClicks()
  newPawn.DOUBLE_SPACES_ON_BOTTOMSIDE()
  newPawn.PREVENT_PAWNS_ON_FIRST_SPACES_AFTER_DOUBLE()
  newPawn.PREVENT_PAWNS_FROM_DUPLICATING_ON_SECOND_SPACE_AFTER_FIRST_SINGLE_SPACE()
};

export default vsComputer;
