import { Colors } from "../enums/colors.js";
import { ColorSelect } from "../enums/colors.js";

interface ChessColorData {
  selectId: string;

  default: {
    primary: string;
    secondary: string;
    selectValue: string;
  };
  woodland: {
    primary: string;
    secondary: string;
    selectValue: string;
  };
  checker: {
    primary: string;
    secondary: string;
    selectValue: string;
  };
  sky: {
    primary: string;
    secondary: string;
    selectValue: string;
  };
  funKingdom: {
    primary: string;
    secondary: string;
    selectValue: string;
  };
  classic: {
    primary: string;
    secondary: string;
    selectValue: string;
  };
  viking: {
    primary: string;
    secondary: string;
    selectValue: string;
  };
  fireAndIce: {
    primary: string;
    secondary: string;
    selectValue: string;
  };
}

export const ChessColorData: ChessColorData = {
  selectId: ColorSelect.selectId,

  default: {
    primary: Colors.defaultBrown,
    secondary: Colors.defaultBisque,
    selectValue: ColorSelect.default,
  },
  woodland: {
    primary: Colors.woodBrown,
    secondary: Colors.woodGreen,
    selectValue: ColorSelect.woodland,
  },
  checker: {
    primary: Colors.checkerRed,
    secondary: Colors.checkerBlack,
    selectValue: ColorSelect.checker,
  },
  sky: {
    primary: Colors.skyBlue,
    secondary: Colors.skyWhite,
    selectValue: ColorSelect.sky,
  },
  funKingdom: {
    primary: Colors.funKingdomPurple,
    secondary: Colors.funKingdomPink,
    selectValue: ColorSelect.funKingdom,
  },
  classic: {
    primary: Colors.classicWhite, 
    secondary: Colors.classicBlack, 
    selectValue: ColorSelect.classic,
  },
  viking: {
    primary: Colors.vikingBlue,
    secondary: Colors.vikingYellow,
    selectValue: ColorSelect.viking,
  },
  fireAndIce: {
    primary: Colors.fireRed,
    secondary: Colors.iceBlue,
    selectValue: ColorSelect.fireAndIce,
  },
};
