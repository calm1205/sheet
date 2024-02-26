import {
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useRef,
} from "react";
import { CellIndex } from "@/types/cell";

// eslint-disable-next-line react-refresh/only-export-components
export const firstSelectedCellContext = createContext<
  MutableRefObject<CellIndex>
>({ current: `0-0` });

/**
 * 最初に選択されたセルのIndex管理
 * コンポーネント全体が再レンダリングされ無いためにrefを使用
 */
export const FirstSelectedCellProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const ref = useRef<CellIndex>(`0-0`);

  return (
    <firstSelectedCellContext.Provider value={ref}>
      {children}
    </firstSelectedCellContext.Provider>
  );
};
