import vsComputer from "./vsComputer/compiledTypescript/vsComputer.js"
import Pawn from "./vsComputer/player/pawn/Pawn.js"

const ChessApp = () => {
  vsComputer();
  Pawn();
};

ChessApp();
