import PawnCellAssignments from "./assignPawnNames.js";
import handleP1 from "./modules/Displays/P1/handleP1Displays.js";
import handleP2Displays from "./modules/Displays/P2/handleP2Displays.js";
import handleP3Displays from "./modules/Displays/P3/handleP3Displays.js";
import handleP4Displays from "./modules/Displays/P4/handleP4Displays.js";
import handleP5Displays from "./modules/Displays/P5/handleP5Displays.js";
import PawnPositioning from "./modules/Positioning/PawnPositioning.js";
const Pawn = () => {
  PawnCellAssignments();
  handleP1()
  handleP2Displays()
  handleP3Displays()
  handleP4Displays()
  handleP5Displays()
  PawnPositioning()
};

export default Pawn;
