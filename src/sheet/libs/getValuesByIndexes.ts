import { CellIndex } from "@/types/cell";
import { UseFormGetValues } from "react-hook-form";

export const getValuesByIndexes = (
  indexCsv: CellIndex[][],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getValues: UseFormGetValues<any>
) => {
  const values = indexCsv.map((indexes) =>
    indexes.map((index) => {
      const name =
        document
          .querySelector(`[data-index="${index}"]`)
          ?.getAttribute("name") ?? "";
      const value: string = getValues(name) ?? "";
      return value;
    })
  );

  return values;
};
