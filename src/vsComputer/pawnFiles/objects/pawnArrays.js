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
    `${pawnAssignmentObject.computerSide.pawnOne.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.computerSide.pawnTwo.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.computerSide.pawnThree.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.computerSide.pawnFour.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.computerSide.pawnFive.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.computerSide.pawnSix.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.computerSide.pawnSeven.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.computerSide.pawnEight.watchForNextMove.notReadyForNextMove}`,
    //watching for bottom side first pawn moves
    `${pawnAssignmentObject.playerSide.pawnOne.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.playerSide.pawnTwo.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.playerSide.pawnThree.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.playerSide.pawnFour.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.playerSide.pawnFive.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.playerSide.pawnSix.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.playerSide.pawnSeven.watchForNextMove.notReadyForNextMove}`,
    `${pawnAssignmentObject.playerSide.pawnEight.watchForNextMove.notReadyForNextMove}`,
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