import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { render, RenderResult } from '@testing-library/react';
import theme from '../../config/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import setupQueryClient from '../../config/query-client';
import { AppProvider } from '../../contexts/AppContext';

const client = setupQueryClient();

function AllProviders({ children }: Readonly<{ children: React.ReactNode }>) {
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

function WithOutContextProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export const renderWithTheme = (ui: React.ReactElement): RenderResult => {
  return render(ui, { wrapper: AllProviders });
};

export const renderWithOutContextProvider = (
  ui: React.ReactElement,
): RenderResult => {
  return render(ui, { wrapper: WithOutContextProvider });
};
