import { queryOptions } from '@tanstack/react-query';
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
  type:
    | 'prev-step'
    | 'next-step'
    | 'go-to-start'
    | 'try-again'
    | 'more-results';
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

export interface StepsPropsNew {
  steps: Step[];
  currentStep: number;
}

export interface ImageComponentProps {
  href: string;
  title?: string;
  description?: string;
  rating: number;
  button1?: React.ReactElement;
  button2?: React.ReactElement;
}

export interface DescriptionProps {
  text: string;
}

export interface QuestionProps {
  text: string;
}

export interface MoviesResponse {
  id: number;
  backdrop_path?: string;
  popularity: number;
  title: string;
  overview: string;
  otherMovies: string[];
}

export interface MoreResultsResponse {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type AsyncFunction<TResult, TParams> = TParams extends void
  ? () => Promise<TResult>
  : (params: TParams) => Promise<TResult>;

export type WrappedQueryOptions<QueryFnResult, QueryFnError> = ReturnType<
  typeof queryOptions<QueryFnResult, QueryFnError>
>;

export type CreateQueryOptionsResult<
  QueryFnResult,
  QueryFnError,
  QueryFnParams,
> = QueryFnParams extends void
  ? () => WrappedQueryOptions<QueryFnResult, QueryFnError>
  : (params: QueryFnParams) => WrappedQueryOptions<QueryFnResult, QueryFnError>;
