'use client';
import React, { FC, useContext } from 'react';
import ImageComponent from '../../components/images/ImageComponent';
import StepsButton from '../../components/buttons/StepsButton';
import LoadingComponent from '../../components/loading/LoadingComponent';
import { AppContext } from '../../contexts/AppContext';
import { RoutesUrls } from '../../utils/enums/routesUrl';
import { useNavigation } from '../../hooks/useNavigation';
import StarRating from '../../components/star-rating/StarRatingComponent';
import { useFetchMovies } from '../../hooks/use-fetch-movies';

const Result: FC = () => {
  const { replace } = useNavigation();
  const { answers, resetState } = useContext(AppContext);
  const { data, isFetchMovieLoading, isError } = useFetchMovies(answers);

  if (isError) {
    replace(RoutesUrls.ERROR);
  }

  const goToStart = () => {
    if (resetState) {
      resetState();
      replace(RoutesUrls.MOVIE);
    }
  };

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
              <ImageComponent
                href={`${process.env.NEXT_PUBLIC_THE_MOVIE_DB_IMAGE_BASE_URL}${data.backdrop_path}`}
                title={data.title}
                description={data.overview}
              />
            )}
          </div>
          <div className="flex flex-col items-center my-4">
            {data && <StarRating rating={data.popularity}></StarRating>}
          </div>
          <div className="my-4 grid">
            <StepsButton
              text="Refazer com escolhas diferentes"
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
