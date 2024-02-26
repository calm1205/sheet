import { ClipboardEvent, useContext } from "react";
import { reIndexingCell } from "@/libs/reIndexingCell";
import { useSetAtom } from "jotai";
import { firstSelectedCellContext } from "@/components/providers/FirstSelectedCellProvider";

/**
 * 複数セルのペースト
 **/
export const usePasteCells = () => {
  const firstSelectedCell = useContext(firstSelectedCellContext);
  const setCells = useSetAtom(cellAtom);

  const pasteCells = async (event: ClipboardEvent<Element>) => {
    event.preventDefault();

    const clipboard = await navigator.clipboard.readText();
    const sourceCells = reIndexingCell(clipboard, firstSelectedCell.current);

    setCells((p) => ({ ...p, ...sourceCells }));
  };

  return pasteCells;
};
