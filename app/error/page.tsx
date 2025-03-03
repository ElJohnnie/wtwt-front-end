'use client';
import React, { FC, useContext } from 'react';
import { useNavigation } from '../../hooks/useNavigation';
import { RoutesUrls } from '../../utils/enums/routesUrl';
import StepsButton from '../../components/buttons/steps-button.component';
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
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Algo saiu do controle
        </h1>
        <p className="text-slate-700 mb-8">Vamos tentar novamente!</p>
        <div className="my-4 flex space-x-4 p-4">
          <StepsButton
            text="Tentar novamente"
            testId="try-again"
            onClick={handleBack}
            type="try-again"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
