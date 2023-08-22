import FirstMoveDisplays from "../../../../vsComputer/player/pawn/modules/Displays/FirstMoveDisplays";
import { assignedPawnNames } from "../../../../vsComputer/player/pawn/arrays/pawnAssignmentData";
import { assignedPawnNamesIndex } from "../../../../vsComputer/player/pawn/arrays/pawnAssignmentData";
import { displayArrayRemoval } from "../../../../vsComputer/player/pawn/objects/startSpaceRemoval";

describe("removePrevPawn", () => {
  it("should remove previously assigned pawns from the trackFirstMove array", () => {
    const assignedPawns = [
      {
        P1: assignedPawnNames[0],
        P2: assignedPawnNames[1],
      },
    ];

    const P1 = assignedPawns[0].P1;
    const P2 = assignedPawns[0].P2;
    const trackFirstMove = [P1, P2]; //contains the currently assigned pawn as the 1 index and the zero is the previously assigned pawn that'll be removed
    //P1 will be removed as it is the previously assigned pawn
    const indexToRemove = displayArrayRemoval.indexToRemove; //0
    const amountToRemove = displayArrayRemoval.amountToRemove; //1
    trackFirstMove.splice(indexToRemove, amountToRemove);
    const expectedAmount = 1;

    expect(trackFirstMove).toHaveLength(expectedAmount);
    expect(trackFirstMove).not.toContain(P1);
  });
});

describe("trackStartSpaces", () => {
  it("should push an assigned pawn into the trackFirstMove array", () => {
    const assignedPawns = [
      {
        P1: assignedPawnNames[0],
      },
    ];
    const trackFirstMove = [];
    const P1 = assignedPawns[0].P1;
    const expectedAmountToContain = 1;
    trackFirstMove.push(P1);

    expect(trackFirstMove).toContain(P1);
    expect(trackFirstMove).toHaveLength(expectedAmountToContain);
  });
});

describe("isFirstMoveReady", () => {
  it("should check if trackFirstMoves includes a specific pawn based on index", () => {
    const trackFirstMoves = [];
    const P1 = assignedPawnNamesIndex[0].P1;
    trackFirstMoves.push(P1);
    const indexForP1 = 0
    FirstMoveDisplays().isFirstMoveReady(indexForP1)

    expect(trackFirstMoves).toContain(P1)
  });
});
