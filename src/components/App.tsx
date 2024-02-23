import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { SheetUI } from "./Sheet.ui";
import { allFilmsDocument } from "../graphql/allFilms";

const END_POINT = "https://swapi-graphql.netlify.app/.netlify/functions/index";

export const App = () => {
  const { data } = useQuery({
    queryKey: ["allFilms"],
    queryFn: async () => request(END_POINT, allFilmsDocument),
  });

  console.log(data);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        <input {...register("lastName")} />
        <input type="submit" />
      </form>

      <SheetUI />
    </>
  );
};
