import { fetchData } from '../../services/api';
import { axiosInstance } from '../../services/api';

describe('fetchData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve buscar os dados com sucesso', async () => {
    const mockData = { data: 'dados de teste' };
    jest.spyOn(axiosInstance, 'get').mockResolvedValueOnce({ data: mockData });

    const url = '/test-url';
    const queryParams = { key: 'value' };

    const result = await fetchData(url, queryParams);

    expect(result).toEqual(mockData);
    expect(axiosInstance.get).toHaveBeenCalledWith(url, {
      params: queryParams,
    });
  });

  it('deve tratar erro quando a busca falhar', async () => {
    jest
      .spyOn(axiosInstance, 'get')
      .mockRejectedValueOnce(new Error('Erro de Rede'));

    const url = '/test-url';

    await expect(fetchData(url)).rejects.toThrow('Could not get data');
    expect(axiosInstance.get).toHaveBeenCalledWith(url, { params: {} });
  });
});
