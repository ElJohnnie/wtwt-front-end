import { renderHook } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { useNavigation } from '../../../hooks/useNavigation';
import { RouteUrl, RoutesUrls } from '../../../utils/enums/routesUrl';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('useNavigation', () => {
  const mockedPush = jest.fn();
  const mockedReplace = jest.fn();
  const mockedBack = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockedPush,
      replace: mockedReplace,
      back: mockedBack,
    });
    jest.clearAllMocks();
  });

  it('deve redirecionar para a URL quando chamado', () => {
    const { result } = renderHook(() => useNavigation());
    const { redirect } = result.current;
    const url: RouteUrl = RoutesUrls.HOME; // Ajuste o valor conforme necessário

    redirect(url);
    expect(mockedPush).toHaveBeenCalledWith(url);
  });

  it('deve substituir a URL quando chamado', () => {
    const { result } = renderHook(() => useNavigation());
    const { replace } = result.current;
    const url: RouteUrl = RoutesUrls.RESULT; // Ajuste o valor conforme necessário

    replace(url);
    expect(mockedReplace).toHaveBeenCalledWith(url);
  });

  it('deve voltar uma página quando chamado', () => {
    const { result } = renderHook(() => useNavigation());
    const { back } = result.current;

    back();
    expect(mockedBack).toHaveBeenCalled();
  });
});
