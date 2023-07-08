

//template to look at for implementing algorithms (will erase later)

const ComputerPawnSpacingAtStart = () => {
  const chessBoard = [
    ["r", "p", "-", "-", "-", "-", "P", "R"],
    ["k", "p", "-", "-", "-", "-", "P", "K"],
    ["b", "p", "-", "-", "-", "-", "P", "B"],
    ["q", "p", "-", "-", "-", "-", "P", "Q"],
    ["k", "p", "-", "-", "-", "-", "P", "K"],
    ["b", "p", "-", "-", "-", "-", "P", "B"],
    ["k", "p", "-", "-", "-", "-", "P", "K"],
    ["r", "p", "-", "-", "-", "-", "P", "R"],
  ];

  const watchForPawnDoubleSpacing = () => {
    let pawnDoubleSpaceAtStart = [];

    for (let row = 0; row < chessBoard.length; row++) {
      for (let col = 0; col < chessBoard[row].length; col++) {
        const doubleSpacing = chessBoard[row][col];

        if(doubleSpacing === "p"){
          pawnDoubleSpaceAtStart.push({row, col})
        }
      }
    }
    console.log(pawnDoubleSpaceAtStart)
    return { watchForPawnDoubleSpacing }
  };
  return { watchForPawnDoubleSpacing };
};

export default ComputerPawnSpacingAtStart