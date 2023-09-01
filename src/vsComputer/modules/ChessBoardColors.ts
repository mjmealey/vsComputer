import { getCellIds } from "./ChessBoard.js";
import {
  gridCellColors,
  colorSelectAttributes,
} from "../objects/chessColorObjects.js";
const ChessBoardColors = () => {
  const colorSelect = document.getElementById(
    colorSelectAttributes.selectId
  ) as HTMLInputElement;
  const coloredCellIds = getCellIds.map((id: string) =>
    document.getElementById(id)
  );
  const primaryColors = (primaryColor: string) => {
    const primaryColorCells: number[] = [
      1, 3, 5, 7, 8, 10, 12, 14, 17, 19, 21, 23, 24, 26, 28, 30, 33, 35, 37, 39,
      40, 42, 44, 46, 49, 51, 53, 55, 56, 58, 60, 62,
    ];
    primaryColorCells.forEach((cellColors: number) => {
      const isCellIncluded: boolean = primaryColorCells.includes(cellColors);
      if (isCellIncluded) {
        coloredCellIds[cellColors].style.backgroundColor = primaryColor;
        coloredCellIds[cellColors].style.borderColor = primaryColor;
      }
    });
  };

  const secondaryColors = (secondaryColor: string) => {
    const secondaryColorCells: number[] = [
      0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22, 25, 27, 29, 31, 32, 34, 36, 38,
      41, 43, 45, 47, 48, 50, 52, 54, 57, 59, 61, 63,
    ];
    secondaryColorCells.forEach((cellColors: number) => {
      const isCellIncluded: boolean = secondaryColorCells.includes(cellColors);
      if (isCellIncluded) {
        coloredCellIds[cellColors].style.backgroundColor = secondaryColor;
        coloredCellIds[cellColors].style.borderColor = secondaryColor;
      }
    });
  };

  const defaultPrimaryColor: string = gridCellColors.defaultBrown;
  primaryColors(defaultPrimaryColor);
  const defaultSecondaryColor: string = gridCellColors.defaultBisque;
  secondaryColors(defaultSecondaryColor);

  const handleColorSelectionInputs = () => {
    const colorSelection: string = colorSelect.value;
    const defaultColors: string = colorSelectAttributes.default;
    const woodlandColors: string = colorSelectAttributes.woodland;
    const checkerColors: string = colorSelectAttributes.checker;
    const skyColors: string = colorSelectAttributes.sky;
    const funKingdomColors: string = colorSelectAttributes.funKingdom;
    const classicColors: string = colorSelectAttributes.classic;
    const vikingColors: string = colorSelectAttributes.viking;
    const fireAndIceColors: string = colorSelectAttributes.fireAndIce;
    switch (colorSelection) {
      case defaultColors:
        primaryColors(defaultPrimaryColor);
        secondaryColors(defaultSecondaryColor);
        break;
      case woodlandColors:
        const woodlandBrown: string = gridCellColors.woodBrown;
        primaryColors(woodlandBrown);
        const woodlandGreen: string = gridCellColors.woodGreen;
        secondaryColors(woodlandGreen);
        break;
      case checkerColors:
        const checkerRed: string = gridCellColors.checkerRed;
        primaryColors(checkerRed);
        const checkerBlack: string = gridCellColors.checkerBlack;
        secondaryColors(checkerBlack);
        break;
      case skyColors:
        const skyBlue: string = gridCellColors.skyBlue;
        primaryColors(skyBlue);
        const skyWhite: string = gridCellColors.skyWhite;
        secondaryColors(skyWhite);
        break;
      case funKingdomColors:
        const funKingdomPurple: string = gridCellColors.funKingdomPurple;
        primaryColors(funKingdomPurple);
        const funKingdomPink: string = gridCellColors.funKingdomPink;
        secondaryColors(funKingdomPink);
        break;
      case classicColors:
        const classicWhite: string = gridCellColors.classicWhite;
        primaryColors(classicWhite);
        const classicBlack: string = gridCellColors.classicBlack;
        secondaryColors(classicBlack);
        break;
      case vikingColors:
        const vikingBlue: string = gridCellColors.vikingBlue;
        primaryColors(vikingBlue);
        const vikingYellow: string = gridCellColors.vikingYellow;
        secondaryColors(vikingYellow);
        break;
      case fireAndIceColors:
        const fireRed: string = gridCellColors.fireRed;
        primaryColors(fireRed);
        const iceBlue: string = gridCellColors.iceBlue;
        secondaryColors(iceBlue);
        break;
    }
  };

  colorSelect.addEventListener("input", () => {
    handleColorSelectionInputs();
  });
};

export default ChessBoardColors;
