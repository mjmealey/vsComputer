import { getCellIds } from "../../../../../modules/ChessBoard.js";
import displayCells from "../../../objects/displayCells.js";
import { pawnAssignments } from "../../../objects/pawnAssignments.js";
import { displayStatus } from "../../../objects/displayStatus.js";
import removePawns from "../../../objects/removePawns.js";
const DisplayP1FirstMoves = () => {
    const trackP1FirstMoves = [];
    const P1 = pawnAssignments.pawnOne.name;
    const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    const isP1Ready = () => {
        const isP1Included = trackP1FirstMoves.includes(P1);
        return isP1Included;
    };
    const addP1 = () => {
        const isP1NotIncluded = trackP1FirstMoves.push("P2");
        return isP1NotIncluded;
    };
    const removeP1 = () => {
        const amountToRemove = removePawns.indexToRemove;
        const indexToRemove = removePawns.amountToRemove;
        const isP1Complete = trackP1FirstMoves.splice(amountToRemove, indexToRemove);
        return isP1Complete;
    };
    const handleP1StartSpaces = () => {
        const checkForP1 = isP1Ready();
        if (!checkForP1) {
            addP1();
        }
    };
    const handleP1StartSpaceClicks = (firstMovesP1Id) => {
        const validP1 = getCellIds[6];
        const firstInvalidP1Cell = getCellIds[14];
        const secondInvalidP1Cell = getCellIds[22];
        const thirdInvalidP1Cell = getCellIds[30];
        const fourthInvalidP1Cell = getCellIds[38];
        const fifthInvalidP1Cell = getCellIds[46];
        const sixthInvalidP1Cell = getCellIds[54];
        const seventhInvalidP1Cell = getCellIds[62];
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
    const handleP1FirstMoveContent = (filledCell) => {
        const emptyStartSpace = displayCells.P1.startSpace;
        mappedCellIds[emptyStartSpace].textContent = displayStatus.emptyCell;
        mappedCellIds[filledCell].textContent = displayStatus.filledCell;
    };
    const handleP1FirstMoveClicks = (firstMovesP1Id) => {
        const singleSpaceCell = getCellIds[5];
        const doubleSpaceCell = getCellIds[4];
        switch (firstMovesP1Id) {
            case singleSpaceCell:
                const singleSpaceDisplay = displayCells.P1.singleSpace;
                handleP1FirstMoveContent(singleSpaceDisplay);
                break;
            case doubleSpaceCell:
                const doubleSpaceDisplay = displayCells.P1.doubleSpace;
                handleP1FirstMoveContent(doubleSpaceDisplay);
                break;
        }
    };
    document.addEventListener("click", (e) => { });
};
export default DisplayP1FirstMoves;
