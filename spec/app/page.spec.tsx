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
});
