'use client';
import React, { FC, useEffect, useState, useContext, useRef } from 'react';
import ImageComponent from '../../components/images/ImageComponent';
import StepsButton from '../../components/buttons/StepsButton';
import LoadingComponent from '../../components/loading/LoadingComponent';
import { fetchData } from '../../services/api';
import { AppContext } from '../../contexts/AppContext';
import { RoutesUrls } from '../../utils/enums/routesUrl';
import { useNavigation } from '../../hooks/useNavigation';
import { MoviesResponse } from '../../types';
import StarRating from '../../components/star-rating/StarRatingComponent';

const Result: FC = () => {
  const { replace } = useNavigation();
  const { answers, resetState } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const result = useRef<MoviesResponse | null>(null);

  useEffect(() => {
    const loadData = async (signal: AbortSignal) => {
      console.log('entrou aqui');
      if (answers.length < 4) {
        replace(RoutesUrls.HOME);
        return;
      }

      try {
        const response: MoviesResponse = await fetchData('/movies', {
          mood: answers[0],
          primaryGenre: answers[1],
          secondaryGenre: answers[2],
          epoch: answers[3],
          signal,
        });

        result.current = response;
      } catch (error) {
        replace(RoutesUrls.ERROR);
      } finally {
        setLoading(false);
      }
    };

    const abortController = new AbortController();
    loadData(abortController.signal);

    return () => {
      abortController.abort();
    };
  });

  const goToStart = () => {
    if (resetState) {
      resetState();
    }
    replace(RoutesUrls.HOME);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      {loading ? (
        <div className="flex items-center justify-center w-full h-full">
          <LoadingComponent />
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center my-4">
            {result.current && (
              <ImageComponent
                href={`${process.env.NEXT_PUBLIC_THE_MOVIE_DB_IMAGE_BASE_URL}${result.current.backdrop_path}`}
                title={result.current.title}
                description={result.current.overview}
              />
            )}
          </div>
          <div className="flex flex-col items-center my-4">
            {result.current && (
              <StarRating rating={result.current.popularity}></StarRating>
            )}
          </div>
          <div className="my-4 grid">
            <StepsButton
              text="Refazer novamente"
              onClick={goToStart}
              testId="go-to-start"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
              }
            />
          </div>
        </>
      )}
    </main>
  );
};

const ResultPage: React.FC = () => {
  return <Result />;
};

export default ResultPage;
