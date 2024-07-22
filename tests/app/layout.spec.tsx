import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RootLayout from '../../app/layout';
import Home from '../../app/page';
import { metadata } from '../../app/layout';

const redirectMock = jest.fn();
const replaceMock = jest.fn();

jest.mock('../../hooks/useNavigation/index.tsx', () => ({
  ...jest.requireActual('../../hooks/useNavigation/index.tsx'),
  useNavigation: () => ({
    redirect: redirectMock,
    replace: replaceMock,
  }),
}));

describe('RootLayout', () => {
  it('Renderizando o layout raiz', () => {
    const { container } = render(
      <RootLayout>
        <Home />
      </RootLayout>,
    );
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('Verifica os metadados', () => {
    expect(metadata.title).toBe('What to watch tonight?');
    expect(metadata.description).toBe(
      'Um sistema de recomendação de filmes baseado em Machine Learning. Usar algoritmos de filtragem colaborativa ou baseados em conteúdo para recomendar filmes aos usuários baseado em gosto, vontades e humor',
    );
  });
});
