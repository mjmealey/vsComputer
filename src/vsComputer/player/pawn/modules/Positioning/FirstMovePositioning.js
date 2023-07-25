import { getCellIds } from "../../../../modules/ChessPieceAssignments.js";
import chessBoard from "../../../../objects/chessBoardArray.js";
import assignedPawnNames from "../../assignPawnNames.js";

const FirstMovesPositioning = () => {
  const validateFirstMoves = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        checkSingleSpaceValidity(row, col);
      }
    }
  };

  const checkSingleSpaceValidity = (row, col) => {
    let targetRow = row;
    let targetCol = col - 1;

    const singleSpace = chessBoard[row][col];
    
    switch(singleSpace){
      case "P1":
        if(targetRow === 0 && targetCol === 1){
           
        }
    }

  };

  return {
    validateFirstMoves,
  };
};

export default FirstMovesPositioning;
