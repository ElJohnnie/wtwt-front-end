import React from 'react';
import { render } from '@testing-library/react';
import LoadingComponent from '../../../components/loading/LoadingComponent';

describe('LoadingComponent', () => {
  test('renders correctly', () => {
    const { container } = render(<LoadingComponent />);

    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
