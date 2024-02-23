import { gql } from "graphql-request";

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
