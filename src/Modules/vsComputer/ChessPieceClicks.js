import { getCellIds } from "./ChessPieceAssignments.js";
import {
  pawnAssignmentObject,
  rookAssignmentObject,
  knightAssignmentObject,
  bishopAssignmentObject,
  queenAssignmentObject,
  kingAssignmentObject,
} from "./assignmentObjects.js";

import { getDisplayGameState } from "./ChessPieceAssignments.js";

import {
  displayGameStateTextObject,
  trackGameStateObject,
} from "./gameStateObjects.js";

const ChessPieceClicks = () => {
  //variables to control each chess piece click
  let currentPawn = trackGameStateObject.emptyPieceSelection;
  let currentlyClickedCell = trackGameStateObject.emptyPieceSelection;
  //top pawns first moves
  let cellOnePawnFirstMove =
    pawnAssignmentObject.pawnCellOne.isNotFirstPawnMove;
  let cellNineFirstPawnMove =
    pawnAssignmentObject.pawnCellOne.isNotFirstPawnMove;
  let cellSeventeenFirstPawnMove =
    pawnAssignmentObject.pawnCellSeventeen.isNotFirstPawnMove;
  let cellTwentyFiveFirstPawnMove =
    pawnAssignmentObject.pawnCellTwentyFive.isNotFirstPawnMove;
  let cellThirtyThreeFirstPawnMove =
    pawnAssignmentObject.pawnCellThirtyThree.isNotFirstPawnMove;
  let cellFortyOneFirstPawnMove =
    pawnAssignmentObject.pawnCellFortyOne.isNotFirstPawnMove;
  let cellFortyNineFirstPawnMove =
    pawnAssignmentObject.pawnCellFortyNine.isNotFirstPawnMove;
  let cellFiftySevenFirstPawnMove =
    pawnAssignmentObject.pawnCellFiftySeven.isNotFirstPawnMove;
  //bottom pawns first moves
  let cellSixPawnFirstMove =
    pawnAssignmentObject.pawnCellSix.isNotFirstPawnMove;
  let cellFourteenPawnFirstMove =
    pawnAssignmentObject.pawnCellFourteen.isNotFirstPawnMove;
  let cellTwentyTwoPawnFirstMove =
    pawnAssignmentObject.pawnCellTwentyTwo.isNotFirstPawnMove;
  let cellThirtyPawnFirstMove =
    pawnAssignmentObject.pawnCellThirty.isNotFirstPawnMove;
  let cellThirtyEightPawnFirstMove =
    pawnAssignmentObject.pawnCellThirtyEight.isNotFirstPawnMove;
  let cellFortySixPawnFirstMove =
    pawnAssignmentObject.pawnCellFortySix.isNotFirstPawnMove;
  let cellFiftyFourPawnFirstMove =
    pawnAssignmentObject.pawnCellFiftyFour.isNotFirstPawnMove;
  let cellSixtyTwoPawnFirstMove =
    pawnAssignmentObject.pawnCellSixtyTwo.isNotFirstPawnMove;
  //pawn clicks
  const clickPawnCell = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));

    gridContainer.addEventListener("click", (e) => {
      const PAWN_CLICKS = e.target.id;

      //move pawn two spaces at start (topside)
      switch (PAWN_CLICKS) {
        case getCellIds[1]:
          if (
            mappedCellIds[1].textContent ===
              pawnAssignmentObject.pawnCellOne.pieceName &&
            currentPawn === trackGameStateObject.emptyPieceSelection
          ) {
            console.log("hi");
            currentPawn = pawnAssignmentObject.pawnCellOne.pawnCellNum;
            cellOnePawnFirstMove =
              pawnAssignmentObject.pawnCellOne.isFirstPawnMove;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
          }
          break;
        case getCellIds[3]:
          if (
            mappedCellIds[1].textContent ===
              pawnAssignmentObject.pawnCellOne.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellOne.pawnCellNum &&
            cellOnePawnFirstMove ===
              pawnAssignmentObject.pawnCellOne.isFirstPawnMove
          ) {
            mappedCellIds[1].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[3].textContent =
              pawnAssignmentObject.pawnCellOne.pieceName;
            cellOnePawnFirstMove =
              pawnAssignmentObject.pawnCellOne.isFirstPawnMove;
            currentPawn = trackGameStateObject.emptyPieceSelection;
          }
          break;
        case getCellIds[9]:
          if (
            mappedCellIds[9].textContent ===
            pawnAssignmentObject.pawnCellNine.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellNine.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
          }
          break;
        case getCellIds[11]:
          if (
            mappedCellIds[9].textContent ===
              pawnAssignmentObject.pawnCellNine.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellNine.pawnCellNum
          ) {
            mappedCellIds[9].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[11].textContent =
              pawnAssignmentObject.pawnCellNine.pieceName;
            currentPawn = trackGameStateObject.emptyPieceSelection;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
          }
          break;
        case getCellIds[17]:
          if (
            mappedCellIds[17].textContent ===
            pawnAssignmentObject.pawnCellSeventeen.pieceName
          ) {
          }
      }
    });
    return { clickPawnCell };
  };

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
