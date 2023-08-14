import { getCellIds } from "../../modules/ChessBoard.js";
import { pawnName } from "../pawn/objects/pawnName.js";

const assignPawnNames = () => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  const startingCells = [6, 14, 22, 30, 38, 46, 54, 62];
  const name = pawnName.name;
  const boardCellCount = getCellIds.length //64
  for (let nameIndex = 0; nameIndex < boardCellCount; nameIndex++) {
    if (startingCells.includes(nameIndex)) {
      mappedCellIds[nameIndex].textContent = name;
    }
  }
  return { assignPawnNames };
};

export default assignPawnNames;
