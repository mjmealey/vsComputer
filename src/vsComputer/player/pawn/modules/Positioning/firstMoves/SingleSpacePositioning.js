import chessBoard from "../../../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../../../modules/ChessPieceAssignments.js";
import { setStartMovePositions } from "../../../objects/SetStartMovePositioning.js";
import { assignedPawnNames } from "../../../arrays/pawnAssignmentData.js";


const SingleSpacePositioning = () => {
  const trackSingleSpacePositions = [];

  const validateSingleSpace = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
      
        const singleSpacePositions = [
          {
            row: setStartMovePositions.P1.singleSpace.row,
            col: setStartMovePositions.P1.singleSpace.col,
          },
          {
            row: setStartMovePositions.P2.singleSpace.row,
            col: setStartMovePositions.P2.singleSpace.col,
          },
          {
            row: setStartMovePositions.P3.singleSpace.row,
            col: setStartMovePositions.P3.singleSpace.col,
          },
          {
            row: setStartMovePositions.P4.singleSpace.row,
            col: setStartMovePositions.P4.singleSpace.col,
          },
          {
            row: setStartMovePositions.P5.singleSpace.row,
            col: setStartMovePositions.P5.singleSpace.col,
          },
          {
            row: setStartMovePositions.P6.singleSpace.row,
            col: setStartMovePositions.P6.singleSpace.col,
          },
          {
            row: setStartMovePositions.P7.singleSpace.row,
            col: setStartMovePositions.P7.singleSpace.col,
          },
          {
            row: setStartMovePositions.P8.singleSpace.row,
            col: setStartMovePositions.P8.singleSpace.col,
          },
        ];
      
        const checkSingleSpace = (targetRow, targetCol) => {
          const minRow = singleSpacePositions[0].row;
          const maxRow = singleSpacePositions[7].row;
          const singleSpaceCol = 5;
      
          return (
            targetRow >= minRow && targetRow <= maxRow && targetCol === singleSpaceCol
          );
        };
      
        const isValidSingleSpace = (targetRow, targetCol) => {
          return checkSingleSpace(targetRow, targetCol);
        };
      
        const isSingleSpaceReady = (targetRow, targetCol, assignedPawn) => {
          const singleSpaceValidity = isValidSingleSpace(targetRow, targetCol);
      
          if (singleSpaceValidity) {
            assignedPawnNames.indexOf(assignedPawn);
            console.log(
              `${assignedPawn} is located at Row ${targetRow} on Col ${targetCol}`
            );
          } else {
            console.log("Move is Invalid");
          }
        };
      
        const handleSingleSpacePositionClicks = (fromRow, fromCol, toRow, toCol) => {
          const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
          const emptyCell = "";
          const filledCell = "P";
          
          const trackSingleSpacing = (assignedPawn) => {
            return !trackSingleSpacePositions.includes(assignedPawn);
          };
      
          const handleSingleSpacePositions = (assignedPawn) => {
            if(trackSingleSpacing(assignedPawn)){
              chessBoard[fromRow][fromCol] = emptyCell
              chessBoard[toRow][toCol] = filledCell  
            }
          }
      
          handleSingleSpacePositions(0, 5)
      
          gridContainer.addEventListener("click", (e) => {
            const cellId = e.target.id;
          });
        };
      
    
      };
    }}
    return {
      validateSingleSpace
    };} 

  export default SingleSpacePositioning;