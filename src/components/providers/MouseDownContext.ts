import { MutableRefObject, createContext } from "react";

export const mouseDownContext = createContext<MutableRefObject<boolean>>({
  current: false,
});

export type Callback = (ref: MutableRefObject<boolean>) => void;
export const setMouseDownContext = createContext<
  (args: boolean | Callback) => void
>((_) => _);
