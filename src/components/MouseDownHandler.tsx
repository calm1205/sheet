import { ReactNode, useContext } from "react";
import { setMouseDownContext } from "./providers/MouseDownContext";

export const MouseDownHandler: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const setMouseDown = useContext(setMouseDownContext);
  return (
    <div
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
    >
      {children}
    </div>
  );
};
