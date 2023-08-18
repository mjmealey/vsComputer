import PawnCellAssignments from "./assignPawnNames.js";
import DoubleSpaceDisplays from "./modules/Displays/DoubleSpaceDisplay.js";
import SingleSpaceDisplays from "./modules/Displays/SingleSpaceDisplay.js";
import PawnPositioning from "./modules/Positioning/PawnPositioning.js";

const Pawn = () => {
  PawnCellAssignments();
  SingleSpaceDisplays();
  DoubleSpaceDisplays();

  PawnPositioning();
};

export default Pawn;
