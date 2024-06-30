import React, { createContext, useState, useRef, ReactNode, FC } from 'react';

interface Step {
  number: string;
  hasRange: boolean;
  isInactive: boolean;
  asComplete: boolean;
}

interface Answer {
  text: string;
}

interface Questions {
  question: string;
  answers: Answer[];
}

interface AppContextProps {
  steps: React.MutableRefObject<Step[]>;
  currentStep: number;
  questions: Questions[];
  answeredSteps: boolean[];
  answers: string[];
  nextStep: () => void;
  prevStep: () => void;
  answerQuestion: (text: string) => void;
}

const defaultState = {
  steps: { current: [] as Step[] },
  currentStep: 0,
  questions: [],
  answeredSteps: [] as boolean[],
  answers: [] as string[],
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

  const questions = [
    {
      question: 'teste 123',
      answers: [
        { text: 'Answer 1.1' },
        { text: 'Answer 1.2' },
        { text: 'Answer 1.3' },
      ],
    },
    {
      question: 'teste 123',
      answers: [
        { text: 'Answer 1.1' },
        { text: 'Answer 1.2' },
        { text: 'Answer 1.3' },
      ],
    },
    {
      question: 'teste 123',
      answers: [
        { text: 'Answer 1.1' },
        { text: 'Answer 1.2' },
        { text: 'Answer 1.3' },
      ],
    },
    {
      question: 'teste 123',
      answers: [
        { text: 'Answer 1.1' },
        { text: 'Answer 1.2' },
        { text: 'Answer 1.3' },
      ],
    },
    {
      question: 'teste 123',
      answers: [
        { text: 'Answer 1.1' },
        { text: 'Answer 1.2' },
        { text: 'Answer 1.3' },
      ],
    },
  ];

  const [answeredSteps, setAnsweredSteps] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const answers = [] as string[];

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.current.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const answerQuestion = (element: string) => {
    console.log(element);
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
        questions,
        answeredSteps,
        answers,
        nextStep,
        prevStep,
        answerQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
