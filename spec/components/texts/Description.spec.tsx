import React from 'react';
import { render } from '@testing-library/react';
import Description from '../../../components/texts/Description';
import '@testing-library/jest-dom';

describe('Description', () => {
  it('renderizar o component Description', () => {
    const { container, getByText } = render(
      <Description textDescription="batatinha" />,
    );

    const receipt = getByText('batatinha');
    expect(receipt).toBeInTheDocument();
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
