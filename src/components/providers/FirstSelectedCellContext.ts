import { CellIndex } from "@/types/cell";
import { MutableRefObject, createContext } from "react";

export const firstSelectedCellContext = createContext<
  MutableRefObject<CellIndex>
>({ current: `0-0` });

export type Callback = (ref: MutableRefObject<CellIndex>) => void;
export const setFirstSelectedCellContext = createContext<
  (args: CellIndex | Callback) => void
>((_) => _);
