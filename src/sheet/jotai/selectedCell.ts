import { atom } from "jotai";
import { CellIndex } from "@/sheet/types/cell";

export type SelectedCell = CellIndex[];

/** 選択中のセル */
export const selectedCellAtom = atom<CellIndex[]>([]);
