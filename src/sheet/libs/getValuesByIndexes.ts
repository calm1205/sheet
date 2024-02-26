import { CellIndex } from "@/sheet/types/cell";
import { UseFormGetValues } from "react-hook-form";

export const getValuesByIndexes = (
  indexCsv: CellIndex[][],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getValues: UseFormGetValues<any>
) => {
  const values = indexCsv.map((indexes) =>
    indexes.map((index) => {
      const dom = document.querySelector(`[data-index="${index}"]`);
      const name = dom?.getAttribute("name") ?? "";
      const value: string = getValues(name) ?? "";

      return value;
    })
  );

  return values;
};
