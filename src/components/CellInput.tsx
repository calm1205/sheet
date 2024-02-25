import { CSSProperties } from "react";
import { Cell } from "./Cell";
import { UseFormRegisterReturn } from "react-hook-form";
import { useMouseDown } from "@/hooks/useMouseDown";

export const CellInput: React.FC<{
  grid: `${number}-${number}`;
  register: UseFormRegisterReturn;
}> = ({ grid, register }) => {
  const onMouseDown = useMouseDown();

  return (
    <Cell>
      <input
        onMouseDown={(e) => onMouseDown(e, grid)}
        data-grid={grid}
        style={inputStyle}
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
};
