import '@/styles/main.css';
import '@/styles/globals.css';
import '@mantine/core/styles.css';

import { Metadata } from 'next';
import clsx from 'clsx';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

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
      <head>
        <ColorSchemeScript />
      </head>
      <body className={clsx('min-h-screen bg-background antialiased')}>
        <MantineProvider>
          <main className='main'>{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
