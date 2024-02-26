import {
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useRef,
} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const mouseDownContext = createContext<MutableRefObject<boolean>>({
  current: false,
});

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

  return (
    <mouseDownContext.Provider value={ref}>
      {children}
    </mouseDownContext.Provider>
  );
};
