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
  let cellOnePawnFirstMove = pawnAssignmentObject.pawnCellOne.isNotFirstMove;
  let cellNinePawnFirstMove = pawnAssignmentObject.pawnCellOne.isNotFirstMove;
  let cellSeventeenPawnFirstMove =
    pawnAssignmentObject.pawnCellSeventeen.isNotFirstMove;
  let cellTwentyFivePawnFirstMove =
    pawnAssignmentObject.pawnCellTwentyFive.isNotFirstMove;
  let cellThirtyThreePawnFirstMove =
    pawnAssignmentObject.pawnCellThirtyThree.isNotFirstMove;
  let cellFortyOnePawnFirstMove =
    pawnAssignmentObject.pawnCellFortyOne.isNotFirstMove;
  let cellFortyNinePawnFirstMove =
    pawnAssignmentObject.pawnCellFortyNine.isNotFirstMove;
  let cellFiftySevenPawnFirstMove =
    pawnAssignmentObject.pawnCellFiftySeven.isNotFirstMove;
  //bottom pawns first moves
  let cellSixPawnFirstMove = pawnAssignmentObject.pawnCellSix.isNotFirstMove;
  let cellFourteenPawnFirstMove =
    pawnAssignmentObject.pawnCellFourteen.isNotFirstMove;
  let cellTwentyTwoPawnFirstMove =
    pawnAssignmentObject.pawnCellTwentyTwo.isNotFirstMove;
  let cellThirtyPawnFirstMove =
    pawnAssignmentObject.pawnCellThirty.isNotFirstMove;
  let cellThirtyEightPawnFirstMove =
    pawnAssignmentObject.pawnCellThirtyEight.isNotFirstMove;
  let cellFortySixPawnFirstMove =
    pawnAssignmentObject.pawnCellFortySix.isNotFirstMove;
  let cellFiftyFourPawnFirstMove =
    pawnAssignmentObject.pawnCellFiftyFour.isNotFirstMove;
  let cellSixtyTwoPawnFirstMove =
    pawnAssignmentObject.pawnCellSixtyTwo.isNotFirstMove;
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
            cellOnePawnFirstMove = pawnAssignmentObject.pawnCellOne.isFirstMove;
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
              pawnAssignmentObject.pawnCellOne.isFirstMove
          ) {
            mappedCellIds[1].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[3].textContent =
              pawnAssignmentObject.pawnCellOne.pieceName;
            cellOnePawnFirstMove = pawnAssignmentObject.pawnCellOne.isFirstMove;
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
            cellNinePawnFirstMove =
              pawnAssignmentObject.pawnCellNine.isNotFirstMove;
            console.log(cellNinePawnFirstMove);
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
            cellNinePawnFirstMove =
              pawnAssignmentObject.pawnCellNine.isFirstMove;
          }
          break;
        case getCellIds[17]:
          if (
            mappedCellIds[17].textContent ===
            pawnAssignmentObject.pawnCellSeventeen.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellSeventeen.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellSeventeenPawnFirstMove =
              pawnAssignmentObject.pawnCellSeventeen.isNotFirstMove;
          }
          break;
        case getCellIds[19]:
          if (
            mappedCellIds[17].textContent ===
              pawnAssignmentObject.pawnCellSeventeen.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellSeventeen.pawnCellNum
          ) {
            mappedCellIds[17].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[19].textContent =
              pawnAssignmentObject.pawnCellSeventeen.pieceName;
            currentPawn = pawnAssignmentObject.pawnCellSeventeen.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellSeventeenPawnFirstMove =
              pawnAssignmentObject.pawnCellSeventeen.isFirstMove;
          }
          break;
        case getCellIds[25]:
          if (
            mappedCellIds[25].textContent ===
            pawnAssignmentObject.pawnCellTwentyFive.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellTwentyFive.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellTwentyFivePawnFirstMove =
              pawnAssignmentObject.pawnCellTwentyFive.isNotFirstMove;
          }
          break;
        case getCellIds[27]:
          if (
            mappedCellIds[25].textContent ===
              pawnAssignmentObject.pawnCellTwentyFive.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellTwentyFive.pawnCellNum
          ) {
            console.log("hi");
            mappedCellIds[25].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[27].textContent =
              pawnAssignmentObject.pawnCellTwentyFive.pieceName;
            cellTwentyFivePawnFirstMove =
              pawnAssignmentObject.pawnCellTwentyFive.isFirstMove;
          }
          break;
        case getCellIds[33]:
          if (
            mappedCellIds[33].textContent ===
            pawnAssignmentObject.pawnCellThirtyThree.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellThirtyThree.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellThirtyThreePawnFirstMove =
              pawnAssignmentObject.pawnCellThirtyThree.isNotFirstMove;
          }
          break;
        case getCellIds[35]:
          if (
            mappedCellIds[33].textContent ===
              pawnAssignmentObject.pawnCellThirtyThree.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellThirtyThree.pawnCellNum
          ) {
            mappedCellIds[33].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[35].textContent =
              pawnAssignmentObject.pawnCellThirtyThree.pieceName;
            cellThirtyThreePawnFirstMove =
              pawnAssignmentObject.pawnCellThirtyThree.isFirstMove;
          }
          break;
        case getCellIds[41]:
          if (
            mappedCellIds[41].textContent ===
            pawnAssignmentObject.pawnCellFortyOne.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellFortyOne.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellFortyOnePawnFirstMove =
              pawnAssignmentObject.pawnCellFortyOne.isNotFirstMove;
          }
          break;
        case getCellIds[43]:
          if (
            mappedCellIds[41].textContent ===
              pawnAssignmentObject.pawnCellFortyOne.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellFortyOne.pawnCellNum
          ) {
            mappedCellIds[41].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[43].textContent =
              pawnAssignmentObject.pawnCellFortyOne.pieceName;
            cellFortyOnePawnFirstMove =
              pawnAssignmentObject.pawnCellFortyOne.isFirstMove;
          }
          break;
        case getCellIds[49]:
          if (
            mappedCellIds[49].textContent ===
            pawnAssignmentObject.pawnCellFortyNine.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellFortyNine.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellFortyNinePawnFirstMove =
              pawnAssignmentObject.pawnCellFortyNine.isNotFirstMove;
          }
          break;
        case getCellIds[51]:
          if (
            mappedCellIds[49].textContent ===
              pawnAssignmentObject.pawnCellFortyNine.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellFortyNine.pawnCellNum
          ) {
            mappedCellIds[49].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[51].textContent =
              pawnAssignmentObject.pawnCellFortyNine.pieceName;
            cellFortyNinePawnFirstMove =
              pawnAssignmentObject.pawnCellFortyNine.isFirstMove;
          }
          break;
          case getCellIds[57]:
            if(mappedCellIds[57].textContent === pawnAssignmentObject.pawnCellFiftySeven.pieceName){
              currentPawn = pawnAssignmentObject.pawnCellFiftySeven.pawnCellNum
              getDisplayGameState.innerText = displayGameStateTextObject.ifPawnIsClicked
              cellFiftySevenPawnFirstMove = pawnAssignmentObject.pawnCellFiftySeven.isNotFirstMove
            }
            break;
          case getCellIds[59]:
            if(mappedCellIds[57].textContent === pawnAssignmentObject.pawnCellFiftySeven.pieceName && currentPawn === pawnAssignmentObject.pawnCellFiftySeven.pawnCellNum){
              mappedCellIds[57].textContent = trackGameStateObject.emptyCell
              mappedCellIds[59].textContent = pawnAssignmentObject.pawnCellFiftySeven.pieceName
              cellFiftySevenPawnFirstMove = pawnAssignmentObject.pawnCellFiftySeven.isFirstMove
            }
            break;
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
