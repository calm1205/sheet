import { CellIndex } from "@/sheet/types/cell";

type ReIndexing = (
  /** clipboardのtext */
  clipboard: string,
  /** paste先Index */
  targetIndex: CellIndex
) => { [key: string]: string };

/**
 * tsvからcellのindexを再計算
 */
export const reIndexing: ReIndexing = (clipboard, targetIndex) => {
  const isSingleCell = !clipboard.includes("\t") && !clipboard.includes("\n");

  const targetDom = document.querySelector(`[data-index="${targetIndex}"]`);
  const targetName = targetDom?.getAttribute("name") ?? "";
  if (isSingleCell) return { [targetName]: clipboard };

  const [targetColumn, targetRow] = targetIndex.split("-").map(Number);

  const rows = clipboard.split("\n");
  const cells: { [key: string]: string } = {};

  rows.forEach((row, rowIndex) => {
    const columns = row.split("\t");

    columns.forEach((value, columnIndex) => {
      const cellIndex = `${columnIndex + targetColumn}-${rowIndex + targetRow}`;
      const dom = document.querySelector(`[data-index="${cellIndex}"]`);
      const name = dom?.getAttribute("name") ?? "";
      cells[name] = value;
    });
  });

  return cells;
};
