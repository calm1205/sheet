import { CellIndex } from "@/types/cell";

/**
 * 選択範囲に含まれるセルを返却
 * useGetCellArea.tsで使用
 * */
export const getCellArea = (cell: {
  /** 最初に選択されたセル */
  start: CellIndex;
  /** 最後に選択されたセル */
  end: CellIndex;
}): CellIndex[] => {
  const { start, end } = cell;
  if (!start || !end) return [];

  const [startCol, startRow] = start.split("-").map(Number);
  const [endCol, endRow] = end.split("-").map(Number);

  const { min, max } = Math;
  const leftCol = min(startCol, endCol);
  const rightCol = max(startCol, endCol);
  const topRow = min(startRow, endRow);
  const bottomRow = max(startRow, endRow);

  const cellArea: CellIndex[] = [];
  for (let col = leftCol; col <= rightCol; col++) {
    for (let row = topRow; row <= bottomRow; row++) {
      cellArea.push(`${col}-${row}`);
    }
  }

  return cellArea;
};
