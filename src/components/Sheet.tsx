import React, { ReactNode } from "react";
import { MouseDownProvider } from "./providers/MouseDownProvider";
import { FirstSelectedCellProvider } from "./providers/FirstSelectedCellProvider";

export const Sheet: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <FirstSelectedCellProvider>
      <MouseDownProvider>
        <div>{children}</div>
      </MouseDownProvider>
    </FirstSelectedCellProvider>
  );
};
