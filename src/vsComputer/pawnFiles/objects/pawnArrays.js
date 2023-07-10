import { pawnAssignmentObject } from "./pawnObjects.js";

const computerAssignedNames = [
  pawnAssignmentObject.computerSide.pawnOne.assignedName,
  pawnAssignmentObject.computerSide.pawnTwo.assignedName,
  pawnAssignmentObject.computerSide.pawnThree.assignedName,
  pawnAssignmentObject.computerSide.pawnFour.assignedName,
  pawnAssignmentObject.computerSide.pawnFive.assignedName,
  pawnAssignmentObject.computerSide.pawnSix.assignedName,
  pawnAssignmentObject.computerSide.pawnSeven.assignedName,
  pawnAssignmentObject.computerSide.pawnEight.assignedName,
];

const computerStartingRows = [
  pawnAssignmentObject.computerSide.pawnOne.startingPosition.row,
  pawnAssignmentObject.computerSide.pawnTwo.startingPosition.row,
  pawnAssignmentObject.computerSide.pawnThree.startingPosition.row,
  pawnAssignmentObject.computerSide.pawnFour.startingPosition.row,
  pawnAssignmentObject.computerSide.pawnFive.startingPosition.row,
  pawnAssignmentObject.computerSide.pawnSix.startingPosition.row,
  pawnAssignmentObject.computerSide.pawnSeven.startingPosition.row,
  pawnAssignmentObject.computerSide.pawnEight.startingPosition.row,
];

const computerStartingColumns = [
  pawnAssignmentObject.computerSide.pawnOne.startingPosition.col,
  pawnAssignmentObject.computerSide.pawnTwo.startingPosition.col,
  pawnAssignmentObject.computerSide.pawnThree.startingPosition.col,
  pawnAssignmentObject.computerSide.pawnFour.startingPosition.col,
  pawnAssignmentObject.computerSide.pawnFive.startingPosition.col,
  pawnAssignmentObject.computerSide.pawnSix.startingPosition.col,
  pawnAssignmentObject.computerSide.pawnSeven.startingPosition.col,
  pawnAssignmentObject.computerSide.pawnSeven.startingPosition.col,
];

const computerDoubleSpacingPositions = [
  //first pawn
  pawnAssignmentObject.computerSide.pawnOne.doubleSpacingPosition.row,
  pawnAssignmentObject.computerSide.pawnOne.doubleSpacingPosition.col,
  //second pawn
  pawnAssignmentObject.computerSide.pawnTwo.doubleSpacingPosition.row,
  pawnAssignmentObject.computerSide.pawnTwo.doubleSpacingPosition.col,
  //third pawn
  pawnAssignmentObject.computerSide.pawnThree.doubleSpacingPosition.row,
  pawnAssignmentObject.computerSide.pawnThree.doubleSpacingPosition.col,
  //fourth pawn
  pawnAssignmentObject.computerSide.pawnFour.doubleSpacingPosition.row,
  pawnAssignmentObject.computerSide.pawnFour.doubleSpacingPosition.col,
  //fifth pawn
  pawnAssignmentObject.computerSide.pawnFive.doubleSpacingPosition.row,
  pawnAssignmentObject.computerSide.pawnFive.doubleSpacingPosition.col,
  //sixth pawn
  pawnAssignmentObject.computerSide.pawnSix.doubleSpacingPosition.row,
  pawnAssignmentObject.computerSide.pawnSix.doubleSpacingPosition.col,
  //seventh pawn
  pawnAssignmentObject.computerSide.pawnSeven.doubleSpacingPosition.row,
  pawnAssignmentObject.computerSide.pawnSeven.doubleSpacingPosition.col,
  //eighth pawn
  pawnAssignmentObject.computerSide.pawnEight.doubleSpacingPosition.row,
  pawnAssignmentObject.computerSide.pawnEight.doubleSpacingPosition.col,
];

export const computerAssignedNamesArray = computerAssignedNames;
export const computerStartingRowsArray = computerStartingRows;
export const computerStartingColumnsArray = computerStartingColumns;
export const computerDoubleSpacingPositionsArray =
  computerDoubleSpacingPositions;
