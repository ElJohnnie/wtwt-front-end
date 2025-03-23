import { useQuery } from '@tanstack/react-query';
import { createQueryOptions } from '../../utils/react-query';
import { fetchData } from '../../services/api';
import { MoreResultsResponse } from '../../types';
import { executeWithDelay } from '../../utils/execute-with-delay';

const TIME_DELAY = 10000;

async function fetchMoreRecommendations(
  movies: string[],
): Promise<MoreResultsResponse[]> {
  return await executeWithDelay(
    fetchData('/movies/more-recommendations', { movies: movies.join(',') }),
    TIME_DELAY,
  );
}

export const moreRecommendationsQueryOptions = createQueryOptions(
  ['more-recommendations'],
  (answers: string[]) => fetchMoreRecommendations(answers),
);

export function useMoreResults(answers: string[]) {
  const queryOptions = moreRecommendationsQueryOptions(answers);
  const queryResult = useQuery(queryOptions);

  const isError =
    queryResult.isError || (!queryResult.isLoading && !queryResult.data);

  const isFetchMoreResultsLoading =
    queryResult.isLoading || queryResult.isFetching;

  return {
    ...queryResult,
    isFetchMoreResultsLoading,
    isError,
  };
}
