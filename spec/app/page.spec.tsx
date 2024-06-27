import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../app/page';

describe('Home', () => {
  it('Renderizando a página inicial', () => {
    const { container } = render(<Home />);
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('Conferindo se existe o componente step está visível na página inicial', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('steps')).toBeInTheDocument();
  });

  it('Conferindo se o componente de título está visível na tela', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('question')).toBeInTheDocument();
  });
});
