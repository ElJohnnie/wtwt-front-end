import React from 'react';
import Question from '../../../components/texts/question.component';
import '@testing-library/jest-dom';
import { renderWithOutContextProvider } from '../../../utils/tests/helpers';

describe('Description', () => {
  it('renderizar o component Question', () => {
    const { container, getByText } = renderWithOutContextProvider(
      <Question text="batatinha?" />,
    );

    const receipt = getByText('batatinha?');
    expect(receipt).toBeInTheDocument();
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
