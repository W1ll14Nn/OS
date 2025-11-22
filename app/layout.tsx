import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';

export const metadata = {
  title: 'OS Impressoras - Painel',
  description: 'Gestão de Ordens de Serviço para Impressoras',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
