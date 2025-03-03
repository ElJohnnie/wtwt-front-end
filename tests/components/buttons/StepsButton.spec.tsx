import React from 'react';
import StepsButton from '../../../components/buttons/steps-button.component';
import { renderWithOutContextProvider } from '../../../utils/tests/helpers';

describe('StepsButton', () => {
  it('quero renderizar o StepsButton inicialmente', () => {
    const { container } = renderWithOutContextProvider(
      <StepsButton
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        }
      />,
    );
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
