import PawnCellAssignments from "./modules/general-modules/PawnCellAssignments.js";
import PlayerDoubleSpacing from "./modules/player-modules/PlayerDoubleSpace.js";


const Pawn = () => {
  const newPawnAssignments = PawnCellAssignments();
  newPawnAssignments.computerSideAssignments();
  newPawnAssignments.playerSideAssignments();
  const newPlayerDoubleSpacing = PlayerDoubleSpacing()
  newPlayerDoubleSpacing.validateDoubleSpacing()
};

export default Pawn;
