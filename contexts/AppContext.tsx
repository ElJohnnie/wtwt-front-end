import React, {
  createContext,
  useState,
  useRef,
  useCallback,
  ReactNode,
  FC,
} from 'react';
import { AppContextProps, Step, Questions } from '../types';

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
  showResult: false,
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

  const questions: Questions[] = [
    {
      question: 'Como você está se sentindo agora?',
      answers: [
        { text: 'Feliz' },
        { text: 'Triste' },
        { text: 'Ansioso' },
        { text: 'Bem animado' },
        { text: 'Entediado' },
      ],
      description: 'teste 123',
    },
    {
      question: 'Qual o seu estilo de filme favorito?',
      answers: [
        { text: 'Ação' },
        { text: 'Aventura' },
        { text: 'Animação' },
        { text: 'Comédia' },
        { text: 'Drama' },
        { text: 'Fantasia' },
        { text: 'SciFi' },
        { text: 'Thriller' },
        { text: 'Terror/Suspense' },
      ],
      description: 'teste 123',
    },
    {
      question: 'Seu segundo estilo de filme favorito?',
      answers: [
        { text: 'Ação' },
        { text: 'Aventura' },
        { text: 'Animação' },
        { text: 'Comédia' },
        { text: 'Drama' },
        { text: 'Fantasia' },
        { text: 'SciFi' },
        { text: 'Thriller' },
        { text: 'Terror/Suspense' },
      ],
      description: 'teste 123',
    },
    {
      question: 'Qual periodo de lançamento mais lhe convém?',
      answers: [
        { text: '2000' },
        { text: '1990' },
        { text: '1980' },
        { text: '1970' },
        { text: '1960' },
        { text: '1950' },
        { text: '1940' },
      ],
      description: 'teste 123',
    },
  ];

  const [currentStep, setCurrentStep] = useState<number>(0);

  const [showResult, setShowResult] = useState<boolean>(false);

  const [answeredSteps, setAnsweredSteps] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [answers, setAnswers] = useState<string[]>([]);

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.current.length - 1));
  }, []);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const answerQuestion = useCallback(
    (text: string) => {
      if (currentStep < questions.length - 1) {
        setAnswers((prev) => {
          const newAnswers = [...prev];
          newAnswers[currentStep] = text;
          return newAnswers;
        });
        setAnsweredSteps((prev) => {
          const newAnsweredSteps = [...prev];
          newAnsweredSteps[currentStep] = true;
          return newAnsweredSteps;
        });
        nextStep();
      } else {
        setAnswers((prev) => {
          const newAnswers = [...prev];
          newAnswers[currentStep] = text;
          return newAnswers;
        });
        setAnsweredSteps((prev) => {
          const newAnsweredSteps = [...prev];
          newAnsweredSteps[currentStep] = true;
          return newAnsweredSteps;
        });
        setShowResult(true);
      }
    },
    [currentStep, nextStep, questions.length],
  );

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
        showResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
