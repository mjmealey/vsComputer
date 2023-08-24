import PawnCellAssignments from "./assignPawnNames.js";
import FirstMoveDisplays from "./modules/Displays/FirstMoveDisplays.js";
import PawnPositioning from "./modules/Positioning/PawnPositioning.js";

import handleP1 from "./modules/P1/handleP1.js";

const Pawn = () => {
  PawnCellAssignments();
  handleP1()
};

export default Pawn;
