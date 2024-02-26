import React, { ReactNode } from "react";
import { SheetProvider } from "./providers/SheetProvider";
import { SheetWrapper } from "./SheetWrapper";
import { UseFormGetValues } from "react-hook-form";

export const Sheet: React.FC<{
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getValues: UseFormGetValues<any>;
}> = ({ children, getValues }) => {
  return (
    <SheetProvider>
      <SheetWrapper getValues={getValues}>{children}</SheetWrapper>
    </SheetProvider>
  );
};
