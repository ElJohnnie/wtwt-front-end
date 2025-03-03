import React, {
  createContext,
  useState,
  useRef,
  useCallback,
  ReactNode,
  FC,
  useMemo,
} from 'react';
import { AppContextProps, Step, Questions } from '../types';

const defaultState = {
  steps: { current: [] as Step[] },
  currentStep: 0,
  questions: [],
  answeredSteps: [] as boolean[],
  answers: [] as string[],
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
  ]);

  const questions = useMemo<Questions[]>(
    () => [
      {
        question: 'Como você está se sentindo agora?',
        answers: [
          { text: 'Feliz', value: 'happy' },
          { text: 'Triste', value: 'sad' },
          { text: 'Ansioso', value: 'anxious' },
          { text: 'Animado', value: 'excited' },
          { text: 'Entediado', value: 'bored' },
        ],
        description: 'Escolha a emoção que mais reflete seu estado atual.',
      },
      {
        question: 'Qual o seu estilo de filme favorito?',
        answers: [
          { text: 'Ação', value: 'Action' },
          { text: 'Aventura', value: 'Adventure' },
          { text: 'Animação', value: 'Animation' },
          { text: 'Comédia', value: 'Comedy' },
          { text: 'Drama', value: 'Drama' },
          { text: 'Fantasia', value: 'Fantasy' },
          { text: 'SciFi', value: 'SciFi' },
          { text: 'Thriller', value: 'Thriller' },
          { text: 'Terror/Suspense', value: 'Horror' },
        ],
        description:
          'Escolha o gênero de filme que você mais gosta de assistir.',
      },
      {
        question: 'Seu segundo estilo de filme favorito?',
        answers: [
          { text: 'Ação', value: 'Action' },
          { text: 'Aventura', value: 'Adventure' },
          { text: 'Animação', value: 'Animation' },
          { text: 'Comédia', value: 'Comedy' },
          { text: 'Drama', value: 'Drama' },
          { text: 'Fantasia', value: 'Fantasy' },
          { text: 'SciFi', value: 'SciFi' },
          { text: 'Thriller', value: 'Thriller' },
          { text: 'Terror/Suspense', value: 'Horror' },
        ],
        description:
          'Escolha o segundo gênero de filme que você mais gosta de assistir.',
      },
      {
        question: 'Qual período de lançamento mais lhe convém?',
        answers: [
          { text: '2020', value: '2020' },
          { text: '2010', value: '2010' },
          { text: '2000', value: '2000' },
          { text: '1990', value: '1990' },
          { text: '1980', value: '1980' },
          { text: '1970', value: '1970' },
          { text: '1960', value: '1960' },
          { text: '1950', value: '1950' },
          { text: '1940', value: '1940' },
        ],
        description:
          'Escolha a década de filmes que você mais gosta ou se identifica.',
      },
    ],
    [],
  );

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const answeredSteps = useRef<boolean[]>([false, false, false, false, false]);
  const answers = useRef<string[]>([]);

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.current.length - 1));
  }, []);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const answerQuestion = useCallback(
    (text: string) => {
      if (currentStep < questions.length - 1) {
        answers.current = [...answers.current];
        answers.current[currentStep] = text;
        answeredSteps.current = [...answeredSteps.current];
        answeredSteps.current[currentStep] = true;
        nextStep();
      } else {
        answers.current = [...answers.current];
        answers.current[currentStep] = text;
        answeredSteps.current = [...answeredSteps.current];
        answeredSteps.current[currentStep] = true;
        setShowResult(true);
      }
    },
    [currentStep, nextStep, questions.length],
  );

  const resetState = useCallback(() => {
    setCurrentStep(0);
    setShowResult(false);
    answeredSteps.current = [false, false, false, false, false];
    answers.current = [];
  }, []);

  const contextValue = useMemo(
    () => ({
      steps,
      currentStep,
      questions,
      answeredSteps: answeredSteps.current,
      answers: answers.current,
      nextStep,
      prevStep,
      answerQuestion,
      showResult,
      resetState,
    }),
    [
      steps,
      currentStep,
      questions,
      nextStep,
      prevStep,
      answerQuestion,
      showResult,
      resetState,
    ],
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
