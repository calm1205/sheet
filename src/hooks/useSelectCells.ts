import { CellIndex } from "@/types/cell";
import { SelectedCell, selectedCellAtom } from "@/jotai/selectedCell";
import { useSetAtom } from "jotai";

export const useSelectCells = () => {
  const setSelectedCell = useSetAtom(selectedCellAtom);

  const selectCells = (cellArea: CellIndex[]) => {
    const selectedCell = cellArea.reduce((target, cellIndex) => {
      target[cellIndex] = true;
      return target;
    }, {} as SelectedCell);

    setSelectedCell(selectedCell);
  };

  return selectCells;
};
