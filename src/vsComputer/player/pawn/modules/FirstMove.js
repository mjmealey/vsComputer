import chessBoard from "../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnPositioning } from "../objects/pawnPositioning.js";
import { pawnName } from "../../pawn/objects/pawnName.js";
import { assignedPawnNames } from "../arrays/pawnAssignmentData.js";

import { trackGameStateObject } from "../../../objects/gameStateObjects.js";

const FirstMoves = () => {
  const trackFirstMoves = [];
  const pieceName = pawnName.name;
  const emptyCellAfterFirstMove = trackGameStateObject.emptyCell;
  const emptyCellIndices = [6, 14, 22, 30, 38, 46, 54, 62];
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
  //the number for each start space cell on the chessboard (left to right)
  const startSpaceIndices = [
    { startSpace: 6 },
    { startSpace: 14 },
    { startSpace: 22 },
    { startSpace: 30 },
    { startSpace: 38 },
    { startSpace: 46 },
    { startSpace: 54 },
    { startSpace: 62 },
  ];

  const validateFirstMoves = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let column = 0; column < chessBoard[row].length; column++) {
        const firstMoveForEachPawn = chessBoard[row][column];

        switch (firstMoveForEachPawn) {
          case "P1":
            handleStartSpaces(row, column);
            handleSingleSpaceDisplay();
            handleDoubleSpaceDisplay();
            break;
        }
      }
    }
  };

  const handleStartSpaces = (row, column) => {
    const handleStartSpaceOutcome = (isFirstMoveReady, startSpaceNumbers) => {
      const isFirstPawnMoveReady = !trackFirstMoves.includes(isFirstMoveReady);

      if (
        mappedCellIds[startSpaceNumbers].textContent === pieceName &&
        isFirstPawnMoveReady
      ) {
        trackFirstMoves.push(isFirstMoveReady);
      }
    };

    const handleStartSpaceCells = (startSpaceIndex) => {
      if (startSpaceIndices[startSpaceIndex].startSpace) {
        handleStartSpaceOutcome(
          assignedPawnNames[startSpaceIndex],
          startSpaceIndices[startSpaceIndex].startSpace
        );
      }
    };

    const handleStartSpaceClicks = (startSpaceId) => {
      switch (startSpaceId) {
        case getCellIds[6]:
          handleStartSpaceCells(0);
          break;
        case getCellIds[14]:
          handleStartSpaceCells(1);
          break;
        case getCellIds[22]:
          handleStartSpaceCells(2);
          break;
        case getCellIds[30]:
          handleStartSpaceCells(3);
          break;
        case getCellIds[38]:
          handleStartSpaceCells(4);
          break;
        case getCellIds[46]:
          handleStartSpaceCells(5);
          break;
        case getCellIds[54]:
          handleStartSpaceCells(6);
          break;
        case getCellIds[62]:
          handleStartSpaceCells(7);
          break;
      }
    };

    gridContainer.addEventListener("click", (e) => {
      const startSpaceId = e.target.id;
      handleStartSpaceClicks(startSpaceId);
    });

    handleSingleSpacePositions(row, column);
    handleDoubleSpacePositions(row, column);
  };

  const handleSingleSpacePositions = (row, column) => {
    //top to bottom singleSpaceAtStartPositioning focuses on the pawns on the bottom of the chessboard from left to right
    const singleSpaceAtStartPositioning = [
      {
        singleSpaceAtStartRow:
          pawnPositioning.pawnOne.firstMove.singleSpace.row,
        singleSpaceAtStartColumn:
          pawnPositioning.pawnOne.firstMove.singleSpace.column,
      },
      {
        singleSpaceAtStartRow:
          pawnPositioning.pawnTwo.firstMove.singleSpace.row,
        singleSpaceAtStartColumn:
          pawnPositioning.pawnTwo.firstMove.singleSpace.column,
      },
      {
        singleSpaceAtStartRow:
          pawnPositioning.pawnThree.firstMove.singleSpace.row,
        singleSpaceAtStartColumn:
          pawnPositioning.pawnThree.firstMove.singleSpace.column,
      },
      {
        singleSpaceAtStartRow:
          pawnPositioning.pawnFour.firstMove.singleSpace.row,
        singleSpaceAtStartColumn:
          pawnPositioning.pawnFour.firstMove.singleSpace.column,
      },
      {
        singleSpaceAtStartRow:
          pawnPositioning.pawnFive.firstMove.singleSpace.row,
        singleSpaceAtStartColumn:
          pawnPositioning.pawnFive.firstMove.singleSpace.column,
      },
      {
        singleSpaceAtStartRow:
          pawnPositioning.pawnSix.firstMove.singleSpace.row,
        singleSpaceAtStartColumn:
          pawnPositioning.pawnSix.firstMove.singleSpace.column,
      },
      {
        singleSpaceAtStartRow:
          pawnPositioning.pawnSeven.firstMove.singleSpace.row,
        singleSpaceAtStartColumn:
          pawnPositioning.pawnSeven.firstMove.singleSpace.column,
      },
      {
        singleSpaceAtStartRow:
          pawnPositioning.pawnEight.firstMove.singleSpace.row,
        singleSpaceAtStartColumn:
          pawnPositioning.pawnEight.firstMove.singleSpace.column,
      },
    ];

    const handleSingleSpaceClicks = (targetRow, targetColumn) => {
      row = targetRow;
      column = targetColumn;
      //tracks position of each pawn
      console.log(`Row ${row} on Column ${column}`);
    };

    const handleSingleSpacePositioning = (singleSpaceIndex) => {
      if (trackFirstMoves[singleSpaceIndex]) {
        handleSingleSpaceClicks(
          singleSpaceAtStartPositioning[singleSpaceIndex].singleSpaceAtStartRow,
          singleSpaceAtStartPositioning[singleSpaceIndex]
            .singleSpaceAtStartColumn
        );
      }
    };

    const handleSingleSpacePositionClicks = (singleSpacePositionIds) => {
      switch (singleSpacePositionIds) {
        case getCellIds[5]:
          handleSingleSpacePositioning(0);
          break;
        case getCellIds[13]:
          handleSingleSpacePositioning(1);
          break;
        case getCellIds[21]:
          handleSingleSpacePositioning(2);
          break;
        case getCellIds[29]:
          handleSingleSpacePositioning(3);
          break;
        case getCellIds[37]:
          handleSingleSpacePositioning(4);
          break;
        case getCellIds[45]:
          handleSingleSpacePositioning(5);
          break;
        case getCellIds[53]:
          handleSingleSpacePositioning(6);
          break;
        case getCellIds[61]:
          handleSingleSpacePositioning(7);
          break;
      }
    };

    gridContainer.addEventListener("click", (e) => {
      const singleSpacePositionIds = e.target.id;
      handleSingleSpacePositionClicks(singleSpacePositionIds);
    });
  };

  const handleSingleSpaceDisplay = () => {
    const singleSpaceDisplayIndices = [
      { singleSpace: 5 },
      { singleSpace: 13 },
      { singleSpace: 21 },
      { singleSpace: 29 },
      { singleSpace: 37 },
      { singleSpace: 45 },
      { singleSpace: 53 },
      { singleSpace: 61 },
    ];
    const handleSingleSpaceDisplayOutcomes = (
      emptyCell,
      singleSpaceText,
      isSingleSpaceDisplayReady
    ) => {
      const isSingleSpaceMoveReady = trackFirstMoves.includes(
        isSingleSpaceDisplayReady
      );
      if (isSingleSpaceMoveReady) {
        mappedCellIds[emptyCell].textContent = emptyCellAfterFirstMove;
        mappedCellIds[singleSpaceText].textContent = pieceName;
      }
    };

    const handleSingleSpaceDisplayClicks = (singleSpaceDisplayIndex) => {
      if (trackFirstMoves[singleSpaceDisplayIndex]) {
        handleSingleSpaceDisplayOutcomes(
          startSpaceIndices[singleSpaceDisplayIndex].startSpace,
          singleSpaceDisplayIndices[singleSpaceDisplayIndex].singleSpace,
          assignedPawnNames[singleSpaceDisplayIndex],
          assignedPawnNames[singleSpaceDisplayIndex]
        );
      }
    };

    const handleSingleSpaces = (singleSpaceDisplayId) => {
      switch (singleSpaceDisplayId) {
        case getCellIds[5]:
          handleSingleSpaceDisplayClicks(0);
          break;
      }
    };

    gridContainer.addEventListener("click", (e) => {
      const singleSpaceDisplayId = e.target.id;
      handleSingleSpaces(singleSpaceDisplayId);
    });
  };

  const handleDoubleSpacePositions = (row, column) => {
    const doubleSpacingPositioning = [
      {
        doubleSpaceRow: pawnPositioning.pawnOne.firstMove.doubleSpace.row,
        doubleSpaceColumn: pawnPositioning.pawnOne.firstMove.doubleSpace.column,
      },
      {
        doubleSpaceRow: pawnPositioning.pawnTwo.firstMove.doubleSpace.row,
        doubleSpaceColumn: pawnPositioning.pawnTwo.firstMove.doubleSpace.column,
      },
      {
        doubleSpaceRow: pawnPositioning.pawnThree.firstMove.doubleSpace.row,
        doubleSpaceColumn:
          pawnPositioning.pawnThree.firstMove.doubleSpace.column,
      },
      {
        doubleSpaceRow: pawnPositioning.pawnFour.firstMove.doubleSpace.row,
        doubleSpaceColumn:
          pawnPositioning.pawnFour.firstMove.doubleSpace.column,
      },
      {
        doubleSpaceRow: pawnPositioning.pawnFive.firstMove.doubleSpace.row,
        doubleSpaceColumn:
          pawnPositioning.pawnFive.firstMove.doubleSpace.column,
      },
      {
        doubleSpaceRow: pawnPositioning.pawnSix.firstMove.doubleSpace.row,
        doubleSpaceColumn: pawnPositioning.pawnSix.firstMove.doubleSpace.column,
      },
      {
        doubleSpaceRow: pawnPositioning.pawnSeven.firstMove.doubleSpace.row,
        doubleSpaceColumn:
          pawnPositioning.pawnSeven.firstMove.doubleSpace.column,
      },
      {
        doubleSpaceRow: pawnPositioning.pawnEight.firstMove.doubleSpace.row,
        doubleSpaceColumn:
          pawnPositioning.pawnEight.firstMove.doubleSpace.column,
      },
    ];

    const handleDoubleSpacePositionOutcomes = (
      targetDoubleSpaceRow,
      targetDoubleSpaceColumn,
      doubleSpaceName,
      isDoubleSpaceMoveReady,
      doubleSpaceMoveIsReady
    ) => {
      row = targetDoubleSpaceRow;
      column = targetDoubleSpaceColumn;
      currentPawn = doubleSpaceName;
      const isDoubleSpaceReady = !trackFirstMoves.includes(
        isDoubleSpaceMoveReady
      );
      if (isDoubleSpaceReady) {
        trackFirstMoves.push(doubleSpaceMoveIsReady);
      }
      console.log(
        `P${currentPawn} is located at Row ${row} on Column ${column}`
      );
      console.log(currentPawn);
      console.log(trackFirstMoves);
    };

    const handleDoubleSpacePositions = (doubleSpaceIndex) => {
      if (currentPawn) {
        handleDoubleSpacePositionOutcomes(
          doubleSpacingPositioning[doubleSpaceIndex].doubleSpaceRow,
          doubleSpacingPositioning[doubleSpaceIndex].doubleSpaceColumn,
          assignedPawnNames[doubleSpaceIndex],
          assignedPawnNames[doubleSpaceIndex],
          assignedPawnNames[doubleSpaceIndex]
        );
      }
    };

    const handleDoubleSpaceClicks = (doubleSpaceId) => {
      switch (doubleSpaceId) {
        case getCellIds[4]:
          handleDoubleSpacePositions(0);
          break;
        case getCellIds[12]:
          handleDoubleSpacePositions(1);
          break;
        case getCellIds[20]:
          handleDoubleSpacePositions(2);
          break;
        case getCellIds[28]:
          handleDoubleSpacePositions(3);
          break;
        case getCellIds[36]:
          handleDoubleSpacePositions(4);
          break;
        case getCellIds[44]:
          handleDoubleSpacePositions(5);
          break;
        case getCellIds[52]:
          handleDoubleSpacePositions(6);
          break;
        case getCellIds[60]:
          handleDoubleSpacePositions(7);
          break;
      }
    };

    gridContainer.addEventListener("click", (e) => {
      const doubleSpaceId = e.target.id;
      handleDoubleSpaceClicks(doubleSpaceId);
    });
  };

  const handleDoubleSpaceDisplay = () => {
    const handleDoubleSpaceDisplayOutcomes = (
      isDoubleSpaceDisplayReady,
      checkCurrentPawnAfterDoubleSpace,
      emptyCellAfterDoubleSpaceIndex,
      doubleSpaceTextIndex
    ) => {
      if (
        trackFirstMoves.includes(isDoubleSpaceDisplayReady) &&
        currentPawn === checkCurrentPawnAfterDoubleSpace
      ) {
        mappedCellIds[emptyCellAfterDoubleSpaceIndex].textContent =
          emptyCellAfterFirstMove;
        mappedCellIds[doubleSpaceTextIndex].textContent = pieceName;
      }
      console.log(currentPawn);
      console.log(trackFirstMoves);
    };

    const doubleSpaceIndices = [4, 12, 20, 28, 36, 44, 52, 60];
    const handleDoubleSpaceDisplayClicks = (doubleSpaceDisplayIndex) => {
      if (currentPawn) {
        handleDoubleSpaceDisplayOutcomes(
          assignedPawnNames[doubleSpaceDisplayIndex],
          assignedPawnNames[doubleSpaceDisplayIndex],
          emptyCellIndices[doubleSpaceDisplayIndex],
          doubleSpaceIndices[doubleSpaceDisplayIndex]
        );
      }
    };

    const handleDoubleSpaceDisplays = (doubleSpaceId) => {
      switch (doubleSpaceId) {
        case getCellIds[4]:
          handleDoubleSpaceDisplayClicks(0);
          break;
        case getCellIds[12]:
          handleDoubleSpaceDisplayClicks(1);
          break;
        case getCellIds[20]:
          handleDoubleSpaceDisplayClicks(2);
          break;
        case getCellIds[28]:
          handleDoubleSpaceDisplayClicks(3);
          break;
        case getCellIds[36]:
          handleDoubleSpaceDisplayClicks(4);
          break;
        case getCellIds[44]:
          handleDoubleSpaceDisplayClicks(5);
          break;
        case getCellIds[52]:
          handleDoubleSpaceDisplayClicks(6);
          break;
        case getCellIds[60]:
          handleDoubleSpaceDisplayClicks(7);
          break;
      }
    };

    gridContainer.addEventListener("click", (e) => {
      const doubleSpaceId = e.target.id;
      handleDoubleSpaceDisplays(doubleSpaceId);
    });
  };

  return {
    validateFirstMoves,
  };
};

export default FirstMoves;
