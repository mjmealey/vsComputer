import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { doubleSpacePawnMoveArray } from "../../objects/pawnArrays.js";

const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;
const emptyCellAfterDoubleSpace = `${trackGameStateObject.emptyCell}`;
const watchPieceName = `${pawnAssignmentObject.pieceName}`;

const computerPreventDuplicationAfterDoubleSpace = () => {
  const firstComputerPreventDuplication = () => {
    const firstDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveComplete}`;
    const preventFirstDuplicationAfterDoubleSpace = e.target.id;
    switch (preventFirstDuplicationAfterDoubleSpace) {
      case getCellIds[2]:
        if (
          mappedCellIds[3].textContent === `${watchPieceName}` &&
          doubleSpacePawnMoveArray[0] === `${firstDoubleSpaceComplete}`
        ) {
          mappedCellIds[2].textContent = `${emptyCellAfterDoubleSpace}`;
        }
        break;
    }
  };

  const secondComputerPreventDuplication = () => {
    const secondDoubleSpaceComplete = `${pawnAssignmentObject.computerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveComplete}`
    const preventSecondDuplicationAfterDoubleSpace = e.target.id
    switch(preventSecondDuplicationAfterDoubleSpace)

  }  
};
