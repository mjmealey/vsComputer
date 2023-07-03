const PREVENT_PAWNS_ON_FIRST_SPACES_AFTER_DOUBLE = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    gridContainer.addEventListener("click", (e) => {
      const PREVENT_ADDITIONAL_SINGLE_SPACE_CLICKS = e.target.id;

      switch (PREVENT_ADDITIONAL_SINGLE_SPACE_CLICKS) {
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
          if (
            mappedCellIds[36].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[12] ===
              `${pawnAssignmentObject.pawnCellThirtyEight.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[37].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[45]:
          if (
            mappedCellIds[44].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[13] ===
              `${pawnAssignmentObject.pawnCellFortySix.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[45].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[53]:
          if (
            mappedCellIds[52].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[14] ===
              `${pawnAssignmentObject.pawnCellFiftyFour.doubleSpacePawnMoveComplete}`
          ) {
            mappedCellIds[53].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
        case getCellIds[61]:
          if (
            mappedCellIds[60].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMove[15] ===
              `${pawnAssignmentObject.pawnCellSixtyTwo.doubleSpacePawnMoveComplete}`
          ) {
            console.log("hi");
            mappedCellIds[61].textContent = `${trackGameStateObject.emptyCell}`;
          }
          break;
      }
    });

    return { PREVENT_PAWNS_ON_FIRST_SPACES_AFTER_DOUBLE };
  };