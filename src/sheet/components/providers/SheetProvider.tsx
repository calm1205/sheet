import React, { ReactNode } from "react";
import { MouseDownProvider } from "@/components/providers/MouseDownProvider";
import { FirstSelectedCellProvider } from "@/components/providers/FirstSelectedCellProvider";
import { Provider } from "jotai";

export const SheetProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <FirstSelectedCellProvider>
    <MouseDownProvider>
      <Provider>{children}</Provider>
    </MouseDownProvider>
  </FirstSelectedCellProvider>
);
