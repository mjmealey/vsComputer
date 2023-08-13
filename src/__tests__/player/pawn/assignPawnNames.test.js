import assignPawnNames from "../../../vsComputer/player/pawn/assignPawnNames";
import { pawnName } from "../../../vsComputer/player/pawn/objects/pawnName";
import { getCellIds } from "../../../vsComputer/modules/ChessBoard";

describe("assignPawnNames", () => {
  it("should set specified cells' text content to Pawn", () => {
    const startingPawnCells = [6, 14, 22, 30, 38, 46, 54, 62];
    const mockCellElement = "div";
    const mockingStartPawnCells = getCellIds.map(() =>
      document.createElement(mockCellElement)
    );
    const expectedTextContent = pawnName.name;

    assignPawnNames(mockingStartPawnCells);

    for (let pawnText = 0; pawnText < getCellIds.length; pawnText++) {
      const checkIndex = startingPawnCells.includes(pawnText);
      if (checkIndex) {
        const startingCellsToBeLabeledPawn =
          mockingStartPawnCells[pawnText].textContent;
        expect(startingCellsToBeLabeledPawn).toEqual(expectedTextContent);
      }
    }
  });
});
