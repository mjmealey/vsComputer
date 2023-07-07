import { pawnAssignmentObject } from "./pawnObjects.js";

let firstMoveStatus = [
  //watching for computer side first moves
  `${pawnAssignmentObject.computerSide.pawnOne.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.computerSide.pawnTwo.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.computerSide.pawnThree.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.computerSide.pawnFour.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.computerSide.pawnFour.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.computerSide.pawnFive.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.computerSide.pawnSix.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.computerSide.pawnSeven.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.computerSide.pawnEight.watchForFirstMove.firstMoveNotComplete}`,
  //watching for player side first moves
  `${pawnAssignmentObject.playerSide.pawnOne.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.playerSide.pawnTwo.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.playerSide.pawnThree.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.playerSide.pawnFour.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.playerSide.pawnFive.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.playerSide.pawnSix.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.playerSide.pawnSeven.watchForFirstMove.firstMoveNotComplete}`,
  `${pawnAssignmentObject.playerSide.pawnEight.watchForFirstMove.firstMoveNotComplete}`,
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

export let firstMoveStatusArray = firstMoveStatus
export let nextPawnMoveArray = nextPawnMove;
export let possibleCellOnePositionsArray = possibleCellOnePositions;
