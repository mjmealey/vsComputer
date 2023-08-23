const chessBoard = [
  ["r", "p", "", "", "", "", "P", "R"],
  ["k", "p", "", "", "", "", "P", "K"],
  ["b", "p", "", "", "", "", "P", "B"],
  ["q", "p", "", "", "", "", "P", "Q"],
  ["k", "p", "", "", "", "", "P", "K"],
  ["b", "p", "", "", "", "", "P", "B"],
  ["k", "p", "", "", "", "", "P", "K"],
  ["r", "p", "", "", "", "", "P", "R"],
];

const singleSpaceCellStateData = {
  pawnCell: "Pawn",
  emptyCell: ""
}

export default chessBoard;
export const singleSpaceCellState = singleSpaceCellStateData