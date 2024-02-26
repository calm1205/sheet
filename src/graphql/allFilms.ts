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

// const DATA_VOLUME = 200; // 既存データのn倍のダミーデータを返す
// /**
//  * パフォーマンステスト用のダミーデータを返す
//  */
// export const getAllFilms = async () => {
//   const response = await request<AllFilms>(END_POINT, allFilmsDocument);

//   return {
//     films: response.allFilms.films.flatMap((film) => {
//       return [...Array(DATA_VOLUME)].map(() => film);
//     }),
//   };
// };

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
