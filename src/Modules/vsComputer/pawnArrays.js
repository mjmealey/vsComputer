import { pawnAssignmentObject } from "./pawnObjects.js";



let firstPawnMoves = [
    //watching for top side pawn first moves
    `${pawnAssignmentObject.computerSide.pawnOne.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnTwo.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnThree.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnFour.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnFour.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnFive.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnSix.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnSeven.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnEight.watchForFirstMove.firstMoveNotComplete}`,
    //watching for bottom side pawn first moves
    `${pawnAssignmentObject.playerSide.pawnOne.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnTwo.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnThree.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnFour.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnFive.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnSix.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnSeven.watchForFirstMove.firstMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnEight.watchForFirstMove.firstMoveNotComplete}`,
]
    //array values will be changed by watching for the pawns to complete their double space or if they decide to not double space it will remain as not complete
  let doubleSpacePawnMove = [
    //watching for top side double spaces
    `${pawnAssignmentObject.computerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.computerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    //watching for bottom side double spaces
    `${pawnAssignmentObject.playerSide.pawnOne.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnTwo.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnThree.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnFour.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnFive.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnSix.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnSeven.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
    `${pawnAssignmentObject.playerSide.pawnEight.watchForDoubleSpace.doubleSpaceMoveNotComplete}`,
  ];

  let nextPawnMove = [
    `${pawnAssignmentObject.computerSide.pawnOne.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.computerSide.pawnTwo.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.computerSide.pawnThree.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.computerSide.pawnFour.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.computerSide.pawnFive.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.computerSide.pawnSix.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.computerSide.pawnSeven.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.computerSide.pawnEight.notReadyForNextPawnMove}`,
    //watching for bottom side first pawn moves
    `${pawnAssignmentObject.playerSide.pawnOne.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.playerSide.pawnTwo.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.playerSide.pawnThree.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.playerSide.pawnFour.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.playerSide.pawnFive.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.playerSide.pawnSix.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.playerSide.pawnSeven.notReadyForNextPawnMove}`,
    `${pawnAssignmentObject.playerSide.pawnEight.notReadyForNextPawnMove}`,
  ];

  let possibleCellOnePositions = [
    `${pawnAssignmentObject.computerSide.pawnOne.cellOnePawnNotOnCellOne}`,
    `${pawnAssignmentObject.computerSide.pawnOne.cellOnePawnNotOnCellTwo}`,
    `${pawnAssignmentObject.computerSide.pawnOne.cellOnePawnNotOnCellThree}`,
    `${pawnAssignmentObject.computerSide.pawnOne.cellOnePawnNotOnCellFour}`,
    `${pawnAssignmentObject.computerSide.pawnOne.cellOnePawnNotOnCellFive}`,
  ];


  export let firstPawnMovesArray = firstPawnMoves
  export let doubleSpacePawnMoveArray = doubleSpacePawnMove
  export let nextPawnMoveArray = nextPawnMove
  export let possibleCellOnePositionsArray = possibleCellOnePositions