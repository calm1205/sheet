import React, { CSSProperties } from "react";
import { SheetHeader } from "./SheetHeader";
import { getAllFilms } from "../graphql/allFilms";
import { useFieldArray, useForm } from "react-hook-form";
import { CellInput } from "@/sheet/components/cells/CellInput";
import { Sheet } from "@/sheet/components/Sheet";

const SPECIES_COUNT = 3;

export const SampleSheet: React.FC = () => {
  const methods = useForm({ defaultValues: getAllFilms });
  const { control, register, handleSubmit, getValues, setValue } = methods;
  const { fields } = useFieldArray({ control, name: "films" });

  const onSubmit = (data: unknown) => console.log("submit data: ", data);

  return (
    <Sheet getValues={getValues} setValue={setValue}>
      <SheetHeader />

      <form onBlur={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={field.id} style={rowCells}>
            <CellInput
              cellIndex={`0-${index * SPECIES_COUNT}`}
              register={register(`films.${index}.title`)}
            />
            <CellInput
              cellIndex={`1-${index * SPECIES_COUNT}`}
              register={register(`films.${index}.director`)}
            />
            <CellInput
              cellIndex={`2-${index * SPECIES_COUNT}`}
              register={register(`films.${index}.releaseDate`)}
            />

            <div style={verticalCells}>
              {field.speciesConnection?.species
                .slice(0, SPECIES_COUNT)
                .map((_, index2) => (
                  <CellInput
                    cellIndex={`3-${index * SPECIES_COUNT + index2}`}
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
    </Sheet>
  );
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
