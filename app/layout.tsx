import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'What to watch tonight?',
  description:
    'Um sistema de recomendação de filmes baseado em Machine Learning. Usar algoritmos de filtragem colaborativa ou baseados em conteúdo para recomendar filmes aos usuários baseado em gosto, vontades e humor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
