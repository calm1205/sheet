import {
  createContext,
  PropsWithChildren,
  useRef,
  MutableRefObject,
} from "react";

export const mouseDownContext = createContext<MutableRefObject<boolean>>({
  current: false,
});

type Callback = (ref: MutableRefObject<boolean>) => void;
export const setMouseDownContext = createContext<
  (args: boolean | Callback) => void
>((_) => _);

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
