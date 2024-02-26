import { CellIndex } from "@/types/cell";
import { getCellArea } from "../libs/getCellArea";
import { useCallback, useContext } from "react";
import { firstSelectedCellContext } from "@/components/providers/FirstSelectedCellProvider";
import { mouseDownContext } from "@/components/providers/MouseDownProvider";
import { useSelectCells } from "./useSelectCells";

/**
 * ドラッグ状態でセルに入った時の選択の更新
 */
export const useMouseEnter = () => {
  const firstSelectedCell = useContext(firstSelectedCellContext);
  const selectCells = useSelectCells();
  const isMouseDown = useContext(mouseDownContext);

  const onMouseEnter = useCallback(
    (ownCell: CellIndex) => {
      if (!isMouseDown.current) return; // drag中でなければ何もしない

      const cellArea = getCellArea({
        start: firstSelectedCell.current,
        end: ownCell,
      });
      selectCells(cellArea);
    },
    [firstSelectedCell, isMouseDown, selectCells]
  );

  return onMouseEnter;
};
