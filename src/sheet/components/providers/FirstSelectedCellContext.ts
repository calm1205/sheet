import { CellIndex } from "@/sheet/types/cell";
import { MutableRefObject, createContext } from "react";

export type Callback = (ref: MutableRefObject<CellIndex>) => void;
export const setFirstSelectedCellContext = createContext<
  (args: CellIndex | Callback) => void
>((_) => _);
