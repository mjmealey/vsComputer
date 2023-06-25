import { getCellIds } from "./ChessPieceAssignments.js";
import {
  pawnAssignmentObject,
  rookAssignmentObject,
  knightAssignmentObject,
  bishopAssignmentObject,
  queenAssignmentObject,
  kingAssignmentObject,
} from "./assignmentObjects.js";

import {
  displayGameStateTextObject,
  trackGameStateObject,
} from "./gameStateObjects.js";

const ChessPieceClicks = () => {
  let currentPiece = trackGameStateObject.emptyPieceSelection;
  let currentPawn = trackGameStateObject.emptyPieceSelection;
  let currentPawnPiece = trackGameStateObject.emptyPieceSelection;
  let currentlyClickedCell = "";
  let firstPiece = "";
  let firstPawn = "";
  //first move variable

  const displayGameState = document.createElement(
    displayGameStateTextObject.textElement
  );



  const clickPawnCell = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    gridContainer.addEventListener("click", (e) => {
      const PAWN_CLICKS = e.target.id;

      switch (PAWN_CLICKS) {
        case getCellIds[1]:
          if (
            mappedCellIds[1].textContent ===
            PAWN_ASSIGNMENTS.pawnl          ) {
            currentPawn = pawnAssignmentObject.pawnCell1.pawnCellNumOne;
          }
      }
    });
    return { clickPawnCell };
  };

  const movePawnTwoSpaces = (mappedCellIds) => {};

  const clickEmptyCell = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    let currentEmptyCell = trackGameState.emptyCell;
    gridContainer.addEventListener("click", (e) => {
      const EMPTY_CELL_CLICKS = e.target.id;

      switch (EMPTY_CELL_CLICKS) {
      }
    });
    return { clickEmptyCell };
  };

  return {
    clickEmptyCell,
    clickPawnCell,
  };
};

export default ChessPieceClicks;
