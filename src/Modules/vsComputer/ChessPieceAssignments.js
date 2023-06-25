import createChessBoard from "./ChessBoard.js";

const gridCellIds = createChessBoard();

import {
  pawnAssignmentObject,
  rookAssignmentObject,
  knightAssignmentObject,
  bishopAssignmentObject,
  queenAssignmentObject,
  kingAssignmentObject,
} from "./assignmentObjects.js";

import {
    displayGameStateTextObject,
    trackGameStateObject
} from "./gameStateObjects.js"

const displayGameState = document.createElement(
    displayGameStateTextObject.textElement
  );
    document.body.appendChild(displayGameState)

const ChessPieceAssignments = () => {


  let currentPiece = trackGameStateObject.emptyPieceSelection;
  let currentPawn = trackGameStateObject.emptyPieceSelection;
  let currentPawnPiece = trackGameStateObject.emptyPieceSelection;
  let currentlyClickedCell = "";
  let firstPiece = "";
  let firstPawn = "";
  //first move variable

  
  const startOfGame = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));
    console.log(gridCellIds);
    //empty cell assignments
    if (emptyCellAssignments) {
      displayGameState.innerText = displayGameStateTextObject.preGameStartingText;
    } else {
      displayGameState.innerText = displayGameStateTextObject.gameStartingText;
    }
    return { startOfGame };
  };

  const pawnCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[1].textContent = pawnAssignmentObject.pawnCellOne.pieceName;
    mappedCellIds[6].textContent = pawnAssignmentObject.pawnCellSix.pieceName;
    mappedCellIds[9].textContent = pawnAssignmentObject.pawnCellNine.pieceName;
    mappedCellIds[14].textContent = pawnAssignmentObject.pawnCellFourteen.pieceName;
    mappedCellIds[17].textContent = pawnAssignmentObject.pawnCellSeventeen.pieceName;
    mappedCellIds[22].textContent = pawnAssignmentObject.pawnCellTwentyTwo.pieceName;
    mappedCellIds[25].textContent = pawnAssignmentObject.pawnCellTwentyFive.pieceName;
    mappedCellIds[30].textContent = pawnAssignmentObject.pawnCellThirty.pieceName;
    mappedCellIds[33].textContent = pawnAssignmentObject.pawnCellThirtyThree.pieceName;
    mappedCellIds[38].textContent = pawnAssignmentObject.pawnCellThirtyEight.pieceName;
    mappedCellIds[41].textContent = pawnAssignmentObject.pawnCellFortyOne.pieceName;
    mappedCellIds[46].textContent = pawnAssignmentObject.pawnCellFortySix.pieceName;
    mappedCellIds[49].textContent = pawnAssignmentObject.pawnCellFortyNine.pieceName;
    mappedCellIds[54].textContent = pawnAssignmentObject.pawnCellFiftyFour.pieceName;
    mappedCellIds[57].textContent = pawnAssignmentObject.pawnCellFiftySeven.pieceName;
    mappedCellIds[62].textContent = pawnAssignmentObject.pawnCellSixtyTwo.pieceName;

    return { pawnCellAssignments };
  };

  const rookCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[0].textContent = rookAssignmentObject.rookCell0;
    mappedCellIds[7].textContent = rookAssignmentObject.rookCell7;
    mappedCellIds[56].textContent = rookAssignmentObject.rookCell56;
    mappedCellIds[63].textContent = rookAssignmentObject.rookCell63;

    return { rookCellAssignments };
  };

  const knightCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[8].textContent = knightAssignmentObject.knightCell8;
    mappedCellIds[15].textContent = knightAssignmentObject.knightCell15;
    mappedCellIds[48].textContent = knightAssignmentObject.knightCell48;
    mappedCellIds[55].textContent = knightAssignmentObject.knightCell55;

    return { knightCellAssignments };
  };

  const bishopCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[16].textContent = bishopAssignmentObject.bishopCell16;
    mappedCellIds[23].textContent = bishopAssignmentObject.bishopCell23;
    mappedCellIds[40].textContent = bishopAssignmentObject.bishopCell40;
    mappedCellIds[47].textContent = bishopAssignmentObject.bishopCell47;

    return { bishopCellAssignments };
  };

  const queenCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[24].textContent = queenAssignmentObject.queenCell24;
    mappedCellIds[31].textContent = queenAssignmentObject.queenCell31;

    return { queenCellAssignments };
  };

  const kingCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[32].textContent = kingAssignmentObject.kingCell32;
    mappedCellIds[39].textContent = kingAssignmentObject.kingCell39;

    return { kingCellAssignments };
  };

  const emptyCellAssignments = (mappedCellIds) => {
    mappedCellIds = gridCellIds.map((id) => document.getElementById(id));

    mappedCellIds[2].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell2;
    mappedCellIds[3].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell3;
    mappedCellIds[4].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell4;
    mappedCellIds[5].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell5;
    mappedCellIds[10].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell10;
    mappedCellIds[11].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell11;
    mappedCellIds[12].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell12;
    mappedCellIds[13].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell13;
    mappedCellIds[18].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell18;
    mappedCellIds[19].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell19;
    mappedCellIds[20].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell20;
    mappedCellIds[21].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell21;
    mappedCellIds[26].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell26;
    mappedCellIds[27].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell27;
    mappedCellIds[28].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell28;
    mappedCellIds[29].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell29;
    mappedCellIds[34].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell34;
    mappedCellIds[35].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell35;
    mappedCellIds[36].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell36;
    mappedCellIds[37].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell37;
    mappedCellIds[42].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell42;
    mappedCellIds[43].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell43;
    mappedCellIds[44].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell44;
    mappedCellIds[45].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell45;
    mappedCellIds[50].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell50;
    mappedCellIds[51].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell51;
    mappedCellIds[52].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell52;
    mappedCellIds[53].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell53;
    mappedCellIds[58].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell58;
    mappedCellIds[59].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell59;
    mappedCellIds[60].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell60;
    mappedCellIds[61].textContent = EMPTY_CELL_ASSIGNMENTS.emptyCell61;

    return { emptyCellAssignments };
  };

  return {
    startOfGame,
    pawnCellAssignments,
    kingCellAssignments,
    rookCellAssignments,
    queenCellAssignments,
    bishopCellAssignments,
    emptyCellAssignments,
    knightCellAssignments,
  };
};

export default ChessPieceAssignments;
export const getCellIds = gridCellIds;
export const getDisplayGameState = displayGameState