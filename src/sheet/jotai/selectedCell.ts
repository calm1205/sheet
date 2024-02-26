import { atom } from "jotai";
import { CellIndex } from "@/sheet/types/cell";

export type SelectedCell = CellIndex[];
export const selectedCellAtom = atom<CellIndex[]>([]);
