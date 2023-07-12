import { pawnAssignmentObject } from "./pawnObjects.js";

const playerDoubleSpacingRows = [
  pawnAssignmentObject.playerSide.pawnOne.doubleSpacingPosition.row,
  pawnAssignmentObject.playerSide.pawnTwo.doubleSpacingPosition.row,
  pawnAssignmentObject.playerSide.pawnThree.doubleSpacingPosition.row,
  pawnAssignmentObject.playerSide.pawnFour.doubleSpacingPosition.row,
  pawnAssignmentObject.playerSide.pawnFive.doubleSpacingPosition.row,
  pawnAssignmentObject.playerSide.pawnSix.doubleSpacingPosition.row,
  pawnAssignmentObject.playerSide.pawnSeven.doubleSpacingPosition.row,
  pawnAssignmentObject.playerSide.pawnEight.doubleSpacingPosition.row, 
]

const playerDoubleSpacingColumns = [
  pawnAssignmentObject.playerSide.pawnOne.doubleSpacingPosition.col,
  pawnAssignmentObject.playerSide.pawnTwo.doubleSpacingPosition.col,
  pawnAssignmentObject.playerSide.pawnThree.doubleSpacingPosition.col,
  pawnAssignmentObject.playerSide.pawnFour.doubleSpacingPosition.col,
  pawnAssignmentObject.playerSide.pawnFive.doubleSpacingPosition.col,
  pawnAssignmentObject.playerSide.pawnSix.doubleSpacingPosition.col,
  pawnAssignmentObject.playerSide.pawnSeven.doubleSpacingPosition.col,
  pawnAssignmentObject.playerSide.pawnEight.doubleSpacingPosition.col,
]

const playerAssignedNumbers  = [
  pawnAssignmentObject.playerSide.pawnOne.assignedNumber,
  pawnAssignmentObject.playerSide.pawnTwo.assignedNumber,
  pawnAssignmentObject.playerSide.pawnThree.assignedNumber,
  pawnAssignmentObject.playerSide.pawnFour.assignedNumber,
  pawnAssignmentObject.playerSide.pawnFive.assignedNumber,
  pawnAssignmentObject.playerSide.pawnSix.assignedNumber,
  pawnAssignmentObject.playerSide.pawnSeven.assignedNumber,
  pawnAssignmentObject.playerSide.pawnEight.assignedNumber
]


export const playerDoubleSpacingRowsArray = playerDoubleSpacingRows
export const playerDoubleSpacingColumnsArray = playerDoubleSpacingColumns
export const playerAssignedNumbersArray = playerAssignedNumbers
