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
    `${pawnAssignmentObject.topSidePawns.pawnOne.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnTwo.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnThree.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnFour.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnFive.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnSix.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnSeven.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.topSidePawns.pawnEight.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    //watching for bottom side double spaces
    `${pawnAssignmentObject.bottomSidePawns.pawnOne.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnTwo.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnThree.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnFour.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnFive.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnSix.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnSeven.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnEight.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
  ];

  let nextPawnMove = [
    `${pawnAssignmentObject.topSidePawns.pawnOne.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.topSidePawns.pawnTwo.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.topSidePawns.pawnThree.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.topSidePawns.pawnFour.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.topSidePawns.pawnFive.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.topSidePawns.pawnSix.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.topSidePawns.pawnSeven.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.topSidePawns.pawnEight.notReadyForNextPawnMove}`,
    //watching for bottom side first pawn moves
    `${pawnAssignmentObject.bottomSidePawns.pawnOne.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnTwo.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnThree.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnFour.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnFive.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnSix.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnSeven.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.bottomSidePawns.pawnEight.notReadyForNextPawnMove}`,
  ];

  let possibleCellOnePositions = [
    `${pawnAssignmentObject.topSidePawns.pawnOne.cellOnePawnNotOnCellOne}`,
    `${pawnAssignmentObject.topSidePawns.pawnOne.cellOnePawnNotOnCellTwo}`,
    `${pawnAssignmentObject.topSidePawns.pawnOne.cellOnePawnNotOnCellThree}`,
    `${pawnAssignmentObject.topSidePawns.pawnOne.cellOnePawnNotOnCellFour}`,
    `${pawnAssignmentObject.topSidePawns.pawnOne.cellOnePawnNotOnCellFive}`,
  ];


  export let firstPawnMovesArray = firstPawnMoves
  export let doubleSpacePawnMoveArray = doubleSpacePawnMove
  export let nextPawnMoveArray = nextPawnMove
  export let possibleCellOnePositionsArray = possibleCellOnePositions