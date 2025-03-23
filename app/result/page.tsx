'use client';
import React, { FC, useCallback, useContext } from 'react';
import StepsButton from '../../components/buttons/steps-button.component';
import LoadingComponent from '../../components/loading/loading.component';
import { AppContext } from '../../contexts/AppContext';
import { RoutesUrls } from '../../utils/enums/routesUrl';
import { useNavigation } from '../../hooks/useNavigation';
import { useFetchMovies } from '../../hooks/use-fetch-movies';
import { useQueryClient } from '@tanstack/react-query';
import CardComponent from '../../components/card-result/card-result.component';

const Result: FC = () => {
  const queryClient = useQueryClient();
  const { replace } = useNavigation();
  const { answers, resetState } = useContext(AppContext);
  const { data, isFetchMovieLoading, isError } = useFetchMovies(answers);

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
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      {isFetchMovieLoading ? (
        <div className="flex items-center justify-center w-full h-full">
          <LoadingComponent />
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center my-4">
            {data && (
              <CardComponent
                href={`${process.env.NEXT_PUBLIC_THE_MOVIE_DB_IMAGE_BASE_URL}${data.backdrop_path}`}
                title={data.title}
                description={data.overview}
                rating={data.popularity}
                button1={
                  <StepsButton
                    text="Para o início"
                    onClick={goToStart}
                    testId="go-to-start"
                    type={'go-to-start'}
                  />
                }
                button2={
                  <StepsButton
                    text="Mais recomendações"
                    onClick={() => replace(RoutesUrls.MORE_RESULTS)}
                    testId="go-to-start"
                    type={'more-results'}
                  />
                }
              />
            )}
          </div>
          <div className="my-4 grid"></div>
        </>
      )}
    </main>
  );
};

const ResultPage: React.FC = () => {
  return <Result />;
};

export default ResultPage;
