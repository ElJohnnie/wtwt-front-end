'use client';
import React, { FC, useContext } from 'react';
import { useNavigation } from '../../hooks/useNavigation';
import { RoutesUrls } from '../../utils/enums/routesUrl';
import StepsButton from '../../components/buttons/StepsButton';
import { AppContext } from '../../contexts/AppContext';

const ErrorPage: FC = () => {
  const { replace } = useNavigation();
  const { resetState } = useContext(AppContext);

  const handleBack = () => {
    replace(RoutesUrls.RESULT);
  };

  const goToStart = () => {
    if (resetState) {
      resetState();
    }
    replace(RoutesUrls.HOME);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="p-8 md:p-16 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Algo saiu do controle
        </h1>
        <p className="text-pink-700 mb-8">Gostaria de tentar novamente?</p>
        <div className="my-4 flex space-x-4 p-4">
          <StepsButton
            text="Tentar novamente"
            testId="try-again"
            onClick={handleBack}
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
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            }
          />

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
      </div>
    </div>
  );
};

export default ErrorPage;
