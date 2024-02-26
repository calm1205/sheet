import { CellIndex } from "@/sheet/types/cell";

export const getIndexStructure = (cellIndexes: CellIndex[]) => {
  console.log("cellIndexes: ", cellIndexes);
  const cellIndexStructure = cellIndexes.reduce((target, cellIndex) => {
    const [, row] = cellIndex.split("-").map(Number);

    if (!target[row]) target[row] = [];
    target[row] = [...target[row], cellIndex];

    return target;
  }, [] as CellIndex[][]);

  return cellIndexStructure.filter((v) => v);
};
