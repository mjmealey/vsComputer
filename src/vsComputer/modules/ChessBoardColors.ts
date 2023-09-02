import { getCellIds } from "./ChessBoard.js";
import { ChessColorData } from "../objects/chessColors.js";
const ChessBoardColors = () => {
  const colorSelect = document.getElementById(
    ChessColorData.selectId
  ) as HTMLInputElement;
  const coloredCellIds = getCellIds.map((id: string) =>
    document.getElementById(id)
  );
  const primaryColors = (primaryColor: string) => {
    const primaryColorCells = [
      1, 3, 5, 7, 8, 10, 12, 14, 17, 19, 21, 23, 24, 26, 28, 30, 33, 35, 37, 39,
      40, 42, 44, 46, 49, 51, 53, 55, 56, 58, 60, 62,
    ];
    primaryColorCells.forEach((cellColors: number) => {
      const isCellIncluded: boolean = primaryColorCells.includes(cellColors);
      if (isCellIncluded) {
        const primaryColorCells: HTMLElement = coloredCellIds[cellColors];
        if (primaryColorCells instanceof HTMLElement) {
          primaryColorCells.style.backgroundColor = primaryColor;
          primaryColorCells.style.borderColor = primaryColor;
        }
      }
    });
  };

  const secondaryColors = (secondaryColor: string) => {
    const secondaryColorCells = [
      0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22, 25, 27, 29, 31, 32, 34, 36, 38,
      41, 43, 45, 47, 48, 50, 52, 54, 57, 59, 61, 63,
    ];
    secondaryColorCells.forEach((cellColors: number) => {
      const isCellIncluded = secondaryColorCells.includes(cellColors);
      if (isCellIncluded) {
        const secondaryColorCells: HTMLElement = coloredCellIds[cellColors];

        if (secondaryColorCells instanceof HTMLElement) {
          secondaryColorCells.style.backgroundColor = secondaryColor;
          secondaryColorCells.style.borderColor = secondaryColor;
        }
      }
    });
  };

  const defaultPrimaryColor: string = ChessColorData.default.primary
  primaryColors(defaultPrimaryColor);
  const defaultSecondaryColor: string = ChessColorData.default.secondary
  secondaryColors(defaultSecondaryColor);

  const handleColorSelectionInputs = () => {
    const colorSelection: string = ChessColorData.selectId;
    const defaultColors: string = ChessColorData.default.selectValue;
    const woodlandColors: string = ChessColorData.woodland.selectValue;
    const checkerColors: string = ChessColorData.checker.selectValue;
    const skyColors: string = ChessColorData.sky.selectValue;
    const funKingdomColors: string = ChessColorData.funKingdom.selectValue;
    const classicColors: string = ChessColorData.classic.selectValue;
    const vikingColors: string = ChessColorData.viking.selectValue;
    const fireAndIceColors: string = ChessColorData.fireAndIce.selectValue;
    switch (colorSelection) {
      case defaultColors:
        primaryColors(defaultPrimaryColor);
        secondaryColors(defaultSecondaryColor);
        break;
      case woodlandColors:
        const woodlandBrown: string = ChessColorData.woodland.primary
        primaryColors(woodlandBrown);
        const woodlandGreen: string = ChessColorData.woodland.secondary
        secondaryColors(woodlandGreen);
        break;
      case checkerColors:
        const checkerRed: string = ChessColorData.checker.primary
        primaryColors(checkerRed);
        const checkerBlack: string = ChessColorData.checker.secondary
        secondaryColors(checkerBlack);
        break;
      case skyColors:
        const skyBlue: string = ChessColorData.sky.primary
        primaryColors(skyBlue);
        const skyWhite: string = ChessColorData.sky.secondary
        secondaryColors(skyWhite);
        break;
      case funKingdomColors:
        const funKingdomPurple: string = ChessColorData.funKingdom.primary
        primaryColors(funKingdomPurple);
        const funKingdomPink: string = ChessColorData.funKingdom.secondary
        secondaryColors(funKingdomPink);
        break;
      case classicColors:
        const classicWhite: string = ChessColorData.classic.primary
        primaryColors(classicWhite);
        const classicBlack: string = ChessColorData.classic.secondary
        secondaryColors(classicBlack);
        break;
      case vikingColors:
        const vikingBlue: string = ChessColorData.viking.primary
        primaryColors(vikingBlue);
        const vikingYellow: string = ChessColorData.viking.secondary
        secondaryColors(vikingYellow);
        break;
      case fireAndIceColors:
        const fireRed: string = ChessColorData.fireAndIce.primary
        primaryColors(fireRed);
        const iceBlue: string = ChessColorData.fireAndIce.secondary
        secondaryColors(iceBlue);
        break;
    }
  };

  colorSelect.addEventListener("input", () => {
    handleColorSelectionInputs();
  });
};

export default ChessBoardColors;
