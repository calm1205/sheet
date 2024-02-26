import { ReactNode, useContext } from "react";
import { mouseDownContext } from "./providers/MouseDownProvider";

export const MouseDownHandler: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const mouseDownRef = useContext(mouseDownContext);
  return (
    <div
      onMouseDown={() => (mouseDownRef.current = true)}
      onMouseUp={() => (mouseDownRef.current = false)}
    >
      {children}
    </div>
  );
};
