import { ClipboardEvent, useContext } from "react";
import { reIndexing } from "@/sheet/libs/reIndexing";
import { firstSelectedCellContext } from "@/sheet/components/providers/FirstSelectedCellProvider";
import { UseFormSetValue } from "react-hook-form";

/**
 * 複数セルのペースト
 **/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePasteCells = (setValue: UseFormSetValue<any>) => {
  const firstSelectedCell = useContext(firstSelectedCellContext);

  const pasteCells = async (event: ClipboardEvent<Element>) => {
    event.preventDefault();

    const clipboard = await navigator.clipboard.readText();
    const sourceCells = reIndexing(clipboard, firstSelectedCell.current);

    Object.entries(sourceCells).forEach(([name, value]) => {
      setValue(name, value);
    });
  };

  return pasteCells;
};
