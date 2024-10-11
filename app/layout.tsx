import '@/styles/main.css';
import { Metadata } from 'next';
import clsx from 'clsx';

import { SuperTokensProvider } from './providers';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='fa'>
      <head />
      <SuperTokensProvider>
        <body className={clsx('min-h-screen bg-background font-sans antialiased')}>
          <main className='main'>{children}</main>
        </body>
      </SuperTokensProvider>
    </html>
  );
}
