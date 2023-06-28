import { getCellIds } from "./ChessPieceAssignments.js";
import { trackGameStateObject } from "./gameStateObjects.js";
import { displayGameStateTextObject } from "./gameStateObjects.js";
import { pawnAssignmentObject } from "./pawnObjects.js";

const Pawn = () => {
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
    `${pawnAssignmentObject.pawnCellFourteen.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellThirty.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellThirtyEight.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFortySix.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellFiftyFour.firstPawnMoveNotComplete}`,
    `${pawnAssignmentObject.pawnCellSixtyTwo.firstPawnMoveNotComplete}`,
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
  //controls double spaces for pawns at the start of the game
  const DOUBLE_SPACES = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));

    let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;

    gridContainer.addEventListener("click", (e) => {
      const DOUBLE_SPACE_CLICKS = e.target.id;

      switch (DOUBLE_SPACE_CLICKS) {
        //top side double spacing
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
        case getCellIds[3]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellOne.pawnCellStartingPosition}`
          ) {
            mappedCellIds[1].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[3].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[0] = `${pawnAssignmentObject.pawnCellOne.firstPawnMoveComplete}`;
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
        case getCellIds[11]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellNine.pawnCellStartingPosition}`
          ) {
            mappedCellIds[9].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[11].textContent = `${pawnAssignmentObject.pieceName}`;
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
            console.log("hi");
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
        case getCellIds[27]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellTwentyFive.pawnCellStartingPosition}`
          ) {
            mappedCellIds[25].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[27].textContent = `${pawnAssignmentObject.pieceName}`;
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
        case getCellIds[35]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellThirtyThree.pawnCellStartingPosition}`
          ) {
            mappedCellIds[33].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[35].textContent = `${pawnAssignmentObject.pieceName}`;
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
        case getCellIds[43]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.pawnCellFortyOne.pawnCellStartingPosition}`
          ) {
            mappedCellIds[41].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[43].textContent = `${pawnAssignmentObject.pieceName}`;
            firstPawnMoves[5] = `${pawnAssignmentObject.pawnCellTwentyFive.firstPawnMoveComplete}`;
          }
      }
    });
    return { DOUBLE_SPACES };
  };
  return {
    PAWN_CELL_ASSIGNMENTS,
    DOUBLE_SPACES,
  };
};

export default Pawn;
