import React from 'react';
import Steps from '../../../components/core/Steps';
import { renderWithOutContextProvider } from '../../../utils/tests/helpers';

describe('Steps', () => {
  it('quero renderizar o component de steps inicialmente', () => {
    const { container } = renderWithOutContextProvider(
      <Steps
        number={'1'}
        hasRange={false}
        asComplete={false}
        isEmpty={false}
        isInactive={false}
      />,
    );
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
  it('quero renderizar o component de steps inativo', () => {
    const { container } = renderWithOutContextProvider(
      <Steps
        number={'1'}
        hasRange={false}
        asComplete={false}
        isEmpty={false}
        isInactive={true}
      />,
    );
    expect(container).toBeTruthy();
  });
  it('quero renderizar o component de steps com o range completo', () => {
    const { container } = renderWithOutContextProvider(
      <Steps
        number={'1'}
        hasRange={true}
        asComplete={true}
        isEmpty={false}
        isInactive={false}
      />,
    );
    expect(container).toBeTruthy();
  });
  it('quero renderizar o component de steps com o range incompleto', () => {
    const { container } = renderWithOutContextProvider(
      <Steps
        number={'1'}
        hasRange={true}
        asComplete={false}
        isEmpty={false}
        isInactive={false}
      />,
    );
    expect(container).toBeTruthy();
  });
  it('quero renderizar o component de steps com o range vazio', () => {
    const { container } = renderWithOutContextProvider(
      <Steps
        number={'1'}
        hasRange={true}
        asComplete={false}
        isEmpty={true}
        isInactive={false}
      />,
    );
    expect(container).toBeTruthy();
  });
});
