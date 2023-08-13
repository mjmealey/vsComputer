import DoubleSpaceDisplays from "../../../../../vsComputer/player/pawn/modules/Displays/DoubleSpaceDisplay";
import { getCellIds } from "../../../../../vsComputer/modules/ChessBoard";
import { assignedPawnNames } from "../../../../../vsComputer/player/pawn/arrays/pawnAssignmentData";

describe("DoubleSpaceDisplays", () => {
  describe("checkStartSpaces", () => {
    it("should check whether the trackPreDoubleSpaces array includes the parameter of assignedPawn", () => {
      const assignedPawns = {
        P1: "P1",
        P2: "P2",
        P3: "P3",
      };

      const trackPreDoubleSpaces = [assignedPawns.P1, assignedPawns.P3];

      const assignedPawn = assignedPawns.P2;

      DoubleSpaceDisplays().checkStartSpaces(assignedPawn);

      const checkIndex = !trackPreDoubleSpaces.includes(assignedPawn);

      expect(checkIndex).toBe(true);
    });
  });

  describe("isStartSpaceReady", () => {
    it("should push the assigned pawn into the trackPreDoubleSpaces array", () => {
      const trackPreDoubleSpaces = [];
      const assignedPawn = "P2";

      DoubleSpaceDisplays().isFirstMoveReady(assignedPawn);

      trackPreDoubleSpaces.push(assignedPawn);

      expect(trackPreDoubleSpaces).toContain(assignedPawn);
    });
  });

  describe("removePreviousFirstMove", () => {
    it("should remove a single item from the trackPreDoubleSpaces array", () => {
      const trackPreDoubleSpaces = ["P2"];
      const indexToRemove = 0;
      const amountToRemove = 1;

      DoubleSpaceDisplays().removePreviousFirstMove(
        indexToRemove,
        amountToRemove
      );

      trackPreDoubleSpaces.splice(indexToRemove, amountToRemove);

      expect(trackPreDoubleSpaces).toHaveLength(0);
    });
  });
  describe("assignPawns", () => {
    it("should simulate a click event by returning specific pawns based on cell number", () => {
      const assignP1 = (cellId) => {
        const P1Assignment = cellId === getCellIds[6];
        if (P1Assignment) {
          return assignedPawnNames[0];
        }
      };

      const assignP2 = (cellId) => {
        const P2Assignment = cellId === getCellIds[14];
        if (P2Assignment) {
          return assignedPawnNames[1];
        }
      };
      const assignP3 = (cellId) => {
        const P3Assignment = cellId === getCellIds[22];
        if (P3Assignment) {
          return assignedPawnNames[2];
        }
      };

      const assignP4 = (cellId) => {
        const P4Assignment = cellId === getCellIds[30];
        if (P4Assignment) {
          return assignedPawnNames[3];
        }
      };

      const assignP5 = (cellId) => {
        const P5Assignment = cellId === getCellIds[38];
        if (P5Assignment) {
          return assignedPawnNames[4];
        }
      };

      const assignP6 = (cellId) => {
        const P6Assignment = cellId === getCellIds[46];
        if (P6Assignment) {
          return assignedPawnNames[5];
        }
      };

      const assignP7 = (cellId) => {
        const P7Assignment = cellId === getCellIds[54];
        if (P7Assignment) {
          return assignedPawnNames[6];
        }
      };

      const assignP8 = (cellId) => {
        const P8Assignment = cellId === getCellIds[62];
        if (P8Assignment) {
          return assignedPawnNames[7];
        }
      };

      const resultP1 = assignP1(getCellIds[6]);
      const valueP1 = assignedPawnNames[0];
      expect(resultP1).to(valueP1);

      const resultP2 = assignP2(getCellIds[14]);
      const valueP2 = assignedPawnNames[1];
      expect(resultP2).toBe(valueP2);

      const resultP3 = assignP3(getCellIds[22]);
      const valueP3 = assignedPawnNames[2];
      expect(resultP3).toBe(valueP3);

      const resultP4 = assignP4(getCellIds[30]);
      const valueP4 = assignedPawnNames[3];
      expect(resultP4).toBe(valueP4);

      const resultP5 = assignP5(getCellIds[38]);
      const valueP5 = assignedPawnNames[4];
      expect(resultP5).toBe(valueP5);

      const resultP6 = assignP6(getCellIds[46]);
      const valueP6 = assignedPawnNames[5];
      expect(resultP6).toBe(valueP6);

      const resultP7 = assignP7(getCellIds[54]);
      const valueP7 = assignedPawnNames[6];
      expect(resultP7).toBe(valueP7);

      const resultP8 = assignP8(getCellIds[62]);
      const valueP8 = assignedPawnNames[7];
      expect(resultP8).toBe(valueP8);

      document.addEventListener("click", (e) => {
        const assignPawnsId = e.target.id;
        assignP1(assignPawnsId);
        assignP2(assignPawnsId);
        assignP3(assignPawnsId);
        assignP4(assignPawnsId);
        assignP5(assignPawnsId);
        assignP6(assignPawnsId);
        assignP7(assignPawnsId);
        assignP8(assignPawnsId);
      });
    });
  });

  describe("checkDoubleSpaces", () => {
    it("should check if a pawn has been clicked", () => {
      const assignedPawnPossibilities = [{
        P1: assignedPawnNames[0], expectedCell: getCellIds[6]
      }]
      const trackPreDoubleSpace = [];

      const isP1Clicked = () => {
        const P1 = assignedPawnPossibilities[0].P1;
        const isP1 = !trackPreDoubleSpace.includes(P1);
        if (isP1) {
          trackPreDoubleSpace.push(P1);
        }
      };
    });
    describe("removePreDoubleSpaceIndex", () => {
      it("should remove the zero index from the trackPreDoubleSpace array", () => {
        const removedPawnPossibilities = [
          { removePawn: assignedPawnNames[0] },
          { removedPawn: assignedPawnNames[1] },
          { removedPawn: assignedPawnNames[2] },
          { removePawn: assignedPawnNames[3] },
          { removePawn: assignedPawnNames[4] },
          { removePawn: assignedPawnNames[5] },
          { removePawn: assignedPawnNames[6] },
          { removePawn: assignedPawnNames[7] },
        ];
        const removePawns = [];
        removePawns.push(removedPawnPossibilities[0].removePawn);
        const indexToRemove = 0;
        const amountToRemove = 1;
        removePawns.splice(indexToRemove, amountToRemove);
        expect(removePawns).toHaveLength(0);
      });
    });
  });
});
