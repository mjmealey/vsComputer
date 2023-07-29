import chessBoard from "../../../../objects/chessBoardArray.js";
import { assignedPawnNames } from "../../arrays/pawnAssignmentData.js";
import PawnPositioning from "../../objects/pawnPositioning.js";
const FirstMovesPositioning = () => {
  const validateFirstMoves = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        checkSingleSpaceValidity(row, col);
      }
    }
  };

  let clickedFirstMove = null; //checks which pawn is being used during the first move

  const firstMoveValidation = [
    { isValid: "Valid Move" },
    { notValid: "Invalid Move" },
  ];

  //rows go from 0 to 7 and columns go from 0 to 7 (rows are side by side and columns are up and down)
  //checkSingleSpaceValidity is meant to track when the user does single space instead of double space as their first move for pawns
  const checkSingleSpaceValidity = (row, col) => {
    const singleSpacePositioning = chessBoard[row][col];

    let validateSingleSpace = null;

    const isValidSingleSpace = (targetRow, targetCol) => {
      //rows and cols go from 0 to 7
      const minRow = 0;
      const maxRow = 7;
      const minCol = 0;
      const maxCol = 5;
      return (
        targetRow >= minRow &&
        targetRow <= maxRow &&
        targetCol >= minCol &&
        targetCol <= maxCol
      );
    };

    const clickedP1SingleSpace = (clickedPawn) => {
      const isP1Clicked = singleSpacePositioning === clickedPawn;
      if (isP1Clicked) {
        clickedFirstMove = clickedPawn;
      }
    };

    const validateP1SingleSpace = (targetRow, targetCol) => {
      const checkP1SingleSpace = isValidSingleSpace(targetRow, targetCol);
      if (checkP1SingleSpace) {
        validateSingleSpace = firstMoveValidation[0];
        console.log(validateSingleSpace);
      } else {
        validateSingleSpace = firstMoveValidation[1];
        console.log(validateSingleSpace);
      }
    };

    const clickedP2SingleSpace = (clickedPawn) => {
      const isP2Clicked = singleSpacePositioning === clickedPawn;
      if (isP2Clicked) {
        clickedFirstMove = clickedPawn;
      }
    };

    const validateP2SingleSpace = (targetRow, targetCol) => {
      const checkP2SingleSpace = isValidSingleSpace(targetRow, targetCol);
      if (checkP2SingleSpace) {
        validateSingleSpace = firstMoveValidation[0];
        console.log(validateSingleSpace);
      } else {
        validateSingleSpace = firstMoveValidation[1];
        console.log(validateSingleSpace);
      }
    };

    const clickedP3SingleSpace = (clickedPawn) => {
      const isP3Clicked = singleSpacePositioning === clickedPawn;
      if (isP3Clicked) {
        clickedFirstMove = clickedPawn;
      }
    };

    const validateP3SingleSpace = (targetRow, targetCol) => {
      const checkP3SingleSpace = isValidSingleSpace(targetRow, targetCol);
      if (checkP3SingleSpace) {
        validateSingleSpace = firstMoveValidation[0];
        console.log(validateSingleSpace);
      } else {
        validateSingleSpace = firstMoveValidation[1];
        console.log(validateSingleSpace);
      }
    };

    const clickedP4SingleSpace = (clickedPawn) => {
      const isP4Clicked = singleSpacePositioning === clickedPawn;
      if (isP4Clicked) {
        clickedFirstMove = clickedPawn;
      }
    };

    const validateP4SingleSpace = (targetRow, targetCol) => {
      const checkP4SingleSpace = isValidSingleSpace(targetRow, targetCol);
      if (checkP4SingleSpace) {
        validateSingleSpace = firstMoveValidation[0];
        console.log(validateSingleSpace);
      } else {
        validateSingleSpace = firstMoveValidation[1];
        console.log(validateSingleSpace);
      }
    };

    const clickedP5SingleSpace = (clickedPawn) => {
      const isP5Clicked = singleSpacePositioning === clickedPawn;
      if (isP5Clicked) {
        clickedFirstMove = clickedPawn;
      }
    };

    const validateP5SingleSpace = (targetRow, targetCol) => {
      const checkP5SingleSpace = isValidSingleSpace(targetRow, targetCol);
      if (checkP5SingleSpace) {
        validateSingleSpace = firstMoveValidation[0];
        console.log(validateSingleSpace);
      } else {
        validateSingleSpace = firstMoveValidation[1];
        console.log(validateSingleSpace);
      }
    };

    const clickedP6SingleSpace = (clickedPawn) => {
      const isP6Clicked = singleSpacePositioning === clickedPawn;
      if (isP6Clicked) {
        clickedFirstMove = clickedPawn;
      }
    };

    const validateP6SingleSpace = (targetRow, targetCol) => {
      const checkP6SingleSpace = isValidSingleSpace(targetRow, targetCol);
      if (checkP6SingleSpace) {
        validateSingleSpace = firstMoveValidation[0];
        console.log(validateSingleSpace);
      } else {
        validateSingleSpace = firstMoveValidation[1];
        console.log(validateSingleSpace);
      }
    };

    const clickedP7SingleSpace = (clickedPawn) => {
      const isP7Clicked = singleSpacePositioning === clickedPawn;
      if (isP7Clicked) {
        clickedFirstMove = clickedPawn;
      }
    };

    const validateP7SingleSpace = (targetRow, targetCol) => {
      const checkP7SingleSpace = isValidSingleSpace(targetRow, targetCol);
      if (checkP7SingleSpace) {
        validateSingleSpace = firstMoveValidation[0];
        console.log(validateSingleSpace);
      } else {
        validateSingleSpace = firstMoveValidation[1];
        console.log(validateSingleSpace);
      }
    };

    const clickedP8SingleSpace = (clickedPawn) => {
      const isP8Clicked = singleSpacePositioning === clickedPawn;
      if (isP8Clicked) {
        clickedFirstMove = clickedPawn;
      }
    };

    const validateP8SingleSpace = (targetRow, targetCol) => {
      const checkP8SingleSpace = isValidSingleSpace(targetRow, targetCol);
      if (checkP8SingleSpace) {
        validateSingleSpace = firstMoveValidation[0];
        console.log(validateSingleSpace);
      } else {
        validateSingleSpace = firstMoveValidation[1];
        console.log(validateSingleSpace);
      }
    };
  };
  return {
    validateFirstMoves,
  };
};
export default FirstMovesPositioning;
