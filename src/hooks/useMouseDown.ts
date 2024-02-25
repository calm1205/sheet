import { MouseEvent, useContext } from "react";
import { CellIndex } from "@/types/cell";
import { getCellArea } from "@/libs/getCellArea";
import {
  firstSelectedCellContext,
  setFirstSelectedCellContext,
} from "@/components/FirstSelectedCellProvider";
import { useSelectCells } from "./useSelectCells";

/** セルの選択処理 */
export const useMouseDown = () => {
  const firstSelectedCell = useContext(firstSelectedCellContext);
  const setFirstSelectedCell = useContext(setFirstSelectedCellContext);

  const selectCells = useSelectCells();

  const onMouseDown = (event: MouseEvent, ownCell: CellIndex) => {
    // shiftキーを押しながらクリックした場合
    if (event.shiftKey) {
      const cellArea = getCellArea({
        start: firstSelectedCell.current,
        end: ownCell,
      });
      selectCells(cellArea);
      return;
    }
    selectCells([ownCell]);
    setFirstSelectedCell(ownCell);
  };

  return onMouseDown;
};
