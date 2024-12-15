import { QueryClient } from '@tanstack/react-query';

export default function setupQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
      },

      mutations: {
        retry: false,
      },
    },
  });
}
