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
  pawnAssignmentObject.computerSide.pawnOne.doubleSpacingPosition,
  pawnAssignmentObject.computerSide.pawnTwo.doubleSpacingPosition,
  pawnAssignmentObject.computerSide.pawnThree.doubleSpacingPosition,
  pawnAssignmentObject.computerSide.pawnFour.doubleSpacingPosition,
  pawnAssignmentObject.computerSide.pawnFive.doubleSpacingPosition,
  pawnAssignmentObject.computerSide.pawnSix.doubleSpacingPosition,
  pawnAssignmentObject.computerSide.pawnSeven.doubleSpacingPosition,
  pawnAssignmentObject.computerSide.pawnEight.doubleSpacingPosition,
];

export const computerAssignedNamesArray = computerAssignedNames;
export const computerStartingRowsArray = computerStartingRows;
export const computerStartingColumnsArray = computerStartingColumns;
export const computerDoubleSpacingPositionsArray =
  computerDoubleSpacingPositions;
