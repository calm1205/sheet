import React, { ReactNode, useContext } from "react";
import { MouseDownProvider } from "@/components/providers/MouseDownProvider";
import { FirstSelectedCellProvider } from "@/components/providers/FirstSelectedCellProvider";
import { setMouseDownContext } from "@/components/providers/MouseDownContext";

export const Sheet: React.FC<{ children: ReactNode }> = ({ children }) => {
  const setMouseDown = useContext(setMouseDownContext);

  return (
    <FirstSelectedCellProvider>
      <MouseDownProvider>
        <div
          onMouseDown={() => {
            console.log("mouse down");
            setMouseDown(true);
          }}
          onMouseUp={() => {
            console.log("mouse up");
            setMouseDown(false);
          }}
        >
          {children}
        </div>
      </MouseDownProvider>
    </FirstSelectedCellProvider>
  );
};
