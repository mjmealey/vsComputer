const PREVENT_PAWNS_FROM_DUPLICATING_ON_SECOND_SPACE_AFTER_FIRST_SINGLE_SPACE =
(mappedCellIds) => {
  mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  gridContainer.addEventListener("click", (e) => {
    const PREVENT_DUPLICATION_SINGLE_CLICKS = e.target.id;

    switch (PREVENT_DUPLICATION_SINGLE_CLICKS) {
      //top side pawn duplication prevention
      case getCellIds[3]:
        if (
          mappedCellIds[2].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[0] ===
            `${pawnAssignmentObject.pawnCellOne.firstPawnMoveComplete}`
        ) {
          mappedCellIds[3].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[11]:
        if (
          mappedCellIds[10].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[1] ===
            `${pawnAssignmentObject.pawnCellNine.firstPawnMoveComplete}`
        ) {
          mappedCellIds[11].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[19]:
        if (
          mappedCellIds[18].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[2] ===
            `${pawnAssignmentObject.pawnCellSeventeen.firstPawnMoveComplete}`
        ) {
          mappedCellIds[19].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[27]:
        if (
          mappedCellIds[26].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[3] ===
            `${pawnAssignmentObject.pawnCellTwentyFive.firstPawnMoveComplete}`
        ) {
          console.log("hi");
          mappedCellIds[27].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[35]:
        if (
          mappedCellIds[34].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[4] ===
            `${pawnAssignmentObject.pawnCellThirtyThree.firstPawnMoveComplete}`
        ) {
          mappedCellIds[35].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[43]:
        if (
          mappedCellIds[42].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[5] ===
            `${pawnAssignmentObject.pawnCellFortyOne.firstPawnMoveComplete}`
        ) {
          mappedCellIds[43].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[51]:
        if (
          mappedCellIds[50].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[6] ===
            `${pawnAssignmentObject.pawnCellFortyNine.firstPawnMoveComplete}`
        ) {
          mappedCellIds[51].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[59]:
        if (
          mappedCellIds[58].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[7] ===
            `${pawnAssignmentObject.pawnCellFiftySeven.firstPawnMoveComplete}`
        ) {
          mappedCellIds[59].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[4]:
        if (
          mappedCellIds[5].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[8] ===
            `${pawnAssignmentObject.pawnCellSix.firstPawnMoveComplete}`
        ) {
          mappedCellIds[4].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[12]:
        if (
          mappedCellIds[13].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[9] ===
            `${pawnAssignmentObject.pawnCellFourteen.firstPawnMoveComplete}`
        ) {
          mappedCellIds[12].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[20]:
        if (
          mappedCellIds[21].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[10] ===
            `${pawnAssignmentObject.pawnCellTwentyTwo.firstPawnMoveComplete}`
        ) {
          mappedCellIds[20].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[28]:
        if (
          mappedCellIds[29].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[11] ===
            `${pawnAssignmentObject.pawnCellThirty.firstPawnMoveComplete}`
        ) {
          mappedCellIds[28].textContent = `${trackGameStateObject.emptyCell}`;
        }
      case getCellIds[36]:
        if (
          mappedCellIds[37].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[12] ===
            `${pawnAssignmentObject.pawnCellThirtyEight.firstPawnMoveComplete}`
        ) {
          mappedCellIds[36].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[44]:
        if (
          mappedCellIds[45].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[13] ===
            `${pawnAssignmentObject.pawnCellFortySix.firstPawnMoveComplete}`
        ) {
          mappedCellIds[44].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[52]:
        if (
          mappedCellIds[53].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[14] ===
            `${pawnAssignmentObject.pawnCellFiftyFour.firstPawnMoveComplete}`
        ) {
          mappedCellIds[52].textContent = `${trackGameStateObject.emptyCell}`;
        }
        break;
      case getCellIds[60]:
        if (
          mappedCellIds[61].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          firstPawnMoves[15] ===
            `${pawnAssignmentObject.pawnCellSixtyTwo.firstPawnMoveComplete}`
        ) {
          mappedCellIds[60].textContent = `${trackGameStateObject.emptyCell}`;
        }
    }
  });
  return {
    PREVENT_PAWNS_FROM_DUPLICATING_ON_SECOND_SPACE_AFTER_FIRST_SINGLE_SPACE,
  };
};