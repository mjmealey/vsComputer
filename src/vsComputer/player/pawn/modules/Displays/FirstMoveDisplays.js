import { getCellIds } from "../../../../modules/ChessPieceAssignments.js";
import { pawnName } from "../../objects/pawnName.js";
import assignedPawnNames from "../../assignPawnNames.js";
import { trackGameStateObject } from "../../../../objects/gameStateObjects.js";

const FirstMovesDisplay = () => {

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
    handleDoubleSpaceDisplay
  }
};

export default FirstMovesDisplay;
