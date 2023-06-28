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
  const clickPawnCell = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;
  
    //watching for top side first pawn moves
  
    gridContainer.addEventListener("click", (e) => {
      const PAWN_CLICKS = e.target.id;
      switch (PAWN_CLICKS) {
        case getCellIds[1]:
          if (
            mappedCellIds[1].textContent === `${pawnAssignmentObject.pieceName}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellOne.pawnCellStartingPosition}`;
            possibleCellOnePositions[0] = `${pawnAssignmentObject.pawnCellOne.cellOnePawnOnCellOne}`;
          }

          break;
        case getCellIds[2]:
          if (
            mappedCellIds[1].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            currentPawn ===
              `${pawnAssignmentObject.pawnCellOne.pawnCellStartingPosition}`
          ) {
            mappedCellIds[1].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[2].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[0] =
              pawnAssignmentObject.pawnCellOne.firstPawnMoveComplete;
            possibleCellOnePositions[1];
          } else if (
            mappedCellIds[2].textContent === `${pawnAssignmentObject.pieceName}`
          ) {
            nextPawnMove[0] = pawnAssignmentObject.pawnCellOne.nextMoveIsReady;
          }

          break;
        case getCellIds[3]:
          //double space logic
          if (
            mappedCellIds[1].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            currentPawn ===
              `${pawnAssignmentObject.pawnCellOne.pawnCellStartingPosition}`
          ) {
            mappedCellIds[1].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[3].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[0] =
              pawnAssignmentObject.pawnCellOne.firstPawnMoveComplete;
          }

          if (
            nextPawnMove[0] === pawnAssignmentObject.pawnCellOne.nextMoveIsReady
          ) {
            mappedCellIds[2].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[3].textContent = `${pawnAssignmentObject.pieceName}`;
          }
          break;
        case getCellIds[9]:
          if (
            mappedCellIds[9].textContent === `${pawnAssignmentObject.pieceName}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellNine.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[10]:
          if (
            mappedCellIds[9].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            currentPawn ===
              `${pawnAssignmentObject.pawnCellNine.pawnCellStartingPosition}`
          ) {
            mappedCellIds[9].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[10].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[1] = `${pawnAssignmentObject.pawnCellNine.firstPawnMoveComplete}`;
          } else if (
            mappedCellIds[10].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            currentPawn ===
              `${pawnAssignmentObject.pawnCellNine.pawnCellStartingPosition}` &&
            firstPawnMoves[1] ===
              `${pawnAssignmentObject.pawnCellNine.firstPawnMoveComplete}`
          ) {
            nextPawnMove[1] = `${pawnAssignmentObject.pawnCellNine.nextMoveIsReady}`;
          }
          break;
        case getCellIds[11]:
          //double space logic
          if (
            mappedCellIds[9].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            currentPawn ===
              `${pawnAssignmentObject.pawnCellNine.pawnCellStartingPosition}` &&
            firstPawnMoves[1] ===
              `${pawnAssignmentObject.pawnCellNine.firstPawnMoveNotComplete}`
          ) {
            console.log("it works");
            mappedCellIds[9].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[11].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[1] = `${pawnAssignmentObject.pawnCellNine.firstPawnMoveComplete}`;
          }

          if (
            nextPawnMove[1] ===
            `${pawnAssignmentObject.pawnCellNine.nextMoveIsReady}`
          ) {
            mappedCellIds[10].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[11].textContent = `${pawnAssignmentObject.pieceName}`;
          }
          break;
        case getCellIds[17]:
          if (
            mappedCellIds[17].textContent === pawnAssignmentObject.pieceName
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellSeventeen.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[18]:
          if (
            mappedCellIds[17].textContent === pawnAssignmentObject.pieceName &&
            currentPawn ===
              `${pawnAssignmentObject.pawnCellSeventeen.pawnCellStartingPosition}` &&
            firstPawnMoves[2] ===
              `${pawnAssignmentObject.pawnCellSeventeen.firstPawnMoveNotComplete}`
          ) {
            mappedCellIds[17].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[18].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[2] = `${pawnAssignmentObject.pawnCellSeventeen.firstPawnMoveComplete}`;
          }
          break;
        case getCellIds[19]:
          //double space logic
          if (
            mappedCellIds[17].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            currentPawn ===
              `${pawnAssignmentObject.pawnCellSeventeen.pawnCellStartingPosition}` &&
            firstPawnMoves[2] ===
              `${pawnAssignmentObject.pawnCellSeventeen.firstPawnMoveNotComplete}`
          ) {
            mappedCellIds[17].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[19].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[2] = `${pawnAssignmentObject.pawnCellSeventeen.firstPawnMoveComplete}`;
          }
          break;
        case getCellIds[25]:
          if (
            mappedCellIds[25].textContent === pawnAssignmentObject.pieceName
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellTwentyFive.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[26]:
          if (
            mappedCellIds[25].textContent === pawnAssignmentObject.pieceName &&
            currentPawn ===
              `${pawnAssignmentObject.pawnCellTwentyFive.pawnCellStartingPosition}` &&
            firstPawnMoves[3] ===
              `${pawnAssignmentObject.pawnCellTwentyFive.firstPawnMoveNotComplete}`
          ){
            mappedCellIds[25].textContent = `${trackGameStateObject.emptyCell}`
            mappedCellIds[26].textContent = `${pawnAssignmentObject.pieceName}`
            firstPawnMoves[3] = `${pawnAssignmentObject.pawnCellTwentyFive.firstPawnMoveComplete}`

          }
            break;
          case getCellIds[27]:
            //double space logic
              if(mappedCellIds[25].textContent === `${pawnAssignmentObject.pieceName}` && currentPawn === `${pawnAssignmentObject.pawnCellTwentyFive.pawnCellStartingPosition}`){
                mappedCellIds[25].textContent = `${trackGameStateObject.emptyCell}`
                mappedCellIds[27].textContent = `${pawnAssignmentObject.pieceName}`
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
        case getCellIds[34]:
          if (
            mappedCellIds[33].textContent ===
              pawnAssignmentObject.pawnCellThirtyThree.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellThirtyThree.pawnCellNum
          ) {
            mappedCellIds[33].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[34].textContent =
              pawnAssignmentObject.pawnCellThirtyThree.pieceName;
            cellThirtyThreePawnFirstMove =
              pawnAssignmentObject.pawnCellThirtyThree.isFirstMove;
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
        case getCellIds[42]:
          if (
            mappedCellIds[41].textContent ===
              pawnAssignmentObject.pawnCellFortyOne.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellFortyOne.pawnCellNum
          ) {
            mappedCellIds[41].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[42].textContent =
              pawnAssignmentObject.pawnCellFortyOne.pieceName;
            cellFortyOnePawnFirstMove =
              pawnAssignmentObject.pawnCellFortyOne.isFirstMove;
          }
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
        case getCellIds[50]:
          if (
            mappedCellIds[49].textContent ===
              pawnAssignmentObject.pawnCellFortyNine.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellFortyNine.pawnCellNum
          ) {
            mappedCellIds[49].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[50].textContent =
              pawnAssignmentObject.pawnCellFortyNine.pieceName;
            cellFortyNinePawnFirstMove =
              pawnAssignmentObject.pawnCellFortyNine.isFirstMove;
          }
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
        case getCellIds[58]:
          if (
            mappedCellIds[57].textContent ===
              pawnAssignmentObject.pawnCellFiftySeven.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellFiftySeven.pawnCellNum
          ) {
            mappedCellIds[57].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[58].textContent =
              pawnAssignmentObject.pawnCellFiftySeven.pieceName;
            cellFiftySevenPawnFirstMove =
              pawnAssignmentObject.pawnCellFiftySeven.isFirstMove;
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
        case getCellIds[5]:
          if (
            mappedCellIds[6].textContent ===
              pawnAssignmentObject.pawnCellSix.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellSix.pawnCellNum
          ) {
            mappedCellIds[6].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[5].textContent =
              pawnAssignmentObject.pawnCellSix.pieceName;
            cellSixPawnFirstMove = pawnAssignmentObject.pawnCellSix.isFirstMove;
          }
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
        case getCellIds[13]:
          if (
            mappedCellIds[14].textContent ===
              pawnAssignmentObject.pawnCellFourteen.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellFourteen.pawnCellNum
          ) {
            mappedCellIds[14].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[13].textContent =
              pawnAssignmentObject.pawnCellFourteen.pieceName;
            cellFourteenPawnFirstMove =
              pawnAssignmentObject.pawnCellFourteen.isFirstMove;
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
        case getCellIds[21]:
          if (
            mappedCellIds[22].textContent ===
              pawnAssignmentObject.pawnCellTwentyTwo.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellTwentyTwo.pawnCellNum
          ) {
            mappedCellIds[22].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[21].textContent =
              pawnAssignmentObject.pawnCellTwentyTwo.pieceName;
            cellTwentyTwoPawnFirstMove =
              pawnAssignmentObject.pawnCellTwentyTwo.isFirstMove;
          }
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
        case getCellIds[29]:
          if (
            mappedCellIds[30].textContent ===
              pawnAssignmentObject.pawnCellThirty.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellThirty.pawnCellNum
          ) {
            mappedCellIds[30].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[29].textContent =
              pawnAssignmentObject.pawnCellThirty.pieceName;
            cellThirtyPawnFirstMove =
              pawnAssignmentObject.pawnCellThirty.isFirstMove;
          }
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
        case getCellIds[37]:
          if (
            mappedCellIds[38].textContent ===
              pawnAssignmentObject.pawnCellThirtyEight.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellThirtyEight.pawnCellNum
          ) {
            mappedCellIds[38].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[37].textContent =
              pawnAssignmentObject.pawnCellThirtyEight.pieceName;
            cellThirtyEightPawnFirstMove =
              pawnAssignmentObject.pawnCellThirtyEight.isFirstMove;
          }
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
        case getCellIds[45]:
          if (
            mappedCellIds[46].textContent ===
              pawnAssignmentObject.pawnCellFortySix.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellFortySix.pawnCellNum
          ) {
            mappedCellIds[46].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[45].textContent =
              pawnAssignmentObject.pawnCellFortySix.pieceName;
            cellFortySixPawnFirstMove =
              pawnAssignmentObject.pawnCellFortySix.isFirstMove;
          }
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
        case getCellIds[53]:
          if (
            mappedCellIds[54].textContent ===
              pawnAssignmentObject.pawnCellFiftyFour.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellFiftyFour.pawnCellNum
          ) {
            mappedCellIds[54].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[53].textContent =
              pawnAssignmentObject.pawnCellFiftyFour.pieceName;
            cellFiftyFourPawnFirstMove =
              pawnAssignmentObject.pawnCellFiftyFour.isFirstMove;
          }
          break;
        case getCellIds[52]:
          if (
            mappedCellIds[54].textContent ===
              pawnAssignmentObject.pawnCellFiftyFour.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellFiftyFour.pawnCellNum
          ) {
            mappedCellIds[54].textContent =
              trackGameStateObject.emptyPieceSelection;
            mappedCellIds[52].textContent =
              pawnAssignmentObject.pawnCellFiftyFour.pieceName;
            cellFiftyFourPawnFirstMove =
              pawnAssignmentObject.pawnCellFiftyFour.isFirstMove;
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
        case getCellIds[61]:
          if (
            mappedCellIds[62].textContent ===
              pawnAssignmentObject.pawnCellSixtyTwo.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellSixtyTwo.pawnCellNum
          ) {
            mappedCellIds[62].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[61].textContent =
              pawnAssignmentObject.pawnCellSixtyTwo.pieceName;
            cellSixtyTwoPawnFirstMove =
              pawnAssignmentObject.pawnCellSixtyTwo.isFirstMove;
          }
        case getCellIds[60]:
          if (
            mappedCellIds[62].textContent ===
              pawnAssignmentObject.pawnCellSixtyTwo.pieceName &&
            currentPawn === pawnAssignmentObject.pawnCellSixtyTwo.pawnCellNum
          ) {
            mappedCellIds[62].textContent = trackGameStateObject.emptyCell;
            mappedCellIds[60].textContent =
              pawnAssignmentObject.pawnCellSixtyTwo.pieceName;
            cellSixtyTwoPawnFirstMove =
              pawnAssignmentObject.pawnCellSixtyTwo.isFirstMove;
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
