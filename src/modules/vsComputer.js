const vsComputer = () => {
  const gridElements = {
    gridContainerId: "gridContainer",
    div: "div",
    rowId: "rows",
    gridElementsClass: "gridElements",
  };
  const gridCellIds = {
    //row one
    rowOneCellOne: "cell-0-0",
    rowOneCellTwo: "cell-0-1",
    rowOneCellThree: "cell-0-2",
    rowOneCellFour: "cell-0-3",
    rowOneCellFive: "cell-0-4",
    rowOneCellSix: "cell-0-5",
    rowOneCellSeven: "cell-0-6",
    rowOneCellEight: "cell-0-7",

    //row two
    rowTwoCellOne: "cell-1-0",
    rowTwoCellTwo: "cell-1-1",
    rowTwoCellThree: "cell-1-2",
    rowTwoCellFour: "cell-1-3",
    rowTwoCellFive: "cell-1-4",
    rowTwoCellSix: "cell-1-5",
    rowTwoCellSeven: "cell-1-6",
    rowTwoCellEight: "cell-1-7",

    //row three
    rowThreeCellOne: "cell-2-0",
    rowThreeCellTwo: "cell-2-1",
    rowThreeCellThree: "cell-2-2",
    rowThreeCellFour: "cell-2-3",
    rowThreeCellFive: "cell-2-4",
    rowThreeCellSix: "cell-2-5",
    rowThreeCellSeven: "cell-2-6",
    rowThreeCellEight: "cell-2-7",

    //row four
    rowFourCellOne: "cell-3-0",
    rowFourCellTwo: "cell-3-1",
    rowFourCellThree: "cell-3-2",
    rowFourCellFour: "cell-3-3",
    rowFourCellFive: "cell-3-4",
    rowFourCellSix: "cell-3-5",
    rowFourCellSeven: "cell-3-6",
    rowFourCellEight: "cell-3-7",

    //row five
    rowFiveCellOne: "cell-4-0",
    rowFiveCellTwo: "cell-4-1",
    rowFiveCellThree: "cell-4-2",
    rowFiveCellFour: "cell-4-3",
    rowFiveCellFive: "cell-4-4",
    rowFiveCellSix: "cell-4-5",
    rowFiveCellSeven: "cell-4-6",
    rowFiveCellEight: "cell-4-7",

    //row six
    rowSixCellOne: "cell-5-0",
    rowSixCellTwo: "cell-5-1",
    rowSixCellThree: "cell-5-2",
    rowSixCellFour: "cell-5-3",
    rowSixCellFive: "cell-5-4",
    rowSixCellSix: "cell-5-5",
    rowSixCellSeven: "cell-5-6",
    rowSixCellEight: "cell-5-7",

    //row seven
    rowSevenCellOne: "cell-6-0",
    rowSevenCellTwo: "cell-6-1",
    rowSevenCellThree: "cell-6-2",
    rowSevenCellFour: "cell-6-3",
    rowSevenCellFive: "cell-6-4",
    rowSevenCellSix: "cell-6-5",
    rowSevenCellSeven: "cell-6-6",
    rowSevenCellEight: "cell-6-7",

    //row eight
    rowEightCellOne: "cell-7-0",
    rowEightCellTwo: "cell-7-1",
    rowEightCellThree: "cell-7-2",
    rowEightCellFour: "cell-7-3",
    rowEightCellFive: "cell-7-4",
    rowEightCellSix: "cell-7-5",
    rowEightCellSeven: "cell-7-6",
    rowEightCellEight: "cell-7-7",
  };

  const computerGrid = () => {
    console.log(gridElements.cellId);
    const gridContainer = document.getElementById(gridElements.gridContainerId);

    for (let i = 0; i < 8; i++) {
      const rows = document.createElement(gridElements.div);
      rows.id = gridElements.rowId;
      rows.classList.add(gridElements.gridElementsClass);
      gridContainer.appendChild(rows);

      for (let j = 0; j < 8; j++) {
        const cells = document.createElement(gridElements.div);
        cells.id = `cell-${i}-${j}`;
        cells.classList.add("cells");
        rows.appendChild(cells);
        console.log(cells.id);
      }
    }
    return { computerGrid };
  };

  const gridCellFunctionality = () => {

        const gridCellTextContent = {
            
        }


    return { gridCellFunctionality };
  };

  return { computerGrid, gridCellFunctionality };
};

export default vsComputer;
