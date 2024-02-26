import { CellIndex } from "@/sheet/types/cell";
import { getCellArea } from "@sheet/libs/getCellArea";
import { useCallback, useContext } from "react";
import { firstSelectedCellContext } from "@/sheet/components/providers/FirstSelectedCellProvider";
import { mouseDownContext } from "@/sheet/components/providers/MouseDownProvider";
import { selectedCellAtom } from "@/sheet/jotai/selectedCell";
import { useSetAtom } from "jotai";

/**
 * ドラッグ状態でセルに入った時の選択の更新
 */
export const useMouseEnter = () => {
  const firstSelectedCell = useContext(firstSelectedCellContext);
  const setSelectedCell = useSetAtom(selectedCellAtom);
  const isMouseDown = useContext(mouseDownContext);

  const onMouseEnter = useCallback(
    (ownCell: CellIndex) => {
      if (!isMouseDown.current) return; // drag中でなければ何もしない

      const cellArea = getCellArea({
        start: firstSelectedCell.current,
        end: ownCell,
      });
      setSelectedCell(cellArea);
    },
    [firstSelectedCell, isMouseDown, setSelectedCell]
  );

  return onMouseEnter;
};
