import { CSSProperties, ReactNode } from "react";

export const Cell: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div style={cellStyle}>{children}</div>;
};

const cellStyle: CSSProperties = {
  borderRight: "1px solid #ccc",
  borderBottom: "1px solid #ccc",
  flex: 1,
  display: "flex",
};
