export interface FetchError extends Error {
  name: string;
  message: string;
}

export interface Step {
  number: string;
  hasRange: boolean;
  isInactive: boolean;
  asComplete: boolean;
}

export interface Answer {
  text: string;
  value: string;
}

export interface Questions {
  question: string;
  answers: Answer[];
  description: string;
}

export interface AppContextProps {
  steps: React.MutableRefObject<Step[]>;
  currentStep: number;
  questions: Questions[];
  answeredSteps: boolean[];
  answers: string[];
  nextStep?: () => void;
  prevStep?: () => void;
  answerQuestion?: (text: string) => void;
  showResult: boolean;
  resetState?: () => void;
}

export interface StepsButtonProps {
  icon: JSX.Element;
  onClick?: () => void;
  text?: string;
  testId?: string;
}

export interface ButtonAnswerProps {
  text: string;
  selectedAnswer?: string;
  value?: string;
  onClick?: (value: string) => void;
}

export interface StepsProps {
  number: string;
  hasRange: boolean;
  isEmpty?: boolean;
  asComplete?: boolean;
  isInactive: boolean;
}

export interface ImageComponentProps {
  href: string;
  title?: string;
  description?: string;
}

export interface DescriptionProps {
  text: string;
}

export interface QuestionProps {
  text: string;
}

export interface MoviesResponse {
  backdrop_path: string;
  popularity: number;
  title: string;
  overview: string;
}
