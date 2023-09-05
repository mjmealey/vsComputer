import { getCellIds } from "../../../../../../chessBoard/gridCellIds.js";
import { pieceState } from "../../../../../pieceState.js";

const DisplayP1FirstMoves = () => {
  const trackP1FirstMoves: string[] = [];

  const isStartSpaceReady = (assignedPawn: string) => {
    const isReady: boolean = trackP1FirstMoves.includes(assignedPawn);
    if (!isReady) {
      trackP1FirstMoves.push(assignedPawn);
    }
  };

  const removePawn = () => {
    const indexToRemove: number = pieceState.RemovePieces.indexToRemove;
    const amountToRemove: number = pieceState.RemovePieces.amountToRemove;
    const isReadyToBeRemoved: string[] = trackP1FirstMoves.splice(
      indexToRemove,
      amountToRemove
    );
    return isReadyToBeRemoved;
  };

  const handleStartSpaces = (firstMoveP1Id: EventTarget) => {
    const validSpace = getCellIds[6];
    const firstInvalidSpace = getCellIds[14];
    const secondInvalidSpace = getCellIds[22];
    const thirdInvalidSpace = getCellIds[30];
    const fourthInvalidSpace = getCellIds[38];
    const fifthInvalidSpace = getCellIds[46];
    const sixthInvalidSpace = getCellIds[54];
    const seventhInvalidSpace = getCellIds[62];

    switch(firstMoveP1Id){
      
    }

    
  };
};