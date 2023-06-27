import ChessPieceAssignments from "./ChessPieceAssignments.js";
import ChessBoardColors from "./ChessBoardColors.js";
import ChessPieceClicks from "./ChessPieceClicks.js";

const vsComputer = () => {
  const newChessPieceAssignments = ChessPieceAssignments();
  newChessPieceAssignments.pawnCellAssignments();
  newChessPieceAssignments.kingCellAssignments()
  newChessPieceAssignments.queenCellAssignments()
  newChessPieceAssignments.bishopCellAssignments()
  newChessPieceAssignments.rookCellAssignments()
  newChessPieceAssignments.knightCellAssignments()
  newChessPieceAssignments.startOfGame()
  const newChessBoardColors = ChessBoardColors()
  newChessBoardColors.cellColors() 
  const newChessPieceClick = ChessPieceClicks()
  newChessPieceClick.clickPawnCell() 

};

export default vsComputer;
