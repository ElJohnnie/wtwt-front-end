import axios from 'axios';

const fetchData = async (
  url: string,
  queryParams: Record<string, unknown> = {},
) => {
  try {
    console.log('Base URL:', process.env.NEXT_PUBLIC_API_URL);
    console.log('Full URL:', `${process.env.NEXT_PUBLIC_API_URL}${url}`);

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      {
        params: queryParams,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw new Error('Could not get data');
  }
};

export { fetchData };
