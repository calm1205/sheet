import { atom } from "jotai";
import { CellIndex } from "@/types/cell";

export type SelectedCell = CellIndex[];
export const selectedCellAtom = atom<CellIndex[]>([]);
