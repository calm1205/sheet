import { ClipboardEvent, useRef } from "react";
import { csv2tsv } from "@/sheet/libs/csv2tsv";
import { useSetAtom } from "jotai";
import { SelectedCell, selectedCellAtom } from "@/sheet/jotai/selectedCell";
import { getValuesByIndexes } from "@/sheet/libs/getValuesByIndexes";
import { UseFormGetValues } from "react-hook-form";
import { getIndexStructure } from "@/sheet/libs/getIndexStructure";

/**
 * 複数セルのコピー
 */
export const useCopyCells = (getValues: UseFormGetValues<object>) => {
  const setSelectedCell = useSetAtom(selectedCellAtom);
  const selectedCellRef = useRef<SelectedCell>();

  const copyCells = async (event: ClipboardEvent<Element>) => {
    event.preventDefault();

    /**
     * HACK: refを介入させることでuseAtomの再レンダリングを防ぐ。
     * useAtomValueでCellを取得するとCellの値が変更されるたびにSheet全体が再レンダリングされてしまう。
     */
    setSelectedCell((prev) => (selectedCellRef.current = prev));
    const selectedCell = selectedCellRef.current!;
    const selectedCellCsv = getIndexStructure(selectedCell);

    const values = getValuesByIndexes(selectedCellCsv, getValues);
    const tsv = csv2tsv(values);

    await navigator.clipboard.writeText(tsv);
  };

  return copyCells;
};
