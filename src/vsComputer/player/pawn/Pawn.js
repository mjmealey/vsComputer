import PawnCellAssignments from "./assignPawnNames.js"
import FirstMoves from "./modules/FirstMove.js";
import PawnAdvancePositioning from "./modules/AdvancePositioning.js";

const Pawn = () => {
  const newPawnAssignments = PawnCellAssignments();
  const newFirstMoves = FirstMoves()
  newFirstMoves.validateFirstMoves()
  const newAdvancePositioning = PawnAdvancePositioning()
  newAdvancePositioning.validatePawnAdvancePositioning()
};

export default Pawn;
