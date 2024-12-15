import React from 'react';
import Description from '../../../components/texts/Description';
import '@testing-library/jest-dom';
import { renderWithOutContextProvider } from '../../../utils/tests/helpers';

describe('Description', () => {
  it('renderizar o component Description', () => {
    const { container, getByText } = renderWithOutContextProvider(
      <Description text="batatinha" />,
    );

    const receipt = getByText('batatinha');
    expect(receipt).toBeInTheDocument();
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
