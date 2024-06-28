// context/AppContext.tsx
import React, { createContext, useState, useRef, ReactNode, FC } from 'react';

interface Step {
  number: string;
  hasRange: boolean;
  isInactive: boolean;
  asComplete: boolean;
}

interface AppContextProps {
  steps: React.MutableRefObject<Step[]>;
  currentStep: number;
  question: React.MutableRefObject<string[]>;
  answers: React.MutableRefObject<{ text: string }[][]>;
  answeredSteps: boolean[];
  nextStep: () => void;
  prevStep: () => void;
  answerQuestion: () => void;
}

const defaultState = {
  steps: { current: [] as Step[] },
  currentStep: 0,
  question: { current: [] as string[] },
  answers: { current: [] as { text: string }[][] },
  answeredSteps: [] as boolean[],
  nextStep: () => {
    throw new Error('nextStep function not implemented');
  },
  prevStep: () => {
    throw new Error('prevStep function not implemented');
  },
  answerQuestion: () => {
    throw new Error('answerQuestion function not implemented');
  },
};

export const AppContext = createContext<AppContextProps>(defaultState);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const steps = useRef<Step[]>([
    { number: '1', hasRange: true, isInactive: false, asComplete: false },
    { number: '2', hasRange: true, isInactive: true, asComplete: false },
    { number: '3', hasRange: true, isInactive: true, asComplete: false },
    { number: '4', hasRange: true, isInactive: true, asComplete: false },
    { number: '5', hasRange: false, isInactive: true, asComplete: false },
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  const question = useRef<string[]>([
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5',
  ]);
  const answers = useRef<{ text: string }[][]>([
    [{ text: 'Answer 1.1' }, { text: 'Answer 1.2' }, { text: 'Answer 1.3' }],
    [{ text: 'Answer 2.1' }, { text: 'Answer 2.2' }, { text: 'Answer 2.3' }],
    [{ text: 'Answer 3.1' }, { text: 'Answer 3.2' }, { text: 'Answer 3.3' }],
    [{ text: 'Answer 4.1' }, { text: 'Answer 4.2' }, { text: 'Answer 4.3' }],
    [{ text: 'Answer 5.1' }, { text: 'Answer 5.2' }, { text: 'Answer 5.3' }],
  ]);
  const [answeredSteps, setAnsweredSteps] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.current.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const answerQuestion = () => {
    setAnsweredSteps((prev) => {
      const newAnsweredSteps = [...prev];
      newAnsweredSteps[currentStep] = true;
      return newAnsweredSteps;
    });
    nextStep();
  };

  return (
    <AppContext.Provider
      value={{
        steps,
        currentStep,
        question,
        answers,
        answeredSteps,
        nextStep,
        prevStep,
        answerQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
