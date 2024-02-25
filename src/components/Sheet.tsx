import React, { ReactNode, useContext } from "react";
import { setMouseDownContext } from "@/components/providers/MouseDownContext";
import { SheetProvider } from "./providers/SheetProvider";

export const Sheet: React.FC<{ children: ReactNode }> = ({ children }) => {
  const setMouseDown = useContext(setMouseDownContext);

  return (
    <SheetProvider>
      <div
        onMouseDown={() => {
          setMouseDown(true);
        }}
        onMouseUp={() => {
          setMouseDown(false);
        }}
      >
        {children}
      </div>
    </SheetProvider>
  );
};
