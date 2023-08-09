import chessBoard from "../../../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../../../modules/ChessBoard.js";
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

        const singleSpaceStatus = (assignedPawn) => {
          return !trackSingleSpacePositions.includes(assignedPawn);
        };

        const handleSingleSpaceOutcomes = (singleSpacePositionsId) => {
          let fromRow = null;
          let fromCol = null;
          let targetRow = null;
          let targetCol = null;
          let targetPawn = null;

          switch (singleSpacePositionsId) {
            case getCellIds[5]:
              fromRow = singleSpacePositions.P1.fromRow;
              fromCol = singleSpacePositions.P1.fromCol;
              targetRow = singleSpacePositions.P1.targetRow;
              targetCol = singleSpacePositions.P1.targetCol;
              targetPawn = assignedPawnNames[0];
              const isP1Displayed = mappedCellIds[5].textContent === pieceName;
              const isP1Complete = singleSpaceStatus(targetPawn);
              if (isP1Displayed && isP1Complete) {
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
              const isP2Displayed = mappedCellIds[13].textContent === pieceName;
              const isP2Complete = singleSpaceStatus(targetPawn);
              if (isP2Displayed && isP2Complete) {
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
              const isP3Displayed = mappedCellIds[21].textContent === pieceName;
              const isP3Complete = singleSpaceStatus(targetPawn);
              if (isP3Displayed && isP3Complete) {
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
              const isP4Displayed = mappedCellIds[29].textContent === pieceName;
              const isP4Complete = singleSpaceStatus(targetPawn);
              if (isP4Displayed && isP4Complete) {
                singleSpacePositioning(
                  fromRow,
                  fromCol,
                  targetRow,
                  targetCol,
                  targetPawn
                );
              }
              break;
            case getCellIds[37]:
              fromRow = singleSpacePositions.P5.fromRow;
              fromCol = singleSpacePositions.P5.fromCol;
              targetRow = singleSpacePositions.P5.targetRow;
              targetCol = singleSpacePositions.P5.targetCol;
              targetPawn = assignedPawnNames[4];
              const isP5Displayed = mappedCellIds[37].textContent === pieceName;
              const isP5Complete = singleSpaceStatus(targetPawn);
              if (isP5Displayed && isP5Complete) {
                singleSpacePositioning(
                  fromRow,
                  fromCol,
                  targetRow,
                  targetCol,
                  targetPawn
                );
              }
              break;
            case getCellIds[45]:
              fromRow = singleSpacePositions.P6.fromRow;
              fromCol = singleSpacePositions.P6.fromCol;
              targetRow = singleSpacePositions.P6.targetRow;
              targetCol = singleSpacePositions.P6.targetCol;
              targetPawn = assignedPawnNames[5];
              const isP6Displayed = mappedCellIds[45].textContent === pieceName;
              const isP6Complete = singleSpaceStatus(targetPawn);
              if (isP6Displayed && isP6Complete) {
                singleSpacePositioning(
                  fromRow,
                  fromCol,
                  targetRow,
                  targetCol,
                  targetPawn
                );
              }
              break;
            case getCellIds[53]:
              fromRow = singleSpacePositions.P7.fromRow;
              fromCol = singleSpacePositions.P7.fromCol;
              targetRow = singleSpacePositions.P7.targetRow;
              targetCol = singleSpacePositions.P7.targetCol;
              targetPawn = assignedPawnNames[6];
              const isP7Displayed = mappedCellIds[53].textContent === pieceName;
              const isP7Complete = singleSpaceStatus(targetPawn);
              if (isP7Displayed && isP7Complete) {
                singleSpacePositioning(
                  fromRow,
                  fromCol,
                  targetRow,
                  targetCol,
                  targetPawn
                );
              }
              break;
            case getCellIds[61]:
              fromRow = singleSpacePositions.P8.fromRow;
              fromCol = singleSpacePositions.P8.fromCol;
              targetRow = singleSpacePositions.P8.targetRow;
              targetCol = singleSpacePositions.P8.targetCol;
              targetPawn = assignedPawnNames[7];
              const isP8Displayed = mappedCellIds[61].textContent === pieceName;
              const isP8Complete = singleSpaceStatus(targetPawn);
              if (isP8Displayed && isP8Complete) {
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
