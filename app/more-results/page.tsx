'use client';
import React, { FC, useCallback, useContext } from 'react';
import LoadingComponent from '../../components/loading/loading.component';
import { AppContext } from '../../contexts/AppContext';
import { RoutesUrls } from '../../utils/enums/routesUrl';
import { useNavigation } from '../../hooks/useNavigation';
import { useFetchMovies } from '../../hooks/use-fetch-movies';
import { useMoreResults } from '../../hooks/use-more-results';
import CardComponent from '../../components/card-result/card-result.component';
import { Button } from '@mui/material';
import Home from '@mui/icons-material/Home';
import { useQueryClient } from '@tanstack/react-query';

const Result: FC = () => {
  const queryClient = useQueryClient();
  const { replace } = useNavigation();
  const { answers, resetState } = useContext(AppContext);
  const { data } = useFetchMovies(answers);

  const {
    data: moreResultsData,
    isFetchMoreResultsLoading,
    isError,
  } = useMoreResults(data?.otherMovies || []);

  if (isError) {
    replace(RoutesUrls.ERROR);
  }

  const goToStart = useCallback(() => {
    if (resetState) {
      resetState();
    }

    queryClient.clear();
    replace(RoutesUrls.MOVIE);
  }, [resetState, replace, queryClient]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 relative">
      {isFetchMoreResultsLoading ? (
        <div className="flex items-center justify-center w-full h-full">
          <LoadingComponent />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {moreResultsData &&
              moreResultsData.map((movie) => (
                <CardComponent
                  key={movie.id}
                  href={`${
                    process.env.NEXT_PUBLIC_THE_MOVIE_DB_IMAGE_BASE_URL
                  }${movie.backdrop_path ?? movie.poster_path}`}
                  title={movie.title}
                  description={movie.overview}
                  rating={movie.popularity}
                />
              ))}
          </div>
        </>
      )}
      {!isFetchMoreResultsLoading && (
        <Button
          variant="contained"
          color="primary"
          className="fixed bottom-4 right-4 z-50"
          startIcon={<Home />}
          onClick={goToStart}
        >
          Refazer algorítmo
        </Button>
      )}
    </main>
  );
};

const ResultPage: React.FC = () => {
  return <Result />;
};

export default ResultPage;
