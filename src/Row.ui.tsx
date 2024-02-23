import { CSSProperties } from "react";
import { CellInput } from "./CellInput";

export const RowUI: React.FC = () => (
  <div style={rowCells}>
    <CellInput content="" />
    <CellInput content="" />
    <CellInput content="" />
    <CellInput content="" />
  </div>
);

const rowCells: CSSProperties = {
  display: "flex",
  width: "100%",
};
