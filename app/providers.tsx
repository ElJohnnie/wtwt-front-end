'use client';
import { AppProvider } from '../contexts/AppContext';

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppProvider>{children}</AppProvider>;
}
