import chessBoard from "../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { playerDoubleSpacingRowsArray } from "../../objects/pawnArrays.js";
import { playerDoubleSpacingColumnsArray } from "../../objects/pawnArrays.js";
import { playerAssignedNumbersArray } from "../../objects/pawnArrays.js";
import { trackFirstMovesArray } from "../../objects/pawnArrays.js";
const FirstMoves = () => {
  const pieceName = `${pawnAssignmentObject.pieceName}`;
  const emptyCellAfterFirstMove = `${trackGameStateObject.emptyCell}`;
  let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;

  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const validateFirstMoves = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let column = 0; column < chessBoard[row].length; column++) {
        const firstMoveForEachPawn = chessBoard[row][column];
        handleP1FirstMove(row, column, firstMoveForEachPawn);
      }
    }
  };

  const handleP1FirstMove = (row, column, firstMoveForEachPawn) => {
    let targetRowForP1 = `${trackGameStateObject.emptyRowSelection}`;
    let targetColumnForP1 = `${trackGameStateObject.emptyColumnSelection}`;

    if (firstMoveForEachPawn === "P1") {
      if (row === targetRowForP1 && column === targetColumnForP1) {
        trackFirstMovesArray.push("P1");
      } else {
        trackFirstMovesArray.filter((remove_P1) => remove_P1 !== "P1");
      }
    }
    displayP1FirstMove(row,column,targetRowForP1,targetColumnForP1)
  };

  const displayP1FirstMove = (row,column,targetRowForP1,targetColumnForP1) => {
      const assignedNumberForP1 = playerAssignedNumbersArray[0]
      let isFirstMoveSingleSpace = `${pawnAssignmentObject.playerSide.pawnOne.firstMoveIsNotSingleSpace.isSingleSpace}`
      let isFirstMoveDoubleSpace = `${pawnAssignmentObject.playerSide.pawnOne.firstMoveIsNotDoubleSpace.isDoubleSpace}`
      const startSpaceForP1 = getCellIds[6]
      const targetSpaceForP1SingleSpace = getCellIds[5]
      const targetSpaceForP1DoubleSpace = getCellIds[4]
      gridContainer.addEventListener("click", (e) => {
        const P1FirstMoveClicks = e.target.id

        switch(P1FirstMoveClicks){
          case startSpaceForP1:
            if(mappedCellIds[6].textContent === `${pieceName}` && `${!isFirstMoveSingleSpace}` && `${!isFirstMoveDoubleSpace}`){
              currentPawn = `${assignedNumberForP1}`
              console.log("hi")
            } 
            break;
            case targetSpaceForP1SingleSpace:
            if(currentPawn === `${assignedNumberForP1}`){
               row = `${targetRowForP1}`
               column = `${targetColumnForP1}`
               mappedCellIds[6].textContent = `${emptyCellAfterFirstMove}`
               mappedCellIds[5].textContent = `${pieceName}`
               trackFirstMovesArray.push("P1")

               if(trackFirstMovesArray.includes("P1")){
                  currentPawn = `${trackGameStateObject.emptyPieceSelection}`
               }
            }
            break;
          case targetSpaceForP1DoubleSpace:
            if(currentPawn === `${assignedNumberForP1}`){
              row = `${targetRowForP1}`
              column = `${targetColumnForP1}`
              mappedCellIds[6].textContent = `${emptyCellAfterFirstMove}`
              mappedCellIds[4].textContent = `${pieceName}`
              trackFirstMovesArray.push("P1")
            
              if(trackFirstMovesArray.includes("P1")){
                currentPawn = `${trackGameStateObject.emptyPieceSelection}`
              }
            }
        }
      })
  }

  return { validateFirstMoves };
};

export default FirstMoves;
