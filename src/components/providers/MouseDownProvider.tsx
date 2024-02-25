import { PropsWithChildren, useRef } from "react";
import {
  Callback,
  mouseDownContext,
  setMouseDownContext,
} from "./MouseDownContext";

/**
 * マウスがクリックされているか監視
 * ドラッグイベントの判定に使用
 *
 * コンポーネント全体が再レンダリングされ無いためにrefを使用
 */
export const MouseDownProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const ref = useRef<boolean>(false);
  const setRef = (args: boolean | Callback) => {
    console.log("setRef");
    if (typeof args === "function") args(ref);
    if (typeof args !== "function") ref.current = args;
  };

  return (
    <mouseDownContext.Provider value={ref}>
      <setMouseDownContext.Provider value={setRef}>
        {children}
      </setMouseDownContext.Provider>
    </mouseDownContext.Provider>
  );
};
