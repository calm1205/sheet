import React, { CSSProperties } from "react";
import { ColumnUI } from "./Column.ui";
import request from "graphql-request";
import { AllFilms, allFilmsDocument } from "../graphql/allFilms";
import { useFieldArray, useForm } from "react-hook-form";
import { Cell } from "./Cell";

const END_POINT = "https://swapi-graphql.netlify.app/.netlify/functions/index";

export const Sheet: React.FC = () => {
  const { control, register, handleSubmit } = useForm({
    defaultValues: async () =>
      (await request<AllFilms>(END_POINT, allFilmsDocument)).allFilms,
    mode: "onBlur",
  });
  const { fields } = useFieldArray({ control, name: "films" });
  console.log("fields", fields);

  const onSubmit = (data: unknown) => console.log("submit data: ", data);

  return (
    <div style={sheetStyle}>
      <ColumnUI />

      <form onBlur={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={field.id} style={rowCells}>
            <Cell>
              <input style={inputStyle} {...register(`films.${index}.title`)} />
            </Cell>

            <Cell>
              <input
                style={inputStyle}
                {...register(`films.${index}.director`)}
              />
            </Cell>

            <Cell>
              <input
                style={inputStyle}
                {...register(`films.${index}.releaseDate`)}
              />
            </Cell>

            <div style={verticalCells}>
              {field.speciesConnection?.species.map((_, index2) => (
                <Cell key={`${field.id}_${index2}`}>
                  <input
                    style={inputStyle}
                    {...register(
                      `films.${index}.speciesConnection.species.${index2}.name`
                    )}
                  />
                </Cell>
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

const inputStyle: CSSProperties = {
  flex: 1,
  padding: "10px",
  width: "100%",
  border: "none",
};

const verticalCells: CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
};
