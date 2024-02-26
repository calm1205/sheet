import { MouseEvent, useContext } from "react";
import { CellIndex } from "@/sheet/types/cell";
import { getCellArea } from "@/sheet/libs/getCellArea";
import { firstSelectedCellContext } from "@/sheet/components/providers/FirstSelectedCellProvider";
import { selectedCellAtom } from "@/sheet/jotai/selectedCell";
import { useSetAtom } from "jotai";

/** セルの選択処理 */
export const useMouseDown = () => {
  const firstSelectedCell = useContext(firstSelectedCellContext);
  const setSelectedCell = useSetAtom(selectedCellAtom);

  const onMouseDown = (event: MouseEvent, ownCell: CellIndex) => {
    // shiftキーを押しながらクリックした場合
    if (event.shiftKey) {
      const cellArea = getCellArea({
        start: firstSelectedCell.current,
        end: ownCell,
      });
      setSelectedCell(cellArea);
      return;
    }
    setSelectedCell([ownCell]);
    firstSelectedCell.current = ownCell;
  };

  return onMouseDown;
};
