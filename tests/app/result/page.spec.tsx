import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResultPage from '../../../app/result/page';
import { AppContext } from '../../../contexts/AppContext';

const redirectMock = jest.fn();
const replaceMock = jest.fn();

jest.mock('../../../hooks/useNavigation/index.tsx', () => ({
  ...jest.requireActual('../../../hooks/useNavigation/index.tsx'),
  useNavigation: () => ({
    redirect: redirectMock,
    replace: replaceMock,
  }),
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

describe('ResultPage', () => {
  it('Renderizando a página de resultado', () => {
    const { container } = render(
      <AppContext.Provider value={mockContextValue}>
        <ResultPage />
      </AppContext.Provider>,
    );

    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
