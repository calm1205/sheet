import { CSSProperties } from "react";
import { ColumnUI } from "./Column.ui";
import { RowUI } from "./Row.ui";

export const SheetUI: React.FC = () => {
  return (
    <div style={sheetStyle}>
      <ColumnUI />
      {[...Array(10)].map((_, i) => (
        <RowUI key={i} />
      ))}
    </div>
  );
};

const sheetStyle: CSSProperties = {
  width: "800px",
  borderTop: "1px solid #ccc",
  borderLeft: "1px solid #ccc",
};
