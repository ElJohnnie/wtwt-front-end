import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.BFF_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.AUTHORIZATION_TOKEN} `,
  },
});

const fetchData = async (url: string, options = {}) => {
  try {
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};

export { fetchData };
