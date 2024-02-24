import request, { gql } from "graphql-request";
import { END_POINT } from "../constants";

export const allFilmsDocument = gql`
  query {
    allFilms {
      films {
        id
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

export const getAllFilms = async () =>
  (await request<AllFilms>(END_POINT, allFilmsDocument)).allFilms;

export type AllFilms = {
  allFilms: {
    films: {
      id: string;
      title: string;
      director: string;
      releaseDate: string;
      speciesConnection: {
        species: {
          name: string;
          classification: string;
          homeworld: {
            name: string;
          };
        }[];
      };
    }[];
  };
};
