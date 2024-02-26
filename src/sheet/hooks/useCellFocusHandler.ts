import { useMemo, useRef } from "react";
import { CellIndex } from "../types/cell";
import { selectAtom } from "jotai/utils";
import { selectedCellAtom } from "../jotai/selectedCell";
import { useAtomValue } from "jotai";

/**
 * cellのフォーカス状態を返却
 */
export const useCellFocusHandler = (cellIndex: CellIndex) => {
  const pickSelectedCell = useMemo(
    () => selectAtom(selectedCellAtom, (v) => v.includes(cellIndex)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const isFocus = useAtomValue(pickSelectedCell);
  const focus = useRef(false);
  if (isFocus) focus.current = true;
  const isOnBlur = !isFocus && focus.current;

  if (isOnBlur) {
    focus.current = false;
  }

  return { isFocus };
};
