import PawnCellAssignments from "./assignPawnNames.js"
import FirstMoves from "./modules/FirstMove.js";
const Pawn = () => {
  const newPawnAssignments = PawnCellAssignments();
  const newFirstMoves = FirstMoves()
  newFirstMoves.validateFirstMoves()
};

export default Pawn;
