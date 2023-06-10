import vsComputer from "./modules/vsComputer.js"

const newVsComputer = vsComputer()

newVsComputer.computerGrid(8,8)
newVsComputer.gridCellFunctionality()

const mainPageLinks = () => {
  const buttonIds = ["pvpLink", "vsComputerLink", "rulesLink"];
  const mapButtonIds = buttonIds.map((id) => document.getElementById(id));
  document.addEventListener("click", (e) => {
    if (e.target.id === mapButtonIds[0]) {
      window.location.href = "";
    } else if (e.target.id === mapButtonIds[1]) {
      window.location.href = "";
    } else if (e.target.id === mapButtonIds[2]) {
      window.location.href = "";
    }
  });
};

const mainPageLinksCall = mainPageLinks()
