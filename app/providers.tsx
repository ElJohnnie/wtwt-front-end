'use client';
import { AppProvider } from '../contexts/AppContext';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../config/theme';

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  );
}
