import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: Infinity,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN}`,
  },
});

const fetchData = async (
  url: string,
  queryParams: Record<string, unknown> = {},
) => {
  try {
    console.log(axiosInstance.defaults.baseURL);
    const response = await axiosInstance.get(url, {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    throw new Error('Could not get data');
  }
};

export { fetchData };
