import { useQuery } from '@tanstack/react-query';
import { createQueryOptions } from '../../utils/react-query';
import { fetchData } from '../../services/api';
import { MoviesResponse } from '../../types';
import { executeWithDelay } from '../../utils/execute-with-delay';

const TIME_DELAY = 10000;

async function fetchMovies(answers: string[]): Promise<MoviesResponse> {
  return await executeWithDelay(
    fetchData('/movies', {
      mood: answers[0],
      primaryGenre: answers[1],
      secondaryGenre: answers[2],
      epoch: answers[3],
    }),
    TIME_DELAY,
  );
}

export const userDeviceQueryOptions = createQueryOptions(
  ['movies'],
  (answers: string[]) => fetchMovies(answers),
);

export function useFetchMovies(answers: string[]) {
  const queryOptions = userDeviceQueryOptions(answers);
  const queryResult = useQuery(queryOptions);

  const isError =
    queryResult.isError || (!queryResult.isLoading && !queryResult.data);

  const isFetchMovieLoading = queryResult.isLoading || queryResult.isFetching;

  return {
    ...queryResult,
    isFetchMovieLoading,
    isError,
  };
}
