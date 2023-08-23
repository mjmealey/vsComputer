import SingleSpacePositioning from "../../../../vsComputer/player/pawn/modules/Positioning/firstMoves/SingleSpacePositioning";
import chessBoard from "../../../../vsComputer/objects/chessBoardArray";

describe("validateSingleSpace", () => {
  it("should create a row and col variable for position validation based on chessboard", () => {
        const validPositions = [
          { targetRow: 0, targetCol: 5 },
          { targetRow: 1, targetCol: 5 },
          { targetRow: 2, targetCol: 5 },
        ];

        const validP1Row = validPositions[0].targetRow;
        const validP1Col = validPositions[0].targetCol;
        const result = SingleSpacePositioning().checkSingleSpace(
          validP1Row,
          validP1Col
        );

        expect(result).toBe(true);
      }
  )})
