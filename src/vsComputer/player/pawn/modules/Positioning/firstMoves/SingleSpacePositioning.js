import chessBoard from "../../../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../../../modules/ChessPieceAssignments.js";
import { assignedPawnNames } from "../../../arrays/pawnAssignmentData.js";
import { pawnName } from "../../../objects/pawnName.js";
const SingleSpacePositioning = () => {
  const validateSingleSpace = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        const trackSingleSpacePositions = [];
        const singleSpacePositions = {
          P1: {
            fromRow: 0,
            fromCol: 6,
            targetRow: 0,
            targetCol: 5,
          },
          P2: {
            fromRow: 1,
            fromCol: 6,
            targetRow: 1,
            targetCol: 5,
          },
          P3: {
            fromRow: 2,
            fromCol: 6,
            targetRow: 2,
            targetCol: 5,
          },
          P4: {
            fromRow: 3,
            fromCol: 6,
            targetRow: 3,
            targetCol: 5,
          },
          P5: {
            fromRow: 4,
            fromCol: 6,
            targetRow: 4,
            targetCol: 5,
          },
          P6: {
            fromRow: 5,
            fromCol: 6,
            targetRow: 5,
            targetCol: 5,
          },
          P7: {
            fromRow: 6,
            fromCol: 6,
            targetRow: 6,
            targetCol: 5,
          },
          P8: {
            fromRow: 7,
            fromCol: 6,
            targetRow: 7,
            targetCol: 5,
          },
        };

        const singleSpaceCellState = {
          emptyCell: "",
          pawnCell: "P",
        };
        const checkSingleSpace = (targetRow, targetCol) => {
          const minRow = singleSpacePositions.P1.fromRow;
          const maxRow = singleSpacePositions.P8.fromRow;
          const singleSpaceCol = 5;

          return (
            targetRow >= minRow &&
            targetRow <= maxRow &&
            targetCol === singleSpaceCol
          );
        };

        const mappedCellIds = getCellIds.map((id) =>
          document.getElementById(id)
        );
        const pieceName = pawnName.name;

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

        const fromPositions = (fromRow, fromCol) => {
          const emptyCell = singleSpaceCellState.emptyCell;
          chessBoard[fromRow][fromCol] = emptyCell;
        };
        const targetPositions = (targetRow, targetCol) => {
          const filledCell = singleSpaceCellState.pawnCell;
          chessBoard[targetRow][targetCol] = filledCell;
        };

        const singleSpacePositioning = (
          fromRow,
          fromCol,
          targetRow,
          targetCol,
          targetPawn
        ) => {
          if (isSingleSpaceReady(targetRow, targetCol, targetPawn)) {
            fromPositions(fromRow, fromCol);
            targetPositions(targetRow, targetCol);
          }
        };

        const cellContent = (pawnContent) => {
          return (mappedCellIds[pawnContent].textContent = pieceName);
        };

        const singleSpaceStatus = (assignedPawn) => {
          return !trackSingleSpacePositions.includes(assignedPawn);
        };

        const handleSingleSpaceOutcomes = (singleSpacePositionsId) => {
          let fromRow = null;
          let fromCol = null;
          let targetRow = null;
          let targetCol = null;
          let targetPawn = null;
          let isCellContent = null;
          let isSingleSpaceStatus = null;

          switch (singleSpacePositionsId) {
            case getCellIds[5]:
              fromRow = singleSpacePositions.P1.fromRow;
              fromCol = singleSpacePositions.P1.fromCol;
              targetRow = singleSpacePositions.P1.targetRow;
              targetCol = singleSpacePositions.P1.targetCol;
              targetPawn = assignedPawnNames[0];
              isCellContent = cellContent(targetCol);
              isSingleSpaceStatus = singleSpaceStatus(targetPawn);
              if (isCellContent && isSingleSpaceStatus) {
                singleSpacePositioning(
                  fromRow,
                  fromCol,
                  targetRow,
                  targetCol,
                  targetPawn
                );
              }
              break;
            case getCellIds[13]:
              fromRow = singleSpacePositions.P2.fromRow;
              fromCol = singleSpacePositions.P2.fromCol;
              targetRow = singleSpacePositions.P2.targetRow;
              targetCol = singleSpacePositions.P2.targetCol;
              targetPawn = assignedPawnNames[1];
              isCellContent = cellContent(targetCol);
              isSingleSpaceStatus = singleSpaceStatus(targetPawn);
              if (isCellContent && isSingleSpaceStatus) {
                singleSpacePositioning(
                  fromRow,
                  fromCol,
                  targetRow,
                  targetCol,
                  targetPawn
                );
              }
              break;
            case getCellIds[21]:
              fromRow = singleSpacePositions.P3.fromRow;
              fromCol = singleSpacePositions.P3.fromCol;
              targetRow = singleSpacePositions.P3.targetRow;
              targetCol = singleSpacePositions.P3.targetCol;
              targetPawn = assignedPawnNames[2];
              isCellContent = cellContent(targetCol);
              isSingleSpaceStatus = singleSpaceStatus(targetPawn);
              if (isCellContent && isSingleSpaceStatus) {
                singleSpacePositioning(
                  fromRow,
                  fromCol,
                  targetRow,
                  targetCol,
                  targetPawn
                );
              }
              break;
            case getCellIds[29]:
              fromRow = singleSpacePositions.P4.fromRow;
              fromCol = singleSpacePositions.P4.fromCol;
              targetRow = singleSpacePositions.P4.targetRow;
              targetCol = singleSpacePositions.P4.targetCol;
              targetPawn = assignedPawnNames[3];
              isCellContent = cellContent(targetCol);
              isSingleSpaceStatus = singleSpaceStatus(targetPawn);
              if (isCellContent && isSingleSpaceStatus) {
                singleSpacePositioning(
                  fromRow,
                  fromCol,
                  targetRow,
                  targetCol,
                  targetPawn
                );
              }
              break;
          }
        };

        gridContainer.addEventListener("click", (e) => {
          const singleSpacePositionsId = e.target.id;
          handleSingleSpaceOutcomes(singleSpacePositionsId);
        });
      }
    }
  };

  return {
    validateSingleSpace,
  };
};

export default SingleSpacePositioning;
