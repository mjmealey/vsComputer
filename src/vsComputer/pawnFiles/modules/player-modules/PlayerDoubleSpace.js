import chessBoard from "../../../objects/chessBoardArray.js";
import { getCellIds } from "../../../modules/ChessPieceAssignments.js";
import { pawnAssignmentObject } from "../../objects/pawnObjects.js";
import { trackGameStateObject } from "../../../objects/gameStateObjects.js";
import { playerDoubleSpacingRowsArray } from "../../objects/pawnArrays.js";
import { playerDoubleSpacingColumnsArray } from "../../objects/pawnArrays.js";
import { playerAssignedNumbersArray } from "../../objects/pawnArrays.js";

const PlayerDoubleSpacing = () => {
  const pieceName = `${pawnAssignmentObject.pieceName}`;
  const emptyCellAfterDoubleSpace = `${trackGameStateObject.emptyCell}`;
  let currentPawn = `${trackGameStateObject.emptyPieceSelection}`;
  let doubleSpacingAtStart = [];
  const mappedCellIds = getCellIds.map((id) => document.getElementById(id));

  const validateDoubleSpacing = () => {
    //algorithm for chessboard array
    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        const doubleSpacing = chessBoard[row][col];

        handleP1DoubleSpacing(row, col, doubleSpacing);
      }
    }
    return {
      validateDoubleSpacing,
    };
  };

  const handleP1DoubleSpacing = (row, col, doubleSpacing) => {
    /*the target row and column is where double spacing is valid*/
    const targetRowForP1 = playerDoubleSpacingRowsArray[0];
    const targetColForP1 = playerDoubleSpacingColumnsArray[0];
    const assignedNameForP1 = playerAssignedNumbersArray[0];
    //handles rows and columns for pawn P1

    if (doubleSpacing === "P1") {
      //checks for when the row and column are not equal to their target
      if (
        col !== targetColForP1 ||
        (row !== targetRowForP1 && col !== targetColForP1)
      ) {
        doubleSpacingAtStart = doubleSpacingAtStart.filter(
          (remove_P1) => remove_P1 !== "P1"
        );
        console.log(doubleSpacingAtStart);
      }
    }
    displayP1DoubleSpacingToUser(
      row,
      col,
      assignedNameForP1,
      targetRowForP1,
      targetColForP1
    );
    P2DoubleSpacing(row, col, doubleSpacing);
    return { handleP1DoubleSpacing };
  };

  const displayP1DoubleSpacingToUser = (
    row,
    col,
    assignedNameForP1,
    targetRowForP1,
    targetColForP1
  ) => {
    const startingSpace = getCellIds[6];
    const targetSpace = getCellIds[4];

    gridContainer.addEventListener("click", (e) => {
      const P1Clicks = e.target.id;
      switch (P1Clicks) {
        case startingSpace:
          if (
            mappedCellIds[6].textContent === `${pieceName}` &&
            !doubleSpacingAtStart.includes("P1")
          ) {
            currentPawn = `${assignedNameForP1}`;
          }
          break;
        case targetSpace:
          if (currentPawn === `${assignedNameForP1}`) {
            row = targetRowForP1;
            col = targetColForP1;
            mappedCellIds[4].textContent = `${pieceName}`;
            mappedCellIds[6].textContent = `${emptyCellAfterDoubleSpace}`;
            if (
              row === targetRowForP1 &&
              col === targetColForP1 &&
              !doubleSpacingAtStart.includes("P1")
            ) {
              doubleSpacingAtStart.push("P1");
              console.log(doubleSpacingAtStart);
            }
          }
      }
    });
  };

  const P2DoubleSpacing = (row, col, doubleSpacing) => {
    const targetRowForP2 = playerDoubleSpacingRowsArray[1];
    const targetColForP2 = playerDoubleSpacingColumnsArray[1];
    const assignedNameForP2 = playerAssignedNumbersArray[1];

    if (doubleSpacing === "P2") {
      if (
        col !== targetColForP2 ||
        (row !== targetRowForP2 && col !== targetColForP2)
      ) {
        doubleSpacingAtStart = doubleSpacingAtStart.filter(
          (remove_P2) => remove_P2 !== "P2"
        );
      }
      displayP2DoubleSpacingToUser(
        row,
        col,
        assignedNameForP2,
        targetRowForP2,
        targetColForP2
      );
    }
    P3DoubleSpacing(row, col, doubleSpacing);
    return { P2DoubleSpacing };
  };
  const displayP2DoubleSpacingToUser = (
    row,
    col,
    assignedNameForP2,
    targetRowForP2,
    targetColForP2
  ) => {
    const startSpaceForP2DoubleSpace = getCellIds[14];
    const endSpaceForP2DoubleSpace = getCellIds[12];
    gridContainer.addEventListener("click", (e) => {
      const P2Clicks = e.target.id;
      0;
      switch (P2Clicks) {
        case startSpaceForP2DoubleSpace:
          if (mappedCellIds[14].textContent === `${pieceName}`) {
            currentPawn = `${assignedNameForP2}`;
            console.log(currentPawn);
          }
          break;
        case endSpaceForP2DoubleSpace:
          if (currentPawn === `${assignedNameForP2}`) {
            row = targetRowForP2;
            col = targetColForP2;
            console.log({ row }, { col });
            mappedCellIds[12].textContent = `${pieceName}`;
            mappedCellIds[14].textContent = `${emptyCellAfterDoubleSpace}`;
          }
          if (
            row === targetRowForP2 &&
            col === targetColForP2 &&
            !doubleSpacingAtStart.includes("P2")
          ) {
            console.log("P2 is located on Column 12 of Row 1");
            doubleSpacingAtStart.push("P2");
            console.log(doubleSpacingAtStart);
          }
      }
    });
    return { displayP2DoubleSpacingToUser };
  };
  const P3DoubleSpacing = (row, col, doubleSpacing) => {
    const targetRowForP3 = playerDoubleSpacingRowsArray[2];
    const targetColForP3 = playerDoubleSpacingColumnsArray[2];
    
    if(doubleSpacing === "P3"){
    if (
      col !== targetColForP3 ||
      (row !== targetRowForP3 && col !== targetColForP3)
    ) {
      doubleSpacingAtStart = doubleSpacingAtStart.filter(
        (remove_P3) => remove_P3 !== "P3"
      );
    }
    displayP3DoubleSpacingToUser(row, col, targetRowForP3, targetColForP3)
    return { P3DoubleSpacing };
  };
}

  const displayP3DoubleSpacingToUser = (row,col, targetRowForP3, targetColForP3) => {
    const assignedNumberForP3 = playerAssignedNumbersArray[2]
    const startSpace = getCellIds[22]
    const targetSpace = getCellIds[20]
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
          if (currentPawn === `${assignedNumberForP3}`) {
            row = targetRowForP3;
            col = targetColForP3;
            console.log({ row }, { col });
            mappedCellIds[20].textContent = `${pieceName}`;
            mappedCellIds[22].textContent = `${emptyCellAfterDoubleSpace}`;
          }
          if (row === targetRowForP3 && col === targetColForP3) {
            console.log("P3 is located on Column 20 of Row 3");
            doubleSpacingAtStart.push("P3");
          }
      }
    });
  };
  const P4DoubleSpacing = () => {
    const targetRowNumberForP4 = playerDoubleSpacingRowsArray[3];
    const targetColNumberForP4 = playerDoubleSpacingColumnsArray[3];
    const assignedNameForP4 = playerAssignedNumbersArray[3];

    if (
      col !== targetColNumberForP4 ||
      (row !== targetRowNumberForP4 && col !== targetColNumberForP4)
    ) {
      doubleSpacingAtStart = doubleSpacingAtStart.filter(
        (remove_P4) => remove_P4 !== "P4"
      );
    }
    gridContainer.addEventListener("click", (e) => {
      const P4Clicks = e.target.id;
      switch (P4Clicks) {
        case getCellIds[30]:
          if (mappedCellIds[30].textContent === `${pieceName}`) {
            currentPawn = `${assignedNameForP4}`;
            console.log(currentPawn);
          }
          break;
        case getCellIds[28]:
          if (currentPawn === `${assignedNameForP4}`) {
            row = targetRowNumberForP4;
            col = targetColNumberForP4;
            mappedCellIds[28].textContent = `${pieceName}`;
            mappedCellIds[30].textContent = `${emptyCellAfterDoubleSpace}`;
          }
          if (row === targetRowNumberForP4 && col === targetColNumberForP4) {
            console.log("P4 is located on Column 28 of Row 4");
            doubleSpacingAtStart.push(pieceNumbers[3]);
          }
      }
    });
  };

  const P5DoubleSpacing = () => {
    const targetRowNumberForP5 = playerDoubleSpacingRowsArray[4];
    const targetColNumberForP5 = playerDoubleSpacingColumnsArray[4];
    const assignedNameForP5 = playerAssignedNumbersArray[4];

    if (
      col !== targetColNumberForP5 ||
      (row !== targetRowNumberForP5 && col !== targetColNumberForP5)
    ) {
      doubleSpacingAtStart = doubleSpacingAtStart.filter(
        (remove_P5) => remove_P5 !== "P5"
      );
    }
    gridContainer.addEventListener("click", (e) => {
      const P5Clicks = e.target.id;
      switch (P5Clicks) {
        case getCellIds[38]:
          if (mappedCellIds[38].textContent === `${pieceName}`) {
            currentPawn = `${assignedNameForP5}`;
          }
          break;
        case getCellIds[36]:
          if (currentPawn === `${assignedNameForP5}`) {
            row = `${targetRowNumberForP5}`;
            col = `${targetColNumberForP5}`;

            mappedCellIds[36].textContent = `${pieceName}`;
            mappedCellIds[38].textContent = `${emptyCellAfterDoubleSpace}`;
          }
          if (row === targetRowNumberForP5 && col === targetColNumberForP5) {
            console.log("P5 is located on Column 36 of Row 5");
            doubleSpacingAtStart.push(pieceNumbers[4]);
          }
          break;
      }
    });
  };
  const P6DoubleSpacing = () => {
    const targetRowNumberForP6 = playerDoubleSpacingRowsArray[5];
    const targetColNumberForP6 = playerDoubleSpacingColumnsArray[5];
    const assignedNameForP6 = playerAssignedNumbersArray[5];

    if (
      col !== targetColNumberForP6 ||
      (row !== targetRowNumberForP6 && col !== targetColNumberForP6)
    ) {
      doubleSpacingAtStart = doubleSpacingAtStart.filter(
        (remove_P6) => remove_P6 !== "P6"
      );
    }

    gridContainer.addEventListener("click", (e) => {
      const P6Clicks = e.target.id;
      switch (P6Clicks) {
        case getCellIds[46]:
          if (mappedCellIds[46].textContent === `${pieceName}`) {
            currentPawn = `${assignedNameForP6}`;
          }
          break;
        case getCellIds[44]:
          if (currentPawn === `${assignedNameForP6}`) {
            row = `${targetRowNumberForP6}`;
            col = `${targetColNumberForP6}`;
            mappedCellIds[44].textContent = `${pieceName}`;
            mappedCellIds[46].textContent = `${emptyCellAfterDoubleSpace}`;
          }

          if (
            row === `${targetRowNumberForP6}` &&
            col === `${targetColNumberForP6}`
          ) {
            doubleSpacingAtStart.push(pieceNumbers[5]);
            console.log("P6 is located on Column 44 of Row 6");
          }
      }
    });
  };
  const P7DoubleSpacing = () => {
    const targetRowNumberForP7 = playerDoubleSpacingRowsArray[6];
    const targetColNumberForP7 = playerDoubleSpacingColumnsArray[6];
    const assignedNumberForP7 = playerAssignedNumbersArray[6];

    if (
      col !== targetColNumberForP7 ||
      (row !== targetRowNumberForP7 && col !== targetColNumberForP7)
    ) {
      doubleSpacingAtStart.filter((remove_P7) => remove_P7 !== "P7");
    }

    gridContainer.addEventListener("click", (e) => {
      const P7Clicks = e.target.id;
      switch (P7Clicks) {
        case getCellIds[54]:
          if (mappedCellIds[54].textContent === `${pieceName}`) {
            currentPawn = `${assignedNumberForP7}`;
          }
          break;
        case getCellIds[52]:
          if (currentPawn === `${assignedNumberForP7}`) {
            row = `${targetRowNumberForP7}`;
            col = `${targetColNumberForP7}`;
            mappedCellIds[52].textContent = `${pieceName}`;
            mappedCellIds[54].textContent = `${emptyCellAfterDoubleSpace}`;
          }

          if (
            row === `${targetRowNumberForP7}` &&
            col === `${targetColNumberForP7}`
          ) {
            doubleSpacingAtStart.push(pieceNumbers[6]);
            console.log("P6");
          }
      }
    });
  };

  const P8DoubleSpacing = () => {
    const targetRowNumberForP8 = playerDoubleSpacingRowsArray[7];
    const targetColNumberForP8 = playerDoubleSpacingColumnsArray[7];
    const assignedNumberForP8 = playerAssignedNumbersArray[7];

    if (
      col !== targetColNumberForP8 ||
      (row !== targetRowNumberForP8 && col !== targetColNumberForP8)
    ) {
      doubleSpacingAtStart.filter((remove_P8) => remove_P8 !== "P8");
    }

    gridContainer.addEventListener("click", (e) => {
      const P8Clicks = e.target.id;
      switch (P8Clicks) {
        case getCellIds[62]:
          if (mappedCellIds[62].textContent === `${pieceName}`) {
            currentPawn = `${assignedNumberForP8}`;
          }
          break;
        case getCellIds[60]:
          if (currentPawn === `${assignedNumberForP8}`) {
            row = `${targetRowNumberForP8}`;
            col = `${targetColNumberForP8}`;
            mappedCellIds[60].textContent = `${pieceName}`;
            mappedCellIds[62].textContent = `${emptyCellAfterDoubleSpace}`;
          }

          if (
            row === `${targetRowNumberForP8}` &&
            col === `${targetColNumberForP8}`
          ) {
            doubleSpacingAtStart.push(pieceNumbers[7]);
          }
      }
    });
  };
  return {
    validateDoubleSpacing,
    handleP1DoubleSpacing,
    displayP2DoubleSpacingToUser,
  };
};

export default PlayerDoubleSpacing;
