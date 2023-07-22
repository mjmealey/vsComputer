import chessBoard from "../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnPositioning } from "../objects/pawnPositioning.js";
import { pawnName } from "../../pawn/objects/pawnName.js";
import { assignedPawnNames } from "../arrays/pawnAssignmentData.js";

import { trackGameStateObject } from "../../../objects/gameStateObjects.js";

const FirstMoves = () => {
  const trackFirstMoves = [];

  //the text content for each square when a pawn move is made
  const pieceName = pawnName.name;

  //handles empty cells
  const emptyCellAfterFirstMove = trackGameStateObject.emptyCell;

  //empty squares on the board after single or double space
  const emptyCellIndices = [
    { emptyCell: 6 },
    { emptyCell: 14 },
    { emptyCell: 22 },
    { emptyCell: 30 },
    { emptyCell: 38 },
    { emptyCell: 46 },
    { emptyCell: 54 },
    { emptyCell: 62 },
  ];

  //removes pawn from trackFirstMoves array after single and double spaces for each pawn
  const removePawns = 0;

  //allows the text content to be set for each cell
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
            handleSingleSpaceDisplays();
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
      if (trackFirstMoves) {
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

  const handleSingleSpaceDisplays = () => {
    //cell numbers for each single space possibility for the pawn's first move(top to bottom left to right)
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
    /*
    Key Comments
    //P1-P8 goes from far left to far right on the chessboard
    //the display functions handle the contents for both the starting cell and the single space cell after movement is complete
    //the remove functions remove specific pawns from the trackFirstMoves array based on which pawn is clicked
    //the displayClicks functions complete and finalize the single space process*/
    const handleP1SingleSpaceDisplay = (emptyCell, singleSpaceCell) => {
      mappedCellIds[emptyCell].textContent = emptyCellAfterFirstMove;
      mappedCellIds[singleSpaceCell].textContent = pieceName;
    };

    const removeP1AfterSingleSpace = () => {
      trackFirstMoves.splice(removePawns, 1);
    };

    const handleP1SingleSpaceDisplayClicks = () => {
      const isP1SingleSpaceComplete = trackFirstMoves.includes(
        assignedPawnNames[0]
      );
      if (isP1SingleSpaceComplete) {
        handleP1SingleSpaceDisplay(
          emptyCellIndices[0].emptyCell,
          singleSpaceDisplayIndices[0].singleSpace
        );
        removeP1AfterSingleSpace();
      }
    };

    const handleP2SingleSpaceDisplay = (emptyCell, singleSpaceCell) => {
      mappedCellIds[emptyCell].textContent = emptyCellAfterFirstMove;
      mappedCellIds[singleSpaceCell].textContent = pieceName;
    };

    const removeP2AfterSingleSpace = () => {
      trackFirstMoves.splice(removePawns, 1);
    };

    const handleP2SingleSpaceDisplayClicks = () => {
      const isP2SingleSpaceComplete = trackFirstMoves.includes(
        assignedPawnNames[1]
      );
      if (isP2SingleSpaceComplete) {
        handleP2SingleSpaceDisplay(
          emptyCellIndices[1].emptyCell,
          singleSpaceDisplayIndices[1].singleSpace
        );
        removeP2AfterSingleSpace();
      }
    };

    const handleP3SingleSpaceDisplay = (emptyCell, singleSpaceCell) => {
      mappedCellIds[emptyCell].textContent = emptyCellAfterFirstMove;
      mappedCellIds[singleSpaceCell].textContent = pieceName;
    };

    const removeP3AfterSingleSpace = () => {
      trackFirstMoves.splice(removePawns, 1);
    };

    const handleP3SingleSpaceDisplayClicks = () => {
      const isP3SingleSpaceComplete = trackFirstMoves.includes(
        assignedPawnNames[2]
      );
      if (isP3SingleSpaceComplete) {
        handleP3SingleSpaceDisplay(
          emptyCellIndices[2].emptyCell,
          singleSpaceDisplayIndices[2].singleSpace
        );
        removeP3AfterSingleSpace();
      }
    };

    const handleP4SingleSpaceDisplay = (emptyCell, singleSpaceCell) => {
      mappedCellIds[emptyCell].textContent = emptyCellAfterFirstMove;
      mappedCellIds[singleSpaceCell].textContent = pieceName;
    };

    const removeP4AfterSingleSpace = () => {
      trackFirstMoves.splice(removePawns, 1);
    };

    const handleP4SingleSpaceDisplayClicks = () => {
      const isP4SingleSpaceComplete = trackFirstMoves.includes(
        assignedPawnNames[3]
      );

      if (isP4SingleSpaceComplete) {
        handleP4SingleSpaceDisplay(
          emptyCellIndices[3].emptyCell,
          singleSpaceDisplayIndices[3].singleSpace
        );
        removeP4AfterSingleSpace();
      }
    };

    const handleP5SingleSpaceDisplay = (emptyCell, singleSpaceCell) => {
      mappedCellIds[emptyCell].textContent = emptyCellAfterFirstMove;
      mappedCellIds[singleSpaceCell].textContent = pieceName;
    };


    const removeP5AfterSingleSpace = () => {
      trackFirstMoves.splice(removePawns, 1);
    };

    const handleP5SingleSpaceDisplayClicks = () => {
      const isP5SingleSpaceComplete = trackFirstMoves.includes(
        assignedPawnNames[4]
      );

      if (isP5SingleSpaceComplete) {
        handleP5SingleSpaceDisplay(
          emptyCellIndices[4].emptyCell,
          singleSpaceDisplayIndices[4].singleSpace
        );
        removeP5AfterSingleSpace();
      }
    };

    const handleP6SingleSpaceDisplay = (emptyCell, singleSpaceCell) => {
      mappedCellIds[emptyCell].textContent = emptyCellAfterFirstMove
      mappedCellIds[singleSpaceCell].textContent = pieceName
    }
    
    const removeP6AfterSingleSpace = () => {
      trackFirstMoves.splice(removePawns, 1)
    }

    const handleP6SingleSpaceDisplayClicks = () => {
      const isP6SingleSpaceComplete = trackFirstMoves.includes(assignedPawnNames[5])

      if(isP6SingleSpaceComplete){
        handleP6SingleSpaceDisplay(
          emptyCellIndices[5].emptyCell,
          singleSpaceDisplayIndices[5].singleSpace,
        )
        removeP6AfterSingleSpace()
      }
    }

    const handleP7SingleSpaceDisplay = (emptyCell, singleSpaceCell) => {
      mappedCellIds[emptyCell].textContent = emptyCellAfterFirstMove
      mappedCellIds[singleSpaceCell].textContent = pieceName
    }

    const removeP7AfterSingleSpace = () => {
      trackFirstMoves.splice(removePawns, 1)
    }

    const handleP7SingleSpaceDisplayClicks = () => {
      const isP7SingleSpaceComplete = trackFirstMoves.includes(assignedPawnNames[6])

      if(isP7SingleSpaceComplete){
        handleP7SingleSpaceDisplay(
          emptyCellIndices[6].emptyCell,
          singleSpaceDisplayIndices[6].singleSpace
        )
        removeP7AfterSingleSpace()
      }
    }

    const handleP8SingleSpaceDisplay = (emptyCell, singleSpaceCell) => {
      mappedCellIds[emptyCell].textContent = emptyCellAfterFirstMove
      mappedCellIds[singleSpaceCell].textContent = pieceName
    }

    const removeP8AfterSingleSpace = () => {
      trackFirstMoves.splice(removePawns, 1)
    }

    const handleP8SingleSpaceDisplayClicks = () => {
      const isP8SingleSpaceComplete = trackFirstMoves.includes(assignedPawnNames[7])

      if(isP8SingleSpaceComplete){
        handleP8SingleSpaceDisplay(
          emptyCellIndices[7].emptyCell,
          singleSpaceDisplayIndices[7].singleSpace
        )
        removeP8AfterSingleSpace()
      }
    }
 
    const handleSingleSpaces = (singleSpaceDisplayId) => {
      switch (singleSpaceDisplayId) {
        case getCellIds[5]:
          handleP1SingleSpaceDisplayClicks();
          break;
        case getCellIds[13]:
          handleP2SingleSpaceDisplayClicks();
          break;
        case getCellIds[21]:
          handleP3SingleSpaceDisplayClicks();
          break;
        case getCellIds[29]:
          handleP4SingleSpaceDisplayClicks();
          break;
        case getCellIds[37]:
          handleP5SingleSpaceDisplayClicks();
          break;
        case getCellIds[45]:
          handleP6SingleSpaceDisplayClicks()
          break;
        case getCellIds[53]:
          handleP7SingleSpaceDisplayClicks()
          break;
        case getCellIds[61]:
          handleP8SingleSpaceDisplayClicks()
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

    const handleDoubleSpacePositionOutcomes = (targetRow, targetColumn) => {
      row = targetRow;
      column = targetColumn;

      console.log(`Row ${row} on Column ${column}`);
    };

    const handleDoubleSpacePositions = (doubleSpaceIndex) => {
      if (readyToChooseFirstMove) {
        handleDoubleSpacePositionOutcomes(
          doubleSpacingPositioning[doubleSpaceIndex].doubleSpaceRow,
          doubleSpacingPositioning[doubleSpaceIndex].doubleSpaceColumn
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
    const doubleSpaceDisplayIndices = [
      { doubleSpaceDisplay: 4 },
      { doubleSpaceDisplay: 12 },
      { doubleSpaceDisplay: 20 },
      { doubleSpaceDisplay: 28 },
      { doubleSpaceDisplay: 36 },
      { doubleSpaceDisplay: 44 },
      { doubleSpaceDisplay: 52 },
      { doubleSpaceDisplay: 60 },
    ];

    const trackDoubleSpaces = [];

    const handleDoubleSpaceDisplayOutcomes = (
      isDoubleSpaceDisplayReady,
      emptyCellAfterDoubleSpaceIndex,
      doubleSpaceTextIndex
    ) => {
      if (readyToChooseFirstMove.includes(isDoubleSpaceDisplayReady)) {
        trackDoubleSpaces.push(isDoubleSpaceDisplayReady);
        console.log(trackDoubleSpaces);
      }

      if (trackDoubleSpaces.includes(isDoubleSpaceDisplayReady)) {
        mappedCellIds[emptyCellAfterDoubleSpaceIndex].textContent =
          emptyCellAfterFirstMove;
        mappedCellIds[doubleSpaceTextIndex].textContent = pieceName;
      }
    };

    const handleDoubleSpaceDisplayClicks = (doubleSpaceDisplayIndex) => {
      if (trackDoubleSpaces) {
        handleDoubleSpaceDisplayOutcomes(
          assignedPawnNames[doubleSpaceDisplayIndex],
          emptyCellIndices[doubleSpaceDisplayIndex],
          doubleSpaceDisplayIndices[doubleSpaceDisplayIndex].doubleSpaceDisplay
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
