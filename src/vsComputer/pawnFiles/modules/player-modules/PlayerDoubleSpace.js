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
        P4DoubleSpacing(row, col, doubleSpacing);
        P5DoubleSpacing(row, col, doubleSpacing);
        P6DoubleSpacing(row, col, doubleSpacing);
        P7DoubleSpacing(row, col, doubleSpacing);
        P8DoubleSpacing(row, col, doubleSpacing)
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
    displayP1DoubleSpacing(row, col, targetRowForP1, targetColForP1);
    P2DoubleSpacing(row, col, doubleSpacing);
    return { handleP1DoubleSpacing };
  };

  const displayP1DoubleSpacing = (row, col, targetRowForP1, targetColForP1) => {
    const startingSpace = getCellIds[6];
    const targetSpace = getCellIds[4];
    const assignedNumberForP1 = playerAssignedNumbersArray[0];
    gridContainer.addEventListener("click", (e) => {
      const P1Clicks = e.target.id;
      switch (P1Clicks) {
        case startingSpace:
          if (
            mappedCellIds[6].textContent === `${pieceName}` &&
            !doubleSpacingAtStart.includes("P1")
          ) {
            currentPawn = `${assignedNumberForP1}`;
          }
          break;
        case targetSpace:
          if (currentPawn === `${assignedNumberForP1}`) {
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
            }
          }
      }
    });
  };

  const P2DoubleSpacing = (row, col, doubleSpacing) => {
    const targetRowForP2 = playerDoubleSpacingRowsArray[1];
    const targetColForP2 = playerDoubleSpacingColumnsArray[1];

    if (doubleSpacing === "P2") {
      if (
        col !== targetColForP2 ||
        (row !== targetRowForP2 && col !== targetColForP2)
      ) {
        doubleSpacingAtStart = doubleSpacingAtStart.filter(
          (remove_P2) => remove_P2 !== "P2"
        );
      }
      displayP2DoubleSpacing(row, col, targetRowForP2, targetColForP2);
    }
    P3DoubleSpacing(row, col, doubleSpacing);
    return { P2DoubleSpacing };
  };
  const displayP2DoubleSpacing = (row, col, targetRowForP2, targetColForP2) => {
    const startSpaceForP2DoubleSpace = getCellIds[14];
    const endSpaceForP2DoubleSpace = getCellIds[12];
    const assignedNumberForP2 = playerAssignedNumbersArray[1];

    gridContainer.addEventListener("click", (e) => {
      const P2Clicks = e.target.id;

      switch (P2Clicks) {
        case startSpaceForP2DoubleSpace:
          if (mappedCellIds[14].textContent === `${pieceName}`) {
            currentPawn = `${assignedNumberForP2}`;
          }
          break;
        case endSpaceForP2DoubleSpace:
          if (currentPawn === `${assignedNumberForP2}`) {
            row = targetRowForP2;
            col = targetColForP2;

            mappedCellIds[12].textContent = `${pieceName}`;
            mappedCellIds[14].textContent = `${emptyCellAfterDoubleSpace}`;
          }
          if (
            row === targetRowForP2 &&
            col === targetColForP2 &&
            !doubleSpacingAtStart.includes("P2")
          ) {
            doubleSpacingAtStart.push("P2");
          }
      }
    });
  };
  const P3DoubleSpacing = (row, col, doubleSpacing) => {
    const targetRowForP3 = playerDoubleSpacingRowsArray[2];
    const targetColForP3 = playerDoubleSpacingColumnsArray[2];

    if (doubleSpacing === "P3") {
      if (
        col !== targetColForP3 ||
        (row !== targetRowForP3 && col !== targetColForP3)
      ) {
        doubleSpacingAtStart = doubleSpacingAtStart.filter(
          (remove_P3) => remove_P3 !== "P3"
        );
      }

      displayP3DoubleSpacing(row, col, targetRowForP3, targetColForP3);

      return { P3DoubleSpacing };
    }
  };

  const displayP3DoubleSpacing = (row, col, targetRowForP3, targetColForP3) => {
    const assignedNumberForP3 = playerAssignedNumbersArray[2];
    const startSpace = getCellIds[22];
    const targetSpace = getCellIds[20];

    gridContainer.addEventListener("click", (e) => {
      const P3Clicks = e.target.id;
      switch (P3Clicks) {
        case startSpace:
          if (mappedCellIds[22].textContent === `${pieceName}`) {
            currentPawn = `${assignedNumberForP3}`;
            console.log(currentPawn);
          }
          break;
        case targetSpace:
          if (currentPawn === `${assignedNumberForP3}`) {
            row = targetRowForP3;
            col = targetColForP3;
            console.log({ row }, { col });
            mappedCellIds[20].textContent = `${pieceName}`;
            mappedCellIds[22].textContent = `${emptyCellAfterDoubleSpace}`;
          }
          if (
            row === targetRowForP3 &&
            col === targetColForP3 &&
            !doubleSpacingAtStart.includes("P3")
          ) {
            console.log("P3 is located on Column 20 of Row 3");
            doubleSpacingAtStart.push("P3");
          }
      }
    });
  };
  const P4DoubleSpacing = (row, col, doubleSpacing) => {
    const targetRowForP4 = playerDoubleSpacingRowsArray[3];
    const targetColForP4 = playerDoubleSpacingColumnsArray[3];

    if (doubleSpacing === "P4") {
      if (
        col !== targetColForP4 ||
        (row !== targetRowForP4 && col !== targetColForP4)
      ) {
        doubleSpacingAtStart = doubleSpacingAtStart.filter(
          (remove_P4) => remove_P4 !== "P4"
        );
      }
    }
    displayP4DoubleSpacing(row, col, targetRowForP4, targetColForP4);
  };

  const displayP4DoubleSpacing = (row, col, targetRowForP4, targetColForP4) => {
    gridContainer.addEventListener("click", (e) => {
      const startSpace = getCellIds[30];
      const targetSpace = getCellIds[28];
      const P4Clicks = e.target.id;
      const assignedNameForP4 = playerAssignedNumbersArray[3];
      switch (P4Clicks) {
        case startSpace:
          if (mappedCellIds[30].textContent === `${pieceName}`) {
            currentPawn = `${assignedNameForP4}`;
            console.log(currentPawn);
          }
          break;
        case targetSpace:
          if (currentPawn === `${assignedNameForP4}`) {
            row = targetRowForP4;
            col = targetColForP4;
            mappedCellIds[28].textContent = `${pieceName}`;
            mappedCellIds[30].textContent = `${emptyCellAfterDoubleSpace}`;
          }
          if (
            row === targetRowForP4 &&
            col === targetColForP4 &&
            !doubleSpacingAtStart.includes("P4")
          ) {
            doubleSpacingAtStart.push("P4");
          }
      }
    });
  };

  const P5DoubleSpacing = (row, col, doubleSpacing) => {
    const targetRowForP5 = playerDoubleSpacingRowsArray[4];
    const targetColForP5 = playerDoubleSpacingColumnsArray[4];

    if (doubleSpacing === "P5") {
      if (
        col !== targetColForP5 ||
        (row !== targetRowForP5 && col !== targetColForP5)
      ) {
        doubleSpacingAtStart = doubleSpacingAtStart.filter(
          (remove_P5) => remove_P5 !== "P5"
        );
      }
    }
    displayP5DoubleSpacing(targetRowForP5, targetColForP5, row, col);
  };

  const displayP5DoubleSpacing = (targetRowForP5, targetColForP5, row, col) => {
    const assignedNumberForP5 = playerAssignedNumbersArray[4];
    const startingSpace = getCellIds[38];
    const targetSpace = getCellIds[36];

    gridContainer.addEventListener("click", (e) => {
      const P5Clicks = e.target.id;
      switch (P5Clicks) {
        case startingSpace:
          if (mappedCellIds[38].textContent === `${pieceName}`) {
            currentPawn = `${assignedNumberForP5}`;
          }
          break;
        case targetSpace:
          if (currentPawn === `${assignedNumberForP5}`) {
            row = `${targetRowForP5}`;
            col = `${targetColForP5}`;

            mappedCellIds[36].textContent = `${pieceName}`;
            mappedCellIds[38].textContent = `${emptyCellAfterDoubleSpace}`;
          }
          if (row === targetRowForP5 && col === targetColForP5) {
            console.log("P5 is located on Column 36 of Row 5");
            doubleSpacingAtStart.push("P5");
          }
          break;
      }
    });
  };
  const P6DoubleSpacing = (row, col, doubleSpacing) => {
    const targetRowForP6 = playerDoubleSpacingRowsArray[5];
    const targetColForP6 = playerDoubleSpacingColumnsArray[5];

    if (doubleSpacing === "P6") {
      if (
        col !== targetColForP6 ||
        (row !== targetRowForP6 && col !== targetColForP6)
      ) {
        doubleSpacingAtStart = doubleSpacingAtStart.filter(
          (remove_P6) => remove_P6 !== "P6"
        );
      }
    }
    displayP6DoubleSpacing(row, col, targetRowForP6, targetColForP6);
  };

  const displayP6DoubleSpacing = (row, col, targetRowForP6, targetColForP6) => {
    const assignedNumberForP6 = playerAssignedNumbersArray[5];
    const startingSpace = getCellIds[46];
    const targetSpace = getCellIds[44];
    gridContainer.addEventListener("click", (e) => {
      const P6Clicks = e.target.id;
      switch (P6Clicks) {
        case startingSpace:
          if (mappedCellIds[46].textContent === `${pieceName}`) {
            currentPawn = `${assignedNumberForP6}`;
          }
          break;
        case targetSpace:
          if (currentPawn === `${assignedNumberForP6}`) {
            row = `${targetRowForP6}`;
            col = `${targetColForP6}`;
            mappedCellIds[44].textContent = `${pieceName}`;
            mappedCellIds[46].textContent = `${emptyCellAfterDoubleSpace}`;
          }

          if (row === `${targetRowForP6}` && col === `${targetColForP6}`) {
            doubleSpacingAtStart.push("P6");
          }
      }
    });
  };
  const P7DoubleSpacing = (row, col, doubleSpacing) => {
    const targetRowForP7 = playerDoubleSpacingRowsArray[6];
    const targetColForP7 = playerDoubleSpacingColumnsArray[6];

    if (doubleSpacing === "P7") {
      if (
        col !== targetColForP7 ||
        (row !== targetRowForP7 && col !== targetColForP7)
      ) {
        doubleSpacingAtStart.filter((remove_P7) => remove_P7 !== "P7");
      }
    }
    displayP7DoubleSpacing(row, col, targetRowForP7, targetColForP7);
  };

  const displayP7DoubleSpacing = (row, col, targetRowForP7, targetColForP7) => {
    const assignedNumberForP7 = playerAssignedNumbersArray[6];
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
            row = `${targetRowForP7}`;
            col = `${targetColForP7}`;
            mappedCellIds[52].textContent = `${pieceName}`;
            mappedCellIds[54].textContent = `${emptyCellAfterDoubleSpace}`;
          }

          if (
            row === `${targetRowForP7}` &&
            col === `${targetColForP7}` &&
            !doubleSpacingAtStart.includes("P7")
          ) {
            doubleSpacingAtStart.push("P7");
          }
      }
    });
  };

  const P8DoubleSpacing = (row,col,doubleSpacing) => {
    const targetRowForP8 = playerDoubleSpacingRowsArray[7];
    const targetColForP8 = playerDoubleSpacingColumnsArray[7];
    if(doubleSpacing === "P8"){
    if (
      col !== targetColForP8 ||
      (row !== targetRowForP8 && col !== targetColForP8)
    ) {
      doubleSpacingAtStart.filter((remove_P8) => remove_P8 !== "P8");
    }
    displayP8DoubleSpacing(row, col, targetRowForP8, targetColForP8)
  }};

  const displayP8DoubleSpacing = (row,col,targetRowForP8,targetColForP8) => {
    const assignedNumberForP8 = playerAssignedNumbersArray[7];
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
            row = `${targetRowForP8}`;
            col = `${targetColForP8}`;
            mappedCellIds[60].textContent = `${pieceName}`;
            mappedCellIds[62].textContent = `${emptyCellAfterDoubleSpace}`;
          }

          if (
            row === `${targetRowForP8}` &&
            col === `${targetColForP8}` && !doubleSpacingAtStart.includes("P8")
          ) {
            doubleSpacingAtStart.push("P8");
          }
      }
    });
  };

  return {
    validateDoubleSpacing,
    handleP1DoubleSpacing,
  };
};

export default PlayerDoubleSpacing;
