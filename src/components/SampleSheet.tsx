import React, { CSSProperties } from "react";
import { SheetHeader } from "./SheetHeader";
import { getAllFilms } from "../graphql/allFilms";
import { useFieldArray, useForm } from "react-hook-form";
import { CellInput } from "./CellInput";

export const SampleSheet: React.FC = () => {
  const { control, register, handleSubmit } = useForm({
    defaultValues: getAllFilms,
  });
  const { fields } = useFieldArray({ control, name: "films" });

  const onSubmit = (data: unknown) => console.log("submit data: ", data);

  return (
    <div style={sheetStyle}>
      <SheetHeader />

      <form onBlur={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={field.id} style={rowCells}>
            <CellInput
              grid={`0-${index}`}
              register={register(`films.${index}.title`)}
            />
            <CellInput
              grid={`1-${index}`}
              register={register(`films.${index}.director`)}
            />
            <CellInput
              grid={`2-${index}`}
              register={register(`films.${index}.releaseDate`)}
            />

            <div style={verticalCells}>
              {field.speciesConnection?.species.map((_, index2) => (
                <CellInput
                  grid={`3-${index}`}
                  key={`${field.id}_${index2}`}
                  register={register(
                    `films.${index}.speciesConnection.species.${index2}.name`
                  )}
                />
              ))}
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

const sheetStyle: CSSProperties = {
  width: "800px",
  borderTop: "1px solid #ccc",
  borderLeft: "1px solid #ccc",
};
const rowCells: CSSProperties = {
  display: "flex",
  width: "100%",
};
const verticalCells: CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
};
