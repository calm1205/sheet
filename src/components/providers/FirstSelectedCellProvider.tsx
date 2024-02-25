import { PropsWithChildren, useRef } from "react";
import { CellIndex } from "@/types/cell";
import {
  Callback,
  firstSelectedCellContext,
  setFirstSelectedCellContext,
} from "./FirstSelectedCellContext";

/**
 * 最初に選択されたセルのIndex管理
 * コンポーネント全体が再レンダリングされ無いためにrefを使用
 */
export const FirstSelectedCellProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const ref = useRef<CellIndex>(`0-0`);
  const setRef = (args: CellIndex | Callback) => {
    if (typeof args === "function") args(ref);
    if (typeof args !== "function") ref.current = args;
  };

  return (
    <firstSelectedCellContext.Provider value={ref}>
      <setFirstSelectedCellContext.Provider value={setRef}>
        {children}
      </setFirstSelectedCellContext.Provider>
    </firstSelectedCellContext.Provider>
  );
};
