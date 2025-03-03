'use client';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import Question from '../../components/texts/question.component';
import ButtonAnswer from '../../components/buttons/button-answer.component';
import Description from '../../components/texts/description.component';
import StepsButton from '../../components/buttons/steps-button.component';
import { RoutesUrls } from '../../utils/enums/routesUrl';
import { useNavigation } from '../../hooks/useNavigation';
import StepsNew from '../../components/core/steps-new.component';

const Home: React.FC = () => {
  const {
    steps,
    currentStep,
    questions,
    answers,
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
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex justify-between flex-row items-center">
        <StepsNew steps={steps.current} currentStep={currentStep}></StepsNew>
      </div>
      <div className="flex items-center my-12">
        <Question text={questions[currentStep].question} />
      </div>
      <div className="my-4 flex flex-wrap gap-4 justify-center max-w-2xl">
        {questions[currentStep].answers.map((answer, index) => (
          <ButtonAnswer
            key={answer.text}
            text={answer.text}
            value={answer.value}
            selectedAnswer={answers[index]}
            onClick={answerQuestion}
          />
        ))}
      </div>
      <div className="flex items-center my-12">
        <Description text={questions[currentStep].description} />
      </div>
      <div className="flex flex-row items-center justify-center w-6/12 space-x-4">
        <div className={`${currentStep <= 0 ? 'hidden' : ''}`}>
          <StepsButton
            type={'prev-step'}
            onClick={currentStep > 0 ? prevStep : undefined}
          />
        </div>
      </div>
    </main>
  );
};

const HomePage: React.FC = () => {
  return <Home />;
};

export default HomePage;
