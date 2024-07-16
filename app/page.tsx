'use client';
import React, { useContext, useEffect } from 'react';
import { AppProvider, AppContext } from '../contexts/AppContext';
import Steps from '../components/core/Steps';
import Question from '../components/texts/Question';
import ButtonAnswer from '../components/buttons/ButtonAnswer';
import Description from '../components/texts/Description';
import StepsButton from '../components/buttons/StepsButton';
import { RoutesUrls } from '../utils/enums/routesUrl';
import { useNavigation } from '../hooks/useNavigation';
useNavigation;

const Home: React.FC = () => {
  const {
    steps,
    currentStep,
    questions,
    answeredSteps,
    answers,
    nextStep,
    prevStep,
    answerQuestion,
    showResult,
  } = useContext(AppContext);

  const { replace } = useNavigation();

  useEffect(() => {
    if (showResult) {
      replace(RoutesUrls.RESULT);
    }
  }, [showResult, replace]);

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="flex justify-between flex-row items-center my-4">
        {steps.current.map((step, index) => (
          <Steps
            key={index}
            number={step.number}
            hasRange={step.hasRange}
            isInactive={index > currentStep}
            asComplete={answeredSteps[index]}
          />
        ))}
      </div>
      <div className="flex items-center my-12">
        <Question text={questions[currentStep].question} />
      </div>
      <div className="my-4 grid grid-cols-2 gap-4">
        {questions[currentStep].answers.map((answer, index) => (
          <ButtonAnswer
            key={index}
            text={answer.text}
            selectedAnswer={answers[currentStep]}
            callback={answerQuestion}
          />
        ))}
      </div>
      <div className="flex items-center my-12">
        <Description text={questions[currentStep].description} />
      </div>
      <div className="flex flex-row items-center justify-center w-6/12 space-x-4">
        <div className={`${currentStep <= 0 ? 'hidden' : ''}`}>
          <StepsButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                style={{ transform: 'scale(-1, 1)' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            }
            callback={currentStep > 0 ? prevStep : undefined}
          />
        </div>
        <div className={`${!answeredSteps[currentStep] ? 'hidden' : ''}`}>
          <StepsButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            }
            callback={
              currentStep < steps.current.length - 1 ? nextStep : undefined
            }
          />
        </div>
      </div>
    </main>
  );
};

const HomePage: React.FC = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export default HomePage;
