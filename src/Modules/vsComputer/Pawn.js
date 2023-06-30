import { getCellIds } from "./ChessPieceAssignments.js";
import { trackGameStateObject } from "./gameStateObjects.js";
import { displayGameStateTextObject } from "./gameStateObjects.js";
import { pawnAssignmentObject } from "./pawnObjects.js";

const Pawn = () => {
  //watches for pawn moves where double spacing does not happen at the start of the game
  let firstPawnMoves = [
    `${pawnAssignmentObject.pawnCellOne.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellNine.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellSeventeen.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellTwentyFive.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellThirtyThree.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFortyOne.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFortyNine.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFiftySeven.firstPawnMoveNotComplete}`,
    //watching for bottom side first pawn moves
    `${pawnAssignmentObject.pawnCellSix.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFourteen.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellTwentyTwo.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellThirty.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellThirtyEight.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFortySix.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFiftyFour.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellSixtyTwo.firstPawnMoveNotComplete}`,
  ];
  //array values will be changed by watching for the pawns to complete their double space or if they decide to not double space it will remain as not complete
  let doubleSpacePawnMove = [
    //watching for top side double spaces
    `${pawnAssignmentObject.pawnCellOne.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellNine.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellSeventeen.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellTwentyFive.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellThirtyThree.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFortyOne.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFortyNine.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFiftySeven.doubleSpacePawnMoveNotComplete}`,
    //watching for bottom side double spaces
    `${pawnAssignmentObject.pawnCellSix.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFourteen.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellTwentyTwo.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellThirty.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellThirtyEight.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFortySix.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFiftyFour.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellSixtyTwo.doubleSpacePawnMoveNotComplete}`,
  ];

  let nextPawnMove = [
    `${pawnAssignmentObject.pawnCellOne.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellNine.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellSeventeen.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellTwentyFive.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellThirtyThree.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellFortyOne.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellFortyNine.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellFiftySeven.notReadyForNextPawnMove}`,
    //watching for bottom side first pawn moves
    `${pawnAssignmentObject.pawnCellSix.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellFourteen.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellFourteen.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellThirty.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellThirtyEight.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellFortySix.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellFiftyFour.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.pawnCellSixtyTwo.notReadyForNextPawnMove}`,
  ];

  let possibleCellOnePositions = [
    `${pawnAssignmentObject.pawnCellOne.cellOnePawnNotOnCellOne}`,
    `${pawnAssignmentObject.pawnCellOne.cellOnePawnNotOnCellTwo}`,
    `${pawnAssignmentObject.pawnCellOne.cellOnePawnNotOnCellThree}`,
    `${pawnAssignmentObject.pawnCellOne.cellOnePawnNotOnCellFour}`,
    `${pawnAssignmentObject.pawnCellOne.cellOnePawnNotOnCellFive}`,
  ];

  let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;

  //names each pawn(chess piece icons will be added further down the road, for now names are a placeholder)
  const PAWN_CELL_ASSIGNMENTS = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    const topPawnAssignments = [1, 9, 17, 25, 33, 41, 49, 57];
    const bottomPawnAssignments = [6, 14, 22, 30, 38, 46, 54, 62];
    //handles top side pawn names
    for (
      let topPawnsIndex = 0;
      topPawnsIndex < getCellIds.length;
      topPawnsIndex++
    ) {
      if (topPawnAssignments.includes(topPawnsIndex)) {
        mappedCellIds[
          topPawnsIndex
        ].textContent = `${pawnAssignmentObject.pieceName}`;
      }
    }
    //handles bottom side pawn names
    for (
      let bottomPawnsIndex = 0;
      bottomPawnsIndex < getCellIds.length;
      bottomPawnsIndex++
    ) {
      if (bottomPawnAssignments.includes(bottomPawnsIndex)) {
        mappedCellIds[
          bottomPawnsIndex
        ].textContent = `${pawnAssignmentObject.pieceName}`;
      }
    }
    return { PAWN_CELL_ASSIGNMENTS };
  };
  //logic for controlling the first move for each pawn at the start of the game
  //controls double spaces for pawns at the start of the game
  const DOUBLE_SPACES = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));

    gridContainer.addEventListener("click", (e) => {
      const DOUBLE_SPACE_CLICKS = e.target.id;

      switch (DOUBLE_SPACE_CLICKS) {
        //top side double spacing
        case getCellIds[1]:
          if (
            mappedCellIds[1].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[0] ===
              `${pawnAssignmentObject.pawnCellOne.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellOne.pawnCellStartingPosition}`;
          }
          if (
            doubleSpacePawnMove[0] ===
            `${pawnAssignmentObject.pawnCellOne.doubleSpacePawnMoveComplete}`
          ) {
            firstPawnMoves[0] ===
              `${pawnAssignmentObject.pawnCellOne.firstPawnMoveComplete}`;
          }
          break;

        case getCellIds[3]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellOne.pawnCellStartingPosition}`
          ) {
            mappedCellIds[1].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[3].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[0] = `${pawnAssignmentObject.pawnCellOne.doubleSpacePawnMoveComplete}`;
          }
          break;
        case getCellIds[9]:
          if (
            mappedCellIds[9].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[1] ===
              `${pawnAssignmentObject.pawnCellNine.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellNine.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[11]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellNine.pawnCellStartingPosition}`
          ) {
            mappedCellIds[9].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[11].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[1] = `${pawnAssignmentObject.pawnCellNine.doubleSpacePawnMoveComplete}`;
          }
          break;
        case getCellIds[17]:
          if (
            mappedCellIds[17].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[2] ===
              `${pawnAssignmentObject.pawnCellSeventeen.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellSeventeen.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[19]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellSeventeen.pawnCellStartingPosition}`
          ) {
            mappedCellIds[17].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[19].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[2] = `${pawnAssignmentObject.pawnCellSeventeen.doubleSpacePawnMoveComplete}`;
          }
          break;
        case getCellIds[25]:
          if (
            mappedCellIds[25].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[3] ===
              `${pawnAssignmentObject.pawnCellTwentyFive.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellTwentyFive.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[27]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellTwentyFive.pawnCellStartingPosition}`
          ) {
            mappedCellIds[25].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[27].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[3] = `${pawnAssignmentObject.pawnCellTwentyFive.doubleSpacePawnMoveComplete}`;
          }
          break;
        case getCellIds[33]:
          if (
            mappedCellIds[33].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[4] ===
              `${pawnAssignmentObject.pawnCellThirtyThree.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellThirtyThree.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[35]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellThirtyThree.pawnCellStartingPosition}`
          ) {
            mappedCellIds[33].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[35].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[4] = `${pawnAssignmentObject.pawnCellThirtyThree.doubleSpacePawnMoveComplete}`;
          }
          break;
        case getCellIds[41]:
          if (
            mappedCellIds[41].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[5] ===
              `${pawnAssignmentObject.pawnCellFortyOne.doubleSpacePawnMoveNotComplete}`
          ) {
            console.log("hi");
            currentPawn = `${pawnAssignmentObject.pawnCellFortyOne.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[43]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellFortyOne.pawnCellStartingPosition}`
          ) {
            mappedCellIds[41].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[43].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[5] = `${pawnAssignmentObject.pawnCellFortyOne.doubleSpacePawnMoveComplete}`;
          }
          break;
        case getCellIds[49]:
          if (
            mappedCellIds[49].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[6] ===
              `${pawnAssignmentObject.pawnCellFortyNine.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellFortyNine.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[51]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellFortyNine.pawnCellStartingPosition}`
          ) {
            mappedCellIds[49].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[51].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[6] = `${pawnAssignmentObject.pawnCellFortyNine.doubleSpacePawnMoveComplete}`;
          }
          break;
        case getCellIds[57]:
          if (
            mappedCellIds[57].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[7] ===
              `${pawnAssignmentObject.pawnCellFiftySeven.doubleSpacePawnMoveNotComplete}`
          ) {
            console.log("hi");
            currentPawn = `${pawnAssignmentObject.pawnCellFiftySeven.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[59]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellFiftySeven.pawnCellStartingPosition}`
          ) {
            console.log("hi")
            mappedCellIds[57].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[59].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[7] = `${pawnAssignmentObject.pawnCellFiftySeven.doubleSpacePawnMoveComplete}`;
          }
          break;

        //bottom side pawns
        case getCellIds[6]:
          if (
            mappedCellIds[6].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[8] ===
              `${pawnAssignmentObject.pawnCellSix.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellSix.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[4]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellSix.pawnCellStartingPosition}`
          ) {
            mappedCellIds[6].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[4].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[8] = `${pawnAssignmentObject.pawnCellSix.doubleSpacePawnMoveComplete}`;
          }
          break;
        case getCellIds[14]:
          if (
            mappedCellIds[14].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[9] ===
              `${pawnAssignmentObject.pawnCellFourteen.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellFourteen.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[12]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellFourteen.pawnCellStartingPosition}`
          ) {
            mappedCellIds[14].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[12].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[9] = `${pawnAssignmentObject.pawnCellFourteen.doubleSpacePawnMoveComplete}`;
          }
          break;

        case getCellIds[22]:
          if (
            mappedCellIds[22].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[10] ===
              `${pawnAssignmentObject.pawnCellTwentyTwo.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellTwentyTwo.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[20]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellTwentyTwo.pawnCellStartingPosition}`
          ) {
            mappedCellIds[22].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[20].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[10] = `${pawnAssignmentObject.pawnCellTwentyTwo.doubleSpacePawnMoveComplete}`;
          }
          break;
        case getCellIds[30]:
          if (
            mappedCellIds[30].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[11] ===
              `${pawnAssignmentObject.pawnCellThirty.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellThirty.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[28]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellThirty.pawnCellStartingPosition}`
          ) {
            mappedCellIds[30].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[28].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[11] = `${pawnAssignmentObject.pawnCellThirty.doubleSpacePawnMoveComplete}`;
          }
          break;
        case getCellIds[38]:
          if (
            mappedCellIds[38].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[12] ===
              `${pawnAssignmentObject.pawnCellThirtyEight.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellThirtyEight.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[36]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellThirtyEight.pawnCellStartingPosition}`
          ) {
            mappedCellIds[38].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[36].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[12] = `${pawnAssignmentObject.pawnCellThirtyEight.doubleSpacePawnMoveComplete}`;
          }
          break;
        case getCellIds[46]:
          if (
            mappedCellIds[46].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[13] ===
              `${pawnAssignmentObject.pawnCellFortySix.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellFortySix.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[44]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellFortySix.pawnCellStartingPosition}`
          ) {
            mappedCellIds[46].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[44].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[13] = `${pawnAssignmentObject.pawnCellFortySix.doubleSpacePawnMoveComplete}`;
          }
          break;
        case getCellIds[54]:
          if (
            mappedCellIds[54].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[14] ===
              `${pawnAssignmentObject.pawnCellFiftyFour.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellFiftyFour.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[52]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellFiftyFour.pawnCellStartingPosition}`
          ) {
            mappedCellIds[54].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[52].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[14] = `${pawnAssignmentObject.pawnCellFiftyFour.doubleSpacePawnMoveComplete}`;
          }
          break;
        case getCellIds[62]:
          if (
            mappedCellIds[62].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[15] ===
              `${pawnAssignmentObject.pawnCellSixtyTwo.doubleSpacePawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellSixtyTwo.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[60]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellSixtyTwo.pawnCellStartingPosition}`
          ) {
            mappedCellIds[62].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[60].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[15] = `${pawnAssignmentObject.pawnCellSixtyTwo.doubleSpacePawnMoveComplete}`;
          }
      }
    });
    return { DOUBLE_SPACES };
  };
  //watches for when pawns do not move two spaces as their first move
  const MOVE_ONE_SPACE_AT_START = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));

    gridContainer.addEventListener("click", (e) => {
      const MOVE_ONE_SPACE = e.target.id;
      switch (MOVE_ONE_SPACE) {
        //top side single space at start conditionals
        case getCellIds[1]:
          if (
            mappedCellIds[1].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[0] ===
              `${pawnAssignmentObject.pawnCellOne.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellOne.pawnCellStartingPosition}`;
          }

          break;
        case getCellIds[2]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellOne.pawnCellStartingPosition}`
          ) {
            firstPawnMoves[0] = `${pawnAssignmentObject.pawnCellOne.firstPawnMoveComplete}`;
            mappedCellIds[1].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[2].textContent = `${pawnAssignmentObject.pieceName}`;
          }

          break;
        case getCellIds[9]:
          if (
            mappedCellIds[9].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[1] ===
              `${pawnAssignmentObject.pawnCellNine.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellNine.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[10]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellNine.pawnCellStartingPosition}`
          ) {
            mappedCellIds[9].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[10].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[1] = `${pawnAssignmentObject.pawnCellNine.firstPawnMoveComplete}`;
          }
          break;
        case getCellIds[17]:
          if (
            mappedCellIds[17].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[2] ===
              `${pawnAssignmentObject.pawnCellSeventeen.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellSeventeen.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[18]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellSeventeen.pawnCellStartingPosition}`
          ) {
            mappedCellIds[17].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[18].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[2] = `${pawnAssignmentObject.pawnCellSeventeen.firstPawnMoveComplete}`;
          }
          break;
        case getCellIds[25]:
          if (
            mappedCellIds[25].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[3] ===
              `${pawnAssignmentObject.pawnCellTwentyFive.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellTwentyFive.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[26]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellTwentyFive.pawnCellStartingPosition}`
          ) {
            mappedCellIds[25].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[26].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[3] = `${pawnAssignmentObject.pawnCellTwentyFive.firstPawnMoveComplete}`;
          }
          break;
        case getCellIds[33]:
          if (
            mappedCellIds[33].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[4] ===
              `${pawnAssignmentObject.pawnCellThirtyThree.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellThirtyThree.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[34]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellThirtyThree.pawnCellStartingPosition}`
          ) {
            mappedCellIds[33].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[34].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[4] = `${pawnAssignmentObject.pawnCellThirtyThree.firstPawnMoveComplete}`;
          }
          break;
        case getCellIds[41]:
          if (
            mappedCellIds[41].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[5] ===
              `${pawnAssignmentObject.pawnCellFortyOne.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellFortyOne.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[42]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellFortyOne.pawnCellStartingPosition}`
          ) {
            mappedCellIds[41].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[42].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[5] = `${pawnAssignmentObject.pawnCellFortyOne.firstPawnMoveComplete}`;
          }
          break;
        case getCellIds[49]:
          if (
            mappedCellIds[49].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[6] ===
              `${pawnAssignmentObject.pawnCellFortyNine.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellFortyNine.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[50]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellFortyNine.pawnCellStartingPosition}`
          ) {
            mappedCellIds[49].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[50].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[6] = `${pawnAssignmentObject.pawnCellFortyNine.firstPawnMoveComplete}`;
          }
          break;
        case getCellIds[57]:
          if (
            mappedCellIds[57].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[7] ===
              `${pawnAssignmentObject.pawnCellFiftySeven.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellFiftySeven.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[58]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellFiftySeven.pawnCellStartingPosition}`
          ) {
            mappedCellIds[57].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[58].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[7] = `${pawnAssignmentObject.pawnCellFiftySeven.firstPawnMoveComplete}`;
          }
          break;
        //bottom side for start of game single space conditionals
        case getCellIds[6]:
          if (
            mappedCellIds[6].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[8] ===
              `${pawnAssignmentObject.pawnCellSix.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellSix.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[5]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellSix.pawnCellStartingPosition}`
          ) {
            mappedCellIds[6].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[5].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[8] = `${pawnAssignmentObject.pawnCellSix.firstPawnMoveComplete}`;
          }
          break;
        case getCellIds[14]:
          if (
            mappedCellIds[14].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[9] ===
              `${pawnAssignmentObject.pawnCellFourteen.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellFourteen.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[13]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellFourteen.pawnCellStartingPosition}`
          ) {
            mappedCellIds[14].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[13].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[9] = `${pawnAssignmentObject.pawnCellFourteen.firstPawnMoveComplete}`;
          }
          break;
        case getCellIds[22]:
          if (
            mappedCellIds[22].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[10] ===
              `${pawnAssignmentObject.pawnCellTwentyTwo.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellTwentyTwo.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[21]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellTwentyTwo.pawnCellStartingPosition}`
          ) {
            mappedCellIds[22].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[21].textContent = `${pawnAssignmentObject.pieceName}`;
          }
          break;
        case getCellIds[30]:
          if (
            mappedCellIds[30].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[11] ===
              `${pawnAssignmentObject.pawnCellThirty.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellThirty.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[29]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellThirty.pawnCellStartingPosition}`
          ) {
            mappedCellIds[30].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[29].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[11] = `${pawnAssignmentObject.pawnCellThirty.firstPawnMoveComplete}`;
          }
          break;
        case getCellIds[38]:
          if (
            mappedCellIds[38].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[12] ===
              `${pawnAssignmentObject.pawnCellThirtyEight.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellThirtyEight.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[37]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellThirtyEight.pawnCellStartingPosition}`
          ) {
            mappedCellIds[38].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[37].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[12] = `${pawnAssignmentObject.pawnCellThirtyEight.firstPawnMoveComplete}`;
          }
          break;
        case getCellIds[46]:
          if (
            mappedCellIds[46].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[13] ===
              `${pawnAssignmentObject.pawnCellFortySix.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellFortySix.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[45]:
          if (
            (currentPawn = `${pawnAssignmentObject.pawnCellFortySix.pawnCellStartingPosition}`)
          ) {
            mappedCellIds[46].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[45].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[13] = `${pawnAssignmentObject.pawnCellFortySix.firstPawnMoveComplete}`;
          }
          break;
        case getCellIds[54]:
          if (
            mappedCellIds[54].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            firstPawnMoves[14] ===
              `${pawnAssignmentObject.pawnCellFiftyFour.firstPawnMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.pawnCellFiftyFour.pawnCellStartingPosition}`;
          }
          break;
        case getCellIds[53]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellFiftyFour.pawnCellStartingPosition}`
          ) {
            mappedCellIds[54].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[53].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[14] = `${pawnAssignmentObject.pawnCellFiftyFour.firstPawnMoveComplete}`;
          }
      }
    });
    return { MOVE_ONE_SPACE_AT_START };
  };
  //watches for double and single spaces to assure nothing goes through afterwards aside from standard moves
  const PREVENT_PAWNS_ON_FIRST_SPACES_AFTER_DOUBLE = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    gridContainer.addEventListener("click", (e) => {
      const PREVENT_ADDITIONAL_CLICKS = e.target.id;

      switch (PREVENT_ADDITIONAL_CLICKS) {
        //top side tracking
        case getCellIds[2]:
          if (
            mappedCellIds[3].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[0] ===
              `${pawnAssignmentObject.pawnCellOne.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[2].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[10]:
          if (
            mappedCellIds[11].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[1] ===
              `${pawnAssignmentObject.pawnCellNine.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[10].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[18]:
          if (
            mappedCellIds[19].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[2] ===
              `${pawnAssignmentObject.pawnCellSeventeen.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[18].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[26]:
          if (
            mappedCellIds[27].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[3] ===
              `${pawnAssignmentObject.pawnCellTwentyFive.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[26].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[34]:
          if (
            mappedCellIds[35].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[4] ===
              `${pawnAssignmentObject.pawnCellThirtyThree.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[34].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[42]:
          if (
            mappedCellIds[43].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[5] ===
              `${pawnAssignmentObject.pawnCellFortyOne.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[42].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[50]:
          if (
            mappedCellIds[51].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[6] ===
              `${pawnAssignmentObject.pawnCellFortyNine.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[50].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[58]:
          if (
            mappedCellIds[59].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[7] ===
              `${pawnAssignmentObject.pawnCellFiftySeven.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[58].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        //bottom side pawns
        case getCellIds[5]:
          if (
            mappedCellIds[4].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[8] ===
              `${pawnAssignmentObject.pawnCellSix.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[5].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[13]:
          if (
            mappedCellIds[12].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[9] ===
              `${pawnAssignmentObject.pawnCellFourteen.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[13].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[21]:
          if (
            mappedCellIds[20].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[10] ===
              `${pawnAssignmentObject.pawnCellTwentyTwo.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[21].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[29]:
          if (
            mappedCellIds[28].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[11] ===
              `${pawnAssignmentObject.pawnCellThirty.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[29].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[37]:
          if(mappedCellIds[36].textContent === `${pawnAssignmentObject.pieceName}` && doubleSpacePawnMove[12] === `${pawnAssignmentObject.pawnCellThirtyEight.doubleSpacePawnMoveComplete}`){
            mappedCellIds[37].textContent = `${trackGameStateObject.emptyCell}`
          }
          break;
        case getCellIds[45]:
          if(mappedCellIds[44].textContent === `${pawnAssignmentObject.pieceName}` && doubleSpacePawnMove[13] === `${pawnAssignmentObject.pawnCellFortySix.doubleSpacePawnMoveComplete}`){
            mappedCellIds[45].textContent = `${trackGameStateObject.emptyCell}`
          }
           break;
        case getCellIds[53]:
          if(mappedCellIds[52].textContent === `${pawnAssignmentObject.pieceName}` && doubleSpacePawnMove[14] === `${pawnAssignmentObject.pawnCellFiftyFour.doubleSpacePawnMoveComplete}`){
            mappedCellIds[53].textContent = `${trackGameStateObject.emptyCell}`
          }
          break;
        case getCellIds[61]:
          if(mappedCellIds[60].textContent === `${pawnAssignmentObject.pieceName}` && doubleSpacePawnMove[15] === `${pawnAssignmentObject.pawnCellSixtyTwo.doubleSpacePawnMoveComplete}`){
            console.log("hi")
            mappedCellIds[61].textContent = `${trackGameStateObject.emptyCell}`
          }
          break;
      }
    });

    return { PREVENT_PAWNS_ON_FIRST_SPACES_AFTER_DOUBLE };
  };
  return {
    PAWN_CELL_ASSIGNMENTS,
    MOVE_ONE_SPACE_AT_START,
    PREVENT_PAWNS_ON_FIRST_SPACES_AFTER_DOUBLE,
    DOUBLE_SPACES,
  };
};
export default Pawn;
