import { CSSProperties, ReactNode, useContext } from "react";
import { mouseDownContext } from "./providers/MouseDownProvider";
import { useCopyCells } from "@/sheet/hooks/useCopyCell";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { usePasteCells } from "@/sheet/hooks/usePaste";

export const SheetWrapper: React.FC<{
  children: ReactNode;
  getValues: UseFormGetValues<object>;
  setValue: UseFormSetValue<object>;
}> = ({ children, getValues, setValue }) => {
  const mouseDownRef = useContext(mouseDownContext);
  const copyCells = useCopyCells(getValues);
  const pasteCells = usePasteCells(setValue);

  return (
    <div
      onMouseDown={() => (mouseDownRef.current = true)}
      onMouseUp={() => (mouseDownRef.current = false)}
      style={sheetStyle}
      onCopy={copyCells}
      onPaste={pasteCells}
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
