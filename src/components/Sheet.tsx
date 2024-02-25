import React, { ReactNode } from "react";

export const Sheet: React.FC<{ children: ReactNode }> = ({ children }) => {
  const onMouseDown = useMouseDown();
  return <Sheet>{children}</Sheet>;
};
