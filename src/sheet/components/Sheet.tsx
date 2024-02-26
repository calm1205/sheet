import React, { ReactNode } from "react";
import { SheetProvider } from "./providers/SheetProvider";
import { SheetWrapper } from "./SheetWrapper";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";

export const Sheet: React.FC<{
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getValues: UseFormGetValues<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
}> = ({ children, getValues, setValue }) => {
  return (
    <SheetProvider>
      <SheetWrapper getValues={getValues} setValue={setValue}>
        {children}
      </SheetWrapper>
    </SheetProvider>
  );
};
