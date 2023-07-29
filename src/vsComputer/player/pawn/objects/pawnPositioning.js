const PawnPositions = () => {
  const rowIndices = [0, 1, 2, 3, 4, 5, 6, 7];
  const colIndices = [0, 1, 2, 3, 4, 5, 6, 7];
  const rowNumbers = [
    "rowZero",
    "rowOne",
    "rowTwo",
    "rowThree",
    "rowFour",
    "rowFive",
    "rowSix",
    "rowSeven",
  ];

  const pawnRows = (setRow) => {
    return rowIndices.indexOf(setRow);
  };

  const pawnCols = (setCol) => {
    return colIndices.indexOf(setCol);
  };

  const establishPawnPositions = () => {
    const atStartPositioning = (rowNumber, atStartCol) => {
      return {
        [rowNumber]: {
          atStartCol: atStartCol,
        },
      };
    };

    const singleSpacePositioning = (rowNumber, singleSpaceCol) => {
      return {
        [rowNumber]: {
          singleSpaceCol: singleSpaceCol,
        },
      };
    };

    const doubleSpacePositioning = (rowNumber, doubleSpaceCol) => {
      return {
        [rowNumber]: {
          doubleSpaceCol: doubleSpaceCol,
        },
      };
    };

    const setAtStartData = () => {
      const atStartCol = pawnCols(6);
      const atStartData = {
        P1: atStartPositioning(rowNumbers[0], atStartCol),
        P2: atStartPositioning(rowNumbers[1], atStartCol),
        P3: atStartPositioning(rowNumbers[2], atStartCol),
        P4: atStartPositioning(rowNumbers[3], atStartCol),
        P5: atStartPositioning(rowNumbers[4], atStartCol),
        P6: atStartPositioning(rowNumbers[5], atStartCol),
        P7: atStartPositioning(rowNumbers[6], atStartCol),
        P8: atStartPositioning(rowNumbers[7], atStartCol),
      };
      return atStartData;
    };

    const setSingleSpaceData = () => {
      const singleSpaceCol = pawnCols(5);
      const singleSpaceData = {
        P1: singleSpacePositioning(rowNumbers[0], singleSpaceCol),
        P2: singleSpacePositioning(rowNumbers[1], singleSpaceCol),
        P3: singleSpacePositioning(rowNumbers[2], singleSpaceCol),
        P4: singleSpacePositioning(rowNumbers[3], singleSpaceCol),
        P5: singleSpacePositioning(rowNumbers[4], singleSpaceCol),
        P6: singleSpacePositioning(rowNumbers[5], singleSpaceCol),
        P7: singleSpacePositioning(rowNumbers[6], singleSpaceCol),
        P8: singleSpacePositioning(rowNumbers[7], singleSpaceCol),
      };
      return singleSpaceData;
    };

    const setDoubleSpaceData = () => {
      const doubleSpaceCol = pawnCols(4);
      const doubleSpaceData = {
        P1: doubleSpacePositioning(rowNumbers[0], doubleSpaceCol),
        P2: doubleSpacePositioning(rowNumbers[1], doubleSpaceCol),
        P3: doubleSpacePositioning(rowNumbers[2], doubleSpaceCol),
        P4: doubleSpacePositioning(rowNumbers[3], doubleSpaceCol),
        P5: doubleSpacePositioning(rowNumbers[4], doubleSpaceCol),
        P6: doubleSpacePositioning(rowNumbers[5], doubleSpaceCol),
        P7: doubleSpacePositioning(rowNumbers[6], doubleSpaceCol),
        P8: doubleSpacePositioning(rowNumbers[7], doubleSpaceCol),
      };
      return doubleSpaceData;
    };
  };
  return {
    PawnPositions,
    pawnRows,
    pawnCols,
  };
};

export default PawnPositions;
