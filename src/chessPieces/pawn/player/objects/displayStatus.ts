import { pawnName } from "../objects/pawnName.js";

interface displayStatusData {
  emptyCell: string;
  filledCell: string;
}

const displayStatusData: displayStatusData = {
  emptyCell: "",
  filledCell: pawnName.name,
};

export const displayStatus = displayStatusData;
