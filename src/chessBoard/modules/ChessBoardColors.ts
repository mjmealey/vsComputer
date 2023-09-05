import { getCellIds } from "../gridCellIds.js";
import { ChessColorData } from "../objects/chessColors.js";

const ChessBoardColors = () => {
  const coloredCellIds = getCellIds.map((id) => document.getElementById(id));
  const colorSelect = document.getElementById(
    ChessColorData.selectId
  ) as HTMLInputElement;

  const primaryColors = (primaryColor: string) => {
    const primaryColorCells = [
      1, 3, 5, 7, 8, 10, 12, 14, 17, 19, 21, 23, 24, 26, 28, 30, 33, 35, 37, 39,
      40, 42, 44, 46, 49, 51, 53, 55, 56, 58, 60, 62,
    ];
    primaryColorCells.forEach((cellColors: number) => {
      const isCellIncluded: boolean = primaryColorCells.includes(cellColors);
      if (isCellIncluded) {
        const primaryColorCells: HTMLElement | null =
          coloredCellIds[cellColors];
        if (primaryColorCells) {
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
        const secondaryColors = coloredCellIds[cellColors];
        if (secondaryColors) {
          secondaryColors.style.backgroundColor = secondaryColor;
          secondaryColors.style.borderColor = secondaryColor;
        }
      }
    });
  };

  const setColors = (primary: string, secondary: string) => {
    primaryColors(primary);
    secondaryColors(secondary);
  };


  const defaultColors = () => {
    const defaultPrimary = ChessColorData.default.primary
    const defaultSecondary = ChessColorData.default.secondary
    setColors(defaultPrimary, defaultSecondary)
  }

  defaultColors()

  const handleColorSelectionInput = () => {
    const colorSelection = colorSelect.value;
    const defaultColor = ChessColorData.default.selectValue
    const woodland = ChessColorData.woodland.selectValue;
    const checker = ChessColorData.checker.selectValue;
    const sky = ChessColorData.sky.selectValue;
    const funKingdom = ChessColorData.funKingdom.selectValue;
    const classic = ChessColorData.classic.selectValue;
    const viking = ChessColorData.viking.selectValue;
    const fireAndIce = ChessColorData.fireAndIce.selectValue;
    switch (colorSelection) {
      case defaultColor:
        defaultColors()
        break;
      case woodland:
        const woodPrimary = ChessColorData.woodland.primary;
        const woodSecondary = ChessColorData.woodland.secondary;
        setColors(woodPrimary, woodSecondary);
        break;
      case checker:
        const checkerPrimary = ChessColorData.checker.primary;
        const checkerSecondary = ChessColorData.checker.secondary;
        setColors(checkerPrimary, checkerSecondary);
        break;
      case sky:
        const skyPrimary = ChessColorData.sky.primary;
        const skySecondary = ChessColorData.sky.secondary;
        setColors(skyPrimary, skySecondary);
        break;
      case funKingdom:
        const funKingdomPrimary = ChessColorData.funKingdom.primary;
        const funKingdomSecondary = ChessColorData.funKingdom.secondary;
        setColors(funKingdomPrimary, funKingdomSecondary);
        break;
      case classic:
        const classicPrimary = ChessColorData.classic.primary;
        const classicSecondary = ChessColorData.classic.secondary;
        setColors(classicPrimary, classicSecondary);
        break;
      case viking:
        const vikingPrimary = ChessColorData.viking.primary;
        const vikingSecondary = ChessColorData.viking.secondary;
        setColors(vikingPrimary, vikingSecondary);
        break;
      case fireAndIce:
        const fireAndIcePrimary = ChessColorData.fireAndIce.primary;
        const fireAndIceSecondary = ChessColorData.fireAndIce.secondary;
        setColors(fireAndIcePrimary, fireAndIceSecondary);
        break;
    }
  };

  colorSelect.addEventListener("input", () => {
    handleColorSelectionInput();
  });
};

export default ChessBoardColors;
