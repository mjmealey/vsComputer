import { getCellIds } from "../../../../../chessBoard/gridCellIds.js";
import { pieceState } from "../../../../pieceState.js";
import { gridContainer } from "../../../../../chessBoard/objects/chessBoardElements.js";
import {
  assignedP1,
  assignedP2,
  assignedP3,
  assignedP4,
  assignedP5,
  assignedP6,
  assignedP7,
  assignedP8,
} from "./reusedVariables/assignedPawns.js";

const DisplayFirstMoves = () => {
  const trackFirstMoves: string[] = [];

  const isPawnReady = (assignedPawn: string) => {
    const isReady: boolean = trackFirstMoves.includes(assignedPawn);
    return isReady;
  };

  const removePawn = () => {
    const indexToRemove = pieceState.RemovePieces.indexToRemove;
    const amountToRemove = pieceState.RemovePieces.amountToRemove;
    return trackFirstMoves.splice(indexToRemove, amountToRemove);
  };

  const addPawns = (assignedPawn: string) => {
    const notReady: boolean = !isPawnReady(assignedPawn);
    if (notReady) {
      trackFirstMoves.push(assignedPawn);
    }
  };

  const handleStartSpaces = (assignedPawn: string) => {
    removePawn();
    addPawns(assignedPawn);
  };

  const P1StartSpace = getCellIds[6];
  const P2StartSpace = getCellIds[14];
  const P3StartSpace = getCellIds[22];
  const P4StartSpace = getCellIds[30];
  const P5StartSpace = getCellIds[38];
  const P6StartSpace = getCellIds[46];
  const P7StartSpace = getCellIds[54];
  const P8StartSpace = getCellIds[62];

  const handleStartSpaceClicks = (firstMoveId: string) => {
    switch (firstMoveId) {
      case P1StartSpace:
        handleStartSpaces(assignedP1);
        break;
      case P2StartSpace:
        handleStartSpaces(assignedP2);
        break;
      case P3StartSpace:
        handleStartSpaces(assignedP3);
        break;
      case P4StartSpace:
        handleStartSpaces(assignedP4);
        break;
      case P5StartSpace:
        handleStartSpaces(assignedP5);
        break;
      case P6StartSpace:
        handleStartSpaces(assignedP6);
        break;
      case P7StartSpace:
        handleStartSpaces(assignedP7);
        break;
      case P8StartSpace:
        handleStartSpaces(assignedP8);
    }
  };

  const mappedFirstMoveIds = getCellIds.map((id: string) =>
    document.getElementById(id)
  );

  const emptyCellContent = pieceState.emptyCell;
  const filledCellContent = pieceState.Pawn.Displays.filledCell;

  const handleEmptyDisplays = (emptyCell: number) => {
    const isValidEmptyCell = mappedFirstMoveIds[emptyCell];
    if (isValidEmptyCell) {
      isValidEmptyCell.textContent = emptyCellContent;
    }
  };

  const handleFilledDisplays = (filledCell: number) => {
    const isValidFilledCell = mappedFirstMoveIds[filledCell];
    if (isValidFilledCell) {
      isValidFilledCell.textContent = filledCellContent;
    }
  };

  const handleFirstMoveDisplays = (
    assignedPawn: string,
    emptyCell: number,
    filledCell: number
  ) => {
    const isFirstMoveReady = isPawnReady(assignedPawn);
    if (isFirstMoveReady) {
      handleEmptyDisplays(emptyCell);
      handleFilledDisplays(filledCell);
      removePawn();
    }
  };

  const emptyP1Cell: number =
    pieceState.Pawn.P1.displayIndex.firstMoves.emptySpace;
  const emptyP2Cell: number =
    pieceState.Pawn.P2.displayIndex.firstMoves.emptySpace;
  const emptyP3Cell: number =
    pieceState.Pawn.P3.displayIndex.firstMoves.emptySpace;
  const emptyP4Cell: number =
    pieceState.Pawn.P4.displayIndex.firstMoves.emptySpace;
  const emptyP5Cell: number =
    pieceState.Pawn.P5.displayIndex.firstMoves.emptySpace;
  const emptyP6Cell: number =
    pieceState.Pawn.P6.displayIndex.firstMoves.emptySpace;
  const emptyP7Cell: number =
    pieceState.Pawn.P7.displayIndex.firstMoves.emptySpace;
  const emptyP8Cell: number =
    pieceState.Pawn.P8.displayIndex.firstMoves.emptySpace;

  const P1SingleSpaceCell: number =
    pieceState.Pawn.P1.displayIndex.firstMoves.singleSpace;
  const P2SingleSpaceCell: number =
    pieceState.Pawn.P2.displayIndex.firstMoves.singleSpace;
  const P3SingleSpaceCell: number =
    pieceState.Pawn.P3.displayIndex.firstMoves.singleSpace;
  const P4SingleSpaceCell: number =
    pieceState.Pawn.P4.displayIndex.firstMoves.singleSpace;
  const P5SingleSpaceCell: number =
    pieceState.Pawn.P5.displayIndex.firstMoves.singleSpace;
  const P6SingleSpaceCell: number =
    pieceState.Pawn.P6.displayIndex.firstMoves.singleSpace;
  const P7SingleSpaceCell: number =
    pieceState.Pawn.P7.displayIndex.firstMoves.singleSpace;
  const P8SingleSpaceCell: number =
    pieceState.Pawn.P8.displayIndex.firstMoves.singleSpace;

  const handleSingleSpaceClicks = (firstMoveId: string) => {
    const P1SingleSpace = getCellIds[5];
    const P2SingleSpace = getCellIds[13];
    const P3SingleSpace = getCellIds[21];
    const P4SingleSpace = getCellIds[29];
    const P5SingleSpace = getCellIds[37];
    const P6SingleSpace = getCellIds[45];
    const P7SingleSpace = getCellIds[53];
    const P8SingleSpace = getCellIds[61];
    switch (firstMoveId) {
      case P1SingleSpace:
        handleFirstMoveDisplays(assignedP1, emptyP1Cell, P1SingleSpaceCell);
        break;
      case P2SingleSpace:
        handleFirstMoveDisplays(assignedP2, emptyP2Cell, P2SingleSpaceCell);
        break;
      case P3SingleSpace:
        handleFirstMoveDisplays(assignedP3, emptyP3Cell, P3SingleSpaceCell);
        break;
      case P4SingleSpace:
        handleFirstMoveDisplays(assignedP4, emptyP4Cell, P4SingleSpaceCell);
        break;
      case P5SingleSpace:
        handleFirstMoveDisplays(assignedP5, emptyP5Cell, P5SingleSpaceCell);
        break;
      case P6SingleSpace:
        handleFirstMoveDisplays(assignedP6, emptyP6Cell, P6SingleSpaceCell);
        break;
      case P7SingleSpace:
        handleFirstMoveDisplays(assignedP7, emptyP7Cell, P7SingleSpaceCell);
        break;
      case P8SingleSpace:
        handleFirstMoveDisplays(assignedP8, emptyP8Cell, P8SingleSpaceCell);
        break;
      default:
        return null;
    }
  };

  const P1DoubleSpaceCell =
    pieceState.Pawn.P1.displayIndex.firstMoves.doubleSpace;
  const P2DoubleSpaceCell =
    pieceState.Pawn.P2.displayIndex.firstMoves.doubleSpace;
  const P3DoubleSpaceCell =
    pieceState.Pawn.P3.displayIndex.firstMoves.doubleSpace;
  const P4DoubleSpaceCell =
    pieceState.Pawn.P4.displayIndex.firstMoves.doubleSpace;
  const P5DoubleSpaceCell =
    pieceState.Pawn.P5.displayIndex.firstMoves.doubleSpace;
  const P6DoubleSpaceCell =
    pieceState.Pawn.P6.displayIndex.firstMoves.doubleSpace;
  const P7DoubleSpaceCell =
    pieceState.Pawn.P7.displayIndex.firstMoves.doubleSpace;
  const P8DoubleSpaceCell =
    pieceState.Pawn.P8.displayIndex.firstMoves.doubleSpace;

  const handleDoubleSpaceClicks = (firstMoveId: string) => {
    const P1DoubleSpace = getCellIds[4];
    const P2DoubleSpace = getCellIds[12];
    const P3DoubleSpace = getCellIds[20];
    const P4DoubleSpace = getCellIds[28];
    const P5DoubleSpace = getCellIds[36];
    const P6DoubleSpace = getCellIds[44];
    const P7DoubleSpace = getCellIds[52];
    const P8DoubleSpace = getCellIds[60];

    switch (firstMoveId) {
      case P1DoubleSpace:
        handleFirstMoveDisplays(assignedP1, emptyP1Cell, P1DoubleSpaceCell);
        break;
      case P2DoubleSpace:
        handleFirstMoveDisplays(assignedP2, emptyP2Cell, P2DoubleSpaceCell);
        break;
      case P3DoubleSpace:
        handleFirstMoveDisplays(assignedP3, emptyP3Cell, P3DoubleSpaceCell);
        break;
      case P4DoubleSpace:
        handleFirstMoveDisplays(assignedP4, emptyP4Cell, P4DoubleSpaceCell);
        break;
      case P5DoubleSpace:
        handleFirstMoveDisplays(assignedP5, emptyP5Cell, P5DoubleSpaceCell);
        break;
      case P6DoubleSpace:
        handleFirstMoveDisplays(assignedP6, emptyP6Cell, P6DoubleSpaceCell);
        break;
      case P7DoubleSpace:
        handleFirstMoveDisplays(assignedP7, emptyP7Cell, P7DoubleSpaceCell);
        break;
      case P8DoubleSpace:
        handleFirstMoveDisplays(assignedP8, emptyP8Cell, P8DoubleSpaceCell);
    }
  };

  const handleFirstMoveDisplayClicks = (firstMoveId: string) => {
    handleSingleSpaceClicks(firstMoveId);
    handleDoubleSpaceClicks(firstMoveId);
  };

  const handleStartSpacePostSingleSpace = (singleSpace: number) => {
    const isValidSingleSpace = mappedFirstMoveIds[singleSpace];
    if (isValidSingleSpace) {
      const isValidSingleSpaceFilled =
        isValidSingleSpace.textContent === pieceState.Pawn.Displays.filledCell;
      if (isValidSingleSpaceFilled) {
        removePawn();
      }
    }
  };

  const handleStartSpacePostDoubleSpace = (doubleSpace: number) => {
    const isValidDoubleSpace = mappedFirstMoveIds[doubleSpace];
    if (isValidDoubleSpace) {
      const isValidDoubleSpaceFilled =
        isValidDoubleSpace.textContent === pieceState.Pawn.Displays.filledCell;
      if (isValidDoubleSpaceFilled) {
        removePawn();
      }
    }
  };

  const handleStartSpacePostSingleSpaceClicks = (firstMoveId: string) => {
    switch (firstMoveId) {
      case P1StartSpace:
        handleStartSpacePostSingleSpace(P1SingleSpaceCell);
        break;
      case P2StartSpace:
        handleStartSpacePostSingleSpace(P2SingleSpaceCell);
        break;
      case P3StartSpace:
        handleStartSpacePostSingleSpace(P3SingleSpaceCell);
        break;
      case P4StartSpace:
        handleStartSpacePostSingleSpace(P4SingleSpaceCell);
        break;
      case P5StartSpace:
        handleStartSpacePostSingleSpace(P5SingleSpaceCell);
        break;
      case P6StartSpace:
        handleStartSpacePostSingleSpace(P6SingleSpaceCell);
        break;
      case P7StartSpace:
        handleStartSpacePostSingleSpace(P7SingleSpaceCell);
        break;
      case P8StartSpace:
        handleStartSpacePostSingleSpace(P8SingleSpaceCell);
        break;
    }
  };

  const handleStartSpacePostDoubleSpaceClicks = (firstMoveId: string) => {
    switch (firstMoveId) {
      case P1StartSpace:
        handleStartSpacePostDoubleSpace(P1DoubleSpaceCell);
        break;
      case P2StartSpace:
        handleStartSpacePostDoubleSpace(P2DoubleSpaceCell);
        break;
      case P3StartSpace:
        handleStartSpacePostDoubleSpace(P3DoubleSpaceCell);
        break;
      case P4StartSpace:
        handleStartSpacePostDoubleSpace(P4DoubleSpaceCell);
        break;
      case P5StartSpace:
        handleStartSpacePostDoubleSpace(P5DoubleSpaceCell);
        break;
      case P6StartSpace:
        handleStartSpacePostDoubleSpace(P6DoubleSpaceCell);
        break;
      case P7StartSpace:
        handleStartSpacePostDoubleSpace(P7DoubleSpaceCell);
        break;
      case P8StartSpace:
        handleStartSpacePostDoubleSpace(P8DoubleSpaceCell);
        break;
    }
  };

  const handleStartSpacePostFirstMoveClicks = (firstMoveId: string) => {
    handleStartSpacePostSingleSpaceClicks(firstMoveId);
    handleStartSpacePostDoubleSpaceClicks(firstMoveId);
  };

  const handleFirstMoves = (firstMoveId: string) => {
    handleStartSpaceClicks(firstMoveId);
    handleFirstMoveDisplayClicks(firstMoveId);
    handleStartSpacePostFirstMoveClicks(firstMoveId);
  };

  gridContainer.addEventListener("click", (e) => {
    const firstMoveId = (e.target as HTMLButtonElement).id;
    handleFirstMoves(firstMoveId);
  });
};

export default DisplayFirstMoves;
