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
import { executeWithDelay } from '../../utils/execute-with-delay';

const Result: FC = () => {
  const { replace } = useNavigation();
  const { answers, resetState } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const result = useRef<MoviesResponse | null>(null);

  const TIME_DELAY = 5000;

  useEffect(() => {
    const loadData = async (signal: AbortSignal) => {
      if (answers.length < 4) {
        replace(RoutesUrls.HOME);
        return;
      }

      try {
        const response: MoviesResponse = await executeWithDelay(
          fetchData('/movies', {
            mood: answers[0],
            primaryGenre: answers[1],
            secondaryGenre: answers[2],
            epoch: answers[3],
            signal,
          }),
          TIME_DELAY,
        );

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
              type={'go-to-start'}
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
