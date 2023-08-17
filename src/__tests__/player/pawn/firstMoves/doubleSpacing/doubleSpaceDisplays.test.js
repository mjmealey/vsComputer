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
    it("should check if the trackPreDoubleSpace array contains one assigned pawn at a time based on the most recently clicked cell", () => {
      const assignedPawns = [
        { assignedPawn: assignedPawnNames[0] },
        { assignedPawn: assignedPawnNames[1] },
        { assignedPawn: assignedPawnNames[2] },
        { assignedPawn: assignedPawnNames[3] },
        { assignedPawn: assignedPawnNames[4] },
        { assignedPawn: assignedPawnNames[5] },
        { assignedPawn: assignedPawnNames[6] },
        { assignedPawn: assignedPawnNames[7] },
      ];
      const trackPreDoubleSpace = [];

      const checkForPawns = (assignedPawn) => {
        trackPreDoubleSpace.push(assignedPawn);
        const checkDoubleSpace = trackPreDoubleSpace.includes(assignedPawn);
        if (checkDoubleSpace) {
          trackPreDoubleSpace.splice(1, 1);
          expect(trackPreDoubleSpace).toContain(assignedPawn);
        }
      };

      const checkForPawnClicks = (doubleSpaceId) => {
        let clickedPawn = null;
        const P1Cell = getCellIds[6];
        const P2Cell = getCellIds[14];
        const P3Cell = getCellIds[22];
        const P4Cell = getCellIds[30];
        const P5Cell = getCellIds[38];
        const P6Cell = getCellIds[46];
        const P7Cell = getCellIds[54];
        const P8Cell = getCellIds[62];

        switch (doubleSpaceId) {
          case P1Cell:
            clickedPawn = assignedPawns[0].assignedPawn;
            checkForPawns(clickedPawn);
            break;
          case P2Cell:
            clickedPawn = assignedPawns[1].assignedPawn;
            checkForPawns(clickedPawn);
            break;
          case P3Cell:
            clickedPawn = assignedPawns[2].assignedPawn;
            checkForPawns(clickedPawn);
            break;
          case P4Cell:
            clickedPawn = assignedPawns[3].assignedPawn;
            checkForPawns(clickedPawn);
            break;
          case P5Cell:
            clickedPawn = assignedPawns[4].assignedPawn;
            checkForPawns(clickedPawn);
            break;
          case P6Cell:
            clickedPawn = assignedPawns[5].assignedPawn;
            checkForPawns(clickedPawn);
            break;
          case P7Cell:
            clickedPawn = assignedPawns[6].assignedPawn;
            checkForPawns(clickedPawn);
            break;
          case P8Cell:
            clickedPawn = assignedPawns[7].assignedPawn;
            checkForPawns(clickedPawn);
            break;
          default:
            return null;
        }
      };
      checkForPawnClicks(getCellIds);
    });

    describe("removePreDoubleSpaceIndex", () => {
      it("should remove the zero index from the trackPreDoubleSpace array and move the value into the trackDoubleSpace array", () => {
        const removePawnPossibilities = [
          { removePawn: assignedPawnNames[0], cell: getCellIds[6] },
          { removePawn: assignedPawnNames[1], cell: getCellIds[14] },
          { removePawn: assignedPawnNames[2], cell: getCellIds[22] },
          { removePawn: assignedPawnNames[3], cell: getCellIds[30] },
          { removePawn: assignedPawnNames[4], cell: getCellIds[38] },
          { removePawn: assignedPawnNames[5], cell: getCellIds[46] },
          { removePawn: assignedPawnNames[6], cell: getCellIds[54] },
          { removePawn: assignedPawnNames[7], cell: getCellIds[62] },
        ];
        const trackPreDoubleSpace = [];
        const trackDoubleSpace = [];
        const removeOnePawn = (assignedPawn) => {
          const indexToRemove = 0;
          const amountToRemove = 1;
          trackPreDoubleSpace.splice(indexToRemove, amountToRemove);
          trackDoubleSpace.push(assignedPawn);
          const trackPreDoubleSpaceState = 0;
          const trackDoubleSpaceState = 1;
          expect(trackPreDoubleSpace).toHaveLength(trackPreDoubleSpaceState);
          expect(trackDoubleSpace).toHaveLength(trackDoubleSpaceState);
        };
        const removeablePawnClicks = (doubleSpaceId) => {
          const P1Cell = removePawnPossibilities[0].cell;
          const P2Cell = removePawnPossibilities[1].cell;
          const P3Cell = removePawnPossibilities[2].cell;
          const P4Cell = removePawnPossibilities[3].cell;
          const P5Cell = removePawnPossibilities[4].cell;
          const P6Cell = removePawnPossibilities[5].cell;
          const P7Cell = removePawnPossibilities[6].cell;
          const P8Cell = removePawnPossibilities[7].cell;
          let clickedPawn = null;
          switch (doubleSpaceId) {
            case P1Cell:
              clickedPawn = removePawnPossibilities[0].removePawn;
              removeOnePawn(clickedPawn);
              break;
            case P2Cell:
              clickedPawn = removePawnPossibilities[1].removePawn;
              removeOnePawn(clickedPawn);
              break;
            case P3Cell:
              clickedPawn = removePawnPossibilities[2].removePawn;
              removeOnePawn(clickedPawn);
              break;
            case P4Cell:
              clickedPawn = removePawnPossibilities[3].removePawn;
              removeOnePawn(clickedPawn);
              break;
            case P5Cell:
              clickedPawn = removePawnPossibilities[4];
              removeOnePawn(clickedPawn);
              break;
            case P6Cell:
              clickedPawn = removePawnPossibilities[5];
              removeOnePawn(clickedPawn);
              break;
            case P7Cell:
              clickedPawn = removePawnPossibilities[6];
              removeOnePawn(clickedPawn);
              break;
            case P8Cell:
              clickedPawn = removePawnPossibilities[7];
              removeOnePawn(clickedPawn);
              break;
            default:
              return null;
          }
        };
        removeablePawnClicks(getCellIds);
      });
    });
  });

  describe("checkDoubleSpaceDisplay", () => {
    it("should check if the trackDoubleSpace array does not currently contain a specified pawn in its index", () => {
      const possiblePawns = {
        P1: assignedPawnNames[0],
        P2: assignedPawnNames[1],
        P3: assignedPawnNames[2],
        P4: assignedPawnNames[3],
        P5: assignedPawnNames[4],
        P6: assignedPawnNames[5],
        P7: assignedPawnNames[6],
        P8: assignedPawnNames[7],
      };

      const trackDoubleSpace = [possiblePawns.P1];
      const notIncludedAssignedPawn = possiblePawns.P2;

      expect(trackDoubleSpace).not.toContain(notIncludedAssignedPawn);
    });
  });
  describe("isDoubleSpaceDisplayReady", () => {
    it("should check if the trackPreDoubleSpace array adds and includes one pawn in its index brought over from the trackPreDoubleSpace array", () => {
      const possiblePawns = [
        { assignedPawn: assignedPawnNames[0], cell: getCellIds[4] },
        { assignedPawn: assignedPawnNames[1], cell: getCellIds[12] },
        { assignedPawn: assignedPawnNames[2], cell: getCellIds[20] },
        { assignedPawn: assignedPawnNames[3], cell: getCellIds[28] },
        { assignedPawn: assignedPawnNames[4], cell: getCellIds[36] },
        { assignedPawn: assignedPawnNames[5], cell: getCellIds[44] },
        { assignedPawn: assignedPawnNames[6], cell: getCellIds[52] },
        { assignedPawn: assignedPawnNames[7], cell: getCellIds[60] },
      ];
  
      const trackDoubleSpace = [];

     
      const P1Cell = possiblePawns[0].cell;
      const P2Cell = possiblePawns[1].cell;
      const P3Cell = possiblePawns[2].cell;
      const P4Cell = possiblePawns[3].cell;
      const P5Cell = possiblePawns[4].cell;
      const P6Cell = possiblePawns[5].cell;
      const P7Cell = possiblePawns[6].cell;
      const P8Cell = possiblePawns[7].cell;
      let clickedPawn = null;
    
      switch (getCellIds) {
        case P1Cell:
          clickedPawn = possiblePawns[0].assignedPawn;
          addPawn(clickedPawn);
          break;
        case P2Cell:
          clickedPawn = possiblePawns[1].assignedPawn;
          addPawn(clickedPawn);
          break;
        case P3Cell:
          clickedPawn = possiblePawns[2].assignedPawn;
          addPawn(clickedPawn);
          break;
        case P4Cell:
          clickedPawn = possiblePawns[3].assignedPawn;
          addPawn(clickedPawn);
          break;
        case P5Cell:
          clickedPawn = possiblePawns[4].assignedPawn;
          addPawn(clickedPawn);
          break;
        case P6Cell:
          clickedPawn = possiblePawns[5].assignedPawn;
          addPawn(clickedPawn);
          break;
        case P7Cell:
          clickedPawn = possiblePawns[6].assignedPawn;
          addPawn(clickedPawn);
          break;
        case P8Cell:
          clickedPawn = possiblePawns[7].assignedPawn;
          addPawn(clickedPawn);
          break;
      }
      trackDoubleSpace.push(clickedPawn)
      expect(trackDoubleSpace).toContain(clickedPawn)
    });
  });
  describe("isDoubleSpaceDisplayContentReady", () => {
    it("should remove a pawn from the trackPreDoubleSpace array and add a new pawn to the trackDoubleSpace array", () => {
      const assignedPawnPossibilities = {
        P1: assignedPawnNames[0],
        P2: assignedPawnNames[1],
        P3: assignedPawnNames[2],
        P4: assignedPawnNames[3],
        P5: assignedPawnNames[4],
        P6: assignedPawnNames[5],
        P7: assignedPawnNames[6],
        P8: assignedPawnNames[7]
      }

      
    })
  })
});
