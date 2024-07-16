import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../app/page';

const redirectMock = jest.fn();
const replaceMock = jest.fn();

jest.mock('../../hooks/useNavigation/index.tsx', () => ({
  ...jest.requireActual('../../hooks/useNavigation/index.tsx'),
  useNavigation: () => ({
    redirect: redirectMock,
    replace: replaceMock,
  }),
}));

describe('Home', () => {
  it('Renderizando a página inicial', () => {
    const { container } = render(<Home />);
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
