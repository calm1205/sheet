import { CSSProperties, ReactNode, useContext } from "react";
import { mouseDownContext } from "./providers/MouseDownProvider";
import { useCopyCells } from "@/hooks/useCopyCell";
import { UseFormGetValues } from "react-hook-form";

export const SheetWrapper: React.FC<{
  children: ReactNode;
  getValues: UseFormGetValues<object>;
}> = ({ children, getValues }) => {
  const mouseDownRef = useContext(mouseDownContext);
  const copyCells = useCopyCells(getValues);

  return (
    <div
      onMouseDown={() => (mouseDownRef.current = true)}
      onMouseUp={() => (mouseDownRef.current = false)}
      style={sheetStyle}
      onCopy={copyCells}
    >
      {children}
    </div>
  );
};

const sheetStyle: CSSProperties = {
  width: "800px",
  borderTop: "1px solid #ccc",
  borderLeft: "1px solid #ccc",
};
