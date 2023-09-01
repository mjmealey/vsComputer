import { getCellIds } from "./ChessBoard.js";
import { gridCellColors, colorSelectAttributes, } from "../objects/chessColorObjects.js";
const ChessBoardColors = () => {
    const colorSelect = document.getElementById(colorSelectAttributes.selectId);
    const coloredCellIds = getCellIds.map((id) => document.getElementById(id));
    const primaryColors = (primaryColor) => {
        const primaryColorCells = [
            1, 3, 5, 7, 8, 10, 12, 14, 17, 19, 21, 23, 24, 26, 28, 30, 33, 35, 37, 39,
            40, 42, 44, 46, 49, 51, 53, 55, 56, 58, 60, 62,
        ];
        primaryColorCells.forEach((cellColors) => {
            const isCellIncluded = primaryColorCells.includes(cellColors);
            if (isCellIncluded) {
                coloredCellIds[cellColors].style.backgroundColor = primaryColor;
                coloredCellIds[cellColors].style.borderColor = primaryColor;
            }
        });
    };
    const secondaryColors = (secondaryColor) => {
        const secondaryColorCells = [
            0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22, 25, 27, 29, 31, 32, 34, 36, 38,
            41, 43, 45, 47, 48, 50, 52, 54, 57, 59, 61, 63,
        ];
        secondaryColorCells.forEach((cellColors) => {
            const isCellIncluded = secondaryColorCells.includes(cellColors);
            if (isCellIncluded) {
                coloredCellIds[cellColors].style.backgroundColor = secondaryColor;
                coloredCellIds[cellColors].style.borderColor = secondaryColor;
            }
        });
    };
    const defaultPrimaryColor = gridCellColors.defaultBrown;
    primaryColors(defaultPrimaryColor);
    const defaultSecondaryColor = gridCellColors.defaultBisque;
    secondaryColors(defaultSecondaryColor);
    const handleColorSelectionInputs = () => {
        const colorSelection = colorSelect.value;
        const defaultColors = colorSelectAttributes.default;
        const woodlandColors = colorSelectAttributes.woodland;
        const checkerColors = colorSelectAttributes.checker;
        const skyColors = colorSelectAttributes.sky;
        const funKingdomColors = colorSelectAttributes.funKingdom;
        const classicColors = colorSelectAttributes.classic;
        const vikingColors = colorSelectAttributes.viking;
        const fireAndIceColors = colorSelectAttributes.fireAndIce;
        switch (colorSelection) {
            case defaultColors:
                primaryColors(defaultPrimaryColor);
                secondaryColors(defaultSecondaryColor);
                break;
            case woodlandColors:
                const woodlandBrown = gridCellColors.woodBrown;
                primaryColors(woodlandBrown);
                const woodlandGreen = gridCellColors.woodGreen;
                secondaryColors(woodlandGreen);
                break;
            case checkerColors:
                const checkerRed = gridCellColors.checkerRed;
                primaryColors(checkerRed);
                const checkerBlack = gridCellColors.checkerBlack;
                secondaryColors(checkerBlack);
                break;
            case skyColors:
                const skyBlue = gridCellColors.skyBlue;
                primaryColors(skyBlue);
                const skyWhite = gridCellColors.skyWhite;
                secondaryColors(skyWhite);
                break;
            case funKingdomColors:
                const funKingdomPurple = gridCellColors.funKingdomPurple;
                primaryColors(funKingdomPurple);
                const funKingdomPink = gridCellColors.funKingdomPink;
                secondaryColors(funKingdomPink);
                break;
            case classicColors:
                const classicWhite = gridCellColors.classicWhite;
                primaryColors(classicWhite);
                const classicBlack = gridCellColors.classicBlack;
                secondaryColors(classicBlack);
                break;
            case vikingColors:
                const vikingBlue = gridCellColors.vikingBlue;
                primaryColors(vikingBlue);
                const vikingYellow = gridCellColors.vikingYellow;
                secondaryColors(vikingYellow);
                break;
            case fireAndIceColors:
                const fireRed = gridCellColors.fireRed;
                primaryColors(fireRed);
                const iceBlue = gridCellColors.iceBlue;
                secondaryColors(iceBlue);
                break;
        }
    };
    colorSelect.addEventListener("input", () => {
        handleColorSelectionInputs();
    });
};
export default ChessBoardColors;
