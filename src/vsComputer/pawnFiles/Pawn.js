import PawnCellAssignments from "./modules/general-modules/PawnCellAssignments.js";
import ComputerDoubleSpace from "./modules/computer-modules/ComputerDoubleSpace.js";
import PlayerDoubleSpace from "./modules/player-modules/PlayerDoubleSpace.js";
import ComputerSingleSpaceAtStart from "./modules/computer-modules/ComputerSingleSpaceAtStart.js";
import PlayerSingleSpaceAtStart from "./modules/player-modules/PlayerSingleSpace.js";
import PreventComputerDuplication from "./modules/computer-modules/PreventComputerDuplication.js";
import PreventPlayerDuplication from "./modules/player-modules/PreventPlayerDuplication.js";

const Pawn = () => {
  const newPawnAssignments = PawnCellAssignments();
  newPawnAssignments.computerSideAssignments();
  newPawnAssignments.playerSideAssignments();
  const newComputerDoubleSpace = ComputerDoubleSpace();
  newComputerDoubleSpace.handleFirstComputerSideDoubleSpaceClicks();
  newComputerDoubleSpace.handleSecondComputerSideDoubleSpaceClicks();
  newComputerDoubleSpace.handleThirdComputerSideDoubleSpaceClicks();
  newComputerDoubleSpace.handleFourthComputerSideDoubleSpaceClicks();
  newComputerDoubleSpace.handleFifthComputerSideDoubleSpaceClicks();
  newComputerDoubleSpace.handleSixthComputerSideDoubleSpaceClicks();
  newComputerDoubleSpace.handleSeventhComputerSideDoubleSpaceClicks();
  newComputerDoubleSpace.handleEighthComputerSideDoubleSpaceClicks();
  const newPlayerDoubleSpace = PlayerDoubleSpace();
  newPlayerDoubleSpace.firstPlayerSideDoubleSpaceClicks();
  newPlayerDoubleSpace.secondPlayerSideDoubleSpaceClicks();
  newPlayerDoubleSpace.thirdPlayerSideDoubleSpaceClicks();
  newPlayerDoubleSpace.fourthPlayerSideDoubleSpaceClicks();
  newPlayerDoubleSpace.fifthPlayerSideDoubleSpaceClicks();
  newPlayerDoubleSpace.sixthPlayerSideDoubleSpaceClicks();
  newPlayerDoubleSpace.seventhPlayerSideDoubleSpaceClicks();
  newPlayerDoubleSpace.eighthPlayerSideDoubleSpaceClicks();
  const newComputerSingleSpaceAtStart = ComputerSingleSpaceAtStart();
  newComputerSingleSpaceAtStart.handleFirstComputerSideSingleSpaceAtStartClicks();
  newComputerSingleSpaceAtStart.handleSecondComputerSideSingleSpaceAtStartClicks();
  newComputerSingleSpaceAtStart.handleThirdComputerSideSingleSpaceAtStartClicks();
  newComputerSingleSpaceAtStart.handleFourthComputerSideSingleSpaceAtStartClicks();
  newComputerSingleSpaceAtStart.handleFifthComputerSideSingleSpaceAtStartClicks();
  newComputerSingleSpaceAtStart.handleSixthComputerSideSingleSpaceAtStartClicks();
  newComputerSingleSpaceAtStart.handleSeventhComputerSideSingleSpaceAtStartClicks();
  newComputerSingleSpaceAtStart.handleEighthComputerSideSingleSpaceAtStartClicks();
  const newPlayerSingleSpaceAtStart = PlayerSingleSpaceAtStart();
  newPlayerSingleSpaceAtStart.handleFirstPlayerSingleSpaceAtStartClicks();
  newPlayerSingleSpaceAtStart.handleSecondPlayerSingleSpaceAtStartClicks();
  newPlayerSingleSpaceAtStart.handleThirdPlayerSingleSpaceAtStartClicks();
  newPlayerSingleSpaceAtStart.handleFourthPlayerSingleSpaceAtStartClicks();
  newPlayerSingleSpaceAtStart.handleFifthPlayerSingleSpaceAtStartClicks();
  newPlayerSingleSpaceAtStart.handleSixthPlayerSingleSpaceAtStartClicks();
  newPlayerSingleSpaceAtStart.handleSeventhPlayerSingleSpaceAtStartClicks();
  newPlayerSingleSpaceAtStart.handleEighthPlayerSingleSpaceAtStartClicks();
  const newPreventComputerDuplication = PreventComputerDuplication()
  newPreventComputerDuplication.firstComputerPreventDuplicationClicks();
  newPreventComputerDuplication.secondComputerPreventDuplicationClicks();
  newPreventComputerDuplication.thirdComputerPreventDuplicationClicks();
  newPreventComputerDuplication.fourthComputerPreventDuplicationClicks();
  newPreventComputerDuplication.fifthComputerPreventDuplicationClicks();
  newPreventComputerDuplication.sixthComputerPreventDuplicationClicks();
  newPreventComputerDuplication.seventhComputerPreventDuplicationClicks();
  newPreventComputerDuplication.eighthComputerPreventDuplicationClicks();
  const newPreventPlayerDuplication = PreventPlayerDuplication()
  newPreventPlayerDuplication.firstPlayerPreventDuplicationClicks()
  newPreventPlayerDuplication.secondPlayerPreventDuplicationClicks()
  newPreventPlayerDuplication.thirdPlayerPreventDuplicationClicks()
  newPreventPlayerDuplication.fourthPlayerPreventDuplicationClicks()
  newPreventPlayerDuplication.fifthPlayerPreventDuplicationClicks()
  newPreventPlayerDuplication.sixthPlayerPreventDuplicationClicks()
  newPreventPlayerDuplication.seventhPlayerPreventDuplicationClicks()
  newPreventPlayerDuplication.eighthPlayerPreventDuplicationClicks()
};

export default Pawn;
