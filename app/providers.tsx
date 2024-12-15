'use client';
import { AppProvider } from '../contexts/AppContext';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../config/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import setupQueryClient from '../config/query-client';

const client = setupQueryClient();

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <QueryClientProvider client={client}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AppProvider>
    </ThemeProvider>
  );
}
