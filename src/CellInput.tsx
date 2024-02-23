import { CSSProperties } from "react";
import { Cell } from "./Cell";

export const CellInput: React.FC<{ content: string }> = ({ content }) => (
  <Cell>
    <input style={inputStyle} value={content} />
  </Cell>
);

const inputStyle: CSSProperties = {
  flex: 1,
  padding: "10px",
  width: "100%",
  border: "none",
};
