import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import clsx from 'clsx';

import { Providers } from '../providers';

// import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/navbar';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

const myFont = localFont({ src: '../../public/lazlo.woff2' });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='fa'>
      <head />
      <body className={clsx('min-h-screen bg-background font-sans antialiased')}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <div className='relative flex flex-col h-screen'>
            <Navbar />
            <main className={`container mx-auto max-w-7xl pt-3 px-6 flex-grow ${myFont.className}`}>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
