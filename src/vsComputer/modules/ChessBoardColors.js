import { getCellIds } from "./ChessPieceAssignments.js";
import {
  gridColorsObject,
  colorSelectAttributesObject,
} from "../objects/chessColorObjects.js";
const ChessBoardColors = () => {
  const cellColors = (mappedCellIds) => {
    mappedCellIds = getCellIds.map((id) => document.getElementById(id));

    let primaryColor = [
      0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22, 25, 27, 29, 31, 32, 34, 36, 38,
      41, 43, 45, 47, 48, 50, 52, 54, 57, 59, 61, 63,
    ];
    let secondaryColor = [
      1, 3, 5, 7, 8, 10, 12, 14, 17, 19, 21, 23, 24, 26, 28, 30, 33, 35, 37, 39,
      40, 42, 44, 46, 49, 51, 53, 55, 56, 58, 60, 62,
    ];

    for (
      let defaultColorIndex = 0;
      defaultColorIndex < getCellIds.length;
      defaultColorIndex++
    ) {
      if (primaryColor.includes(defaultColorIndex)) {
        mappedCellIds[defaultColorIndex].style.backgroundColor =
          gridColorsObject.bisque;
        mappedCellIds[defaultColorIndex].style.borderColor =
          gridColorsObject.bisque;
      } else if (secondaryColor.includes(defaultColorIndex)) {
        mappedCellIds[defaultColorIndex].style.backgroundColor =
          gridColorsObject.brown;
        mappedCellIds[defaultColorIndex].style.borderColor =
          gridColorsObject.brown;
      }
    }

    colorSelect.addEventListener("input", (e) => {
      const selectedColor = e.target.id;
      if (selectedColor === colorSelectAttributesObject.selectId) {
        switch (true) {
          case colorSelect.value === colorSelectAttributesObject.default:
            getCellIds.forEach((_, defaultColors) => {
              if (primaryColor.includes(defaultColors)) {
                mappedCellIds[defaultColors].style.backgroundColor =
                  gridColorsObject.bisque;
                mappedCellIds[defaultColors].style.borderColor =
                  gridColorsObject.bisque;
              } else if (secondaryColor.includes(defaultColors)) {
                mappedCellIds[defaultColors].style.backgroundColor =
                  gridColorsObject.brown;
                mappedCellIds[defaultColors].style.borderColor =
                  gridColorsObject.brown;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributesObject.woodland:
            getCellIds.forEach((_, woodlandColorIndex) => {
              if (primaryColor.includes(woodlandColorIndex)) {
                mappedCellIds[woodlandColorIndex].style.backgroundColor =
                  gridColorsObject.green;
                mappedCellIds[woodlandColorIndex].style.borderColor =
                  gridColorsObject.green;
              } else if (secondaryColor.includes(woodlandColorIndex)) {
                mappedCellIds[woodlandColorIndex].style.backgroundColor =
                  gridColorsObject.woodBrown;
                mappedCellIds[woodlandColorIndex].style.borderColor =
                  gridColorsObject.woodBrown;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributesObject.checker:
            getCellIds.forEach((_, checkerColorIndex) => {
              if (primaryColor.includes(checkerColorIndex)) {
                mappedCellIds[checkerColorIndex].style.backgroundColor =
                  gridColorsObject.red;
                mappedCellIds[checkerColorIndex].style.borderColor =
                  gridColorsObject.red;
              } else if (secondaryColor.includes(checkerColorIndex)) {
                mappedCellIds[checkerColorIndex].style.backgroundColor =
                  gridColorsObject.black;
                mappedCellIds[checkerColorIndex].style.borderColor =
                  gridColorsObject.black;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributesObject.blueSky:
            getCellIds.forEach((_, blueSkyColorIndex) => {
              if (primaryColor.includes(blueSkyColorIndex)) {
                mappedCellIds[blueSkyColorIndex].style.backgroundColor =
                  gridColorsObject.blue;
                mappedCellIds[blueSkyColorIndex].style.borderColor =
                  gridColorsObject.blue;
              } else if (secondaryColor.includes(blueSkyColorIndex)) {
                mappedCellIds[blueSkyColorIndex].style.backgroundColor =
                  gridColorsObject.white;
                mappedCellIds[blueSkyColorIndex].style.borderColor =
                  gridColorsObject.white;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributesObject.funKingdom:
            getCellIds.forEach((_, funKingdomColorIndex) => {
              if (primaryColor.includes(funKingdomColorIndex)) {
                mappedCellIds[funKingdomColorIndex].style.backgroundColor =
                  gridColorsObject.purple;
                mappedCellIds[funKingdomColorIndex].style.borderColor =
                  gridColors.purple;
              } else if (secondaryColor.includes(funKingdomColorIndex)) {
                mappedCellIds[funKingdomColorIndex].style.backgroundColor =
                  gridColorsObject.pink;
                mappedCellIds[funKingdomColorIndex].style.borderColor =
                  gridColorsObject.pink;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributesObject.classic:
            getCellIds.forEach((_, classicColorIndex) => {
              if (primaryColor.includes(classicColorIndex)) {
                mappedCellIds[classicColorIndex].style.backgroundColor =
                  gridColorsObject.classicWhite;
                mappedCellIds[classicColorIndex].style.borderColor =
                  gridColorsObject.classicWhite;
              } else if (secondaryColor.includes(classicColorIndex)) {
                mappedCellIds[classicColorIndex].style.backgroundColor =
                  gridColorsObject.classicBlack;
                mappedCellIds[classicColorIndex].style.borderColor =
                  gridColorsObject.classicBlack;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributesObject.kingdom:
            getCellIds.forEach((_, kingdomColorIndex) => {
              if (primaryColor.includes(kingdomColorIndex)) {
                mappedCellIds[kingdomColorIndex].style.backgroundColor =
                  gridColorsObject.blue;
                mappedCellIds[kingdomColorIndex].style.borderColor =
                  gridColorsObject.blue;
              } else if (secondaryColor.includes(kingdomColorIndex)) {
                mappedCellIds[kingdomColorIndex].style.backgroundColor =
                  gridColorsObject.yellow;
                mappedCellIds[kingdomColorIndex].style.borderColor =
                  gridColorsObject.yellow;
              }
            });
            break;
          case colorSelect.value === colorSelectAttributesObject.fireAndIce:
            getCellIds.forEach((_, fireAndIceColorIndex) => {
              if (primaryColor.includes(fireAndIceColorIndex)) {
                mappedCellIds[fireAndIceColorIndex].style.backgroundColor =
                  gridColorsObject.iceBlue;
                mappedCellIds[fireAndIceColorIndex].style.borderColor =
                  gridColorsObject.iceBlue;
              } else if (secondaryColor.includes(fireAndIceColorIndex)) {
                mappedCellIds[fireAndIceColorIndex].style.backgroundColor =
                  gridColorsObject.fireRed;
                mappedCellIds[fireAndIceColorIndex].style.borderColor =
                  gridColorsObject.fireRed;
              }
            });
            break;
        }
      }
    });
    return { cellColors };
  };
  return { cellColors };
};

export default ChessBoardColors;
