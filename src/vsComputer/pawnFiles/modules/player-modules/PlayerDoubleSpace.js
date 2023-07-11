import chessBoard from "../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { playerDoubleSpacingRowsArray } from "../../objects/pawnArrays.js";
import { playerDoubleSpacingColumnsArray } from "../../objects/pawnArrays.js";

const PlayerDoubleSpacing = () => {
  const pieceName = `${pawnAssignmentObject.pieceName}`;
  const emptyCellAfterDoubleSpace = `${trackGameStateObject.emptyCell}`;
  let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;
  //numbers for each pawn
  const pieceNumbers = ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"];

  const validateDoubleSpacing = () => {
    const mappedCellIds = getCellIds.map((id) => document.getElementById(id));
    let doubleSpacingAtStart = [];

    //algorithm for chessboard array
    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        const doubleSpacing = chessBoard[row][col];
        //checks each individual pawn's qualifiers for double spacing
        switch (doubleSpacing) {
          case "P1":
            const targetRowNumberForP1 = playerDoubleSpacingRowsArray[0];
            const targetColNumberForP1 = playerDoubleSpacingColumnsArray[0];
            const assignedNameForP1 = `${pawnAssignmentObject.playerSide.pawnOne.assignedName}`;
            //checks for situations where double space will be removed or not happened yet
            if (
              col !== targetColNumberForP1 ||
              (row !== targetRowNumberForP1 && col !== targetColNumberForP1)
            ) {
              doubleSpacingAtStart.filter((remove_P1) => remove_P1 !== "P1");
              console.log(doubleSpacingAtStart);
            }
            //allows for text content to be displayed based on current state
            gridContainer.addEventListener("click", (e) => {
              const P1Clicks = e.target.id;

              switch (P1Clicks) {
                case getCellIds[6]:
                  if (mappedCellIds[6].textContent === `${pieceName}`) {
                    currentPawn = `${assignedNameForP1}`;
                  }
                  break;
                case getCellIds[4]:
                  if (currentPawn === `${assignedNameForP1}`) {
                    row = targetRowNumberForP1;
                    col = targetColNumberForP1;
                    mappedCellIds[4].textContent = `${pieceName}`;
                    mappedCellIds[6].textContent = `${emptyCellAfterDoubleSpace}`;
                  }
                  if (
                    row === targetRowNumberForP1 &&
                    col === targetColNumberForP1
                  ) {
                    console.log("P1 is located on Column 4 of Row 0");
                    doubleSpacingAtStart.push(pieceNumbers[0]);
                    console.log(doubleSpacingAtStart);
                  }
              }
            });
            break;
          case "P2":
            //row and column numbers for double spacing
            const targetRowNumberForP2 = playerDoubleSpacingRowsArray[1];
            const targetColNumberForP2 = playerDoubleSpacingColumnsArray[1];
            const assignedNameForP2 = `${pawnAssignmentObject.playerSide.pawnTwo.assignedName}`;
            if (
              col !== targetColNumberForP2 ||
              (row !== targetRowNumberForP2 && col !== targetColNumberForP2)
            ) {
              doubleSpacingAtStart.filter((remove_P2) => remove_P2 !== "P2");
              console.log(doubleSpacingAtStart);
            }
            gridContainer.addEventListener("click", (e) => {
              const P2Clicks = e.target.id;

              switch (P2Clicks) {
                case getCellIds[14]:
                  if (mappedCellIds[14].textContent === `${pieceName}`) {
                    currentPawn = `${assignedNameForP2}`;
                    console.log(currentPawn);
                  }
                  break;
                case getCellIds[12]:
                  if (currentPawn === `${assignedNameForP2}`) {
                    row = targetRowNumberForP2;
                    col = targetColNumberForP2;
                    console.log({ row }, { col });
                    mappedCellIds[12].textContent = `${pieceName}`;
                    mappedCellIds[14].textContent = `${emptyCellAfterDoubleSpace}`;
                  }
                  if (
                    row === targetRowNumberForP2 &&
                    col === targetColNumberForP2
                  ) {
                    console.log("P2 is located on Column 12 of Row 1");
                    doubleSpacingAtStart.push(pieceNumbers[1]);
                    console.log(doubleSpacingAtStart);
                  }
              }
            });
            break;
          case "P3":
            const targetRowNumberForP3 = playerDoubleSpacingRowsArray[2];
            const targetColNumberForP3 = playerDoubleSpacingColumnsArray[2];
            const assignedNameForP3 = `${pawnAssignmentObject.playerSide.pawnThree.assignedName}`;
            if (
              col !== targetColNumberForP3 ||
              (row !== targetRowNumberForP3 && col !== targetColNumberForP3)
            ) {
              doubleSpacingAtStart.filter((remove_P3) => remove_P3 !== "P3");
            }
            gridContainer.addEventListener("click", (e) => {
              const P3Clicks = e.target.id;
              switch (P3Clicks) {
                case getCellIds[22]:
                  if (mappedCellIds[22].textContent === `${pieceName}`) {
                    currentPawn = `${assignedNameForP3}`;
                    console.log(currentPawn);
                  }
                  break;
                case getCellIds[20]:
                  if (currentPawn === `${assignedNameForP3}`) {
                    row = targetRowNumberForP3;
                    col = targetColNumberForP3;
                    console.log({ row }, { col });
                    mappedCellIds[20].textContent = `${pieceName}`;
                    mappedCellIds[22].textContent = `${emptyCellAfterDoubleSpace}`;
                  }
                  if (
                    row === targetRowNumberForP3 &&
                    col === targetColNumberForP3
                  ) {
                    console.log("P3 is located on Column 20 of Row 3");
                    doubleSpacingAtStart.push(pieceNumbers[2]);
                    console.log(doubleSpacingAtStart);
                  }
              }
            });
            break;
          case "P4":
            const targetRowNumberForP4 = playerDoubleSpacingRowsArray[3]
            const targetColNumberForP4 = playerDoubleSpacingColumnsArray[3]
            const assignedNameForP4 = `${pawnAssignmentObject.playerSide.pawnFour.assignedName}`

            if(col !== targetColNumberForP4 || row !== targetRowNumberForP4 && col !== targetColNumberForP4){
              doubleSpacingAtStart.filter((remove_P4) => remove_P4 !== "P4")
            }
            gridContainer.addEventListener("click", (e) => {
              const P4Clicks = e.target.id
              switch(P4Clicks){
                case getCellIds[30]:
                  if(mappedCellIds[30].textContent === `${pieceName}`){
                    currentPawn = `${assignedNameForP4}`
                    console.log("hi")
                  }
                  break;
                case getCellIds[28]:
                  if(currentPawn === `${assignedNameForP4}`){
                    row = targetRowNumberForP4
                    col = targetColNumberForP4
                    console.log({row}, {col})
                    mappedCellIds[28].textContent = `${pieceName}`
                    mappedCellIds[30].textContent = `${emptyCellAfterDoubleSpace}`
                  }
                  if(row === targetRowNumberForP4 && col === targetColNumberForP4){
                    console.log("P4 is located on Column 28 of Row 4")
                    doubleSpacingAtStart.push(pieceNumbers[3])
                    console.log(doubleSpacingAtStart)
                  }
              }
            })
        }
      }
    }
    return {
      validateDoubleSpacing,
    };
  };
  return { validateDoubleSpacing };
};

export default PlayerDoubleSpacing;
