import { test, expect } from "@playwright/test";
import { displayStatus } from "../vsComputer/player/pawn/objects/displayStatus.js";

test("complete single space for P1", async ({ page }) => {
  await page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP1 = "#cell-0-6";

  await page.click(startCellForP1);

  const targetCellForP1 = "#cell-0-5";

  await page.click(targetCellForP1);

  const startCellP1Content = await page.textContent(startCellForP1);
  const targetCellP1Content = await page.textContent(targetCellForP1);

  const emptyCellAfterP1SingleSpace = displayStatus.emptyCell;
  const filledCellAfterP1SingleSpace = displayStatus.filledCell;

  expect(startCellP1Content).toBe(emptyCellAfterP1SingleSpace);
  expect(targetCellP1Content).toBe(filledCellAfterP1SingleSpace);
});

test("complete single space for P2", async ({ page }) => {
  await page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP2 = "#cell-1-6";

  await page.click(startCellForP2);

  const targetCellForP2 = "#cell-1-5";

  await page.click(targetCellForP2);

  const startCellP2Content = await page.textContent(startCellForP2);
  const targetCellP2Content = await page.textContent(targetCellForP2);

  const emptyCellAfterP2SingleSpace = displayStatus.emptyCell;
  const filledCellAfterP2SingleSpace = displayStatus.filledCell;

  expect(startCellP2Content).toBe(emptyCellAfterP2SingleSpace);
  expect(targetCellP2Content).toBe(filledCellAfterP2SingleSpace);
});

test("complete single space for P3", async ({ page }) => {
  await page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP3 = "#cell-2-6";

  await page.click(startCellForP3);

  const targetCellForP3 = "#cell-2-5";

  await page.click(targetCellForP3);

  const targetP3CellContent = await page.textContent(targetCellForP3);
  const startP3CellContent = await page.textContent(startCellForP3);

  const emptyCellAfterP3SingleSpace = displayStatus.emptyCell;
  const filledCellAfterP3SingleSpace = displayStatus.filledCell;

  expect(startP3CellContent).toBe(emptyCellAfterP3SingleSpace);
  expect(targetP3CellContent).toBe(filledCellAfterP3SingleSpace);
});

test("complete single space for P4", async ({ page }) => {
  await page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP4 = "#cell-3-6";

  await page.click(startCellForP4);

  const targetCellForP4 = "#cell-3-5";

  await page.click(targetCellForP4);

  const startP4CellContent = await page.textContent(startCellForP4);
  const targetP4CellContent = await page.textContent(targetCellForP4);

  const emptyCellAfterP4SingleSpace = displayStatus.emptyCell;
  const filledCellAfterP4SingleSpace = displayStatus.filledCell;

  expect(startP4CellContent).toBe(emptyCellAfterP4SingleSpace);
  expect(targetP4CellContent).toBe(filledCellAfterP4SingleSpace);
});

test("complete single space for P5", async ({ page }) => {
  page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP5 = "#cell-4-6";

  await page.click(startCellForP5);

  const targetCellForP5 = "#cell-4-5";

  await page.click(targetCellForP5);

  const startP5CellContent = await page.textContent(startCellForP5);
  const targetP5CellContent = await page.textContent(targetCellForP5);

  const emptyCellAfterP5SingleSpace = displayStatus.emptyCell;
  const filledCellAfterP5SingleSpace = displayStatus.filledCell;

  expect(startP5CellContent).toBe(emptyCellAfterP5SingleSpace);
  expect(targetP5CellContent).toBe(filledCellAfterP5SingleSpace);
});

test("complete single space for P6", async ({ page }) => {
  page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP6 = "#cell-5-6";

  await page.click(startCellForP6);

  const targetCellForP6 = "#cell-5-5";

  await page.click(targetCellForP6);

  const startP6CellContent = await page.textContent(startCellForP6);
  const targetP6CellContent = await page.textContent(targetCellForP6);

  const emptyCellAfterP6SingleSpace = displayStatus.emptyCell;
  const filledCellAfterP6SingleSpace = displayStatus.filledCell;

  expect(startP6CellContent).toBe(emptyCellAfterP6SingleSpace);
  expect(targetP6CellContent).toBe(filledCellAfterP6SingleSpace);
});

test("complete single space for P7", async ({ page }) => {
  page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP7 = "#cell-6-6";

  await page.click(startCellForP7);

  const targetCellForP7 = "#cell-6-5";

  await page.click(targetCellForP7);

  const startP7CellContent = await page.textContent(startCellForP7);
  const targetP7CellContent = await page.textContent(targetCellForP7);

  const emptyCellAfterP7SingleSpace = displayStatus.emptyCell;
  const filledCellAfterP7SingleSpace = displayStatus.filledCell;

  expect(startP7CellContent).toBe(emptyCellAfterP7SingleSpace);
  expect(targetP7CellContent).toBe(filledCellAfterP7SingleSpace);
});

test("complete single space for P8", async ({ page }) => {
  page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP8 = "#cell-7-6";

  await page.click(startCellForP8);

  const targetCellForP8 = "#cell-7-5";

  await page.click(targetCellForP8);

  const startP8CellContent = await page.textContent(startCellForP8);
  const targetP8CellContent = await page.textContent(targetCellForP8);

  const emptyCellAfterP8SingleSpace = displayStatus.emptyCell;
  const filledCellAfterP8SingleSpace = displayStatus.filledCell;

  expect(startP8CellContent).toBe(emptyCellAfterP8SingleSpace);
  expect(targetP8CellContent).toBe(filledCellAfterP8SingleSpace);
});

test("complete double space for P1", async ({ page }) => {
  page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP1 = "#cell-0-6";

  await page.click(startCellForP1);

  const targetCellForP1 = "#cell-0-4";

  await page.click(targetCellForP1);

  const startP1CellContent = await page.textContent(startCellForP1);
  const targetP1CellContent = await page.textContent(targetCellForP1);

  const emptyCellAfterP1SingleSpace = displayStatus.emptyCell;
  const filledCellAfterP1SingleSpace = displayStatus.filledCell;

  expect(startP1CellContent).toBe(emptyCellAfterP1SingleSpace);
  expect(targetP1CellContent).toBe(filledCellAfterP1SingleSpace);
});

test("complete double space for P2", async ({ page }) => {
  page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP2 = "#cell-1-6";

  await page.click(startCellForP2);

  const targetCellForP2 = "#cell-1-4";

  await page.click(targetCellForP2);

  const startP2CellContent = await page.textContent(startCellForP2);
  const targetP2CellContent = await page.textContent(targetCellForP2);

  const emptyCellAfterP2SingleSpace = displayStatus.emptyCell;
  const filledCellAfterP2SingleSpace = displayStatus.filledCell;

  expect(startP2CellContent).toBe(emptyCellAfterP2SingleSpace);
  expect(targetP2CellContent).toBe(filledCellAfterP2SingleSpace);
});

test("complete double space for P3", async ({ page }) => {
  page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP3 = "#cell-2-6";

  await page.click(startCellForP3);

  const targetCellForP3 = "#cell-2-4";

  await page.click(targetCellForP3);

  const startP3CellContent = await page.textContent(startCellForP3);
  const targetP3CellContent = await page.textContent(targetCellForP3);

  const emptyCellAfterP3SingleSpace = displayStatus.emptyCell;
  const filledCellAfterP3SingleSpace = displayStatus.filledCell;

  expect(startP3CellContent).toBe(emptyCellAfterP3SingleSpace);
  expect(targetP3CellContent).toBe(filledCellAfterP3SingleSpace);
});

test("complete double space for P4", async ({ page }) => {
  page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP4 = "#cell-3-6";

  await page.click(startCellForP4);

  const targetCellForP4 = "#cell-3-4";

  await page.click(targetCellForP4);

  const startP4CellContent = await page.textContent(startCellForP4);
  const targetP4CellContent = await page.textContent(targetCellForP4);

  const emptyCellAfterP4SingleSpace = displayStatus.emptyCell;
  const filledCellAfterP4SingleSpace = displayStatus.filledCell;

  expect(startP4CellContent).toBe(emptyCellAfterP4SingleSpace);
  expect(targetP4CellContent).toBe(filledCellAfterP4SingleSpace);
});

test("complete double space for P5", async ({ page }) => {
  page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP5 = "#cell-4-6";

  await page.click(startCellForP5);

  const targetCellForP5 = "#cell-4-4";

  await page.click(targetCellForP5);

  const startP5CellContent = await page.textContent(startCellForP5);
  const targetP5CellContent = await page.textContent(targetCellForP5);

  const emptyCellAfterP5DoubleSpace = displayStatus.emptyCell;
  const filledCellAfterP5DoubleSpace = displayStatus.filledCell;

  expect(startP5CellContent).toBe(emptyCellAfterP5DoubleSpace);
  expect(targetP5CellContent).toBe(filledCellAfterP5DoubleSpace);
});

test("complete double space for P6", async ({ page }) => {
  page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP6 = "#cell-5-6";

  await page.click(startCellForP6);

  const targetCellForP6 = "#cell-5-4";

  await page.click(targetCellForP6);

  const startP6CellContent = await page.textContent(startCellForP6);
  const targetP6CellContent = await page.textContent(targetCellForP6);

  const emptyCellAfterP6DoubleSpace = displayStatus.emptyCell;
  const filledCellAfterP6DoubleSpace = displayStatus.filledCell;

  expect(startP6CellContent).toBe(emptyCellAfterP6DoubleSpace);
  expect(targetP6CellContent).toBe(filledCellAfterP6DoubleSpace);
});

test("complete double space for P7", async ({ page }) => {
  page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP7 = "#cell-6-6";

  await page.click(startCellForP7);

  const targetCellForP7 = "#cell-6-4";

  await page.click(targetCellForP7);

  const startP7CellContent = await page.textContent(startCellForP7);
  const targetP7CellContent = await page.textContent(targetCellForP7);

  const emptyCellAfterP7DoubleSpace = displayStatus.emptyCell;
  const filledCellAfterP7DoubleSpace = displayStatus.filledCell;

  expect(startP7CellContent).toBe(emptyCellAfterP7DoubleSpace);
  expect(targetP7CellContent).toBe(filledCellAfterP7DoubleSpace);
});

test("complete double space for P8", async ({ page }) => {
  page.goto("http://127.0.0.1:5501/src/vsComputer/vsComputer.html");

  const startCellForP8 = "#cell-7-6";

  await page.click(startCellForP8);

  const targetCellForP8 = "#cell-7-4";

  await page.click(targetCellForP8);

  const startP8CellContent = await page.textContent(startCellForP8);
  const targetP8CellContent = await page.textContent(targetCellForP8);
0
  const emptyCellAfterP8DoubleSpace = displayStatus.emptyCell;
  const filledCellAfterP8DoubleSpace = displayStatus.filledCell;

  expect(startP8CellContent).toBe(emptyCellAfterP8DoubleSpace);
  expect(targetP8CellContent).toBe(filledCellAfterP8DoubleSpace);
});
