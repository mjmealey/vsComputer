import { getCellIds } from "../../modules/ChessPieceAssignments.js";
import { pawnName } from "../pawn/objects/pawnName.js"

const assignPawnNames = (mappedCellIds) => {
  mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  const startingCells = [6, 14, 22, 30, 38, 46, 54, 62];
  const name = pawnName.name;
  for (let nameIndex = 0; nameIndex < getCellIds.length; nameIndex++) {
    if (startingCells.includes(nameIndex)) {
      mappedCellIds[nameIndex].textContent = name;
    }
  }
  return { assignPawnNames };
};


export default assignPawnNames
