import PawnCellAssignments from "./pawnModules/PawnAssignments.js"

const Pawn = () => {
const newPawnAssignments = PawnCellAssignments()
newPawnAssignments.computerSideAssignments()
newPawnAssignments.playerSideAssignments()
}

export default Pawn 