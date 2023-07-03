const MOVE_ONE_SPACE_AT_START_ON_TOPSIDE = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));

    gridContainer.addEventListener("click", (e) => {
      const MOVE_ONE_SPACE = e.target.id;
      switch (MOVE_ONE_SPACE) {
        //top side single space at start conditionals
        case getCellIds[1]:
          if (
            mappedCellIds[1].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            trackFirstMovesArray[0] ===
              `${pawnAssignmentObject.topSidePawns[0].watchForFirstMove.firstMoveNotComplete}`
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
      }
    });
    return { MOVE_ONE_SPACE_AT_START_ON_TOPSIDE };
  };