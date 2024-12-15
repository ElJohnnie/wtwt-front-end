import React from 'react';
import '@testing-library/jest-dom';
import RootLayout from '../../app/layout';
import HeroFeaturesPage from '../../app/page';
import { renderWithOutContextProvider } from '../../utils/tests/helpers';

jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div>Lottie Mock</div>,
}));

const redirectMock = jest.fn();
const replaceMock = jest.fn();

jest.mock('../../hooks/useNavigation/index.tsx', () => ({
  ...jest.requireActual('../../hooks/useNavigation/index.tsx'),
  useNavigation: () => ({
    redirect: redirectMock,
    replace: replaceMock,
  }),
}));

describe.skip('RootLayout', () => {
  it('Renderizando o layout raiz', () => {
    const { container } = renderWithOutContextProvider(
      <RootLayout>
        <HeroFeaturesPage />
      </RootLayout>,
    );
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
