import React, { ReactNode } from "react";
import { SheetProvider } from "./providers/SheetProvider";

export const Sheet: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <SheetProvider>{children}</SheetProvider>;
};
