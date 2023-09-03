import { getCellIds } from "../../../../../modules/ChessBoard.js";
import displayCells from "../../../objects/displayCells.ts";
import { pawnAssignments } from "../../../objects/pawnAssignments.ts";
import { displayStatus } from "../../../objects/displayStatus.ts";
import removePawns from "../../../objects/removePawns.ts";

const DisplayP1FirstMoves = () => {
  const trackP1FirstMoves: string[] = [];
  const P1: string = pawnAssignments.pawnOne.name;
  const mappedCellIds: HTMLElement = getCellIds.map((id: string) =>
    document.getElementById(id)
  );

  const isP1Ready = () => {
    const isP1Included: boolean = trackP1FirstMoves.includes(P1);
    return isP1Included;
  };

  const addP1 = () => {
    const isP1NotIncluded: number = trackP1FirstMoves.push("P2");
    return isP1NotIncluded;
  };

  const removeP1 = () => {
    const amountToRemove: number = removePawns.indexToRemove;
    const indexToRemove: number = removePawns.amountToRemove;
    const isP1Complete: string[] = trackP1FirstMoves.splice(
      amountToRemove,
      indexToRemove
    );
    return isP1Complete;
  };

  const handleP1StartSpaces = () => {
    const checkForP1: boolean = isP1Ready();
    if (!checkForP1) {
      addP1();
    }
  };

  const handleP1StartSpaceClicks = (firstMovesP1Id: string[]) => {
    const validP1: string[] = getCellIds[6];
    const firstInvalidP1Cell: string[] = getCellIds[14];
    const secondInvalidP1Cell: string[] = getCellIds[22];
    const thirdInvalidP1Cell: string[] = getCellIds[30];
    const fourthInvalidP1Cell: string[] = getCellIds[38];
    const fifthInvalidP1Cell: string[] = getCellIds[46];
    const sixthInvalidP1Cell: string[] = getCellIds[54];
    const seventhInvalidP1Cell: string[] = getCellIds[62];
    switch (firstMovesP1Id) {
      case validP1:
        handleP1StartSpaces();
        break;
      case firstInvalidP1Cell:
        removeP1();
        break;
      case secondInvalidP1Cell:
        removeP1();
        break;
      case thirdInvalidP1Cell:
        removeP1();
        break;
      case fourthInvalidP1Cell:
        removeP1();
        break;
      case fifthInvalidP1Cell:
        removeP1();
        break;
      case sixthInvalidP1Cell:
        removeP1();
        break;
      case seventhInvalidP1Cell:
        removeP1();
    }
  };

  const handleP1FirstMoveContent = (filledCell: number) => {
    const emptyStartSpace: number = displayCells.P1.startSpace;
    mappedCellIds[emptyStartSpace].textContent = displayStatus.emptyCell;
    mappedCellIds[filledCell].textContent = displayStatus.filledCell;
  };

  const handleP1FirstMoveClicks = (firstMovesP1Id: string) => {
    const singleSpaceCell: string = getCellIds[5];
    const doubleSpaceCell: string = getCellIds[4];

    switch (firstMovesP1Id) {
      case singleSpaceCell:
        const singleSpaceDisplay: number = displayCells.P1.singleSpace;
        handleP1FirstMoveContent(singleSpaceDisplay);
        break;
      case doubleSpaceCell:
        const doubleSpaceDisplay: number = displayCells.P1.doubleSpace;
        handleP1FirstMoveContent(doubleSpaceDisplay);
        break;
    }
  };

  document.addEventListener("click", (e) => {});
};
