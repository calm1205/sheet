import React, { ReactNode } from "react";
import { MouseDownProvider } from "@/components/providers/MouseDownProvider";
import { FirstSelectedCellProvider } from "@/components/providers/FirstSelectedCellProvider";

export const SheetProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <FirstSelectedCellProvider>
      <MouseDownProvider>{children}</MouseDownProvider>
    </FirstSelectedCellProvider>
  );
};
