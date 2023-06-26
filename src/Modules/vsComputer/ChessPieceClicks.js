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
              pawnAssignmentObject.pawnCellOne.pieceName
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
          if (
            mappedCellIds[57].textContent ===
            pawnAssignmentObject.pawnCellFiftySeven.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellFiftySeven.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellFiftySevenPawnFirstMove =
              pawnAssignmentObject.pawnCellFiftySeven.isNotFirstMove;
          }
          break;
        case getCellIds[59]:
          if (
            mappedCellIds[57].textContent ===
              pawnAssignmentObject.pawnCellFiftySeven.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellFiftySeven.pawnCellNum
          ) {
            mappedCellIds[57].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[59].textContent =
              pawnAssignmentObject.pawnCellFiftySeven.pieceName;
            cellFiftySevenPawnFirstMove =
              pawnAssignmentObject.pawnCellFiftySeven.isFirstMove;
          }
          break;

        //move two spaces for pawns (bottom)
        case getCellIds[6]:
          if (
            mappedCellIds[6].textContent ===
            pawnAssignmentObject.pawnCellSix.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellSix.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellSixPawnFirstMove =
              pawnAssignmentObject.pawnCellSix.isNotFirstMove;
          }
          break;
        case getCellIds[4]:
          if (
            mappedCellIds[6].textContent ===
              pawnAssignmentObject.pawnCellSix.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellSix.pawnCellNum
          ) {
            mappedCellIds[6].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[4].textContent =
              pawnAssignmentObject.pawnCellSix.pieceName;
            cellSixPawnFirstMove =
              pawnAssignmentObject.pawnCellFiftySeven.isFirstMove;
          }
          break;
        case getCellIds[14]:
          if (
            mappedCellIds[14].textContent ===
            pawnAssignmentObject.pawnCellFourteen.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellFourteen.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellFourteenPawnFirstMove =
              pawnAssignmentObject.pawnCellFourteen.isNotFirstMove;
          }
          break;
        case getCellIds[12]:
          if (
            mappedCellIds[14].textContent ===
              pawnAssignmentObject.pawnCellFourteen.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellFourteen.pawnCellNum
          ) {
            console.log("hi");
            mappedCellIds[14].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[12].textContent =
              pawnAssignmentObject.pawnCellFourteen.pieceName;
            cellFourteenPawnFirstMove =
              pawnAssignmentObject.pawnCellFourteen.isFirstMove;
          }
          break;
        case getCellIds[22]:
          if (
            mappedCellIds[22].textContent ===
            pawnAssignmentObject.pawnCellTwentyTwo.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellTwentyTwo.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellTwentyTwoPawnFirstMove =
              pawnAssignmentObject.pawnCellTwentyTwo.isNotFirstMove;
          }
          break;
        case getCellIds[20]:
          if (
            mappedCellIds[22].textContent ===
              pawnAssignmentObject.pawnCellTwentyTwo.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellTwentyTwo.pawnCellNum
          ) {
            mappedCellIds[22].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[20].textContent =
              pawnAssignmentObject.pawnCellTwentyTwo.pieceName;
            cellTwentyTwoPawnFirstMove =
              pawnAssignmentObject.pawnCellTwentyTwo.isFirstMove;
          }
          break;
        case getCellIds[30]:
          if (
            mappedCellIds[30].textContent ===
            pawnAssignmentObject.pawnCellThirty.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellThirty.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellThirtyPawnFirstMove =
              pawnAssignmentObject.pawnCellThirty.isNotFirstMove;
          }
          break;
        case getCellIds[28]:
          if (
            mappedCellIds[30].textContent ===
              pawnAssignmentObject.pawnCellThirty.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellThirty.pawnCellNum
          ) {
            mappedCellIds[30].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[28].textContent =
              pawnAssignmentObject.pawnCellThirty.pieceName;
            cellThirtyPawnFirstMove =
              pawnAssignmentObject.pawnCellThirty.isFirstMove;
          }
          break;
        case getCellIds[38]:
          if (
            mappedCellIds[38].textContent ===
            pawnAssignmentObject.pawnCellThirtyEight.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellThirtyEight.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellThirtyEightPawnFirstMove =
              pawnAssignmentObject.pawnCellThirtyEight.isNotFirstMove;
          }
          break;
        case getCellIds[36]:
          if (
            mappedCellIds[38].textContent ===
              pawnAssignmentObject.pawnCellThirtyEight.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellThirtyEight.pawnCellNum
          ) {
            mappedCellIds[38].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[36].textContent =
              pawnAssignmentObject.pawnCellThirtyEight.pieceName;
            cellThirtyEightPawnFirstMove =
              pawnAssignmentObject.pawnCellThirtyEight.isFirstMove;
          }
          break;
        case getCellIds[46]:
          if (
            mappedCellIds[46].textContent ===
            pawnAssignmentObject.pawnCellFortySix.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellFortySix.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellFortySixPawnFirstMove =
              pawnAssignmentObject.pawnCellFortySix.isNotFirstMove;
          }
          break;
        case getCellIds[44]:
          if (
            mappedCellIds[46].textContent ===
              pawnAssignmentObject.pawnCellFortySix.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellFortySix.pawnCellNum
          ) {
            mappedCellIds[46].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[44].textContent =
              pawnAssignmentObject.pawnCellFortySix.pieceName;
            cellFortySixPawnFirstMove =
              pawnAssignmentObject.pawnCellFortySix.isFirstMove;
          }
          break;
        case getCellIds[54]:
          if (
            mappedCellIds[54].textContent ===
            pawnAssignmentObject.pawnCellFiftyFour.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellFiftyFour.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellFiftyFourPawnFirstMove =
              pawnAssignmentObject.pawnCellFiftyFour.isNotFirstMove;
          }
          break;
        case getCellIds[52]:
          if (
            mappedCellIds[54].textContent ===
              pawnAssignmentObject.pawnCellFiftyFour.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellFiftyFour.pawnCellNum
          ) {
            mappedCellIds[54].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[52].textContent =
              pawnAssignmentObject.pawnCellFiftyFour.pieceName;
          }
          break;
        case getCellIds[62]:
          if (
            mappedCellIds[62].textContent ===
            pawnAssignmentObject.pawnCellSixtyTwo.pieceName
          ) {
            currentPawn = pawnAssignmentObject.pawnCellSixtyTwo.pawnCellNum;
            getDisplayGameState.innerText =
              displayGameStateTextObject.ifPawnIsClicked;
            cellSixtyTwoPawnFirstMove =
              pawnAssignmentObject.pawnCellSixtyTwo.isNotFirstMove;
          }
          break;
        case getCellIds[60]:
          if (
            mappedCellIds[62].textContent ===
              pawnAssignmentObject.pawnCellSixtyTwo.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellSixtyTwo.pawnCellNum
          ) {
            mappedCellIds[62].textContent = trackGameStateObject.emptyCell
            mappedCellIds[60].textContent = pawnAssignmentObject.pawnCellSixtyTwo.pieceName
            cellSixtyTwoPawnFirstMove = pawnAssignmentObject.pawnCellSixtyTwo.isFirstMove
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
