import PawnCellAssignments from "./modules/general-modules/PawnCellAssignments.js";
import ComputerPawnSpacingAtStart from "./modules/computer-modules/ComputerPawnSpacing.js";
import PlayerDoubleSpacing from "./modules/computer-modules/ComputerPawnSpacing.js";

const Pawn = () => {
  const newPawnAssignments = PawnCellAssignments();
  newPawnAssignments.computerSideAssignments();
  newPawnAssignments.playerSideAssignments();
  const newComputerPawnSpacingAtStart = PlayerDoubleSpacing()
  newComputerPawnSpacingAtStart.watchForDoubleSpacing()
};

export default Pawn;
