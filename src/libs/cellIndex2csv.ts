import { CellIndex } from "@/types/cell";

export const cellIndex2csv = (cellIndexes: CellIndex[]) =>
  cellIndexes.reduce((target, cellIndex) => {
    const [, row] = cellIndex.split("-").map(Number);
    if (!target[row]) target[row] = [];
    target[row] = [...target[row], cellIndex];
    return target;
  }, [] as CellIndex[][]);
