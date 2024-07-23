import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResultPage from '../../../app/result/page';
import { AppContext } from '../../../contexts/AppContext';
import { axiosInstance } from '../../../services/api';
import { RoutesUrls } from '../../../utils/enums/routesUrl';

const redirectMock = jest.fn();
const replaceMock = jest.fn();

jest.mock('../../../hooks/useNavigation/index.tsx', () => ({
  ...jest.requireActual('../../../hooks/useNavigation/index.tsx'),
  useNavigation: () => ({
    redirect: redirectMock,
    replace: replaceMock,
  }),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>,
  ) => <img {...props} />,
}));

const mockContextValue = {
  steps: {
    current: [
      { number: '1', hasRange: true, isInactive: false, asComplete: false },
      { number: '2', hasRange: true, isInactive: true, asComplete: false },
      { number: '3', hasRange: true, isInactive: true, asComplete: false },
      { number: '4', hasRange: true, isInactive: true, asComplete: false },
      { number: '5', hasRange: false, isInactive: true, asComplete: false },
    ],
  },
  currentStep: 0,
  questions: [
    {
      question: 'Como você está se sentindo agora?',
      answers: [
        { text: 'Feliz', value: 'happy' },
        { text: 'Triste', value: 'sad' },
        { text: 'Ansioso', value: 'anxious' },
        { text: 'Bem animado', value: 'excited' },
        { text: 'Entediado', value: 'bored' },
      ],
      description: 'teste 123',
    },
  ],
  answeredSteps: [true, true, true, true],
  answers: ['any', 'any', 'any', 'any'],
  nextStep: jest.fn(),
  prevStep: jest.fn(),
  answerQuestion: jest.fn(),
  showResult: false,
  resetState: jest.fn(),
};

const mockMovie = {
  adult: false,
  backdrop_path: '/path/to/backdrop.jpg',
  genre_ids: [28, 12],
  id: 123,
  original_language: 'en',
  original_title: 'Mock Movie Title',
  overview: 'A brief overview of the movie.',
  popularity: 7.8,
  poster_path: '/path/to/poster.jpg',
  release_date: '2024-07-22',
  title: 'Mock Movie Title',
  video: false,
  vote_average: 8.1,
  vote_count: 1500,
};

const mockMoviesResponse = {
  recommendedMovie: {
    title: 'Recommended Movie Title',
  },
  detailedMovie: {
    page: 1,
    results: [mockMovie, mockMovie],
    total_pages: 10,
    total_results: 20,
  },
};

describe('ResultPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('Renderizando a página de resultado', async () => {
    jest
      .spyOn(axiosInstance, 'get')
      .mockResolvedValueOnce({ data: mockMoviesResponse });

    const { container } = render(
      <AppContext.Provider value={mockContextValue}>
        <ResultPage />
      </AppContext.Provider>,
    );

    await waitFor(() => {
      expect(screen.queryByRole('img')).toBeInTheDocument();
    });

    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('Clicando no botão de voltar para a página inicial', async () => {
    jest
      .spyOn(axiosInstance, 'get')
      .mockResolvedValueOnce({ data: mockMoviesResponse });

    render(
      <AppContext.Provider value={mockContextValue}>
        <ResultPage />
      </AppContext.Provider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('go-to-start')).toBeInTheDocument();
    });

    const backButton = screen.getByTestId('go-to-start');
    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);

    expect(replaceMock).toHaveBeenCalledWith(RoutesUrls.HOME);
  });

  it('Impedindo de acessar a página caso não tenha quatro respostas', async () => {
    mockContextValue.answers = [];

    render(
      <AppContext.Provider value={mockContextValue}>
        <ResultPage />
      </AppContext.Provider>,
    );

    expect(replaceMock).toHaveBeenCalledWith(RoutesUrls.HOME);
  });
});
