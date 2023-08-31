interface GridCellColorsData {
  defaultBisque: string;
  defaultBrown: string;

  woodGreen: string;
  woodBrown: string;

  checkerRed: string;
  checkerBlack: string;

  skyBlue: string;
  skyWhite: string;

  purple: string;
  pink: string;

  classicBlack: string;
  classicWhite: string;

  kingdomYellow: string;
  kingdomBlue: string;

  fireRed: string;
  iceBlue: string;
}

const gridCellColorsData: GridCellColorsData = {
  //default grid
  defaultBisque: "bisque",
  defaultBrown: "#4b2424",
  //woodland grid
  woodGreen: "green",
  woodBrown: "#8B4513",
  //checker grid
  checkerRed: "red",
  checkerBlack: "black",
  //blue sky grid
  skyBlue: "blue",
  skyWhite: "white",
  //fun kingdom grid
  purple: "purple",
  pink: "pink",
  //classic grid
  classicBlack: "black",
  classicWhite: "white",
  //kingdom grid
  kingdomYellow: "yellow",
  kingdomBlue: "blue",
  //fire and ice grid
  fireRed: "crimson",
  iceBlue: "lightblue",
};

interface colorSelectAttributesData {
  selectId: string;

  selectColor: string;
  default: string;
  woodland: string;
  checker: string;
  blueSky: string;
  funKingdom: string;
  classic: string;
  kingdom: string;
  fireAndIce: string;
}

const colorSelectAttributesData: colorSelectAttributesData = {
  //ids
  selectId: "colorSelect",

  //values
  selectColor: "selectColor",
  default: "default",
  woodland: "woodland",
  checker: "checker",
  blueSky: "blueSky",
  funKingdom: "funKingdom",
  classic: "classic",
  kingdom: "kingdom",
  fireAndIce: "fireAndIce",
};

export const gridCellColors = gridCellColorsData;
export const colorSelectAttributes = colorSelectAttributesData;
