const PawnPositioning = () => {
  const colIndices = [0, 1, 2, 3, 4, 5, 6, 7];

  const pawnCols = (setCol) => {
    return {
      col: colIndices[setCol],
    };
  };

  const setPawnPositions = () => {
    const atStartCol = colIndices[7];
    const singleSpaceCol = colIndices[6];
    const doubleSpaceCol = colIndices[5];

    const setPositionsForPawns = {
      P1: {
        rowZero: {
          atStartCol: pawnCols(atStartCol),
          singleSpaceCol: pawnCols(singleSpaceCol),
          doubleSpaceCol: pawnCols(doubleSpaceCol),
        },
        P2: {
          rowOne: {
            atStartCol: pawnCols(atStartCol),
            singleSpaceCol: pawnCols(singleSpaceCol),
            doubleSpaceCol: pawnCols(doubleSpaceCol),
          },
        },
        P3: {
          rowTwo: {
            atStartCol: pawnCols(atStartCol),
            singleSpaceCol: pawnCols(singleSpaceCol),
            doubleSpaceCol: pawnCols(doubleSpaceCol),
          },
        },
        P4: {
          rowThree: {
            atStartCol: pawnCols(atStartCol),
            singleSpaceCol: pawnCols(singleSpaceCol),
            doubleSpaceCol: pawnCols(doubleSpaceCol),
          },
        },
        P5: {
          rowFour: {
            atStartCol: pawnCols(atStartCol),
            singleSpaceCol: pawnCols(singleSpaceCol),
            doubleSpaceCol: pawnCols(doubleSpaceCol),
          },
        },
        P6: {
          rowFive: {
            atStartCol: pawnCols(atStartCol),
            singleSpaceCol: pawnCols(singleSpaceCol),
            doubleSpaceCol: pawnCols(doubleSpaceCol),
          },
        },
        P7: {
          rowSix: {
            atStartCol: pawnCols(atStartCol),
            singleSpaceCol: pawnCols(singleSpaceCol),
            doubleSpaceCol: pawnCols(doubleSpaceCol),
          },
        },
        P8: {
          rowSeven: {
            atStartCol: pawnCols(atStartCol),
            singleSpaceCol: pawnCols(singleSpaceCol),
            doubleSpaceCol: pawnCols(doubleSpaceCol),
          },
        },
      },
    };
  };
};

export default PawnPositioning;
