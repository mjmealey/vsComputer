import chessBoard from "../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnPositioning } from "../objects/pawnPositioning.js";
import { pawnName } from "../../pawn/objects/pawnName.js";
import { pawnAssignments } from "../../pawn/objects/pawnAssignments.js";
import {
  assignedPawnNames,
  assignedPawnNumbers,
} from "../arrays/pawnAssignmentData.js";

import { trackGameStateObject } from "../../../objects/gameStateObjects.js";

const FirstMoves = () => {
  let trackFirstMoves = [];
  const pieceName = pawnName.name;
  const emptyCellAfterFirstMove = trackGameStateObject.emptyCell;
  let currentPawn = trackGameStateObject.emptyPieceSelection;
  const currentPawnPossibilities = [1, 2, 3, 4, 5, 6, 7, 8];
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const validateFirstMoves = () => {
    for (let row = 0; row < chessBoard.length; row++) {
      for (let column = 0; column < chessBoard[row].length; column++) {
        const firstMoveForEachPawn = chessBoard[row][column];

        switch (firstMoveForEachPawn) {
          case "P1":
            handleStartSpaces(row, column);
            handleSingleSpaceDisplay();
            break;
        }
      }
    }
  };

  const handleStartSpaces = (row, column) => {

    //the number for each start space cell on the chessboard (left to right)
    const startSpaceIndices = [6, 14, 22, 30, 38, 46, 54, 62];

    const handleStartSpaceOutcome = (
      startSpacePawnName,
      isFirstMoveReady,
      startSpaceNumbers
    ) => {

     const isFirstPawnMoveReady = !trackFirstMoves.includes(isFirstMoveReady)

      if (
        mappedCellIds[startSpaceNumbers].textContent === pieceName &&
        isFirstPawnMoveReady
      ) {
        currentPawn = startSpacePawnName 
      }
      console.log(currentPawn)
    };
   

    const handleStartSpaceCells = (startSpaceIndex) => {
      if (startSpaceIndices[startSpaceIndex]) {
        handleStartSpaceOutcome(
          assignedPawnNames[startSpaceIndex],
          assignedPawnNames[startSpaceIndex],
          startSpaceIndices[startSpaceIndex],
        )
      }
    };

    const handleStartSpaceClicks = (startSpaceId) => {
      switch(startSpaceId){
        case getCellIds[6]:
          handleStartSpaceCells(0)
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
          break
      }
    } 

    gridContainer.addEventListener("click", (e) => {
      const startSpaceId = e.target.id 
      handleStartSpaceClicks(startSpaceId)
    })

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

    const handleSingleSpaceClicks = (
      targetSingleSpaceRow,
      targetSingleSpaceColumn,
      singleSpaceNumber,
      isSingleSpaceMoveReady,
      singleSpaceMoveIsReady
    ) => {
      row = targetSingleSpaceRow;
      column = targetSingleSpaceColumn;
      currentPawn = singleSpaceNumber;
      //checks if the trackFirstMoves includes a specific pawn based on the clicked cell
      const isSingleSpaceReady = !trackFirstMoves.includes(
        isSingleSpaceMoveReady
      );

      //pushes said pawn into the trackFirstMoves array if it is not included in the array
      if (isSingleSpaceReady) {
        trackFirstMoves.push(singleSpaceMoveIsReady);
      }

      console.log(
        `P${currentPawn} is located at Row ${row} on Column ${column}`
      );
    };

    const handleSingleSpacePositioning = (singleSpaceIndex) => {
      if (currentPawn === currentPawnPossibilities[singleSpaceIndex]) {
        handleSingleSpaceClicks(
          singleSpaceAtStartPositioning[singleSpaceIndex].singleSpaceAtStartRow,
          singleSpaceAtStartPositioning[singleSpaceIndex]
            .singleSpaceAtStartColumn,
          currentPawnPossibilities[singleSpaceIndex],
          assignedPawnNames[singleSpaceIndex],
          assignedPawnNames[singleSpaceIndex]
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
    const handleSingleSpaceDisplayClicks = (
      pushedPawnName,
      checkCurrentPawn,
      emptyCell,
      singleSpaceTextIndex
    ) => {
      if (
        trackFirstMoves.includes(pushedPawnName) &&
        currentPawn === checkCurrentPawn
      ) {
        mappedCellIds[emptyCell].textContent = emptyCellAfterFirstMove;
        mappedCellIds[singleSpaceTextIndex].textContent = pawnName.name;
        currentPawn = emptyCellAfterFirstMove;
      }
    };

    const handleClicks = (singleSpaceId) => {
      const emptyCellIndices = [6, 14, 22, 30, 38, 46, 54, 62];
      const singleSpaceIndices = [5, 13, 21, 29, 37, 45, 53, 61];
      for (let i = 0; i < emptyCellIndices.length; i++) {
        if (singleSpaceId === getCellIds[singleSpaceIndices[i]]) {
          handleSingleSpaceDisplayClicks(
            assignedPawnNames[i],
            assignedPawnNumbers[i],
            emptyCellIndices[i],
            singleSpaceIndices[i]
          );
        }
      }
    };

    gridContainer.addEventListener("click", (e) => {
      const singleSpaceId = e.target.id;
      handleClicks(singleSpaceId);
    });
  };

  const handleDoubleSpacePositions = (row, column) => {
    const doubleSpacingRows = [
      pawnPositioning.pawnOne.firstMove.doubleSpace.row,
      pawnPositioning.pawnTwo.firstMove.doubleSpace.row,
      pawnPositioning.pawnThree.firstMove.doubleSpace.row,
      pawnPositioning.pawnFour.firstMove.doubleSpace.row,
      pawnPositioning.pawnFive.firstMove.doubleSpace.row,
      pawnPositioning.pawnSix.firstMove.doubleSpace.row,
      pawnPositioning.pawnSeven.firstMove.doubleSpace.row,
      pawnPositioning.pawnEight.firstMove.doubleSpace.row,
    ];

    const doubleSpacingColumns = [
      pawnPositioning.pawnOne.firstMove.doubleSpace.column,
      pawnPositioning.pawnTwo.firstMove.doubleSpace.column,
      pawnPositioning.pawnThree.firstMove.doubleSpace.column,
      pawnPositioning.pawnFour.firstMove.doubleSpace.column,
      pawnPositioning.pawnFive.firstMove.doubleSpace.column,
      pawnPositioning.pawnSix.firstMove.doubleSpace.column,
      pawnPositioning.pawnSeven.firstMove.doubleSpace.column,
      pawnPositioning.pawnEight.firstMove.doubleSpace.column,
    ];

    const handleTargetPositionsForDoubleSpace = (
      targetDoubleSpaceRow,
      targetDoubleSpaceColumn,
      doubleSpaceNumber,
      isDoubleSpaceMoveReady,
      doubleSpaceMoveIsReady
    ) => {
      row = targetDoubleSpaceRow;
      column = targetDoubleSpaceColumn;
      currentPawn = doubleSpaceNumber;
      const isDoubleSpaceReady = !trackFirstMoves.includes(
        isDoubleSpaceMoveReady
      );
      if (isDoubleSpaceReady) {
        trackFirstMoves.push(doubleSpaceMoveIsReady);
      }
    };

    const handleP1DoubleSpacePosition = () => {
      handleTargetPositionsForDoubleSpace(
        doubleSpacingRows[0],
        doubleSpacingColumns[0],
        currentPawnPossibilities[0],
        assignedPawnNames[0],
        assignedPawnNames[0]
      );
    };

    const handleP2DoubleSpacePosition = () => {
      handleTargetPositionsForDoubleSpace(
        doubleSpacingRows[1],
        doubleSpacingColumns[1],
        currentPawnPossibilities[1],
        assignedPawnNames[1],
        assignedPawnNames[1]
      );
    };

    const handleP3DoubleSpacePosition = () => {
      handleTargetPositionsForDoubleSpace(
        doubleSpacingRows[2],
        doubleSpacingColumns[2],
        currentPawnPossibilities[2],
        assignedPawnNames[2],
        assignedPawnNames[2]
      );
    };

    const handleP4DoubleSpacePosition = () => {
      handleTargetPositionsForDoubleSpace(
        doubleSpacingRows[3],
        doubleSpacingColumns[3],
        currentPawnPossibilities[3],
        assignedPawnNames[3],
        assignedPawnNames[3]
      );
    };

    const handleP5DoubleSpacePosition = () => {
      handleTargetPositionsForDoubleSpace(
        doubleSpacingRows[4],
        doubleSpacingColumns[4],
        currentPawnPossibilities[4],
        assignedPawnNames[4],
        assignedPawnNames[4]
      );
    };

    const handleP6DoubleSpacePosition = () => {
      handleTargetPositionsForDoubleSpace(
        doubleSpacingRows[5],
        doubleSpacingColumns[5],
        currentPawnPossibilities[5],
        assignedPawnNames[5],
        assignedPawnNames[5]
      );
    };
    const handleP7DoubleSpacePosition = () => {
      handleTargetPositionsForDoubleSpace(
        doubleSpacingRows[6],
        doubleSpacingColumns[6],
        currentPawnPossibilities[6],
        assignedPawnNames[6],
        assignedPawnNames[6]
      );
    };
    const handleP8DoubleSpacePosition = () => {
      handleTargetPositionsForDoubleSpace(
        doubleSpacingRows[7],
        doubleSpacingColumns[7],
        currentPawnPossibilities[7],
        assignedPawnNames[7],
        assignedPawnNames[7]
      );
    };
    const handleDoubleSpacePositionClicks = (doubleSpaceId) => {
      switch (doubleSpaceId) {
        case getCellIds[4]:
          handleP1DoubleSpacePosition();
          break;
        case getCellIds[12]:
          handleP2DoubleSpacePosition();
          break;
        case getCellIds[20]:
          handleP3DoubleSpacePosition();
          break;
        case getCellIds[28]:
          handleP4DoubleSpacePosition();
          break;
        case getCellIds[36]:
          handleP5DoubleSpacePosition();
          break;
        case getCellIds[44]:
          handleP6DoubleSpacePosition();
          break;
        case getCellIds[52]:
          handleP7DoubleSpacePosition();
          break;
        case getCellIds[60]:
          handleP8DoubleSpacePosition();
          break;
      }
    };
    gridContainer.addEventListener("click", (e) => {
      const doubleSpaceId = e.target.id;
      handleDoubleSpacePositionClicks(doubleSpaceId);
    });
  };

  const handleP2DoubleSpaceDisplay = (secondPawn) => {
    const targetSpaceForP2DoubleSpaceDisplay = mappedCellIds[12];

    targetSpaceForP2DoubleSpaceDisplay.addEventListener("click", () => {
      const isP2DoubleSpaceReady = trackFirstMoves.includes(secondPawn);
      if (isP2DoubleSpaceReady) {
        mappedCellIds[14].textContent = emptyCellAfterFirstMove;
        mappedCellIds[12].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P2) => remove_P2 !== secondPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP3DoubleSpaceDisplay = (thirdPawn) => {
    const targetSpaceForP3DoubleSpaceDisplay = mappedCellIds[20];
    targetSpaceForP3DoubleSpaceDisplay.addEventListener("click", () => {
      const isP3DoubleSpaceReady = trackFirstMoves.includes(thirdPawn);
      if (isP3DoubleSpaceReady) {
        mappedCellIds[22].textContent = emptyCellAfterFirstMove;
        mappedCellIds[20].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P3) => remove_P3 !== thirdPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP4DoubleSpaceDisplay = (fourthPawn) => {
    const targetSpaceForP4DoubleSpaceDisplay = mappedCellIds[28];

    targetSpaceForP4DoubleSpaceDisplay.addEventListener("click", () => {
      const isP4DoubleSpaceReady = trackFirstMoves.includes(fourthPawn);

      if (isP4DoubleSpaceReady) {
        mappedCellIds[30].textContent = emptyCellAfterFirstMove;
        mappedCellIds[28].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P4) => remove_P4 !== fourthPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP5DoubleSpaceDisplay = (fifthPawn) => {
    const targetSpaceForP5DoubleSpaceDisplay = mappedCellIds[36];

    targetSpaceForP5DoubleSpaceDisplay.addEventListener("click", () => {
      const isP5DoubleSpaceReady = trackFirstMoves.includes(fifthPawn);

      if (isP5DoubleSpaceReady) {
        mappedCellIds[38].textContent = emptyCellAfterFirstMove;
        mappedCellIds[36].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P5) => remove_P5 !== fifthPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP7DoubleSpaceDisplay = (seventhPawn) => {
    const targetSpaceForP7DoubleSpaceDisplay = mappedCellIds[52];

    targetSpaceForP7DoubleSpaceDisplay.addEventListener("click", () => {
      const isP7DoubleSpaceReady = trackFirstMoves.includes(seventhPawn);

      if (isP7DoubleSpaceReady) {
        mappedCellIds[54].textContent = emptyCellAfterFirstMove;
        mappedCellIds[52].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P7) => remove_P7 !== seventhPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  const handleP8DoubleSpaceDisplay = (eighthPawn) => {
    const targetSpaceForP8DoubleSpaceDisplay = mappedCellIds[60];

    targetSpaceForP8DoubleSpaceDisplay.addEventListener("click", () => {
      const isP8DoubleSpaceReady = trackFirstMoves.includes(eighthPawn);

      if (isP8DoubleSpaceReady) {
        mappedCellIds[62].textContent = emptyCellAfterFirstMove;
        mappedCellIds[60].textContent = pieceName;
        trackFirstMoves = trackFirstMoves.filter(
          (remove_P8) => remove_P8 !== eighthPawn
        );
        currentPawn = trackGameStateObject.emptyPieceSelection;
      }
    });
  };

  return {
    validateFirstMoves,
  };
};

export default FirstMoves;
