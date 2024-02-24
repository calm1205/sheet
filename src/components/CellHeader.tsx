import { CSSProperties } from "react";
import { Cell } from "./Cell";

export const CellHeader: React.FC<{ content: string }> = ({ content }) => (
  <Cell>
    <div style={cellHeaderStyle}>{content}</div>
  </Cell>
);

const cellHeaderStyle: CSSProperties = {
  backgroundColor: "#f0f0f0",
  flex: 1,
  padding: "10px",
};
