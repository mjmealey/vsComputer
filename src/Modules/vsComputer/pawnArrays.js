import { pawnAssignmentObject } from "./pawnObjects.js";



let firstPawnMoves = [
    //watching for top side pawn first moves
    `${pawnAssignmentObject.topSidePawns.pawnOne.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnTwo.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnThree.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnFour.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnFour.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnFive.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnSix.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnSeven.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnEight.watchForFirstMove.firstMoveNotComplete}`,
    //watching for bottom side pawn first moves
    `${pawnAssignmentObject.bottomSidePawns.pawnOne.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnTwo.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnThree.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnFour.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnFive.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnSix.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnSeven.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnEight.watchForFirstMove.firstMoveNotComplete}`
]
  //array values will be changed by watching for the pawns to complete their double space or if they decide to not double space it will remain as not complete
  let doubleSpacePawnMove = [
    //watching for top side double spaces
    `${pawnAssignmentObject.topSidePawns.pawnOne.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnTwo.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnThree.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnFour.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnFive.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnSix.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnSeven.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnEight.doubleSpacePawnMoveNotComplete}`,
    //watching for bottom side double spaces
    `${pawnAssignmentObject.bottomSidePawns.pawnOne.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnTwo.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnThree.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnFour.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnFive.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnSix.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnSeven.doubleSpacePawnMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnEight.doubleSpacePawnMoveNotComplete}`,
  ];

  let nextPawnMove = [
    `${pawnAssignmentObject.topSidePawns.pawnOne.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.topSidePawns.pawnTwo.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.topSidePawns.pawnThree.notReadyForNextPawnMove}`,
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


  export let firstPawnMovesArray = firstPawnMoves
  export let doubleSpacePawnMoveArray = doubleSpacePawnMove
  export let nextPawnMoveArray = nextPawnMove
  export let possibleCellOnePositionsArray = possibleCellOnePositions