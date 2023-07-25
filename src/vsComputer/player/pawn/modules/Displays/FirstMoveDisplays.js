import { getCellIds } from "../../../../modules/ChessPieceAssignments.js";
import { pawnName } from "../../objects/pawnName.js";
import assignedPawnNames from "../../assignPawnNames.js";
import { trackGameStateObject } from "../../../../objects/gameStateObjects.js";

const FirstMovesDisplay = () => {
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

  const handleStartSpaces = () => {
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

    const possibleSingleSpaceCells = [
      { possibleSingleSpace: 5 },
      { possibleSingleSpace: 13 },
      { possibleSingleSpace: 21 },
      { possibleSingleSpace: 29 },
      { possibleSingleSpace: 37 },
      { possibleSingleSpace: 45 },
      { possibleSingleSpace: 53 },
      { possibleSingleSpace: 61 },
    ];
    /*
    Key Comments
    //P1-P8 goes from far left to far right on the chessboard
    //the display functions handle the contents for both the starting cell and the single space cell after movement is complete
    //the remove function removes specific pawns from the trackFirstMoves array based on which pawn is clicked
    //the completePawnSingleSpace function allows for each individual pawn to complete their single space based on trackFirstMoves's status*/
    //the currentSingleSpace variable tracks which cell is being interacted with during single spacing
    let currentSingleSpace = false;

    const handleSingleSpaceContent = (emptyCell, singleSpaceCell) => {
      mappedCellIds[emptyCell].textContent = emptyCellAfterFirstMove;
      mappedCellIds[singleSpaceCell].textContent = pieceName;
    };

    const removePawnsAfterSingleSpace = () => {
      trackFirstMoves.splice(removePawns, 1);
    };

    const completePawnSingleSpace = () => {
      switch (currentSingleSpace) {
        case possibleSingleSpaceCells[0].possibleSingleSpace:
          const isP1Ready = trackFirstMoves.includes(assignedPawnNames[0]);
          if (isP1Ready) {
            handleSingleSpaceContent(
              emptyCellIndices[0].emptyCell,
              singleSpaceDisplayIndices[0].singleSpace
            );
            removePawnsAfterSingleSpace();
          }
          break;
        case possibleSingleSpaceCells[1].possibleSingleSpace:
          const isP2Ready = trackFirstMoves.includes(assignedPawnNames[1]);
          if (isP2Ready) {
            handleSingleSpaceContent(
              emptyCellIndices[1].emptyCell,
              singleSpaceDisplayIndices[1].singleSpace
            );
            removePawnsAfterSingleSpace();
          }
        case possibleSingleSpaceCells[2].possibleSingleSpace:
          const isP3Ready = trackFirstMoves.includes(assignedPawnNames[2]);
          if (isP3Ready) {
            handleSingleSpaceContent(
              emptyCellIndices[2].emptyCell,
              singleSpaceDisplayIndices[2].singleSpace
            );
            removePawnsAfterSingleSpace();
          }
          break;
        case possibleSingleSpaceCells[3].possibleSingleSpace:
          const isP4Ready = trackFirstMoves.includes(assignedPawnNames[3]);
          if (isP4Ready) {
            handleSingleSpaceContent(
              emptyCellIndices[3].emptyCell,
              singleSpaceDisplayIndices[3].singleSpace
            );
            removePawnsAfterSingleSpace();
          }
          break;
        case possibleSingleSpaceCells[4].possibleSingleSpace:
          const isP5Ready = trackFirstMoves.includes(assignedPawnNames[4]);
          if (isP5Ready) {
            handleSingleSpaceContent(
              emptyCellIndices[4].emptyCell,
              singleSpaceDisplayIndices[4].singleSpace
            );
            removePawnsAfterSingleSpace();
          }
          break;
        case possibleSingleSpaceCells[5].possibleSingleSpace:
          const isP6Ready = trackFirstMoves.includes(assignedPawnNames[5]);
          if (isP6Ready) {
            handleSingleSpaceContent(
              emptyCellIndices[5].emptyCell,
              singleSpaceDisplayIndices[5].singleSpace
            );
            removePawnsAfterSingleSpace();
          }
          break;
        case possibleSingleSpaceCells[6].possibleSingleSpace:
          const isP7Ready = trackFirstMoves.includes(assignedPawnNames[6]);
          if (isP7Ready) {
            handleSingleSpaceContent(
              emptyCellIndices[6].emptyCell,
              singleSpaceDisplayIndices[6].singleSpace
            );
            removePawnsAfterSingleSpace();
          }
          break;
        case possibleSingleSpaceCells[7].possibleSingleSpace:
          const isP8Ready = trackFirstMoves.includes(assignedPawnNames[7]);
          if (isP8Ready) {
            handleSingleSpaceContent(
              emptyCellIndices[7].emptyCell,
              singleSpaceDisplayIndices[7].singleSpace
            );
            removePawnsAfterSingleSpace();
          }
      }
    };

    const handleSingleSpaces = (singleSpaceDisplayId) => {
      switch (singleSpaceDisplayId) {
        case getCellIds[5]:
          currentSingleSpace = possibleSingleSpaceCells[0].possibleSingleSpace;
          completePawnSingleSpace();
          break;
        case getCellIds[13]:
          currentSingleSpace = possibleSingleSpaceCells[1].possibleSingleSpace;
          completePawnSingleSpace();
          break;
        case getCellIds[21]:
          currentSingleSpace = possibleSingleSpaceCells[2].possibleSingleSpace;
          completePawnSingleSpace();
          break;
        case getCellIds[29]:
          currentSingleSpace = possibleSingleSpaceCells[3].possibleSingleSpace;
          completePawnSingleSpace();
          break;
        case getCellIds[37]:
          currentSingleSpace = possibleSingleSpaceCells[4].possibleSingleSpace;
          completePawnSingleSpace();
          break;
        case getCellIds[45]:
          currentSingleSpace = possibleSingleSpaceCells[5].possibleSingleSpace;
          completePawnSingleSpace();
          break;
        case getCellIds[53]:
          currentSingleSpace = possibleSingleSpaceCells[6].possibleSingleSpace;
          completePawnSingleSpace();
          break;
        case getCellIds[61]:
          currentSingleSpace = possibleSingleSpaceCells[7].possibleSingleSpace;
          completePawnSingleSpace();
          break;
      }
    };

    gridContainer.addEventListener("click", (e) => {
      const singleSpaceDisplayId = e.target.id;
      handleSingleSpaces(singleSpaceDisplayId);
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

    const possibleDoubleSpaceCells = [
      { possibleDoubleSpace: 4 },
      { possibleDoubleSpace: 12 },
      { possibleDoubleSpace: 20 },
      { possibleDoubleSpace: 28 },
      { possibleDoubleSpace: 36 },
      { possibleDoubleSpace: 44 },
      { possibleDoubleSpace: 52 },
      { possibleDoubleSpace: 60 },
    ];
 /*
    Key Comments
    //P1-P8 goes from far left to far right on the chessboard
    //the display functions handle the contents for both the starting cell and the single space cell after movement is complete
    //the remove function removes specific pawns from the trackFirstMoves array based on which pawn is clicked
    //the completePawnSingleSpace function allows for each individual pawn to complete their single space based on trackFirstMoves's status*/
    //the currentSingleSpace variable tracks which cell is being interacted with during single spacing
    let currentDoubleSpace = false;

    const handleDoubleSpaceContent = (emptyCell, doubleSpaceCell) => {
      mappedCellIds[emptyCell].textContent = emptyCellAfterFirstMove;
      mappedCellIds[doubleSpaceCell].textContent = pieceName;
    };

    const removePawnsAfterDoubleSpace = () => {
      trackFirstMoves.splice(removePawns, 1);
    };

    const completePawnDoubleSpaceDisplays = () => {
      switch (currentDoubleSpace) {
        case possibleDoubleSpaceCells[0].possibleDoubleSpace:
          const isP1Ready = trackFirstMoves.includes(assignedPawnNames[0]);
          if (isP1Ready) {
            handleDoubleSpaceContent(
              emptyCellIndices[0].emptyCell,
              doubleSpaceDisplayIndices[0].doubleSpaceDisplay
            );
            removePawnsAfterDoubleSpace();
          }
          break;
        case possibleDoubleSpaceCells[1].possibleDoubleSpace:
          const isP2Ready = trackFirstMoves.includes(assignedPawnNames[1]);
          if (isP2Ready) {
            handleDoubleSpaceContent(
              emptyCellIndices[1].emptyCell,
              doubleSpaceDisplayIndices[1].doubleSpaceDisplay
            );
            removePawnsAfterDoubleSpace();
          }
          break;
        case possibleDoubleSpaceCells[2].possibleDoubleSpace:
          const isP3Ready = trackFirstMoves.includes(assignedPawnNames[2]);
          if (isP3Ready) {
            handleDoubleSpaceContent(
              emptyCellIndices[2].emptyCell,
              doubleSpaceDisplayIndices[2].doubleSpaceDisplay
            );
            removePawnsAfterDoubleSpace();
          }
          break;
        case possibleDoubleSpaceCells[3].possibleDoubleSpace:
          const isP4Ready = trackFirstMoves.includes(assignedPawnNames[3]);
          if (isP4Ready) {
            handleDoubleSpaceContent(
              emptyCellIndices[3].emptyCell,
              doubleSpaceDisplayIndices[3].doubleSpaceDisplay
            );
          }
          break;
        case possibleDoubleSpaceCells[4].possibleDoubleSpace:
          const isP5Ready = trackFirstMoves.includes(assignedPawnNames[4]);
          if (isP5Ready) {
            handleDoubleSpaceContent(
              emptyCellIndices[4].emptyCell,
              doubleSpaceDisplayIndices[4].doubleSpaceDisplay
            );
            removePawnsAfterDoubleSpace();
          }
          break;
        case possibleDoubleSpaceCells[5].possibleDoubleSpace:
          const isP6Ready = trackFirstMoves.includes(assignedPawnNames[5]);
          if (isP6Ready) {
            handleDoubleSpaceContent(
              emptyCellIndices[5].emptyCell,
              doubleSpaceDisplayIndices[5].doubleSpaceDisplay
            );
            removePawnsAfterDoubleSpace();
          }
          break;
        case possibleDoubleSpaceCells[6].possibleDoubleSpace:
          const isP7Ready = trackFirstMoves.includes(assignedPawnNames[6]);
          if (isP7Ready) {
            handleDoubleSpaceContent(
              emptyCellIndices[6].emptyCell,
              doubleSpaceDisplayIndices[6].doubleSpaceDisplay
            );
            removePawnsAfterDoubleSpace();
          }
          break;
        case possibleDoubleSpaceCells[7].possibleDoubleSpace:
          const isP8Ready = trackFirstMoves.includes(assignedPawnNames[7]);
          if (isP8Ready) {
            handleDoubleSpaceContent(
              emptyCellIndices[7].emptyCell,
              doubleSpaceDisplayIndices[7].doubleSpaceDisplay
            );
            removePawnsAfterDoubleSpace();
          }
      }
    };

    const handleDoubleSpaceDisplays = (doubleSpaceId) => {
      switch (doubleSpaceId) {
        case getCellIds[4]:
          currentDoubleSpace = possibleDoubleSpaceCells[0].possibleDoubleSpace;
          completePawnDoubleSpaceDisplays();
          break;
        case getCellIds[12]:
          currentDoubleSpace = possibleDoubleSpaceCells[1].possibleDoubleSpace;
          completePawnDoubleSpaceDisplays();
          break;
        case getCellIds[20]:
          currentDoubleSpace = possibleDoubleSpaceCells[2].possibleDoubleSpace;
          completePawnDoubleSpaceDisplays();
          break;
        case getCellIds[28]:
          currentDoubleSpace = possibleDoubleSpaceCells[3].possibleDoubleSpace;
          completePawnDoubleSpaceDisplays();
          break;
        case getCellIds[36]:
          currentDoubleSpace = possibleDoubleSpaceCells[4].possibleDoubleSpace;
          completePawnDoubleSpaceDisplays();
          break;
        case getCellIds[44]:
          currentDoubleSpace = possibleDoubleSpaceCells[5].possibleDoubleSpace;
          completePawnDoubleSpaceDisplays();
          break;
        case getCellIds[52]:
          currentDoubleSpace = possibleDoubleSpaceCells[6].possibleDoubleSpace;
          completePawnDoubleSpaceDisplays();
          break;
        case getCellIds[60]:
          currentDoubleSpace = possibleDoubleSpaceCells[7].possibleDoubleSpace;
          completePawnDoubleSpaceDisplays();
          break;
      }
    };

    gridContainer.addEventListener("click", (e) => {
      const doubleSpaceId = e.target.id;
      handleDoubleSpaceDisplays(doubleSpaceId);
    });
  };

  return {
    handleStartSpaces,
    handleSingleSpaceDisplays,
    handleDoubleSpaceDisplay
  }
};

export default FirstMovesDisplay;
