import PawnCellAssignments from "./assignPawnNames.js"
import FirstMoves from "./modules/FirstMove.js";
const Pawn = () => {
  const newPawnAssignments = PawnCellAssignments();
  newPawnAssignments.computerSideAssignments();
  newPawnAssignments.playerSideAssignments();
  const newFirstMoves = FirstMoves()
  newFirstMoves.validateFirstMoves()
  newFirstMoves.handleP2SingleSpaceDisplay()
  newFirstMoves.handleP2DoubleSpaceDisplay()

};

export default Pawn;
