import PawnCellAssignments from "./assignPawnNames.js";
import FirstMoveDisplays from "./modules/Displays/FirstMoveDisplays.js";
import PawnPositioning from "./modules/Positioning/PawnPositioning.js";

const Pawn = () => {
  PawnCellAssignments();
  FirstMoveDisplays();
  PawnPositioning();
};

export default Pawn;
