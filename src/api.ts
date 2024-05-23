import { MovieData } from './types/MovieData';
import { ResponseError } from './types/ReponseError';

const apikey = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${apikey}`;

export function getMovie(query: string): Promise<MovieData | ResponseError> {
  return fetch(`${API_URL}&t=${query}`)
    .then(res => res.json())
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}
