import PawnCellAssignments from "./modules/general-modules/PawnCellAssignments.js";
import PlayerDoubleSpacing from "./modules/player-modules/PlayerDoubleSpace.js";
import PlayerSingleSpaceAtStart from "./modules/player-modules/PlayerSingleSpace.js";

const Pawn = () => {
  const newPawnAssignments = PawnCellAssignments();
  newPawnAssignments.computerSideAssignments();
  newPawnAssignments.playerSideAssignments();
  const newPlayerDoubleSpacing = PlayerDoubleSpacing()
  newPlayerDoubleSpacing.validateDoubleSpacing()
  newPlayerDoubleSpacing.handleP1DoubleSpacing()
  const newPlayerSingleSpaceAtStart = PlayerSingleSpaceAtStart()
  newPlayerSingleSpaceAtStart.validateSingleSpaceAtStart() 

};

export default Pawn;
