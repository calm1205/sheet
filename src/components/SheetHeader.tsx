import { CSSProperties } from "react";
import { CellHeader } from "./CellHeader";

export const SheetHeader: React.FC = () => (
  <section style={sectionStyle}>
    <div style={headerCells}>
      <CellHeader content="title" />
      <CellHeader content="director" />
      <CellHeader content="releaseDate" />
      <CellHeader content="speciesConnection" />
    </div>
  </section>
);

const sectionStyle: CSSProperties = {
  display: "flex",
};

const headerCells: CSSProperties = {
  display: "flex",
  width: "100%",
};
