import PawnCellAssignments from "./assignPawnNames.js";
import FirstMoveDisplays from "./modules/Displays/FirstMoveDisplays.js";
import PawnPositioning from "./modules/Positioning/PawnPositioning.js";
const Pawn = () => {
  const newPawnAssignments = PawnCellAssignments();
  const newFirstMoveDisplays = FirstMoveDisplays();
  newFirstMoveDisplays.handleStartSpaces();
  newFirstMoveDisplays.handleSingleSpaceDisplays();
  newFirstMoveDisplays.handleDoubleSpaceDisplay();
  PawnPositioning()
};

export default Pawn;
