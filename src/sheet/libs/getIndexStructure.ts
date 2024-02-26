import { CellIndex } from "@/sheet/types/cell";

/**
 * cellIndexを行ごとにまとめた配列を返却
 *
 * e.g 0-0, 0-1, 0-2, 1-0, 1-1, 1-2 => [[0-0, 0-1, 0-2], [1-0, 1-1, 1-2]]
 */
export const getIndexStructure = (cellIndexes: CellIndex[]) => {
  const cellIndexStructure = cellIndexes.reduce((target, cellIndex) => {
    const [, row] = cellIndex.split("-").map(Number);

    if (!target[row]) target[row] = [];
    target[row] = [...target[row], cellIndex];

    return target;
  }, [] as CellIndex[][]);

  return cellIndexStructure.filter((v) => v);
};
