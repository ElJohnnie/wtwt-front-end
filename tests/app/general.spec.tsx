import React, { act } from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../app/page';
import { metadata } from '../../app/layout';
import { Providers } from '../../app/providers';
import { RoutesUrls } from '../../utils/enums/routesUrl';

const redirectMock = jest.fn();
const replaceMock = jest.fn();

jest.mock('../../hooks/useNavigation/index.tsx', () => ({
  ...jest.requireActual('../../hooks/useNavigation/index.tsx'),
  useNavigation: () => ({
    redirect: redirectMock,
    replace: replaceMock,
  }),
}));

describe('Test home page', () => {
  it('Testando completamente a home page', () => {
    const { container, getByText } = render(
      <Providers>
        <Home />
      </Providers>,
    );
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('Como você está se sentindo agora?');

    const firstStepButton = getByText('Feliz');

    act(() => {
      fireEvent.click(firstStepButton);
    });

    expect(container).toHaveTextContent('Qual o seu estilo de filme favorito?');

    const secondStepButton = getByText('Ação');

    act(() => {
      fireEvent.click(secondStepButton);
    });

    expect(container).toHaveTextContent(
      'Seu segundo estilo de filme favorito?',
    );

    act(() => {
      fireEvent.click(secondStepButton);
    });

    expect(container).toHaveTextContent(
      'Qual período de lançamento mais lhe convém?',
    );

    const yearStepButton = getByText('1990');

    act(() => {
      fireEvent.click(yearStepButton);
    });

    expect(replaceMock).toHaveBeenCalledWith(RoutesUrls.RESULT);
  });

  it('Verifica os metadados', () => {
    expect(metadata.title).toBe('What to watch tonight?');
    expect(metadata.description).toBe(
      'Um sistema de recomendação de filmes baseado em Machine Learning. Usar algoritmos de filtragem colaborativa ou baseados em conteúdo para recomendar filmes aos usuários baseado em gosto, vontades e humor',
    );
  });
});
