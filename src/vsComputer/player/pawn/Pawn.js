import PawnCellAssignments from "./assignPawnNames.js";
import FirstMoveDisplays from "./modules/Displays/FirstMoveDisplays.js";
import FirstMovePositioning from "./modules/Positioning/FirstMovePositioning.js";


const Pawn = () => {
  const newPawnAssignments = PawnCellAssignments();
  const newFirstMoveDisplays = FirstMoveDisplays();
  newFirstMoveDisplays.handleStartSpaces();
  newFirstMoveDisplays.handleSingleSpaceDisplays();
  newFirstMoveDisplays.handleDoubleSpaceDisplay();
  const newFirstMovePositioning = FirstMovePositioning();
  newFirstMovePositioning.validateFirstMoves();
};

export default Pawn;
