import { atom } from "jotai";
import { CellIndex } from "../types/cell";

type IsSelected = boolean;

export type SelectedCell = {
  [key: CellIndex]: IsSelected;
};
export const selectedCellAtom = atom<SelectedCell>({});
