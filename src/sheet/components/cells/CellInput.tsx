import { CSSProperties } from "react";
import { Cell } from "./Cell";
import { UseFormRegisterReturn } from "react-hook-form";
import { useMouseDown } from "@/hooks/useMouseDown";
import { useMouseEnter } from "@/hooks/useMouseEnter";
import { useCellFocusHandler } from "@/hooks/useCellFocusHandler";

export const CellInput: React.FC<{
  cellIndex: `${number}-${number}`;
  register: UseFormRegisterReturn;
}> = ({ cellIndex, register }) => {
  const onMouseDown = useMouseDown();
  const onMouseEnter = useMouseEnter();
  const { isFocus } = useCellFocusHandler(cellIndex);

  return (
    <Cell>
      <input
        onMouseEnter={() => onMouseEnter(cellIndex)}
        onMouseDown={(e) => onMouseDown(e, cellIndex)}
        data-index={cellIndex}
        style={{
          ...inputStyle,
          ...(isFocus
            ? { backgroundColor: "skyblue" }
            : { backgroundColor: "white" }),
        }}
        {...register}
      />
    </Cell>
  );
};

const inputStyle: CSSProperties = {
  flex: 1,
  padding: "10px",
  width: "100%",
  border: "none",
  outline: "none",
};
