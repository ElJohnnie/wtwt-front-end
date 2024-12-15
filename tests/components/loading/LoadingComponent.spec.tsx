import React from 'react';
import LoadingComponent from '../../../components/loading/LoadingComponent';
import { renderWithOutContextProvider } from '../../../utils/tests/helpers';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div>Lottie Mock</div>,
}));

describe('LoadingComponent', () => {
  test('renders correctly', () => {
    const { container } = renderWithOutContextProvider(<LoadingComponent />);

    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
