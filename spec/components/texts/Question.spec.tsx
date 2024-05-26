import React from 'react';
import { render } from '@testing-library/react';
import Question from '../../../components/texts/Question';
import '@testing-library/jest-dom';

describe('Description', () => {
  it('renderizar o component Description', () => {
    const { container, getByText } = render(<Question text="batatinha?" />);

    const receipt = getByText('batatinha?');
    expect(receipt).toBeInTheDocument();
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
