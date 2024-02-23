import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";

const endpoint = "https://swapi-graphql.netlify.app/.netlify/functions/index";
const gqlDocument = gql`
  query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;

export const App = () => {
  const { data } = useQuery({
    queryFn: async () => {
      return await request(endpoint, gqlDocument);
    },
  });

  console.log(data);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <input type="submit" />
    </form>
  );
};
