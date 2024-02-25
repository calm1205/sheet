import React, { ReactNode } from "react";
import { MouseDownProvider } from "@/components/providers/MouseDownProvider";
import { FirstSelectedCellProvider } from "@/components/providers/FirstSelectedCellProvider";
import { MouseDownHandler } from "../MouseDownHandler";

export const SheetProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <FirstSelectedCellProvider>
      <MouseDownProvider>
        <MouseDownHandler>{children}</MouseDownHandler>
      </MouseDownProvider>
    </FirstSelectedCellProvider>
  );
};
