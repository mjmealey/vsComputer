import { getCellIds } from "./ChessPieceAssignments.js";
import {
  trackGameStateObject,
  displayGameStateTextObject,
} from "./gameStateObjects.js";
import { pawnAssignmentObject } from "./pawnObjects.js";
import {
  doubleSpacePawnMoveArray,
  firstPawnMovesArray,
  nextPawnMoveArray,
  possibleCellOnePositionsArray,
} from "./pawnArrays.js";

const Pawn = () => {
  //watches for pawn moves where double spacing does not happen at the start of the game

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

  const handleComputerSideDoubleSpaces = (e) => {
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    let watchPawnOneDoubleSpace = `${pawnAssignmentObject.computerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
    
    const handleDoubleSpaceClicks = e.target.id
      
    switch (handleDoubleSpaceClicks) {
      case getCellIds[1]:
        if (
          mappedCellIds[1].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
           doubleSpacePawnMoveArray[0] === watchPawnOneDoubleSpace
        ) {
          console.log("hi");
          currentPawn = `${pawnAssignmentObject.computerSide.pawnOne.startingPosition}`;
        }
        if (
          doubleSpacePawnMoveArray[0] ===
          `${pawnAssignmentObject.computerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          firstPawnMovesArray[0] ===
            `${pawnAssignmentObject.computerSide.pawnOne.firstMoveNotComplete}`;
        }
        break;

      case getCellIds[3]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnOne.startingPosition}`
        ) {
          mappedCellIds[1].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[3].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[0] = `${pawnAssignmentObject.computerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
      case getCellIds[9]:
        if (
          mappedCellIds[9].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[1] ===
            `${pawnAssignmentObject.computerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          currentPawn = `${pawnAssignmentObject.computerSide.pawnTwo.startingPosition}`;
        }
        break;
      case getCellIds[11]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnTwo.startingPosition}`
        ) {
          mappedCellIds[9].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[11].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[1] = `${pawnAssignmentObject.computerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
      case getCellIds[17]:
        if (
          mappedCellIds[17].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[2] ===
            `${pawnAssignmentObject.computerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          currentPawn = `${pawnAssignmentObject.computerSide.pawnThree.startingPosition}`;
        }
        break;
      case getCellIds[19]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnThree.startingPosition}`
        ) {
          mappedCellIds[17].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[19].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[2] = `${pawnAssignmentObject.computerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
      case getCellIds[25]:
        if (
          mappedCellIds[25].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[3] ===
            `${pawnAssignmentObject.computerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          currentPawn = `${pawnAssignmentObject.computerSide.pawnFour.startingPosition}`;
        }
        break;
      case getCellIds[27]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnFour.startingPosition}`
        ) {
          mappedCellIds[25].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[27].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[3] = `${pawnAssignmentObject.computerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
      case getCellIds[33]:
        if (
          mappedCellIds[33].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[4] ===
            `${pawnAssignmentObject.computerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          currentPawn = `${pawnAssignmentObject.computerSide.pawnFive.startingPosition}`;
        }
        break;
      case getCellIds[35]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnFive.startingPosition}`
        ) {
          mappedCellIds[33].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[35].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[4] = `${pawnAssignmentObject.computerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
      case getCellIds[41]:
        if (
          mappedCellIds[41].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[5] ===
            `${pawnAssignmentObject.computerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          currentPawn = `${pawnAssignmentObject.computerSide.pawnSix.startingPosition}`;
        }
        break;
      case getCellIds[43]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnSix.startingPosition}`
        ) {
          mappedCellIds[41].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[43].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[5] = `${pawnAssignmentObject.computerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
      case getCellIds[49]:
        if (
          mappedCellIds[49].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[6] ===
            `${pawnAssignmentObject.computerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          currentPawn = `${pawnAssignmentObject.computerSide.pawnSeven.startingPosition}`;
        }
        break;
      case getCellIds[51]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnSeven.startingPosition}`
        ) {
          mappedCellIds[49].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[51].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[6] = `${pawnAssignmentObject.computerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
      case getCellIds[57]:
        if (
          mappedCellIds[57].textContent ===
            `${pawnAssignmentObject.pieceName}` &&
          doubleSpacePawnMoveArray[7] ===
            `${pawnAssignmentObject.computerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
        ) {
          console.log("hi");
          currentPawn = `${pawnAssignmentObject.computerSide.pawnEight.startingPosition}`;
        }
        break;
      case getCellIds[59]:
        if (
          currentPawn ===
          `${pawnAssignmentObject.computerSide.pawnEight.startingPosition}`
        ) {
          mappedCellIds[57].textContent = `${trackGameStateObject.emptyCell}`;
          mappedCellIds[59].textContent = `${pawnAssignmentObject.pieceName}`;
          doubleSpacePawnMoveArray[7] = `${pawnAssignmentObject.computerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveComplete}`;
        }
        break;
    }

    return { handleComputerSideDoubleSpaces };
  };

  const handleComputerSideDoubleSpaceClicks = () => {
    gridContainer.addEventListener("click", handleComputerSideDoubleSpaces);

    return { handleComputerSideDoubleSpaceClicks };
  };

  const DOUBLE_SPACES_ON_BOTTOMSIDE = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    gridContainer.addEventListener("click", (e) => {
      const DOUBLE_SPACES_ON_BOTTOMSIDE_CLICKS = e.target.id;

      switch (DOUBLE_SPACES_ON_BOTTOMSIDE_CLICKS) {
        case getCellIds[6]:
          if (
            mappedCellIds[6].textContent === `${pawnAssignmentObject.pieceName}`
          ) {
            console.log("hi");
            currentPawn = `${pawnAssignmentObject.bottomSidePawns.pawnOne.startingPosition}`;
          }
          break;
        case getCellIds[4]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.bottomSidePawns.pawnOne.startingPosition}`
          ) {
            mappedCellIds[6].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[4].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMoveArray[8] = `${pawnAssignmentObject.bottomSidePawns.pawnOne.watchForDoubleSpace.doubleSpaceMoveComplete}`;
          }
          break;
        case getCellIds[14]:
          if (
            mappedCellIds[14].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMoveArray[9] ===
              `${pawnAssignmentObject.bottomSidePawns.pawnTwo.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.bottomSidePawns.pawnTwo.startingPosition}`;
          }
          break;
        case getCellIds[12]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.bottomSidePawns.pawnTwo.startingPosition}`
          ) {
            console.log("hi");
            mappedCellIds[14].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[12].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMoveArray[9] = `${pawnAssignmentObject.bottomSidePawns.pawnTwo.watchForDoubleSpace.doubleSpaceMoveComplete}`;
          }
          break;

        case getCellIds[22]:
          if (
            mappedCellIds[22].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMoveArray[10] ===
              `${pawnAssignmentObject.bottomSidePawns.pawnThree.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.bottomSidePawns.pawnThree.startingPosition}`;
          }
          break;
        case getCellIds[20]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.bottomSidePawns.pawnThree.startingPosition}`
          ) {
            mappedCellIds[22].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[20].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMoveArray[10] = `${pawnAssignmentObject.bottomSidePawns.pawnThree.watchForDoubleSpace.doubleSpaceMoveComplete}`;
          }
          break;
        case getCellIds[30]:
          if (
            mappedCellIds[30].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMoveArray[11] ===
              `${pawnAssignmentObject.bottomSidePawns.pawnFour.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.bottomSidePawns.pawnFour.startingPosition}`;
          }
          break;
        case getCellIds[28]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.bottomSidePawns.pawnFour.startingPosition}`
          ) {
            mappedCellIds[30].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[28].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMoveArray[11] = `${pawnAssignmentObject.bottomSidePawns.pawnFour.watchForDoubleSpace.doubleSpaceMoveComplete}`;
          }
          break;
        case getCellIds[38]:
          if (
            mappedCellIds[38].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMoveArray[12] ===
              `${pawnAssignmentObject.bottomSidePawns.pawnFive.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
          ) {
            console.log("hi");
            currentPawn = `${pawnAssignmentObject.bottomSidePawns.pawnFive.startingPosition}`;
          }
          break;
        case getCellIds[36]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.bottomSidePawns.pawnFive.startingPosition}`
          ) {
            mappedCellIds[38].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[36].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMoveArray[12] = `${pawnAssignmentObject.bottomSidePawns.pawnFive.watchForDoubleSpace.doubleSpaceMoveComplete}`;
          }
          break;
        case getCellIds[46]:
          if (
            mappedCellIds[46].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMoveArray[13] ===
              `${pawnAssignmentObject.bottomSidePawns.pawnSix.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.bottomSidePawns.pawnSix.startingPosition}`;
          }
          break;
        case getCellIds[44]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.bottomSidePawns.pawnSix.startingPosition}`
          ) {
            mappedCellIds[46].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[44].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMoveArray[13] = `${pawnAssignmentObject.bottomSidePawns.pawnSix.watchForDoubleSpace.doubleSpaceMoveComplete}`;
          }
          break;
        case getCellIds[54]:
          if (
            mappedCellIds[54].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMoveArray[14] ===
              `${pawnAssignmentObject.bottomSidePawns.pawnSeven.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.bottomSidePawns.pawnSeven.startingPosition}`;
          }
          break;
        case getCellIds[52]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.bottomSidePawns.pawnSeven.startingPosition}`
          ) {
            mappedCellIds[54].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[52].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMoveArray[14] = `${pawnAssignmentObject.bottomSidePawns.pawnSeven.watchForDoubleSpace.doubleSpaceMoveComplete}`;
          }
          break;
        case getCellIds[62]:
          if (
            mappedCellIds[62].textContent ===
              `${pawnAssignmentObject.pieceName}` &&
            doubleSpacePawnMoveArray[15] ===
              `${pawnAssignmentObject.bottomSidePawns.pawnEight.watchForDoubleSpace.doubleSpaceMoveNotComplete}`
          ) {
            currentPawn = `${pawnAssignmentObject.bottomSidePawns.pawnEight.startingPosition}`;
          }
          break;
        case getCellIds[60]:
          if (
            currentPawn ===
            `${pawnAssignmentObject.bottomSidePawns.pawnEight.startingPosition}`
          ) {
            mappedCellIds[62].textContent = `${trackGameStateObject.emptyCell}`;
            mappedCellIds[60].textContent = `${pawnAssignmentObject.pieceName}`;
            doubleSpacePawnMove[15] = `${pawnAssignmentObject.bottomSidePawns.pawnEight.watchForDoubleSpace.doubleSpaceMoveComplete}`;
          }
      }
    });
    return { DOUBLE_SPACES_ON_BOTTOMSIDE };
  };

  //watches for when pawns do not move two spaces as their first move
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
  //bottom side for start of game single space conditionals

  //watches for double and single spaces to assure nothing goes through afterwards aside from standard moves
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
  return {
    PAWN_CELL_ASSIGNMENTS,
    MOVE_ONE_SPACE_AT_START_ON_TOPSIDE,
    handleComputerSideDoubleSpaceClicks,
    DOUBLE_SPACES_ON_BOTTOMSIDE,
    PREVENT_PAWNS_ON_FIRST_SPACES_AFTER_DOUBLE,
    PREVENT_PAWNS_FROM_DUPLICATING_ON_SECOND_SPACE_AFTER_FIRST_SINGLE_SPACE,
  };
};
export default Pawn;
