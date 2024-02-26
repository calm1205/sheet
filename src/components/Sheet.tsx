import React, { CSSProperties, ReactNode } from "react";
import { SheetProvider } from "./providers/SheetProvider";

export const Sheet: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SheetProvider>
      <div style={sheetStyle}>{children}</div>
    </SheetProvider>
  );
};

const sheetStyle: CSSProperties = {
  width: "800px",
  borderTop: "1px solid #ccc",
  borderLeft: "1px solid #ccc",
};
